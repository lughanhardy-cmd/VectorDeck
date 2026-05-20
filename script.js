const aircraftProfiles = {
  a220: {
    name: "Airbus A220",
    category: "Regional and thin-route jet",
    callsignPrefix: "AIB",
    simbriefType: "BCS3"
  },
  a319: {
    name: "Airbus A319",
    category: "Short-haul narrowbody",
    callsignPrefix: "AIB",
    simbriefType: "A319"
  },
  a320: {
    name: "Airbus A320",
    category: "Short to medium-haul narrowbody",
    callsignPrefix: "AIB",
    simbriefType: "A320"
  },
  a321: {
    name: "Airbus A321",
    category: "High-capacity narrowbody",
    callsignPrefix: "AIB",
    simbriefType: "A321"
  },
  a321xlr: {
    name: "Airbus A321XLR",
    category: "Long-range narrowbody",
    callsignPrefix: "AIB",
    simbriefType: "A21N"
  },
  a330: {
    name: "Airbus A330",
    category: "Medium to long-haul widebody",
    callsignPrefix: "AIB",
    simbriefType: "A333"
  },
  a339: {
    name: "Airbus A330neo",
    category: "Modern medium to long-haul widebody",
    callsignPrefix: "AIB",
    simbriefType: "A339"
  },
  a340: {
    name: "Airbus A340",
    category: "Classic four-engine long-haul",
    callsignPrefix: "AIB",
    simbriefType: "A343"
  },
  a350: {
    name: "Airbus A350",
    category: "Modern long-haul widebody",
    callsignPrefix: "AIB",
    simbriefType: "A359"
  },
  a35k: {
    name: "Airbus A350-1000",
    category: "High-capacity modern long-haul widebody",
    callsignPrefix: "AIB",
    simbriefType: "A35K"
  },
  a380: {
    name: "Airbus A380",
    category: "High-capacity flagship",
    callsignPrefix: "AIB",
    simbriefType: "A388"
  },
  b738: {
    name: "Boeing 737-800",
    category: "Short to medium-haul narrowbody",
    callsignPrefix: "B738",
    simbriefType: "B738"
  },
  b38m: {
    name: "Boeing 737 MAX 8",
    category: "Modern short to medium-haul narrowbody",
    callsignPrefix: "B38M",
    simbriefType: "B38M"
  },
  b747: {
    name: "Boeing 747",
    category: "Jumbo passenger and freighter",
    callsignPrefix: "B744",
    simbriefType: "B744"
  },
  b757: {
    name: "Boeing 757",
    category: "Long-range narrowbody",
    callsignPrefix: "B752",
    simbriefType: "B752"
  },
  b767: {
    name: "Boeing 767",
    category: "Medium to long-haul widebody",
    callsignPrefix: "B763",
    simbriefType: "B763"
  },
  b777: {
    name: "Boeing 777",
    category: "Long-haul twin widebody",
    callsignPrefix: "B77W",
    simbriefType: "B77W"
  },
  b787: {
    name: "Boeing 787",
    category: "Modern long-haul twin",
    callsignPrefix: "B788",
    simbriefType: "B789"
  },
  crj700: {
    name: "Bombardier CRJ 700",
    category: "Regional jet",
    callsignPrefix: "CRJ7",
    simbriefType: "CRJ7"
  },
  crj900: {
    name: "Bombardier CRJ 900",
    category: "Regional jet",
    callsignPrefix: "CRJ9",
    simbriefType: "CRJ9"
  },
  crj1000: {
    name: "Bombardier CRJ 1000",
    category: "Large regional jet",
    callsignPrefix: "CRJX",
    simbriefType: "CRJX"
  },
  e170: {
    name: "Embraer E170",
    category: "Regional jet",
    callsignPrefix: "E170",
    simbriefType: "E170"
  },
  e175: {
    name: "Embraer E175",
    category: "Regional jet",
    callsignPrefix: "E175",
    simbriefType: "E175"
  },
  e190: {
    name: "Embraer E190",
    category: "Regional and short-haul jet",
    callsignPrefix: "E190",
    simbriefType: "E190"
  },
  e195: {
    name: "Embraer E195-E2",
    category: "Large regional and short-haul jet",
    callsignPrefix: "E195",
    simbriefType: "E295"
  },
  atr72: {
    name: "ATR 72",
    category: "Regional turboprop",
    callsignPrefix: "AT76",
    simbriefType: "AT76"
  },
  dh8d: {
    name: "Dash 8 Q400",
    category: "Regional turboprop",
    callsignPrefix: "DH8D",
    simbriefType: "DH8D"
  }
};

const airlineCodes = {
  "Air France": "AFR",
  "Air Canada": "ACA",
  "Alaska Airlines": "ASA",
  "American Airlines": "AAL",
  "ANA": "ANA",
  "Asiana Airlines": "AAR",
  "British Airways": "BAW",
  "Cathay Pacific": "CPA",
  "Delta Air Lines": "DAL",
  "easyJet": "EZY",
  "Emirates": "UAE",
  "Etihad Airways": "ETD",
  "Ethiopian Airlines": "ETH",
  "Flydubai": "FDB",
  "Iberia": "IBE",
  "Japan Airlines": "JAL",
  "Jetstar": "JST",
  "JetBlue": "JBU",
  "KLM": "KLM",
  "Korean Air": "KAL",
  "LATAM": "LAN",
  "Lufthansa": "DLH",
  "Qantas": "QFA",
  "Qatar Airways": "QTR",
  "Ryanair": "RYR",
  "Singapore Airlines": "SIA",
  "South African Airways": "SAA",
  "Turkish Airlines": "THY",
  "United Airlines": "UAL",
  "Virgin Atlantic": "VIR"
};

Object.assign(airlineCodes, {
  "Aer Lingus": "EIN",
  "Air India": "AIC",
  "Air New Zealand": "ANZ",
  "Austrian Airlines": "AUA",
  "Finnair": "FIN",
  "Jet2": "EXS",
  "Malaysia Airlines": "MAS",
  "Norwegian": "NOZ",
  "Porter Airlines": "POE",
  "SAS": "SAS",
  "Saudia": "SVA",
  "Southwest Airlines": "SWA",
  "Spirit Airlines": "NKS",
  "Swiss": "SWR",
  "Thai Airways": "THA",
  "WestJet": "WJA",
  "Wideroe": "WIF"
});

const airlineFleet = {
  "Air Canada": ["a220", "a320", "a321", "a330", "a339", "b38m", "b777", "b787", "e175", "crj900", "dh8d"],
  "Air France": ["a220", "a319", "a320", "a321", "a330", "a350", "b777", "b787", "e170", "e190"],
  "Aer Lingus": ["a320", "a321", "a321xlr", "a330"],
  "Alaska Airlines": ["b738", "b38m", "e175"],
  "American Airlines": ["a319", "a320", "a321", "b738", "b38m", "b777", "b787", "e175", "crj700", "crj900"],
  "ANA": ["a320", "a321", "b737", "b767", "b777", "b787", "dh8d"],
  "Asiana Airlines": ["a320", "a321", "a330", "a350", "a380", "b747", "b767", "b777"],
  "Austrian Airlines": ["a320", "a321", "b767", "b777", "e195"],
  "British Airways": ["a319", "a320", "a321", "a321xlr", "a350", "a380", "b777", "b787", "e190"],
  "Cathay Pacific": ["a321", "a330", "a350", "a35k", "b777"],
  "Delta Air Lines": ["a220", "a319", "a320", "a321", "a330", "a339", "a350", "b738", "b757", "b767", "crj700", "crj900", "e170", "e175"],
  "easyJet": ["a319", "a320", "a321"],
  "Emirates": ["a350", "a380", "b777"],
  "Etihad Airways": ["a320", "a321", "a350", "a380", "b777", "b787"],
  "Ethiopian Airlines": ["a350", "b737", "b767", "b777", "b787", "dh8d"],
  "Finnair": ["a319", "a320", "a321", "a330", "a350", "e190"],
  "Flydubai": ["b738", "b38m"],
  "Iberia": ["a319", "a320", "a321", "a330", "a350", "a35k", "crj1000"],
  "Japan Airlines": ["a350", "b737", "b767", "b777", "b787", "e170", "e190"],
  "Jetstar": ["a320", "a321", "b787"],
  "Jet2": ["a321", "b737", "b757"],
  "JetBlue": ["a220", "a320", "a321", "e190"],
  "KLM": ["a330", "b737", "b777", "b787", "e175", "e190", "e195"],
  "Korean Air": ["a220", "a321", "a330", "a380", "b737", "b747", "b777", "b787"],
  "LATAM": ["a319", "a320", "a321", "b767", "b777", "b787"],
  "Lufthansa": ["a319", "a320", "a321", "a330", "a340", "a350", "a380", "b747", "b787", "crj900"],
  "Malaysia Airlines": ["a330", "a350", "b737"],
  "Norwegian": ["b738", "b38m"],
  "Porter Airlines": ["e195", "dh8d"],
  "Qantas": ["a330", "a380", "b737", "b787", "dh8d"],
  "Qatar Airways": ["a320", "a321", "a330", "a350", "a35k", "a380", "b777", "b787"],
  "Ryanair": ["b738", "b38m"],
  "SAS": ["a320", "a321", "a330", "a350", "crj900", "atr72"],
  "Singapore Airlines": ["a350", "a380", "b737", "b777", "b787"],
  "South African Airways": ["a320", "a330", "a340"],
  "Southwest Airlines": ["b737", "b738", "b38m"],
  "Spirit Airlines": ["a319", "a320", "a321"],
  "Swiss": ["a220", "a320", "a321", "a330", "a340", "b777", "e190", "e195"],
  "Thai Airways": ["a320", "a330", "a350", "a380", "b777", "b787"],
  "Turkish Airlines": ["a320", "a321", "a330", "a350", "b737", "b777", "b787"],
  "United Airlines": ["a319", "a320", "b737", "b738", "b38m", "b757", "b767", "b777", "b787", "crj700", "e175"],
  "Virgin Atlantic": ["a330", "a339", "a350", "b787"],
  "WestJet": ["b737", "b738", "b38m", "dh8d"],
  "Wideroe": ["e190", "dh8d"]
};

const airlineRoutes = {
  "EGLL-LEMD": ["British Airways", "Iberia"],
  "LEMD-EGLL": ["British Airways", "Iberia"],
  "EGLL-KJFK": ["British Airways", "Virgin Atlantic", "American Airlines", "Delta Air Lines", "JetBlue"],
  "KJFK-EGLL": ["British Airways", "Virgin Atlantic", "American Airlines", "Delta Air Lines", "JetBlue"],
  "EGLL-OMDB": ["British Airways", "Emirates"],
  "OMDB-EGLL": ["British Airways", "Emirates"],
  "EGLL-WSSS": ["British Airways", "Singapore Airlines", "Qantas"],
  "WSSS-EGLL": ["British Airways", "Singapore Airlines", "Qantas"],
  "KSEA-KSFO": ["Alaska Airlines", "Delta Air Lines", "United Airlines"],
  "KSFO-KSEA": ["Alaska Airlines", "Delta Air Lines", "United Airlines"],
  "KJFK-KLAX": ["American Airlines", "Delta Air Lines", "JetBlue"],
  "KLAX-KJFK": ["American Airlines", "Delta Air Lines", "JetBlue"],
  "KLAX-YSSY": ["American Airlines", "Delta Air Lines", "Qantas", "United Airlines"],
  "YSSY-KLAX": ["American Airlines", "Delta Air Lines", "Qantas", "United Airlines"],
  "LFPG-KJFK": ["Air France", "Delta Air Lines", "JetBlue"],
  "KJFK-LFPG": ["Air France", "Delta Air Lines", "JetBlue"],
  "EDDF-KJFK": ["Lufthansa", "Singapore Airlines", "United Airlines"],
  "KJFK-EDDF": ["Lufthansa", "Singapore Airlines", "United Airlines"],
  "EHAM-KATL": ["Delta Air Lines", "KLM"],
  "KATL-EHAM": ["Delta Air Lines", "KLM"],
  "OTHH-OMDB": ["Flydubai", "Qatar Airways"],
  "OMDB-OTHH": ["Flydubai", "Qatar Airways"],
  "VHHH-EGLL": ["British Airways", "Cathay Pacific"],
  "EGLL-VHHH": ["British Airways", "Cathay Pacific"],
  "OMDB-WSSS": ["Emirates", "Singapore Airlines"],
  "WSSS-OMDB": ["Emirates", "Singapore Airlines"],
  "OTHH-EGLL": ["Qatar Airways", "British Airways"],
  "EGLL-OTHH": ["Qatar Airways", "British Airways"],
  "RJTT-KLAX": ["ANA", "Japan Airlines", "American Airlines", "Delta Air Lines", "United Airlines"],
  "KLAX-RJTT": ["ANA", "Japan Airlines", "American Airlines", "Delta Air Lines", "United Airlines"],
  "LFPG-OMDB": ["Air France", "Emirates"],
  "OMDB-LFPG": ["Air France", "Emirates"],
  "LTFM-KJFK": ["Turkish Airlines"],
  "KJFK-LTFM": ["Turkish Airlines"],
  "YSSY-WSSS": ["Qantas", "Singapore Airlines", "British Airways"],
  "WSSS-YSSY": ["Qantas", "Singapore Airlines", "British Airways"],
  "CYYZ-EGLL": ["Air Canada", "British Airways"],
  "EGLL-CYYZ": ["Air Canada", "British Airways"],
  "SBGR-KJFK": ["LATAM", "American Airlines", "Delta Air Lines"],
  "KJFK-SBGR": ["LATAM", "American Airlines", "Delta Air Lines"],
  "FAOR-EGLL": ["British Airways", "Virgin Atlantic", "South African Airways"],
  "EGLL-FAOR": ["British Airways", "Virgin Atlantic", "South African Airways"],
  "HAAB-EGLL": ["Ethiopian Airlines"],
  "EGLL-HAAB": ["Ethiopian Airlines"],
  "RKSI-KLAX": ["Korean Air", "Asiana Airlines", "Delta Air Lines"],
  "KLAX-RKSI": ["Korean Air", "Asiana Airlines", "Delta Air Lines"],
  "EDDF-OMDB": ["Lufthansa", "Emirates"],
  "OMDB-EDDF": ["Lufthansa", "Emirates"],
  "EGLL-LFPG": ["British Airways", "Air France"],
  "LFPG-EGLL": ["British Airways", "Air France"],
  "EGCC-LEPA": ["Ryanair", "easyJet"],
  "LEPA-EGCC": ["Ryanair", "easyJet"],
  "EGCC-OMDB": ["Emirates"],
  "OMDB-EGCC": ["Emirates"],
  "EGCC-EHAM": ["KLM", "easyJet"],
  "EHAM-EGCC": ["KLM", "easyJet"],
  "OMAA-EGLL": ["Etihad Airways"],
  "EGLL-OMAA": ["Etihad Airways"],
  "OMAA-KJFK": ["Etihad Airways"],
  "KJFK-OMAA": ["Etihad Airways"],
  "OMAA-WSSS": ["Etihad Airways"],
  "WSSS-OMAA": ["Etihad Airways"],
  "VHHH-OMDB": ["Cathay Pacific", "Emirates"],
  "OMDB-VHHH": ["Cathay Pacific", "Emirates"],
  "RJTT-VHHH": ["ANA", "Japan Airlines", "Cathay Pacific"],
  "VHHH-RJTT": ["ANA", "Japan Airlines", "Cathay Pacific"],
  "EHAM-OMDB": ["KLM", "Emirates"],
  "OMDB-EHAM": ["KLM", "Emirates"],
  "LTFM-OMDB": ["Turkish Airlines", "Emirates"],
  "OMDB-LTFM": ["Turkish Airlines", "Emirates"],
  "LFPG-FAOR": ["Air France"],
  "FAOR-LFPG": ["Air France"],
  "EGLL-EIDW": ["British Airways", "Aer Lingus"],
  "EIDW-EGLL": ["British Airways", "Aer Lingus"],
  "EGLL-EGCC": ["British Airways"],
  "EGCC-EGLL": ["British Airways"],
  "EHAM-EKCH": ["KLM", "SAS", "Norwegian"],
  "EKCH-EHAM": ["KLM", "SAS", "Norwegian"],
  "OMDB-VTBS": ["Emirates", "Thai Airways"],
  "VTBS-OMDB": ["Emirates", "Thai Airways"],
  "VIDP-EGLL": ["Air India", "British Airways", "Virgin Atlantic"],
  "EGLL-VIDP": ["Air India", "British Airways", "Virgin Atlantic"],
  "KLAX-PHNL": ["Delta Air Lines", "United Airlines", "American Airlines", "Southwest Airlines"],
  "PHNL-KLAX": ["Delta Air Lines", "United Airlines", "American Airlines", "Southwest Airlines"],
  "KORD-KLGA": ["American Airlines", "Delta Air Lines", "United Airlines"],
  "KLGA-KORD": ["American Airlines", "Delta Air Lines", "United Airlines"],
  "KATL-KMCO": ["Delta Air Lines", "Southwest Airlines", "Spirit Airlines"],
  "KMCO-KATL": ["Delta Air Lines", "Southwest Airlines", "Spirit Airlines"],
  "CYYZ-CYUL": ["Air Canada", "WestJet", "Porter Airlines"],
  "CYUL-CYYZ": ["Air Canada", "WestJet", "Porter Airlines"],
  "EGPH-EGLL": ["British Airways"],
  "EGLL-EGPH": ["British Airways"],
  "ENBR-ENGM": ["SAS", "Norwegian", "Wideroe"],
  "ENGM-ENBR": ["SAS", "Norwegian", "Wideroe"],
  "LOWW-LSZH": ["Austrian Airlines", "Swiss"],
  "LSZH-LOWW": ["Austrian Airlines", "Swiss"]
};

Object.assign(airlineRoutes, {
  "EGLL-LSZH": ["British Airways", "Swiss"],
  "LSZH-EGLL": ["British Airways", "Swiss"],
  "EGLL-LOWW": ["British Airways", "Austrian Airlines"],
  "LOWW-EGLL": ["British Airways", "Austrian Airlines"],
  "EGLL-ENGM": ["British Airways", "SAS", "Norwegian"],
  "ENGM-EGLL": ["British Airways", "SAS", "Norwegian"],
  "EGLL-EFHK": ["British Airways", "Finnair"],
  "EFHK-EGLL": ["British Airways", "Finnair"],
  "EGLL-OERK": ["British Airways", "Saudia"],
  "OERK-EGLL": ["British Airways", "Saudia"],
  "OERK-OMDB": ["Emirates", "Flydubai", "Saudia"],
  "OMDB-OERK": ["Emirates", "Flydubai", "Saudia"],
  "OERK-OTHH": ["Qatar Airways", "Saudia"],
  "OTHH-OERK": ["Qatar Airways", "Saudia"],
  "OMDB-VIDP": ["Emirates", "Air India", "Flydubai"],
  "VIDP-OMDB": ["Emirates", "Air India", "Flydubai"],
  "VIDP-WSSS": ["Air India", "Singapore Airlines"],
  "WSSS-VIDP": ["Air India", "Singapore Airlines"],
  "VTBS-WSSS": ["Singapore Airlines", "Thai Airways"],
  "WSSS-VTBS": ["Singapore Airlines", "Thai Airways"],
  "WMKK-WSSS": ["Malaysia Airlines", "Singapore Airlines"],
  "WSSS-WMKK": ["Malaysia Airlines", "Singapore Airlines"],
  "WMKK-EGLL": ["Malaysia Airlines", "British Airways"],
  "EGLL-WMKK": ["Malaysia Airlines", "British Airways"],
  "NZAA-YSSY": ["Air New Zealand", "Qantas", "LATAM"],
  "YSSY-NZAA": ["Air New Zealand", "Qantas", "LATAM"],
  "NZAA-KLAX": ["Air New Zealand", "United Airlines"],
  "KLAX-NZAA": ["Air New Zealand", "United Airlines"],
  "KSEA-CYYZ": ["Air Canada", "Alaska Airlines"],
  "CYYZ-KSEA": ["Air Canada", "Alaska Airlines"],
  "CYYZ-CYVR": ["Air Canada", "WestJet", "Porter Airlines"],
  "CYVR-CYYZ": ["Air Canada", "WestJet", "Porter Airlines"],
  "CYVR-KLAX": ["Air Canada", "WestJet", "United Airlines"],
  "KLAX-CYVR": ["Air Canada", "WestJet", "United Airlines"],
  "KDAL-KHOU": ["Southwest Airlines"],
  "KHOU-KDAL": ["Southwest Airlines"],
  "KLAS-KLAX": ["Southwest Airlines", "Delta Air Lines", "American Airlines"],
  "KLAX-KLAS": ["Southwest Airlines", "Delta Air Lines", "American Airlines"],
  "KATL-KLAX": ["Delta Air Lines", "Southwest Airlines"],
  "KLAX-KATL": ["Delta Air Lines", "Southwest Airlines"],
  "KATL-KJFK": ["Delta Air Lines", "JetBlue", "American Airlines"],
  "KJFK-KATL": ["Delta Air Lines", "JetBlue", "American Airlines"],
  "KMCO-KJFK": ["Delta Air Lines", "JetBlue", "American Airlines", "Spirit Airlines"],
  "KJFK-KMCO": ["Delta Air Lines", "JetBlue", "American Airlines", "Spirit Airlines"],
  "EGCC-LEMG": ["Jet2", "Ryanair", "easyJet"],
  "LEMG-EGCC": ["Jet2", "Ryanair", "easyJet"],
  "EGCC-GCTS": ["Jet2", "Ryanair", "easyJet"],
  "GCTS-EGCC": ["Jet2", "Ryanair", "easyJet"],
  "EIDW-LEMD": ["Aer Lingus", "Iberia", "Ryanair"],
  "LEMD-EIDW": ["Aer Lingus", "Iberia", "Ryanair"],
  "LIRF-LEMD": ["Iberia", "Ryanair"],
  "LEMD-LIRF": ["Iberia", "Ryanair"],
  "LIRF-LFPG": ["Air France", "easyJet"],
  "LFPG-LIRF": ["Air France", "easyJet"],
  "EGLL-EHAM": ["British Airways", "KLM"],
  "EHAM-EGLL": ["British Airways", "KLM"],
  "EGLL-EDDF": ["British Airways", "Lufthansa"],
  "EDDF-EGLL": ["British Airways", "Lufthansa"],
  "EDDF-LSZH": ["Lufthansa", "Swiss"],
  "LSZH-EDDF": ["Lufthansa", "Swiss"],
  "EDDF-LOWW": ["Lufthansa", "Austrian Airlines"],
  "LOWW-EDDF": ["Lufthansa", "Austrian Airlines"],
  "LFPG-LSZH": ["Air France", "Swiss"],
  "LSZH-LFPG": ["Air France", "Swiss"],
  "LFPG-EHAM": ["Air France", "KLM"],
  "EHAM-LFPG": ["Air France", "KLM"],
  "EIDW-EHAM": ["Aer Lingus", "KLM", "Ryanair"],
  "EHAM-EIDW": ["Aer Lingus", "KLM", "Ryanair"],
  "EGCC-EIDW": ["Aer Lingus", "Ryanair"],
  "EIDW-EGCC": ["Aer Lingus", "Ryanair"],
  "KJFK-CYYZ": ["Air Canada", "Delta Air Lines", "American Airlines"],
  "CYYZ-KJFK": ["Air Canada", "Delta Air Lines", "American Airlines"],
  "KJFK-KBOS": ["JetBlue", "Delta Air Lines", "American Airlines"],
  "KBOS-KJFK": ["JetBlue", "Delta Air Lines", "American Airlines"],
  "KJFK-KMIA": ["American Airlines", "Delta Air Lines", "JetBlue"],
  "KMIA-KJFK": ["American Airlines", "Delta Air Lines", "JetBlue"],
  "KSEA-KLAX": ["Alaska Airlines", "Delta Air Lines", "American Airlines"],
  "KLAX-KSEA": ["Alaska Airlines", "Delta Air Lines", "American Airlines"],
  "KSEA-KLAS": ["Alaska Airlines", "Delta Air Lines", "Southwest Airlines"],
  "KLAS-KSEA": ["Alaska Airlines", "Delta Air Lines", "Southwest Airlines"],
  "OMDB-OERK": ["Emirates", "Flydubai", "Saudia"],
  "OERK-OMDB": ["Emirates", "Flydubai", "Saudia"],
  "OTHH-WSSS": ["Qatar Airways", "Singapore Airlines"],
  "WSSS-OTHH": ["Qatar Airways", "Singapore Airlines"],
  "VHHH-WSSS": ["Cathay Pacific", "Singapore Airlines"],
  "WSSS-VHHH": ["Cathay Pacific", "Singapore Airlines"],
  "VHHH-RKSI": ["Cathay Pacific", "Korean Air", "Asiana Airlines"],
  "RKSI-VHHH": ["Cathay Pacific", "Korean Air", "Asiana Airlines"],
  "RJTT-WSSS": ["ANA", "Japan Airlines", "Singapore Airlines"],
  "WSSS-RJTT": ["ANA", "Japan Airlines", "Singapore Airlines"],
  "YSSY-OMDB": ["Emirates", "Qantas"],
  "OMDB-YSSY": ["Emirates", "Qantas"],
  "NZQN-NZAA": ["Air New Zealand", "Jetstar"],
  "NZAA-NZQN": ["Air New Zealand", "Jetstar"]
});

const diversionAlternates = {
  EGLL: "EGKK",
  EGKK: "EGLL",
  EGCC: "EGLL",
  EIDW: "EGLL",
  EHAM: "EHRD",
  LFPG: "LFPO",
  LEMD: "LEBL",
  LEBL: "LEMD",
  LEMG: "LEMD",
  LIRF: "LIMC",
  LSZH: "LFSB",
  LOWW: "LKPR",
  EDDF: "EDDL",
  EKCH: "ESMS",
  EFHK: "EETN",
  ENGM: "ENTO",
  ENBR: "ENZV",
  OTHH: "OMDB",
  OMDB: "OMAA",
  OMAA: "OMDB",
  OERK: "OEJN",
  WSSS: "WMKK",
  WMKK: "WSSS",
  VTBS: "VTBD",
  VIDP: "VABB",
  VHHH: "VMMC",
  RJTT: "RJAA",
  RKSI: "RKSS",
  YSSY: "YMML",
  NZAA: "NZWN",
  KJFK: "KEWR",
  KEWR: "KJFK",
  KLAX: "KONT",
  KSEA: "KPDX",
  KSFO: "KOAK",
  KATL: "KBHM",
  KMCO: "KTPA",
  KORD: "KMKE",
  KLGA: "KJFK",
  CYYZ: "CYUL",
  CYUL: "CYYZ",
  CYVR: "CYYC",
  SBGR: "SBKP",
  FAOR: "FALE",
  HAAB: "HADR"
};

const airportBriefings = {
  EGLL: {
    name: "London Heathrow",
    elevation: "83 ft",
    runways: [
      { name: "09L/27R", length: 12799, angle: 90 },
      { name: "09R/27L", length: 12001, angle: 90 }
    ],
    approaches: ["ILS", "RNAV", "VOR"],
    tags: ["Major hub", "Parallel runways", "Heavy traffic"],
    notes: "Major international hub with parallel runways, busy arrival streams and strong wake-separation discipline."
  },
  LEMD: {
    name: "Madrid Barajas",
    elevation: "2000 ft",
    runways: [
      { name: "14L/32R", length: 11483, angle: 140 },
      { name: "14R/32L", length: 13534, angle: 140 },
      { name: "18L/36R", length: 11483, angle: 180 },
      { name: "18R/36L", length: 13779, angle: 180 }
    ],
    approaches: ["ILS", "RNAV", "VOR"],
    tags: ["High elevation", "Large hub", "Multiple runway pairs"],
    notes: "Large high-elevation airport with long runways and several parallel arrival/departure flows."
  },
  LOWI: {
    name: "Innsbruck",
    elevation: "1907 ft",
    runways: [{ name: "08/26", length: 6562, angle: 80 }],
    approaches: ["LOC/DME", "RNAV visual transition", "Visual"],
    tags: ["Scenic approach", "Mountain terrain", "Short runway feel"],
    notes: "A famous Alpine airport. Expect terrain, curved visual segments and disciplined speed control."
  },
  LFLJ: {
    name: "Courchevel",
    elevation: "6588 ft",
    runways: [{ name: "04/22", length: 1762, angle: 40 }],
    approaches: ["Visual"],
    tags: ["Very short runway", "Steep slope", "Alpine challenge"],
    notes: "Very short sloped runway in high terrain. Best suited to light aircraft and careful visual flying."
  },
  NZQN: {
    name: "Queenstown",
    elevation: "1171 ft",
    runways: [{ name: "05/23", length: 6201, angle: 50 }],
    approaches: ["RNP", "Visual"],
    tags: ["Scenic approach", "Mountain terrain", "Lake arrival"],
    notes: "Spectacular mountain and lake setting. RNP procedures and visual judgement matter here."
  },
  KJFK: {
    name: "New York JFK",
    elevation: "13 ft",
    runways: [
      { name: "04L/22R", length: 12079, angle: 40 },
      { name: "04R/22L", length: 8400, angle: 40 },
      { name: "13L/31R", length: 10000, angle: 130 },
      { name: "13R/31L", length: 14511, angle: 130 }
    ],
    approaches: ["ILS", "RNAV", "VOR"],
    tags: ["Major hub", "Oceanic gateway", "Complex airspace"],
    notes: "Busy New York airspace with long runways, intersecting flows and frequent vectoring."
  },
  OMDB: {
    name: "Dubai International",
    elevation: "62 ft",
    runways: [
      { name: "12L/30R", length: 13124, angle: 120 },
      { name: "12R/30L", length: 14600, angle: 120 }
    ],
    approaches: ["ILS", "RNAV"],
    tags: ["Widebody hub", "Parallel runways", "Hot weather ops"],
    notes: "Huge long-haul hub with long parallel runways and heavy widebody traffic."
  },
  VHHH: {
    name: "Hong Kong International",
    elevation: "28 ft",
    runways: [
      { name: "07L/25R", length: 12467, angle: 70 },
      { name: "07R/25L", length: 12467, angle: 70 },
      { name: "07C/25C", length: 12467, angle: 70 }
    ],
    approaches: ["ILS", "RNAV", "RNP"],
    tags: ["Scenic approach", "Island airport", "Major cargo hub"],
    notes: "Large island airport with scenic water approaches and complex terminal flows."
  },
  YSSY: {
    name: "Sydney Kingsford Smith",
    elevation: "21 ft",
    runways: [
      { name: "16L/34R", length: 7999, angle: 160 },
      { name: "16R/34L", length: 12999, angle: 160 },
      { name: "07/25", length: 8300, angle: 70 }
    ],
    approaches: ["ILS", "RNAV", "VOR"],
    tags: ["Harbour views", "Crosswind runway", "Busy terminal area"],
    notes: "Coastal airport with harbour scenery, parallel north/south runways and a useful crosswind runway."
  },
  EGCC: {
    name: "Manchester",
    elevation: "257 ft",
    runways: [
      { name: "05L/23R", length: 10000, angle: 50 },
      { name: "05R/23L", length: 10000, angle: 50 }
    ],
    approaches: ["ILS", "RNAV"],
    tags: ["UK regional hub", "Parallel runways", "Mixed traffic"],
    notes: "Strong mix of airline, holiday and cargo flying with parallel runway operations."
  },
  KSQL: {
    name: "San Carlos",
    elevation: "5 ft",
    runways: [{ name: "12/30", length: 2600, angle: 120 }],
    approaches: ["Visual", "RNAV"],
    tags: ["Short runway", "Bay tour", "GA traffic"],
    notes: "Short GA runway near complex Bay Area airspace. Great for scenic VFR with careful speed control."
  }
};

const regionalRouteAircraft = ["a220", "e170", "e175", "e190", "e195", "crj700", "crj900", "crj1000", "atr72", "dh8d"];
const narrowbodyRouteAircraft = ["a220", "a319", "a320", "a321", "a321xlr", "b738", "b38m", "b757", "e190", "e195"];
const longhaulRouteAircraft = ["a321xlr", "a330", "a339", "a340", "a350", "a35k", "a380", "b747", "b767", "b777", "b787"];
const mediumRouteAircraft = ["a320", "a321", "a321xlr", "a330", "a339", "b757", "b767", "b787"];
const aircraftByRoute = {};

const moodRoutes = {
  "short-hop": ["EGLL-EGCC", "EHAM-EKCH", "CYYZ-CYUL", "KJFK-KBOS"],
  "long-haul": ["EGLL-KJFK", "WSSS-EGLL", "KLAX-YSSY", "RJTT-KLAX"],
  scenic: ["NZAA-NZQN", "YSSY-NZAA", "VHHH-RJTT", "LOWW-LSZH"],
  "busy-hub": ["EGLL-OMDB", "KJFK-KLAX", "LFPG-KJFK", "EDDF-KJFK"],
  challenging: ["NZAA-NZQN", "LOWW-LSZH", "VHHH-RKSI", "YSSY-OMDB"],
  cargo: ["EDDF-OMDB", "OMDB-WSSS", "KSEA-KLAX", "EGCC-OMDB"],
  "low-cost": ["EGCC-LEMG", "EIDW-LEMD", "EGCC-GCTS", "LIRF-LEMD"],
  night: ["EGLL-OMDB", "OMDB-WSSS", "KJFK-EGLL", "OTHH-WSSS"]
};

const gateHints = {
  "EGLL:British Airways": "Heathrow T5 is the natural British Airways choice. Long-haul on T5B/T5C, short-haul often T5A.",
  "EGLL:Virgin Atlantic": "Heathrow T3 is a good Virgin Atlantic stand area.",
  "OMDB:Emirates": "Dubai T3 / Concourse A, B or C suits Emirates widebody ops.",
  "OTHH:Qatar Airways": "Hamad main terminal contact gates are a good Qatar Airways fit.",
  "VHHH:Cathay Pacific": "Hong Kong main terminal gates near Cathay long-haul stands work well.",
  "KJFK:Delta Air Lines": "JFK T4 is the best Delta-inspired stand area.",
  "KJFK:JetBlue": "JFK T5 suits JetBlue sectors.",
  "KJFK:American Airlines": "JFK T8 is the American Airlines area.",
  "EDDF:Lufthansa": "Frankfurt Terminal 1 / A or Z gates fit Lufthansa operations.",
  "EHAM:KLM": "Schiphol D/E/F piers are strong KLM-inspired choices.",
  "EGCC:Jet2": "Manchester Terminal 2 works well for Jet2 holiday flying.",
  "EIDW:Aer Lingus": "Dublin Terminal 2 is a good Aer Lingus stand pick."
};

const approachChallenges = [
  { airport: "LOWI", title: "Innsbruck valley arrival", route: "LOWW-LSZH", aircraftKey: "a320", note: "Terrain, visual judgement and disciplined descent planning." },
  { airport: "NZQN", title: "Queenstown lake arrival", route: "NZAA-NZQN", aircraftKey: "a320", note: "RNP-style mountain arrival with a spectacular visual finish." },
  { airport: "LFLJ", title: "Courchevel short strip", route: "LFLJ-LSGG", aircraftKey: "dh8d", note: "Very short runway feel, best treated as a specialist challenge." },
  { airport: "VHHH", title: "Hong Kong over-water approach", route: "RJTT-VHHH", aircraftKey: "a350", note: "Busy terminal area, water views and heavy airline traffic." },
  { airport: "YSSY", title: "Sydney harbour sector", route: "WSSS-YSSY", aircraftKey: "b787", note: "Coastal arrival with parallel runway and crosswind options." }
];

const cargoRoutes = {
  DHL: { route: "EGCC-LEMG", aircraftKey: "b757", note: "European parcel feeder style route." },
  FedEx: { route: "KSEA-KLAX", aircraftKey: "b767", note: "US west coast freight trunk." },
  UPS: { route: "KORD-KLGA", aircraftKey: "b767", note: "Short, busy US cargo shuttle inspiration." },
  Cargolux: { route: "EDDF-OMDB", aircraftKey: "b747", note: "Classic heavy freighter sector." },
  "Qatar Cargo": { route: "OTHH-WSSS", aircraftKey: "b777", note: "Long-haul Gulf cargo connection." },
  "Emirates SkyCargo": { route: "OMDB-WSSS", aircraftKey: "b777", note: "Dubai hub freight to Southeast Asia." }
};

const fleetLibraryData = [
  { key: "a320", role: "Short-haul VA workhorse", routes: "EGLL-LEMD, EHAM-EKCH, EGCC-EHAM" },
  { key: "a321xlr", role: "Long thin routes", routes: "EGLL-OERK, EGLL-VIDP, CYYZ-EGLL" },
  { key: "a350", role: "Modern long-haul", routes: "WSSS-EGLL, RJTT-KLAX, OTHH-EGLL" },
  { key: "a380", role: "Flagship hub flying", routes: "OMDB-EGLL, OTHH-EGLL, WSSS-EGLL" },
  { key: "b738", role: "Low-cost and domestic trunk", routes: "EGCC-LEMG, KLAS-KLAX, KORD-KLGA" },
  { key: "b757", role: "Cargo and classic narrowbody range", routes: "EGCC-OMDB, KSEA-KLAX, EGLL-EGCC" },
  { key: "b777", role: "Heavy long-haul and cargo", routes: "OMDB-WSSS, EDDF-OMDB, RKSI-KLAX" },
  { key: "b787", role: "Efficient long-haul twin", routes: "VIDP-EGLL, NZAA-KLAX, RJTT-KLAX" },
  { key: "e190", role: "Regional jet and city pairs", routes: "EGLL-EIDW, ENBR-ENGM, LOWW-LSZH" },
  { key: "dh8d", role: "Turboprop regional and scenic", routes: "ENBR-ENGM, NZAA-NZQN, KSQL-KHAF" }
];

Object.keys(airlineRoutes).forEach((key) => {
  aircraftByRoute[key] = longhaulRouteAircraft;
});

[
  "EGLL-LEMD", "LEMD-EGLL", "KSEA-KSFO", "KSFO-KSEA", "OTHH-OMDB", "OMDB-OTHH",
  "EGLL-LFPG", "LFPG-EGLL", "EGCC-LEPA", "LEPA-EGCC", "EGCC-EHAM", "EHAM-EGCC",
  "LTFM-OMDB", "OMDB-LTFM", "RJTT-VHHH", "VHHH-RJTT", "EGLL-EIDW", "EIDW-EGLL",
  "EGLL-EGCC", "EGCC-EGLL", "EHAM-EKCH", "EKCH-EHAM", "KORD-KLGA", "KLGA-KORD",
  "KATL-KMCO", "KMCO-KATL", "CYYZ-CYUL", "CYUL-CYYZ", "EGPH-EGLL", "EGLL-EGPH",
  "LOWW-LSZH", "LSZH-LOWW"
].forEach((key) => {
  aircraftByRoute[key] = narrowbodyRouteAircraft;
});

[
  "EGCC-OMDB", "OMDB-EGCC", "CYYZ-EGLL", "EGLL-CYYZ", "EHAM-KATL", "KATL-EHAM",
  "EDDF-OMDB", "OMDB-EDDF", "EHAM-OMDB", "OMDB-EHAM", "LFPG-OMDB", "OMDB-LFPG"
].forEach((key) => {
  aircraftByRoute[key] = mediumRouteAircraft;
});

[
  "ENBR-ENGM", "ENGM-ENBR"
].forEach((key) => {
  aircraftByRoute[key] = regionalRouteAircraft;
});

const form = document.querySelector("#planner-form");
const departure = document.querySelector("#departure");
const arrival = document.querySelector("#arrival");
const alternate = document.querySelector("#alternate");
const aircraft = document.querySelector("#aircraft");
const airportForm = document.querySelector("#airport-form");
const airportCode = document.querySelector("#airport-code");
const runwayUnit = document.querySelector("#runway-unit");
const airportName = document.querySelector("#airport-name");
const airportIcao = document.querySelector("#airport-icao");
const airportElevation = document.querySelector("#airport-elevation");
const airportRunways = document.querySelector("#airport-runways");
const airportLongest = document.querySelector("#airport-longest");
const airportApproaches = document.querySelector("#airport-approaches");
const airportNotes = document.querySelector("#airport-notes");
const airportTags = document.querySelector("#airport-tags");
const runwayGraphic = document.querySelector("#runway-graphic");
const performanceForm = document.querySelector("#performance-form");
const performanceMode = document.querySelector("#performance-mode");
const performanceClass = document.querySelector("#performance-class");
const performanceRunway = document.querySelector("#performance-runway");
const performanceSummary = document.querySelector("#performance-summary");
const performanceDetail = document.querySelector("#performance-detail");

const cityPair = document.querySelector("#city-pair");
const aircraftName = document.querySelector("#aircraft-name");
const airlineCount = document.querySelector("#airline-count");
const routeConfidence = document.querySelector("#route-confidence");
const airlineList = document.querySelector("#airline-list");
const airlineResultList = document.querySelector("#airline-result-list");
const routePreview = document.querySelector("#route-preview");
const aircraftWarning = document.querySelector("#aircraft-warning");
const callsign = document.querySelector("#callsign");
const departureMetar = document.querySelector("#departure-metar");
const arrivalMetar = document.querySelector("#arrival-metar");
const departureMetarLink = document.querySelector("#departure-metar-link");
const arrivalMetarLink = document.querySelector("#arrival-metar-link");
const refreshWeather = document.querySelector("#refresh-weather");
const simbriefAirline = document.querySelector("#simbrief-airline");
const simbriefCallsign = document.querySelector("#simbrief-callsign");
const simbriefAircraft = document.querySelector("#simbrief-aircraft");
const simbriefCityPair = document.querySelector("#simbrief-city-pair");
const simbriefAlternate = document.querySelector("#simbrief-alternate");
const simbriefRoute = document.querySelector("#simbrief-route");
const copySimbrief = document.querySelector("#copy-simbrief");
const simbriefLink = document.querySelector("#simbrief-link");
const copyStatus = document.querySelector("#copy-status");
const feedbackForm = document.querySelector("#feedback-form");
const feedbackName = document.querySelector("#feedback-name");
const feedbackEmail = document.querySelector("#feedback-email");
const feedbackMessage = document.querySelector("#feedback-message");
const feedbackStatus = document.querySelector("#feedback-status");
const connectionStatus = document.querySelector("#connection-status");
const routeDataCount = document.querySelector("#route-data-count");
const routeDataStatus = document.querySelector("#route-data-status");
const airportDataStatus = document.querySelector("#airport-data-status");
const metarDataStatus = document.querySelector("#metar-data-status");
const moodSelect = document.querySelector("#mood-select");
const moodResult = document.querySelector("#mood-result");
const applyMoodRoute = document.querySelector("#apply-mood-route");
const airlineModeSelect = document.querySelector("#airline-mode-select");
const airlineModeResult = document.querySelector("#airline-mode-result");
const randomFlight = document.querySelector("#random-flight");
const randomResult = document.querySelector("#random-result");
const gateResult = document.querySelector("#gate-result");
const runwayHelperResult = document.querySelector("#runway-helper-result");
const procedureChecklist = document.querySelector("#procedure-checklist");
const flightTimeResult = document.querySelector("#flight-time-result");
const realismResult = document.querySelector("#realism-result");
const copyOpsBrief = document.querySelector("#copy-ops-brief");
const logbookForm = document.querySelector("#logbook-form");
const logbookNotes = document.querySelector("#logbook-notes");
const logbookRating = document.querySelector("#logbook-rating");
const logbookList = document.querySelector("#logbook-list");
const challengeList = document.querySelector("#challenge-list");
const cargoSelect = document.querySelector("#cargo-select");
const cargoResult = document.querySelector("#cargo-result");
const loadCargoRoute = document.querySelector("#load-cargo-route");
const fleetLibrary = document.querySelector("#fleet-library");

let selectedAirline = "";
let latestDepartureMetar = "METAR not loaded yet.";
let latestArrivalMetar = "METAR not loaded yet.";
let alternateEdited = false;
let openRouteData = null;

function formatAirport(value) {
  return value.trim().toUpperCase().slice(0, 4) || "----";
}

function normalizeAirportInput(input) {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4);

  if (typeof start === "number" && typeof end === "number") {
    input.setSelectionRange(start, end);
  }
}

function formatRunwayLength(lengthFt) {
  if (!lengthFt) {
    return "Unknown";
  }

  if (runwayUnit.value === "ft") {
    return `${Math.round(lengthFt).toLocaleString()} ft`;
  }

  return `${Math.round(lengthFt * 0.3048).toLocaleString()} m`;
}

function runwayHeading(runway) {
  if (typeof runway.angle === "number") {
    return runway.angle;
  }

  const ident = runway.name.split("/")[0].replace(/[LRC]/g, "");
  return Number(ident) * 10 || 0;
}

async function fetchAirportBriefing(icao) {
  if (!window.location.protocol.startsWith("http")) {
    return null;
  }

  try {
    const response = await fetch(`/api/airport?icao=${encodeURIComponent(icao)}`);
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    return null;
  }
}

function updatePerformanceFromRunway(longestFt) {
  if (!longestFt) {
    return;
  }

  performanceRunway.value = Math.round(runwayUnit.value === "ft" ? longestFt : longestFt * 0.3048);
  updatePerformance();
}

function renderAirportVisual(icao, briefing) {
  const visual = document.createElement("div");
  const overview = document.createElement("div");
  const overlay = document.createElement("div");
  const title = document.createElement("strong");
  const meta = document.createElement("span");
  const runwayList = document.createElement("div");

  visual.className = "airport-visual";
  overview.className = "airport-photo";
  overlay.className = "airport-photo-overlay";
  runwayList.className = "runway-data-list";
  title.textContent = `${briefing.name} overview`;
  meta.textContent = `${icao} | ${briefing.runways.length} runway${briefing.runways.length === 1 ? "" : "s"} | ${briefing.approaches.join(", ")}`;
  overlay.append(title, meta);
  overview.append(overlay);

  briefing.runways.forEach((runway) => {
    const card = document.createElement("article");
    const heading = document.createElement("strong");
    const facts = document.createElement("dl");
    const rows = [
      ["Length", formatRunwayLength(runway.length)],
      ["Surface", runway.surface || "Unknown"],
      ["Lighting", runway.lighted === false ? "Not lighted / unknown" : "Runway lighting"],
      ["Heading", `${Math.round(runwayHeading(runway)).toString().padStart(3, "0")}°`]
    ];

    card.className = "runway-data-card";
    heading.textContent = runway.name;

    rows.forEach(([label, value]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      facts.append(row);
    });

    card.append(heading, facts);
    runwayList.append(card);
  });

  visual.append(overview, runwayList);
  runwayGraphic.append(visual);
}

function renderAirportData(icao, briefing) {
  const longestFt = Math.max(...briefing.runways.map((runway) => runway.length || 0), 0);

  airportIcao.textContent = icao;
  runwayGraphic.innerHTML = "";
  airportTags.innerHTML = "";

  airportName.textContent = briefing.name;
  airportElevation.textContent = briefing.elevation;
  airportRunways.textContent = briefing.runways.map((runway) => `${runway.name} (${formatRunwayLength(runway.length)})`).join(", ");
  airportLongest.textContent = formatRunwayLength(longestFt);
  airportApproaches.textContent = briefing.approaches.join(", ");
  airportNotes.textContent = briefing.notes;
  if (airportDataStatus) {
    airportDataStatus.textContent = briefing.runways.length ? "Airport lookup connected" : "Airport found, runway data limited";
  }
  updatePerformanceFromRunway(longestFt);

  briefing.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    airportTags.append(item);
  });

  renderAirportVisual(icao, briefing);
}

async function renderAirportBriefing() {
  const icao = formatAirport(airportCode.value);
  const briefing = airportBriefings[icao] || await fetchAirportBriefing(icao);

  airportCode.value = icao === "----" ? "" : icao;

  if (!briefing) {
    airportIcao.textContent = icao;
    runwayGraphic.innerHTML = "";
    airportTags.innerHTML = "";
    airportName.textContent = "Airport not in starter database";
    airportElevation.textContent = "Add data";
    airportRunways.textContent = "Unknown";
    airportLongest.textContent = "Unknown";
    airportApproaches.textContent = "Unknown";
    airportNotes.textContent = "No runway data was found. If the local server is running, try another ICAO or check the airport code.";
    return;
  }

  renderAirportData(icao, briefing);
}

function updatePerformance() {
  const runway = Number(performanceRunway.value) || 0;
  const runwayM = runwayUnit.value === "ft" ? runway * 0.3048 : runway;
  const baselines = {
    ga: { takeoff: 700, landing: 600 },
    regional: { takeoff: 1700, landing: 1500 },
    narrowbody: { takeoff: 2300, landing: 1900 },
    widebody: { takeoff: 3100, landing: 2500 }
  };
  const required = baselines[performanceClass.value][performanceMode.value];
  const margin = runwayM - required;

  if (margin >= 700) {
    performanceSummary.textContent = "Healthy runway margin for this broad aircraft class.";
  } else if (margin >= 0) {
    performanceSummary.textContent = "Usable, but check performance carefully.";
  } else {
    performanceSummary.textContent = "Runway may be short for this aircraft class.";
  }

  performanceDetail.textContent = `Planning estimate: ${Math.round(runwayM).toLocaleString()} m available vs about ${required.toLocaleString()} m baseline for ${performanceMode.value}. Always use the aircraft manual or EFB for final numbers.`;
}

function routeDataSource(routeKey) {
  if (airlineRoutes[routeKey]) return "Curated";
  if (openRouteData?.routes?.[routeKey]) return "OpenFlights";
  return "Missing";
}

function findAirlines(dep, arr) {
  const routeKey = `${dep}-${arr}`;
  return airlineRoutes[routeKey] || openRouteData?.routes?.[routeKey] || [];
}

function findRouteSuggestions(dep, arr) {
  const combinedRoutes = { ...(openRouteData?.routes || {}), ...airlineRoutes };
  return Object.entries(combinedRoutes)
    .filter(([key]) => {
      const [routeDep, routeArr] = key.split("-");
      return routeDep === dep || routeArr === arr || routeArr === dep || routeDep === arr;
    })
    .slice(0, 5)
    .map(([key, airlines]) => ({ key, airlines }));
}

function routeParts(routeKey) {
  const [dep, arr] = routeKey.split("-");
  return { dep, arr };
}

async function loadOpenRouteData() {
  if (!routeDataCount || !routeDataStatus) return;

  try {
    const response = await fetch("data/openflights-routes.json");
    if (!response.ok) throw new Error("Route data unavailable");
    openRouteData = await response.json();
    routeDataCount.textContent = `${openRouteData.routeCount.toLocaleString()} route pairs`;
    routeDataStatus.textContent = `${openRouteData.source}. Historical/community data, with curated routes taking priority.`;
    populateAirlineMode();
    updateBriefing({ skipWeather: true });
  } catch (error) {
    routeDataCount.textContent = `${Object.keys(airlineRoutes).length.toLocaleString()} curated route pairs`;
    routeDataStatus.textContent = "Large open route database could not load. Curated starter routes are still available.";
  }
}

function loadRoute(routeKey, aircraftKey = aircraft.value, airline = "") {
  const { dep, arr } = routeParts(routeKey);
  departure.value = dep;
  arrival.value = arr;
  alternate.value = suggestAlternate(arr);
  alternateEdited = false;

  if (aircraftProfiles[aircraftKey]) {
    aircraft.value = aircraftKey;
  }

  const airlines = findAirlines(dep, arr);
  selectedAirline = airline || airlines[0] || "";
  updateBriefing();
}

function describeRoute(routeKey) {
  const airlines = airlineRoutes[routeKey] || [];
  const supported = aircraftByRoute[routeKey] || longhaulRouteAircraft;
  return {
    routeKey,
    airlines,
    aircraftKey: supported.find((key) => aircraftProfiles[key]) || "a320"
  };
}

function getMoodRoute() {
  const routes = moodRoutes[moodSelect?.value] || moodRoutes["short-hop"];
  const index = Math.abs((departure.value + arrival.value + aircraft.value + moodSelect.value)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0)) % routes.length;
  return describeRoute(routes[index]);
}

function routeRegion(routeKey) {
  if (/^(EG|EH|LF|ED|LE|LI|LS|LO|EI|EN|EF)/.test(routeKey)) return "europe";
  if (/^(K|C)/.test(routeKey)) return "north-america";
  if (/^(OM|OT|OE)/.test(routeKey)) return "middle-east";
  if (/^(WS|VH|RJ|RK|VT|WM|VI)/.test(routeKey)) return "asia";
  if (/^(YS|NZ)/.test(routeKey)) return "oceania";
  return "longhaul";
}

function estimateBlockTime(routeKey) {
  const supported = aircraftByRoute[routeKey] || longhaulRouteAircraft;
  const [depCode, arrCode] = routeKey.split("-");

  if (regionalRouteAircraft.some((key) => supported.includes(key))) return "45m to 1h 25m";
  if (narrowbodyRouteAircraft.some((key) => supported.includes(key)) && depCode.slice(0, 1) === arrCode.slice(0, 1)) return "1h 00m to 2h 20m";
  if (mediumRouteAircraft.some((key) => supported.includes(key))) return "3h 30m to 6h 45m";
  if (routeRegion(routeKey) === "europe") return "1h 15m to 2h 45m";
  if (routeRegion(routeKey) === "north-america") return "1h 30m to 5h 30m";
  return "6h 30m to 14h 00m";
}

function parseWindDirection(metar) {
  const match = metar.match(/\b(\d{3}|VRB)(\d{2,3})(G\d{2,3})?KT\b/);
  if (!match || match[1] === "VRB") return null;
  return Number(match[1]);
}

function runwayDelta(wind, heading) {
  const delta = Math.abs(((wind - heading + 540) % 360) - 180);
  return delta;
}

function likelyRunwayForAirport(icao, metar) {
  const briefing = airportBriefings[icao];
  const wind = parseWindDirection(metar);

  if (!briefing || !wind) {
    return null;
  }

  const options = briefing.runways.flatMap((runway) => {
    const [a, b] = runway.name.split("/");
    const headingA = runwayHeading(runway);
    const headingB = (headingA + 180) % 360;
    return [
      { name: a, heading: headingA, runway: runway.name },
      { name: b || a, heading: headingB, runway: runway.name }
    ];
  });

  return options
    .sort((first, second) => runwayDelta(wind, first.heading) - runwayDelta(wind, second.heading))[0];
}

function realismScore(routeKey, profile) {
  const supportedAircraft = aircraftByRoute[routeKey];
  const selectedFleet = airlineFleet[selectedAirline] || [];
  const routeFit = !supportedAircraft || supportedAircraft.includes(aircraft.value);
  const fleetFit = !selectedAirline || !selectedFleet.length || aircraftMatchesFleet(selectedFleet, aircraft.value);

  if (routeFit && fleetFit) return `${profile.name}: Realistic for this route and selected operator.`;
  if (routeFit && !fleetFit) return `${profile.name}: Possible route fit, but unusual for ${selectedAirline}.`;
  if (!routeFit && fleetFit) return `${profile.name}: Airline fleet fit, but unusual for this route length/profile.`;
  return `${profile.name}: Fictional scenario. Fine for sim freedom, but not a real-world style pairing.`;
}

function gateHint(dep, arr) {
  const airline = selectedAirline || findAirlines(dep, arr)[0] || "";
  return gateHints[`${dep}:${airline}`] || gateHints[`${arr}:${airline}`] || `${airline || "Selected operator"}: use a plausible main terminal/contact stand for ${dep} or ${arr}.`;
}

function updateMoodTools() {
  if (!moodResult) return;
  const candidate = getMoodRoute();
  const { dep, arr } = routeParts(candidate.routeKey);
  moodResult.innerHTML = `<strong>${dep} -> ${arr}</strong><span>${candidate.airlines.slice(0, 3).join(", ") || "Custom sim route"} | ${aircraftProfiles[candidate.aircraftKey].name} | ${estimateBlockTime(candidate.routeKey)}</span>`;
}

function updateAirlineMode() {
  if (!airlineModeSelect || !airlineModeResult) return;
  const airline = airlineModeSelect.value || "British Airways";
  const combinedRoutes = { ...(openRouteData?.routes || {}), ...airlineRoutes };
  const routes = Object.entries(combinedRoutes)
    .filter(([, airlines]) => airlines.includes(airline))
    .slice(0, 6);
  const fleet = (airlineFleet[airline] || []).filter((key) => aircraftProfiles[key]).slice(0, 6);
  airlineModeResult.innerHTML = `<strong>${airline}</strong><span>Routes: ${routes.map(([key]) => key.replace("-", " -> ")).join(", ") || "Add starter data"}</span><span>Fleet: ${fleet.map((key) => aircraftProfiles[key].name).join(", ") || "Unknown"}</span>`;
}

function updateCargoMode() {
  if (!cargoSelect || !cargoResult) return;
  const cargo = cargoRoutes[cargoSelect.value];
  const { dep, arr } = routeParts(cargo.route);
  cargoResult.innerHTML = `<strong>${dep} -> ${arr}</strong><span>${aircraftProfiles[cargo.aircraftKey].name} | ${cargo.note}</span>`;
}

function updateOpsTools() {
  const dep = formatAirport(departure.value);
  const arr = formatAirport(arrival.value);
  const routeKey = `${dep}-${arr}`;
  const profile = aircraftProfiles[aircraft.value];

  if (gateResult) gateResult.textContent = gateHint(dep, arr);

  if (runwayHelperResult) {
    const depRunway = likelyRunwayForAirport(dep, latestDepartureMetar);
    const arrRunway = likelyRunwayForAirport(arr, latestArrivalMetar);
    runwayHelperResult.textContent = depRunway || arrRunway
      ? `Likely runway prompt: ${depRunway ? `${dep} ${depRunway.name}` : "departure unknown"} / ${arrRunway ? `${arr} ${arrRunway.name}` : "arrival unknown"}. Confirm with ATIS/charts.`
      : "Runway prompt needs live METAR wind and known runway data. Confirm with ATIS/charts.";
  }

  if (procedureChecklist) {
    procedureChecklist.innerHTML = "";
    [
      `Check ${dep} runway in use and choose a likely SID.`,
      `Review ${arr} STAR, transition and expected approach.`,
      `Open ChartFox or Navigraph before loading into the sim.`,
      `Check missed approach and terrain notes if flying online.`
    ].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      procedureChecklist.append(li);
    });
  }

  if (flightTimeResult) flightTimeResult.textContent = `Typical block time: ${estimateBlockTime(routeKey)}.`;
  if (realismResult) realismResult.textContent = realismScore(routeKey, profile);
  if (randomResult && !randomResult.textContent) randomResult.textContent = "Ready to generate a sector.";

  updateMoodTools();
  updateAirlineMode();
  updateCargoMode();
}

function getDirectRouting(dep, arr) {
  return `${dep} -> ${arr}`;
}

function suggestAlternate(arr) {
  return diversionAlternates[arr] || departure.value.trim().toUpperCase().slice(0, 4) || "----";
}

function getFlightNumber(dep, arr, aircraftKey) {
  const seed = `${dep}${arr}${aircraftKey}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return String(seed % 900 + 100);
}

function getAirlineCode(airline) {
  return airlineCodes[airline] || "ZZZ";
}

function aircraftMatchesFleet(fleet, aircraftKey) {
  if (fleet.includes(aircraftKey)) {
    return true;
  }

  if (aircraftKey === "b738" || aircraftKey === "b38m") {
    return fleet.includes("b737");
  }

  return false;
}

function updateAircraftWarning(routeKey, profile) {
  const supportedAircraft = aircraftByRoute[routeKey];
  const warnings = [];

  if (supportedAircraft && !supportedAircraft.includes(aircraft.value)) {
    const suggestions = supportedAircraft.map((key) => aircraftProfiles[key].name).join(", ");
    warnings.push(`${profile.name} is not usually used on this route in the starter data. A closer route match would be ${suggestions}.`);
  }

  const selectedFleet = airlineFleet[selectedAirline];
  if (selectedAirline && selectedFleet && !aircraftMatchesFleet(selectedFleet, aircraft.value)) {
    const fleetSuggestions = selectedFleet
      .filter((key) => aircraftProfiles[key])
      .slice(0, 5)
      .map((key) => aircraftProfiles[key].name)
      .join(", ");
    warnings.push(`${selectedAirline} does not normally operate the ${profile.name} in the starter fleet data. Try ${fleetSuggestions} for that airline.`);
  }

  if (!warnings.length) {
    aircraftWarning.hidden = true;
    aircraftWarning.textContent = "";
    return;
  }

  aircraftWarning.hidden = false;
  aircraftWarning.textContent = `${warnings.join(" ")} You can still dispatch it if you want a custom sim scenario.`;
}

function buildSimbriefUrl(profile, dep, arr, flightNumber) {
  const airlineCode = getAirlineCode(selectedAirline);
  const altn = formatAirport(alternate.value);
  const params = new URLSearchParams({
    airline: airlineCode,
    fltnum: flightNumber,
    callsign: `${airlineCode}${flightNumber}`,
    type: profile.simbriefType,
    orig: dep,
    dest: arr,
    altn,
    flighttype: "s",
    flightrules: "i"
  });

  return `https://dispatch.simbrief.com/options/custom?${params.toString()}`;
}

function renderAirlines(airlines) {
  airlineList.innerHTML = "";

  if (!airlines.length) {
    const item = document.createElement("li");
    item.textContent = "No starter match yet. Add route data when you have it.";
    item.className = "empty-airline";
    airlineList.append(item);
    return;
  }

  airlines.forEach((airline) => {
    const item = document.createElement("li");
    item.textContent = airline;
    airlineList.append(item);
  });
}

function renderAirlineResults(airlines, dep, arr) {
  airlineResultList.innerHTML = "";

  if (!airlines.length) {
    const empty = document.createElement("div");
    empty.className = "airline-result-empty";
    const suggestions = findRouteSuggestions(dep, arr);
    empty.innerHTML = "";
    const message = document.createElement("strong");
    message.textContent = `No airline match for ${dep} -> ${arr} yet.`;
    empty.append(message);

    if (suggestions.length) {
      const list = document.createElement("ul");
      suggestions.forEach((suggestion) => {
        const item = document.createElement("li");
        item.textContent = `${suggestion.key.replace("-", " -> ")} | ${suggestion.airlines.slice(0, 3).join(", ")}`;
        list.append(item);
      });
      empty.append(list);
    } else {
      const copy = document.createElement("span");
      copy.textContent = "Send it through feedback and it can be added to the route database.";
      empty.append(copy);
    }

    airlineResultList.append(empty);
    selectedAirline = "";
    return;
  }

  if (!airlines.includes(selectedAirline)) {
    [selectedAirline] = airlines;
  }

  airlines.forEach((airline) => {
    const item = document.createElement("article");
    item.className = "airline-result";

    const copy = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    title.textContent = airline;
    meta.textContent = `${dep} -> ${arr} real-world route inspiration`;
    copy.append(title, meta);

    const button = document.createElement("button");
    button.className = airline === selectedAirline ? "panel-button panel-button-dark" : "panel-button";
    button.type = "button";
    button.textContent = airline === selectedAirline ? "Selected" : "Use airline";
    button.addEventListener("click", () => {
      selectedAirline = airline;
      updateBriefing();
      document.querySelector("#simbrief-editor").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    item.append(copy, button);
    airlineResultList.append(item);
  });
}

function updateSimbriefDraft(profile, dep, arr, draftCallsign, airlines, flightNumber) {
  if (!selectedAirline && airlines.length) {
    [selectedAirline] = airlines;
  }

  simbriefAirline.value = selectedAirline || "Add operator";
  simbriefCallsign.value = draftCallsign;
  simbriefAircraft.value = profile.name;
  simbriefCityPair.value = getDirectRouting(dep, arr);
  simbriefAlternate.value = formatAirport(alternate.value);
  simbriefRoute.value = [
    getDirectRouting(dep, arr),
    `Planned diversion: ${formatAirport(alternate.value)}`,
    `Departure METAR: ${latestDepartureMetar}`,
    `Arrival METAR: ${latestArrivalMetar}`
  ].join("\n");
  simbriefLink.href = buildSimbriefUrl(profile, dep, arr, flightNumber);
}

async function fetchMetar(icao, target, type) {
  target.textContent = `Loading ${icao} METAR...`;

  try {
    const isLocalServer = window.location.protocol.startsWith("http") && window.location.host;
    const endpoint = isLocalServer
      ? `/api/metar?ids=${encodeURIComponent(icao)}`
      : `https://aviationweather.gov/api/data/metar?ids=${icao}&format=json&taf=false&hours=2`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("METAR request failed");
    }

    const data = await response.json();
    const raw = data?.[0]?.rawOb || data?.[0]?.raw_text || "";
    const metar = raw || `No recent METAR returned for ${icao}.`;
    target.textContent = metar;

    if (type === "departure") {
      latestDepartureMetar = metar;
    } else {
      latestArrivalMetar = metar;
    }

    if (metarDataStatus) {
      metarDataStatus.textContent = "Live METAR connected";
    }
  } catch (error) {
    const fallback = `Inline METAR unavailable for ${icao}. Open the live source below.`;
    target.textContent = fallback;

    if (type === "departure") {
      latestDepartureMetar = fallback;
    } else {
      latestArrivalMetar = fallback;
    }

    if (metarDataStatus) {
      metarDataStatus.textContent = "METAR fallback links active";
    }
  }
}

async function updateWeather() {
  const dep = formatAirport(departure.value);
  const arr = formatAirport(arrival.value);
  departureMetarLink.href = `https://aviationweather.gov/data/metar/?id=${dep}`;
  arrivalMetarLink.href = `https://aviationweather.gov/data/metar/?id=${arr}`;
  await Promise.all([
    fetchMetar(dep, departureMetar, "departure"),
    fetchMetar(arr, arrivalMetar, "arrival")
  ]);
  updateBriefing({ skipWeather: true });
}

function updateBriefing(options = {}) {
  const profile = aircraftProfiles[aircraft.value];
  const dep = formatAirport(departure.value);
  const arr = formatAirport(arrival.value);
  if (!alternateEdited) {
    alternate.value = suggestAlternate(arr);
  }
  const airlines = findAirlines(dep, arr);
  const routeKey = `${dep}-${arr}`;
  const flightNumber = getFlightNumber(dep, arr, aircraft.value);

  cityPair.textContent = `${dep} -> ${arr}`;
  aircraftName.textContent = profile.name;
  airlineCount.textContent = airlines.length === 1 ? "1 operator" : `${airlines.length} operators`;
  const source = routeDataSource(routeKey);
  routeConfidence.textContent = source === "Curated" ? "Curated match" : source === "OpenFlights" ? "Open data match" : "Route request";
  routePreview.textContent = airlines.length
    ? `${getDirectRouting(dep, arr)} with live METAR and selected airline inspiration`
    : `${getDirectRouting(dep, arr)} is not in the beta route set yet. Use feedback to request it, or choose one of the suggestions below.`;
  const draftCallsign = `${getAirlineCode(selectedAirline || airlines[0])}${flightNumber}`;
  callsign.textContent = draftCallsign;
  renderAirlines(airlines);
  renderAirlineResults(airlines, dep, arr);
  updateAircraftWarning(routeKey, profile);
  updateSimbriefDraft(profile, dep, arr, draftCallsign, airlines, flightNumber);
  updateOpsTools();

  if (!options.skipWeather) {
    window.clearTimeout(updateBriefing.weatherTimer);
    updateBriefing.weatherTimer = window.setTimeout(updateWeather, 350);
  }
}

form.addEventListener("input", updateBriefing);
form.addEventListener("change", updateBriefing);
airportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderAirportBriefing();
});
airportCode.addEventListener("input", () => {
  normalizeAirportInput(airportCode);
  renderAirportBriefing();
});
runwayUnit.addEventListener("change", renderAirportBriefing);
performanceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updatePerformance();
});
performanceMode.addEventListener("change", updatePerformance);
performanceClass.addEventListener("change", updatePerformance);
performanceRunway.addEventListener("input", updatePerformance);
[departure, arrival].forEach((input) => {
  input.addEventListener("input", () => {
    normalizeAirportInput(input);
    updateBriefing();
  });
});
alternate.addEventListener("input", () => {
  alternateEdited = true;
  normalizeAirportInput(alternate);
  updateBriefing();
});
arrival.addEventListener("change", () => {
  if (!alternateEdited) {
    alternate.value = suggestAlternate(formatAirport(arrival.value));
  }
  updateBriefing();
});
copySimbrief.addEventListener("click", async () => {
  const draft = [
    `Airline: ${simbriefAirline.value}`,
    `Callsign: ${simbriefCallsign.value}`,
    `Aircraft: ${simbriefAircraft.value}`,
    `Route: ${simbriefCityPair.value}`,
    `Dispatch notes:\n${simbriefRoute.value}`
  ].join("\n");

  try {
    await navigator.clipboard.writeText(draft);
    copyStatus.textContent = "Draft copied. Open SimBrief and paste it into the dispatch form.";
  } catch (error) {
    copyStatus.textContent = "Copy failed in this browser. Select the draft text and copy it manually.";
  }
});
refreshWeather.addEventListener("click", updateWeather);

function populateAirlineMode() {
  if (!airlineModeSelect) return;
  const combinedRoutes = { ...(openRouteData?.routes || {}), ...airlineRoutes };
  const airlines = [...new Set(Object.values(combinedRoutes).flat())].sort();
  airlineModeSelect.innerHTML = "";
  airlines.forEach((airline) => {
    const option = document.createElement("option");
    option.value = airline;
    option.textContent = airline;
    airlineModeSelect.append(option);
  });
  airlineModeSelect.value = "British Airways";
}

function renderChallenges() {
  if (!challengeList) return;
  challengeList.innerHTML = "";
  approachChallenges.forEach((challenge) => {
    const card = document.createElement("article");
    card.className = "challenge-card";
    const title = document.createElement("strong");
    const copy = document.createElement("span");
    const button = document.createElement("button");
    title.textContent = `${challenge.airport} | ${challenge.title}`;
    copy.textContent = challenge.note;
    button.className = "panel-button";
    button.type = "button";
    button.textContent = "Load challenge";
    button.addEventListener("click", () => loadRoute(challenge.route, challenge.aircraftKey));
    card.append(title, copy, button);
    challengeList.append(card);
  });
}

function renderFleetLibrary() {
  if (!fleetLibrary) return;
  fleetLibrary.innerHTML = "";
  fleetLibraryData.forEach((item) => {
    const profile = aircraftProfiles[item.key];
    const card = document.createElement("article");
    card.className = "fleet-item";
    const title = document.createElement("strong");
    const role = document.createElement("span");
    const routes = document.createElement("span");
    title.textContent = profile.name;
    role.textContent = item.role;
    routes.textContent = `Good routes: ${item.routes}`;
    card.append(title, role, routes);
    fleetLibrary.append(card);
  });
}

function getLogbook() {
  try {
    return JSON.parse(localStorage.getItem("vectordeck-logbook") || "[]");
  } catch (error) {
    return [];
  }
}

function saveLogbook(items) {
  localStorage.setItem("vectordeck-logbook", JSON.stringify(items.slice(0, 12)));
}

function renderLogbook() {
  if (!logbookList) return;
  const items = getLogbook();
  logbookList.innerHTML = "";

  if (!items.length) {
    logbookList.textContent = "No saved sectors yet.";
    return;
  }

  items.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "logbook-entry";
    const title = document.createElement("strong");
    const copy = document.createElement("span");
    title.textContent = `${item.route} | ${item.aircraft} | ${item.rating}/5`;
    copy.textContent = `${item.date}: ${item.notes || "No notes"}`;
    entry.append(title, copy);
    logbookList.append(entry);
  });
}

function randomRouteKey() {
  const keys = Object.keys({ ...(openRouteData?.routes || {}), ...airlineRoutes });
  return keys[Math.floor(Math.random() * keys.length)];
}

populateAirlineMode();
renderChallenges();
renderFleetLibrary();
renderLogbook();

if (moodSelect) moodSelect.addEventListener("change", updateMoodTools);
if (applyMoodRoute) {
  applyMoodRoute.addEventListener("click", () => {
    const candidate = getMoodRoute();
    loadRoute(candidate.routeKey, candidate.aircraftKey, candidate.airlines[0]);
  });
}
if (airlineModeSelect) {
  airlineModeSelect.addEventListener("change", () => {
    const airline = airlineModeSelect.value;
    selectedAirline = airline;
    const combinedRoutes = { ...(openRouteData?.routes || {}), ...airlineRoutes };
    const firstRoute = Object.entries(combinedRoutes).find(([, airlines]) => airlines.includes(airline));
    if (firstRoute) {
      const supported = aircraftByRoute[firstRoute[0]] || narrowbodyRouteAircraft;
      loadRoute(firstRoute[0], supported[0], airline);
    }
    updateAirlineMode();
  });
}
if (randomFlight) {
  randomFlight.addEventListener("click", () => {
    const key = randomRouteKey();
    const airlines = airlineRoutes[key] || [];
    const supported = aircraftByRoute[key] || longhaulRouteAircraft;
    const selectedAircraft = supported[Math.floor(Math.random() * supported.length)] || "a320";
    const airline = airlines[Math.floor(Math.random() * airlines.length)] || "";
    loadRoute(key, selectedAircraft, airline);
    randomResult.textContent = `Generated ${key.replace("-", " -> ")} with ${airline || "custom operator"} in the ${aircraftProfiles[selectedAircraft].name}.`;
  });
}
if (copyOpsBrief) {
  copyOpsBrief.addEventListener("click", async () => {
    const brief = [
      `Route: ${cityPair.textContent}`,
      `Airline: ${simbriefAirline.value}`,
      `Aircraft: ${simbriefAircraft.value}`,
      `Diversion: ${simbriefAlternate.value}`,
      `Gate hint: ${gateResult.textContent}`,
      `Runway helper: ${runwayHelperResult.textContent}`,
      `Time: ${flightTimeResult.textContent}`,
      `Realism: ${realismResult.textContent}`,
      "Charts: ChartFox or Navigraph before departure."
    ].join("\n");

    try {
      await navigator.clipboard.writeText(brief);
      copyStatus.textContent = "Ops brief copied.";
    } catch (error) {
      copyStatus.textContent = "Could not copy ops brief in this browser.";
    }
  });
}
if (logbookForm) {
  logbookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const items = getLogbook();
    items.unshift({
      date: new Date().toLocaleDateString(),
      route: cityPair.textContent,
      aircraft: aircraftName.textContent,
      rating: logbookRating.value,
      notes: logbookNotes.value.trim()
    });
    saveLogbook(items);
    logbookNotes.value = "";
    renderLogbook();
  });
}
if (cargoSelect) cargoSelect.addEventListener("change", updateCargoMode);
if (loadCargoRoute) {
  loadCargoRoute.addEventListener("click", () => {
    const cargo = cargoRoutes[cargoSelect.value];
    selectedAirline = cargoSelect.value;
    loadRoute(cargo.route, cargo.aircraftKey, cargoSelect.value);
  });
}

function buildFeedbackMailto() {
  const recipient = [
    "l", "u", "g", "h", "a", "n", ".", "h", "a", "r", "d", "y",
    "@", "o", "u", "t", "l", "o", "o", "k", ".", "c", "o", "m"
  ].join("");
  const subject = encodeURIComponent("VectorDeck feedback");
  const body = encodeURIComponent([
    `Name: ${feedbackName.value || "Not provided"}`,
    `Email: ${feedbackEmail.value || "Not provided"}`,
    "",
    feedbackMessage.value || "No message entered."
  ].join("\n"));

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

feedbackForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    name: feedbackName.value.trim(),
    email: feedbackEmail.value.trim(),
    message: feedbackMessage.value.trim(),
    route: `${formatAirport(departure.value)}-${formatAirport(arrival.value)}`,
    aircraft: aircraftProfiles[aircraft.value].name,
    page: window.location.href
  };

  if (!payload.message) {
    feedbackStatus.textContent = "Add a short message before sending.";
    return;
  }

  if (window.location.protocol.startsWith("http")) {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Feedback request failed");
      }

      feedbackStatus.textContent = "Feedback saved. Thanks, that is in the beta inbox.";
      feedbackForm.reset();
      return;
    } catch (error) {
      feedbackStatus.textContent = "Could not save feedback locally, opening your email app instead.";
    }
  }

  window.location.href = buildFeedbackMailto();
});
if (connectionStatus) {
  connectionStatus.textContent = window.location.protocol.startsWith("http")
    ? "Live preview server detected: METAR, airport lookup and feedback capture are enabled."
    : "You are viewing the file directly. Open the local server link for live METAR, airport lookup and feedback capture.";
}
loadOpenRouteData();
updateBriefing();
renderAirportBriefing();
