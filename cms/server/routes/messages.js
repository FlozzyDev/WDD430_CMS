var express = require('express');
var router = express.Router();
const sequenceGenerator = require('./sequenceGenerator');
const Message = require('../models/message');
const Contact = require('../models/contact');

// GET all messages
router.get('/', (req, res, next) => {
  Message.find()
    .populate('sender')
    .then((messages) => {
      res.status(200).json({
        message: 'Messages fetched successfully!',
        messages: messages,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error occurred',
        error: error,
      });
    });
});

// POST - Add a new message
router.post('/', (req, res, next) => {
  const maxMessageId = sequenceGenerator.nextId('messages');
  // getting errors, adding logs to debug
  console.log('Max message ID:', maxMessageId);
  console.log('Creating message with sender ID:', req.body.sender);

  // We need to match the string id with the _id of the contact inside Mongo
  Contact.findOne({ id: req.body.sender })
    .then((contact) => {
      if (!contact) {
        console.log('Contact not found with id:', req.body.sender);
        return res.status(404).json({
          message: 'Contact not found',
          error: { message: 'Sender contact does not exist' },
        });
      }

      console.log('Found contact:', contact.name, 'with _id:', contact._id);

      const message = new Message({
        id: maxMessageId,
        subject: req.body.subject,
        msgText: req.body.msgText,
        sender: contact._id,
      });

      message
        .save()
        .then((createdMessage) => {
          console.log('Message saved successfully');
          // we need to grab the contact from the database and return it with the message so we can display the name, that's the error
          return Message.findById(createdMessage._id).populate('sender');
        })
        .then((populatedMessage) => {
          res.status(201).json({
            message: 'Message added successfully',
            messageDoc: populatedMessage, // includes the contact details
          });
        })
        .catch((error) => {
          console.log('Error saving message:', error);
          res.status(500).json({
            message: 'An error occurred',
            error: error,
          });
        });
    })
    .catch((error) => {
      console.log('Error finding contact:', error);
      res.status(500).json({
        message: 'An error occurred finding contact',
        error: error,
      });
    });
});

// PUT - Update an existing message
// TODO: We have no method on the frontend to actuall update the message, not sure we are going to add it but I'll leave this for now
router.put('/:id', (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .then((message) => {
      if (!message) {
        return res.status(404).json({
          message: 'Message not found.',
          error: { message: 'Message not found' },
        });
      }

      // Find the contact by their id field to get their _id (ObjectId)
      Contact.findOne({ id: req.body.sender })
        .then((contact) => {
          if (!contact) {
            return res.status(404).json({
              message: 'Contact not found',
              error: { message: 'Sender contact does not exist' },
            });
          }

          message.subject = req.body.subject;
          message.msgText = req.body.msgText;
          message.sender = contact._id; // Use the ObjectId from the found contact

          Message.updateOne({ id: req.params.id }, message)
            .then((result) => {
              res.status(204).json({
                message: 'Message updated successfully',
              });
            })
            .catch((error) => {
              res.status(500).json({
                message: 'An error occurred',
                error: error,
              });
            });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'An error occurred finding contact',
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Message not found.',
        error: { message: 'Message not found' },
      });
    });
});

// DELETE request to delete a message
// I don't think we are supposed to do this, but it makes testing easier to have so I added a little delete button if 101 = sender.
router.delete('/:id', (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .then((message) => {
      Message.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: 'Message deleted successfully',
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'An error occurred',
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Message not found.',
        error: { message: 'Message not found' },
      });
    });
});

module.exports = router;
