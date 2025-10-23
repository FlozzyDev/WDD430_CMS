import { Contact } from './contact.model';

export const MOCKCONTACTS: Contact[] = [
  // individual contacts
  // index 0
  {
    id: '1',
    name: 'Rex Barzee',
    email: 'barzeer@byui.edu',
    phone: '208-496-3768',
    imageUrl: '../../assets/images/barzeer.jpg',
    group: [],
  },
  // index 1
  {
    id: '2',
    name: 'Bradley Armstrong',
    email: 'armstrongb@byui.edu',
    phone: '208-496-3766',
    imageUrl: '../../assets/images/armstrongb.jpg',
    group: [],
  },
  // index 2
  {
    id: '3',
    name: 'Lee Barney',
    email: 'barneyl@byui.edu',
    phone: '208-496-3767',
    imageUrl: '../../assets/images/barneyl.jpg',
    group: [],
  },
  // index 3
  {
    id: '5',
    name: 'Kory Godfrey',
    email: 'godfreyko@byui.edu',
    phone: '208-496-3770',
    imageUrl: '../../assets/images/godfreyko.jpg',
    group: [],
  },
  // index 4
  {
    id: '7',
    name: 'R. Kent Jackson',
    email: 'jacksonk@byui.edu',
    phone: '208-496-3771',
    imageUrl: '../../assets/images/jacksonk.jpg',
    group: [],
  },
  // index 5
  {
    id: '8',
    name: 'Craig Lindstrom',
    email: 'lindstromc@byui.edu',
    phone: '208-496-3769',
    imageUrl: '../../assets/images/lindstromc.jpg',
    group: [],
  },
  // index 6
  {
    id: '9',
    name: 'Michael McLaughlin',
    email: 'mclaughlinm@byui.edu',
    phone: '208-496-3772',
    imageUrl: '../../assets/images/mclaughlinm.jpg',
    group: [],
  },
  // index 7
  {
    id: '11',
    name: 'Brent Morring',
    email: 'morringb@byui.edu',
    phone: '208-496-3778',
    imageUrl: '../../assets/images/morringb.jpg',
    group: [],
  },
  // index 8
  {
    id: '12',
    name: 'Mark Olaveson',
    email: 'olavesonm@byui.edu',
    phone: '208-496-3773',
    imageUrl: '../../assets/images/olavesonm.jpg',
    group: [],
  },
  // index 9
  {
    id: '13',
    name: 'Steven Rigby',
    email: 'rigbys@byui.edu',
    phone: '208-496-3774',
    imageUrl: '../../assets/images/rigbys.jpg',
    group: [],
  },
  // index 10
  {
    id: '15',
    name: 'Blaine Robertson',
    email: 'robertsonb@byui.edu',
    phone: '208-496-3775',
    imageUrl: '../../assets/images/robertsonb.jpg',
    group: [],
  },
  // index 11
  {
    id: '16',
    name: 'Randy Somsen',
    email: 'somsenr@byui.edu',
    phone: '208-496-3776',
    imageUrl: '../../assets/images/somsenr.jpg',
    group: [],
  },
  // index 12
  {
    id: '17',
    name: 'Shane Thompson',
    email: 'thompsonda@byui.edu',
    phone: '208-496-3776',
    imageUrl: '../../assets/images/thompsonda.jpg',
    group: [],
  },
  // index 13
  {
    id: '18',
    name: 'IT Admin Robot',
    email: 'itadminrobot@byui.edu',
    phone: '208-496-3777',
    imageUrl: '../../assets/images/itadminrobot.png',
    group: [],
  },

  // teams
  // index 13
  {
    id: '4',
    name: 'Network/OS team',
    email: ' ',
    phone: ' ',
    imageUrl: ' ',
    group: [
      {
        id: '2',
        name: 'Bradley Armstrong',
        email: 'armstrongb@byui.edu',
        phone: '208-496-3766',
        imageUrl: '../../assets/images/armstrongb.jpg',
        group: [],
      },
      {
        id: '12',
        name: 'Mark Olaveson',
        email: 'olavesonm@byui.edu',
        phone: '208-496-3773',
        imageUrl: '../../assets/images/olavesonm.jpg',
        group: [],
      },
      {
        id: '13',
        name: 'Steven Rigby',
        email: 'rigbys@byui.edu',
        phone: '208-496-3774',
        imageUrl: '../../assets/images/rigbys.jpg',
        group: [],
      },
    ],
  },

  // index 14
  {
    id: '6',
    name: 'Software Development team',
    email: ' ',
    phone: ' ',
    imageUrl: ' ',
    group: [
      {
        id: '1',
        name: 'Rex Barzee',
        email: 'barzeer@byui.edu',
        phone: '208-496-3768',
        imageUrl: '../../assets/images/barzeer.jpg',
        group: [],
      },
      {
        id: '3',
        name: 'Lee Barney',
        email: 'barneyl@byui.edu',
        phone: '208-496-3767',
        imageUrl: '../../assets/images/barneyl.jpg',
        group: [],
      },
      {
        id: '7',
        name: 'R. Kent Jackson',
        email: 'jacksonk@byui.edu',
        phone: '208-496-3771',
        imageUrl: '../../assets/images/jacksonk.jpg',
        group: [],
      },
      {
        id: '12',
        name: 'Mark Olaveson',
        email: 'olavesonm@byui.edu',
        phone: '208-496-3773',
        imageUrl: '../../assets/images/olavesonm.jpg',
        group: [],
      },
    ],
  },

  // index 15
  {
    id: '10',
    name: 'Web Development team',
    email: ' ',
    phone: ' ',
    imageUrl: ' ',
    group: [
      {
        id: '15',
        name: 'Blaine Robertson',
        email: 'robertsonb@byui.edu',
        phone: '208-496-3775',
        imageUrl: '../../assets/images/robertsonb.jpg',
        group: [],
      },
      {
        id: '16',
        name: 'Randy Somsen',
        email: 'somsenr@byui.edu',
        phone: '208-496-3776',
        imageUrl: '../../assets/images/somsenr.jpg',
        group: [],
      },
      {
        id: '17',
        name: 'Shane Thompson',
        email: 'thompsonda@byui.edu',
        phone: '208-496-3776',
        imageUrl: '../../assets/images/thompsonda.jpg',
        group: [],
      },
    ],
  },

  // index 16
  {
    id: '14',
    name: 'Database team',
    email: ' ',
    phone: ' ',
    imageUrl: ' ',
    group: [
      {
        id: '7',
        name: 'R. Kent Jackson',
        email: 'jacksonk@byui.edu',
        phone: '208-496-3771',
        imageUrl: '../../assets/images/jacksonk.jpg',
        group: [],
      },
      {
        id: '9',
        name: 'Michael McLaughlin',
        email: 'mclaughlinm@byui.edu',
        phone: '208-496-3772',
        imageUrl: '../../assets/images/mclaughlinm.jpg',
        group: [],
      },
      {
        id: '11',
        name: 'Brent Morring',
        email: 'morringb@byui.edu',
        phone: '208-496-3778',
        imageUrl: '../../assets/images/morringb.jpg',
        group: [],
      },
    ],
  },

  // index 17
  {
    id: '19',
    name: 'Computer Security team',
    email: ' ',
    phone: ' ',
    imageUrl: ' ',
    group: [
      {
        id: '5',
        name: 'Kory Godfrey',
        email: 'godfreyko@byui.edu',
        phone: '208-496-3770',
        imageUrl: '../../assets/images/godfreyko.jpg',
        group: [],
      },
      {
        id: '8',
        name: 'Craig Lindstrom',
        email: 'lindstromc@byui.edu',
        phone: '208-496-3769',
        imageUrl: '../../assets/images/lindstromc.jpg',
        group: [],
      },
      {
        id: '13',
        name: 'Steven Rigby',
        email: 'rigbys@byui.edu',
        phone: '208-496-3774',
        imageUrl: '../../assets/images/rigbys.jpg',
        group: [],
      },
    ],
  },
];
