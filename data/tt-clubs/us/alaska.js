const { CLUB_TRAITS: CT } = require("../../club-traits");

module.exports = [
  {
    name: "Alaska Table Tennis Club",
    id: "alaska-tt",
    website: "http://akttc.squarespace.com/",
    visited: false,
    locations: [
      {
        name: "Alaska Table Tennis Club - Anchorage",
        id: "alaska-tt-anchorage",
        address: "The Arctic Rec Center, 4855 Arctic Blvd. Anchorage, AK 99503",
        lat: 61.17702867669213,
        lng: -149.8974313920535,
        traits: {
          [CT.PERMANENCE]: 0,
          [CT.HOURS]: 0,
          [CT.CLUB_SIZE]: 1,
          [CT.CEILINGS]: 2,
          [CT.FLOORING]: 0,
          [CT.LIGHTING]: 2,
          [CT.COURT_SIZE]: undefined,
          [CT.BARRIERS]: undefined,
          [CT.GROUP_TRAINING]: 0,
          [CT.WALKINS]: 2,
          [CT.PRO_COACHES]: undefined,
          [CT.COMPETITIVE_LEVEL]: undefined,
          [CT.TOURNAMENTS]: undefined,
          [CT.PRO_TABLES]: undefined,
          [CT.WEATHER_CONTROL]: undefined,
          [CT.ACCESSIBILITY]: undefined,
          [CT.MAINTENANCE]: undefined,
        },
      },
      {
        name: "The Palmer Table Tennis Group",
        id: "alaska-tt-palmer",
        address:
          "E Crimsonview Dr, Palmer, AK 99645 (approximate - text or call for exact address)",
        phone: "(907)-841-7615",
        lat: 61.56883537537981,
        lng: -149.15979071672723,
        traits: {
          [CT.PERMANENCE]: undefined,
          [CT.HOURS]: 1,
          [CT.CLUB_SIZE]: undefined,
          [CT.CEILINGS]: undefined,
          [CT.FLOORING]: undefined,
          [CT.LIGHTING]: undefined,
          [CT.COURT_SIZE]: undefined,
          [CT.BARRIERS]: undefined,
          [CT.GROUP_TRAINING]: 0,
          [CT.WALKINS]: 1,
          [CT.PRO_COACHES]: undefined,
          [CT.COMPETITIVE_LEVEL]: undefined,
          [CT.TOURNAMENTS]: undefined,
          [CT.PRO_TABLES]: undefined,
          [CT.WEATHER_CONTROL]: undefined,
          [CT.ACCESSIBILITY]: undefined,
          [CT.MAINTENANCE]: undefined,
        },
      },
      {
        name: "Fairbanks Interior Table Tennis (FITT)",
        id: "alaska-tt-fairbanks",
        address:
          "UAF Patty Center Gym & Woods Center, 1910 Tanana Loop E, Fairbanks, AK 99775",
        website: "http://fitt-club.net/",
        lat: 64.85681331313086,
        lng: -147.83409115397325,
        traits: {
          [CT.PERMANENCE]: 0,
          [CT.HOURS]: 1,
          [CT.CLUB_SIZE]: 1,
          [CT.CEILINGS]: 2,
          [CT.FLOORING]: 0,
          [CT.LIGHTING]: 2,
          [CT.COURT_SIZE]: undefined,
          [CT.BARRIERS]: undefined,
          [CT.GROUP_TRAINING]: 0,
          [CT.WALKINS]: 1,
          [CT.PRO_COACHES]: undefined,
          [CT.COMPETITIVE_LEVEL]: undefined,
          [CT.TOURNAMENTS]: undefined,
          [CT.PRO_TABLES]: undefined,
          [CT.WEATHER_CONTROL]: undefined,
          [CT.ACCESSIBILITY]: undefined,
          [CT.MAINTENANCE]: undefined,
        },
      },
      {
        name: "Juneau Table Tennis Club",
        id: "alaska-tt-juneau",
        address:
          "Alaska Electric Light & Power, 5601 Tonsgard Ct, Juneau, AK 99801",
        lat: 58.35519619476276,
        lng: -134.496315022738,
        images: [
          "http://akttc.squarespace.com/picture/img_0969.jpg?pictureId=12099523",
        ],
        traits: {
          [CT.PERMANENCE]: 0,
          [CT.HOURS]: 0,
          [CT.CLUB_SIZE]: 0,
          [CT.CEILINGS]: undefined,
          [CT.FLOORING]: 0,
          [CT.LIGHTING]: 1,
          [CT.COURT_SIZE]: undefined,
          [CT.BARRIERS]: undefined,
          [CT.GROUP_TRAINING]: 0,
          [CT.WALKINS]: 0,
          [CT.PRO_COACHES]: undefined,
          [CT.COMPETITIVE_LEVEL]: undefined,
          [CT.TOURNAMENTS]: undefined,
          [CT.PRO_TABLES]: undefined,
          [CT.WEATHER_CONTROL]: undefined,
          [CT.ACCESSIBILITY]: undefined,
          [CT.MAINTENANCE]: undefined,
        },
      },
      {
        name: "Homer Community Recreation",
        id: "alaska-tt-homer",
        address: "Homer High School, 600 East Fairview Avenue, Homer AK 99603",
        lat: 59.65175996020426,
        lng: -151.52787470146367,
        website: "https://www.cityofhomer-ak.gov/recreation/table-tennis",
        traits: {
          [CT.PERMANENCE]: 0,
          [CT.HOURS]: 1,
          [CT.CLUB_SIZE]: 1,
          [CT.CEILINGS]: undefined,
          [CT.FLOORING]: undefined,
          [CT.LIGHTING]: undefined,
          [CT.COURT_SIZE]: undefined,
          [CT.BARRIERS]: undefined,
          [CT.GROUP_TRAINING]: 0,
          [CT.WALKINS]: 2,
          [CT.PRO_COACHES]: 0,
          [CT.COMPETITIVE_LEVEL]: undefined,
          [CT.TOURNAMENTS]: undefined,
          [CT.PRO_TABLES]: undefined,
          [CT.WEATHER_CONTROL]: undefined,
          [CT.ACCESSIBILITY]: undefined,
          [CT.MAINTENANCE]: undefined,
        },
      },
    ],
  },
];
