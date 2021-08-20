const { CLUB_TRAITS: CT } = require("../../club-traits");

module.exports = [
  {
    name: "Hoboken Table Tennis (HiTT)",
    id: "lets-hitt",
    location: "Hoboken",
    type: "Training Center",
    tags: "Good for Practice Matches,Good for Training,Casual Play,League Play,Coaching Available,Training Camp",
    pricePerDay: "$15",
    address: "1012 Grand Street, 3rd Floor\nHoboken, NJ 07030",
    website: "https://www.lets-hitt.com",
    notes: "",
    attachments:
      "1569273770513.jpg (https://dl.airtable.com/.attachments/0402d3fab91473386edadfe59969449a/44db1af9/1569273770513.jpg)",
    lastModified: "9/23/2019 5:23pm",
    visited: true,
    lat: 40.75013488490047,
    lng: -74.03295077308292,
    traits: {
      [CT.PERMANENCE]: 2,
      [CT.HOURS]: 2,
      [CT.CEILINGS]: 1,
      [CT.FLOORING]: 2,
      [CT.LIGHTING]: 2,
      [CT.COURT_SIZE]: 1,
      [CT.BARRIERS]: 2,
      [CT.GROUP_TRAINING]: 2,
      [CT.WALKINS]: 2,
      [CT.PRO_COACHES]: 2,
      [CT.COMPETITIVE_LEVEL]: 1,
      [CT.TOURNAMENTS]: 1,
      [CT.PRO_TABLES]: 2,
      [CT.WEATHER_CONTROL]: 1,
      [CT.ACCESSIBILITY]: 0,
      [CT.MAINTENANCE]: 2,
    },
  },
  {
    name: "Lily Yip Table Tennis Center",
    id: "lily-yip-ttc",
    location: "Dunellen",
    type: "Training Center,Tournament Venue",
    tags: "Good for Training,Good for Practice Matches,League Play,Coaching Available",
    pricePerDay: "",
    address: "370 North Ave, Dunellen, NJ 08812",
    website: "https://www.lyttc.wordpress.com/",
    notes: "",
    attachments: "",
    lastModified: "6/27/2019 7:37pm",
    visited: true,
    quality: 8,
    lat: 40.59127371148351,
    lng: -74.46456648843254,
  },
];