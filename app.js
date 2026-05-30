'use strict';

// ─── SLOUGH TEST ROUTES DATA ─────────────────────────────────────────────────
// Based on real DVSA Slough routes. Test Centre: 12 Waterside Drive SL3 6EZ
// Coordinates derived from actual street names used in official route directions

const TC = [51.5089, -0.5452]; // Test Centre

const ROUTES = [
  {
    id: 1,
    name: "Route 1 – Langley/Five Points",
    distance: "17.4 km", duration: "31 min", difficulty: "Moderate",
    color: "#1a56db",
    hazards: ["Five Points Roundabout", "Residential tight turns", "The Frithe estate roads"],
    waypoints: [
      [51.5089, -0.5452], // Start: Test Centre
      [51.5094, -0.5440], // East on Waterside Drive
      [51.5098, -0.5435], // Turn left Station Rd/B470
      [51.5112, -0.5428], // Continue B470 north
      [51.5125, -0.5415],
      [51.5138, -0.5405],
      [51.5148, -0.5400], // Roundabout → Wood Lane 1st exit
      [51.5155, -0.5398], // Five Points Roundabout → Uxbridge Rd/A412 1st exit
      [51.5165, -0.5385],
      [51.5175, -0.5375],
      [51.5188, -0.5358], // Turn right The Frithe
      [51.5195, -0.5340], // Turn right Knolton Way
      [51.5200, -0.5325], // Turn right The Normans
      [51.5198, -0.5310], // Turn right Berry Field
      [51.5190, -0.5325], // Turn left The Frithe
      [51.5182, -0.5340], // Turn left Uxbridge Road/A412
      [51.5170, -0.5358],
      [51.5158, -0.5378],
      [51.5150, -0.5395], // Five Points Roundabout 3rd exit → A4007
      [51.5142, -0.5410],
      [51.5132, -0.5428], // Turn right Swallow Street
      [51.5125, -0.5438], // Bear left Love Lane
      [51.5115, -0.5437], // Bear right B470
      [51.5102, -0.5435],
      [51.5092, -0.5432], // Roundabout 1st exit Langley Park Rd/B470
      [51.5089, -0.5452]  // Turn right Waterside Drive → Test Centre
    ],
    instructions: [
      { point: 0,  text: "Drive EAST on Waterside Drive" },
      { point: 2,  text: "Turn LEFT onto Station Road / B470" },
      { point: 7,  text: "Enter Five Points Roundabout – take 1st exit onto Uxbridge Road / A412" },
      { point: 10, text: "Turn RIGHT onto The Frithe" },
      { point: 11, text: "Turn RIGHT onto Knolton Way" },
      { point: 12, text: "Turn RIGHT onto The Normans" },
      { point: 13, text: "Turn RIGHT onto Berry Field" },
      { point: 14, text: "Turn LEFT onto The Frithe" },
      { point: 15, text: "Turn LEFT onto Uxbridge Road / A412" },
      { point: 18, text: "Five Points Roundabout – take 3rd exit onto Slough Road / A4007" },
      { point: 20, text: "Turn RIGHT onto Swallow Street" },
      { point: 21, text: "Bear LEFT onto Love Lane" },
      { point: 22, text: "Bear RIGHT onto B470" },
      { point: 24, text: "Roundabout – take 1st exit onto Langley Park Road / B470" },
      { point: 25, text: "Turn RIGHT onto Waterside Drive – Test Centre ahead" }
    ]
  },
  {
    id: 2,
    name: "Route 2 – A4 Langley Road",
    distance: "13.5 km", duration: "28 min", difficulty: "Moderate",
    color: "#9333ea",
    hazards: ["A4 dual carriageway", "Sussex Place roundabout", "Uxbridge Road lanes"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5445], // Turn left out of test centre
      [51.5082, -0.5432], // Waterside Drive → end turn right
      [51.5090, -0.5425], // Station Road turn right
      [51.5082, -0.5418], // Alderbury Road turn left
      [51.5075, -0.5410], // Barton Road end turn left
      [51.5070, -0.5400], // Talbot Avenue end turn right
      [51.5062, -0.5390], // Langley Road turn right → A4
      [51.5052, -0.5380],
      [51.5042, -0.5360], // A4 Sussex Place → roundabout 3rd exit
      [51.5048, -0.5345],
      [51.5058, -0.5340], // Continue roundabout
      [51.5068, -0.5358], // Uxbridge Road turn left
      [51.5078, -0.5375],
      [51.5085, -0.5395],
      [51.5089, -0.5452]  // Return test centre
    ],
    instructions: [
      { point: 0,  text: "Turn LEFT out of test centre" },
      { point: 2,  text: "End of Waterside Drive – turn RIGHT" },
      { point: 3,  text: "Station Road – turn RIGHT" },
      { point: 4,  text: "Alderbury Road – turn LEFT" },
      { point: 5,  text: "Barton Road – end of road, turn LEFT" },
      { point: 6,  text: "Talbot Avenue – end of road, turn RIGHT" },
      { point: 7,  text: "Langley Road – turn RIGHT onto A4" },
      { point: 9,  text: "A4 Sussex Place roundabout – take 3rd exit" },
      { point: 12, text: "Turn LEFT onto Uxbridge Road" },
      { point: 15, text: "Return to test centre" }
    ]
  },
  {
    id: 3,
    name: "Route 3 – Wexham Road",
    distance: "12.8 km", duration: "26 min", difficulty: "Moderate",
    color: "#059669",
    hazards: ["Wexham Road parked cars", "A412 Five Points", "Church Lane narrow"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5445], // Turn left
      [51.5080, -0.5430], // Waterside Drive → end turn left
      [51.5085, -0.5425], // Langley Park Road → roundabout 1st exit
      [51.5100, -0.5420], // Wood Lane → roundabout 1st exit
      [51.5120, -0.5412],
      [51.5135, -0.5405], // A412 Uxbridge Road turn right
      [51.5148, -0.5395],
      [51.5162, -0.5380],
      [51.5168, -0.5365], // Church Lane turn left
      [51.5175, -0.5352],
      [51.5178, -0.5342], // Norway Drive end turn left
      [51.5172, -0.5328],
      [51.5165, -0.5320], // Wexham Road → roundabout
      [51.5155, -0.5330],
      [51.5142, -0.5345],
      [51.5130, -0.5360],
      [51.5118, -0.5378],
      [51.5105, -0.5398],
      [51.5089, -0.5452]  // Return test centre
    ],
    instructions: [
      { point: 0,  text: "Turn LEFT out of test centre" },
      { point: 2,  text: "End of Waterside Drive – turn LEFT onto Langley Park Road" },
      { point: 3,  text: "Roundabout – take 1st exit" },
      { point: 4,  text: "Wood Lane – continue to roundabout, 1st exit" },
      { point: 6,  text: "A412 Uxbridge Road – turn RIGHT" },
      { point: 9,  text: "Church Lane – turn LEFT" },
      { point: 11, text: "Norway Drive – end of road, turn LEFT onto Wexham Road" },
      { point: 13, text: "Wexham Road – continue to roundabout (watch for parked cars)" },
      { point: 18, text: "Return south to test centre" }
    ]
  },
  {
    id: 4,
    name: "Route 4 – Horton Road / Ditton Park",
    distance: "15.2 km", duration: "32 min", difficulty: "Hard",
    color: "#dc2626",
    hazards: ["Ditton Park Road rural", "Riding Court Road", "Horton Road canal-side bends"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5445],
      [51.5080, -0.5432], // Left out → Waterside → end right
      [51.5090, -0.5422], // Station Rd → left
      [51.5078, -0.5415],
      [51.5065, -0.5405], // High Street turn right → A4
      [51.5058, -0.5395],
      [51.5050, -0.5390], // A4 London Road turn left
      [51.5038, -0.5400],
      [51.5025, -0.5412],
      [51.5015, -0.5460], // Ditton Park Road end turn right
      [51.5010, -0.5490],
      [51.5002, -0.5520], // Riding Court Rd → roundabout 2nd exit
      [51.4998, -0.5540],
      [51.5005, -0.5555],
      [51.5015, -0.5545],
      [51.5022, -0.5510], // B470 London Road end turn right
      [51.5030, -0.5490],
      [51.5038, -0.5478], // Horton Road keep right
      [51.5050, -0.5470],
      [51.5062, -0.5462],
      [51.5072, -0.5460],
      [51.5082, -0.5455],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Turn LEFT – head west on Waterside Drive" },
      { point: 3,  text: "Station Road – turn LEFT" },
      { point: 5,  text: "High Street – turn RIGHT onto A4" },
      { point: 7,  text: "A4 London Road – turn LEFT" },
      { point: 10, text: "Ditton Park Road – end of road, turn RIGHT" },
      { point: 12, text: "Riding Court Road – continue to roundabout, take 2nd exit" },
      { point: 16, text: "B470 London Road – end of road, turn RIGHT" },
      { point: 18, text: "Horton Road – keep RIGHT (canal-side bends, take care)" },
      { point: 23, text: "Return to Waterside Drive – test centre" }
    ]
  },
  {
    id: 5,
    name: "Route 5 – Salt Hill / High Street",
    distance: "11.9 km", duration: "25 min", difficulty: "Moderate",
    color: "#d97706",
    hazards: ["Slough High Street pedestrians", "Salt Hill Park area", "Bus lanes"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5448],
      [51.5082, -0.5440], // West on Waterside Drive
      [51.5078, -0.5510],
      [51.5075, -0.5565],
      [51.5072, -0.5620],
      [51.5068, -0.5680],
      [51.5065, -0.5740], // High Street west
      [51.5060, -0.5800],
      [51.5058, -0.5860],
      [51.5055, -0.5920], // Salt Hill area
      [51.5060, -0.5930],
      [51.5070, -0.5910],
      [51.5078, -0.5890],
      [51.5082, -0.5860],
      [51.5085, -0.5820],
      [51.5082, -0.5780],
      [51.5080, -0.5720],
      [51.5082, -0.5660],
      [51.5084, -0.5600],
      [51.5085, -0.5530],
      [51.5086, -0.5490],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head WEST along Waterside Drive towards town" },
      { point: 5,  text: "Enter High Street – bus lane on left, stay right of it" },
      { point: 9,  text: "Approach Salt Hill – watch for pedestrian crossings" },
      { point: 11, text: "Turn around at Salt Hill Park area" },
      { point: 16, text: "Return east along High Street" },
      { point: 22, text: "Turn RIGHT onto Waterside Drive – test centre" }
    ]
  },
  {
    id: 6,
    name: "Route 6 – Upton / London Road",
    distance: "14.1 km", duration: "29 min", difficulty: "Moderate",
    color: "#0891b2",
    hazards: ["London Road traffic", "Upton Court Park", "Busy junctions"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5448],
      [51.5080, -0.5510],
      [51.5075, -0.5570],
      [51.5070, -0.5630],
      [51.5065, -0.5690], // Towards Upton
      [51.5058, -0.5750],
      [51.5052, -0.5810],
      [51.5048, -0.5870],
      [51.5042, -0.5870],
      [51.5038, -0.5850],
      [51.5035, -0.5820],
      [51.5038, -0.5780],
      [51.5042, -0.5740],
      [51.5048, -0.5700],
      [51.5055, -0.5660],
      [51.5060, -0.5620],
      [51.5065, -0.5580],
      [51.5070, -0.5530],
      [51.5075, -0.5495],
      [51.5082, -0.5468],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head WEST – follow London Road signs" },
      { point: 6,  text: "Upton area – watch for school zones and pedestrians" },
      { point: 9,  text: "Turn at Upton Court Park area" },
      { point: 15, text: "Return east – maintain lane discipline" },
      { point: 21, text: "Return to test centre on Waterside Drive" }
    ]
  },
  {
    id: 7,
    name: "Route 7 – Farnham Road / Trading Estate",
    distance: "13.8 km", duration: "27 min", difficulty: "Hard",
    color: "#7c3aed",
    hazards: ["Trading Estate HGVs", "Multi-lane roundabouts", "Commercial vehicle exits"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5095, -0.5445],
      [51.5102, -0.5438],
      [51.5110, -0.5432],
      [51.5120, -0.5425],
      [51.5130, -0.5415], // Farnham Road north
      [51.5140, -0.5405],
      [51.5150, -0.5398], // Trading Estate roundabout
      [51.5158, -0.5388],
      [51.5162, -0.5375],
      [51.5160, -0.5360],
      [51.5152, -0.5352],
      [51.5142, -0.5360],
      [51.5132, -0.5372],
      [51.5122, -0.5385],
      [51.5112, -0.5398],
      [51.5102, -0.5415],
      [51.5092, -0.5435],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Turn RIGHT – head north on Farnham Road" },
      { point: 6,  text: "Approach Trading Estate – watch for HGVs pulling out" },
      { point: 7,  text: "Trading Estate roundabout – signal clearly, check right" },
      { point: 10, text: "Navigate around estate roads – stay in correct lane" },
      { point: 17, text: "Return south to test centre" }
    ]
  },
  {
    id: 8,
    name: "Route 8 – Bath Road / A4 East",
    distance: "16.2 km", duration: "33 min", difficulty: "Hard",
    color: "#be185d",
    hazards: ["A4 dual carriageway 70mph", "Multi-lane merging", "Busy Bath Road junctions"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5448],
      [51.5078, -0.5440],
      [51.5068, -0.5432],
      [51.5058, -0.5422],
      [51.5048, -0.5412], // Heading south to Bath Road A4
      [51.5038, -0.5402],
      [51.5028, -0.5390],
      [51.5018, -0.5375], // Bath Road A4
      [51.5010, -0.5355],
      [51.5005, -0.5330],
      [51.5002, -0.5300], // East on A4
      [51.5005, -0.5280],
      [51.5012, -0.5270],
      [51.5020, -0.5265],
      [51.5028, -0.5275],
      [51.5032, -0.5300],
      [51.5028, -0.5330],
      [51.5022, -0.5360],
      [51.5018, -0.5392],
      [51.5025, -0.5415],
      [51.5035, -0.5430],
      [51.5048, -0.5440],
      [51.5062, -0.5448],
      [51.5075, -0.5452],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head SOUTH towards Bath Road A4" },
      { point: 8,  text: "Join Bath Road A4 – dual carriageway, match speed to traffic" },
      { point: 11, text: "Continue east on A4 – stay in left lane unless overtaking" },
      { point: 13, text: "Roundabout – turn and return west" },
      { point: 19, text: "Leave A4 – return north towards test centre" },
      { point: 25, text: "Arrive test centre" }
    ]
  },
  {
    id: 9,
    name: "Route 9 – Stoke Poges Lane",
    distance: "12.4 km", duration: "24 min", difficulty: "Moderate",
    color: "#065f46",
    hazards: ["Stoke Poges Lane narrow sections", "Residential 20mph zones", "School crossing"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5095, -0.5445],
      [51.5102, -0.5438],
      [51.5112, -0.5428],
      [51.5122, -0.5420],
      [51.5132, -0.5412],
      [51.5142, -0.5402],
      [51.5152, -0.5392],
      [51.5160, -0.5375],
      [51.5168, -0.5355],
      [51.5175, -0.5338],
      [51.5180, -0.5322],
      [51.5175, -0.5308],
      [51.5165, -0.5298],
      [51.5155, -0.5310],
      [51.5145, -0.5325],
      [51.5135, -0.5338],
      [51.5125, -0.5352],
      [51.5112, -0.5368],
      [51.5100, -0.5392],
      [51.5092, -0.5418],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head NORTH on Farnham/Station Road" },
      { point: 8,  text: "Join Stoke Poges Lane – road narrows, keep left" },
      { point: 11, text: "20mph residential zone – observe speed limit" },
      { point: 13, text: "School area – extra vigilance for pedestrians" },
      { point: 14, text: "Turn and return south" },
      { point: 21, text: "Return to test centre" }
    ]
  },
  {
    id: 10,
    name: "Route 10 – Cippenham Loop",
    distance: "11.5 km", duration: "23 min", difficulty: "Easy",
    color: "#b45309",
    hazards: ["Cippenham roundabout", "Residential streets", "Pedestrian crossings"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5085, -0.5450],
      [51.5080, -0.5455],
      [51.5075, -0.5465],
      [51.5068, -0.5480],
      [51.5060, -0.5492],
      [51.5052, -0.5502],
      [51.5045, -0.5510],
      [51.5038, -0.5518],
      [51.5032, -0.5522],
      [51.5028, -0.5515],
      [51.5030, -0.5502],
      [51.5035, -0.5490],
      [51.5042, -0.5480],
      [51.5050, -0.5472],
      [51.5058, -0.5468],
      [51.5068, -0.5465],
      [51.5078, -0.5460],
      [51.5086, -0.5455],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head SOUTH-WEST on Waterside Drive" },
      { point: 5,  text: "Enter Cippenham residential area – 20mph" },
      { point: 9,  text: "Cippenham roundabout – signal and check before entering" },
      { point: 11, text: "Return loop – stay left through narrow sections" },
      { point: 18, text: "Return north-east to test centre" }
    ]
  },
  {
    id: 11,
    name: "Route 11 – M4 Spur / Uxbridge Rd",
    distance: "15.8 km", duration: "31 min", difficulty: "Hard",
    color: "#1d4ed8",
    hazards: ["M4 spur 70mph", "Lane 3 to lane 1 exits", "Gantry signs"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5082, -0.5445],
      [51.5075, -0.5435],
      [51.5068, -0.5422],
      [51.5060, -0.5408],
      [51.5052, -0.5392],
      [51.5045, -0.5375],
      [51.5040, -0.5355], // M4 spur entry
      [51.5038, -0.5335],
      [51.5040, -0.5315],
      [51.5045, -0.5300],
      [51.5052, -0.5290],
      [51.5060, -0.5280],
      [51.5068, -0.5275],
      [51.5072, -0.5285],
      [51.5075, -0.5305],
      [51.5072, -0.5330],
      [51.5068, -0.5358],
      [51.5062, -0.5382],
      [51.5058, -0.5405],
      [51.5065, -0.5425],
      [51.5075, -0.5440],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head south-east from test centre" },
      { point: 7,  text: "M4 spur – merge carefully, 70mph flow. Watch gantry signs" },
      { point: 9,  text: "CRITICAL: select lane 2 early for Uxbridge Road exit" },
      { point: 10, text: "DO NOT dive from lane 3 to lane 1 – common serious fault here" },
      { point: 14, text: "Uxbridge Road exit – hold 25mph and signal early" },
      { point: 18, text: "Continue on Uxbridge Road back towards test centre" },
      { point: 22, text: "Return to test centre" }
    ]
  },
  {
    id: 12,
    name: "Route 12 – Colnbrook / Horton",
    distance: "17.8 km", duration: "36 min", difficulty: "Hard",
    color: "#7f1d1d",
    hazards: ["Horton Road canal bends", "Colnbrook rural lanes", "Speed limit changes"],
    waypoints: [
      [51.5089, -0.5452],
      [51.5082, -0.5450],
      [51.5075, -0.5452],
      [51.5068, -0.5460],
      [51.5060, -0.5470],
      [51.5052, -0.5480],
      [51.5042, -0.5492],
      [51.5032, -0.5502],
      [51.5022, -0.5510],
      [51.5012, -0.5518],
      [51.5002, -0.5525],
      [51.4992, -0.5530],
      [51.4985, -0.5528],
      [51.4980, -0.5515],
      [51.4978, -0.5500],
      [51.4980, -0.5485],
      [51.4988, -0.5472],
      [51.4998, -0.5462],
      [51.5008, -0.5455],
      [51.5018, -0.5450],
      [51.5028, -0.5448],
      [51.5042, -0.5450],
      [51.5058, -0.5450],
      [51.5072, -0.5450],
      [51.5089, -0.5452]
    ],
    instructions: [
      { point: 0,  text: "Head south along Waterside Drive / Horton Road direction" },
      { point: 6,  text: "Horton Road canal section – tight bends, stay left" },
      { point: 10, text: "Speed limit drops – check signs, reduce speed early" },
      { point: 12, text: "Colnbrook area – rural roads, 40mph limit" },
      { point: 14, text: "Turn and return north" },
      { point: 20, text: "Rejoin main road heading north to test centre" },
      { point: 24, text: "Arrive test centre" }
    ]
  }
];

const CHECKLIST = [
  "Driving licence with you",
  "Theory test pass certificate",
  "Glasses / contact lenses (if needed)",
  "Arrived at least 10 minutes early",
  "Car is roadworthy and taxed",
  "Adjusted mirrors and seat position",
  "Seatbelt on",
  "Phone on silent and stowed safely",
  "Know the vehicle controls",
  "Calm breathing – you've got this"
];

const TIPS = [
  {
    icon: "🔄", title: "Roundabouts – Trading Estate",
    color: "#fef3c7",
    items: [
      "Signal LEFT as you pass the exit before yours",
      "Always check right before entering the roundabout",
      "Multi-lane roundabouts: choose your lane BEFORE reaching it",
      "Five Points Roundabout: count the exits before you get there",
      "Don't change lanes mid-roundabout – instant serious fault"
    ]
  },
  {
    icon: "🛣️", title: "M4 spur / dual carriageway",
    color: "#e8f0fe",
    items: [
      "Select lane 2 at the gantry for Uxbridge Road – don't dive from lane 3 to lane 1",
      "Hold 25mph when exiting and signal early off the spur",
      "Join at 60–70mph – don't creep onto fast roads",
      "A4 Bath Road: stay in left lane unless overtaking",
      "Check mirrors every 8–10 seconds on fast roads"
    ]
  },
  {
    icon: "🏘️", title: "Residential streets",
    color: "#def7ec",
    items: [
      "Default 20mph in residential zones and school areas",
      "Give parked cars a full door's width of space",
      "Watch for children between parked cars",
      "Pass cyclists with at least 1.5m clearance",
      "The Frithe / Knolton Way: tight turns, slow right down"
    ]
  },
  {
    icon: "🚶", title: "High Street & pedestrians",
    color: "#fde8e8",
    items: [
      "Bus lane on High Street – stays active, don't use it",
      "Pedestrian crossings: stop when light turns amber",
      "Salt Hill area: heavy foot traffic, expect stops",
      "Near Slough Station: taxis and pedestrians crossing randomly",
      "Give way to pedestrians already crossing when you turn"
    ]
  },
  {
    icon: "🌿", title: "Rural roads & Horton",
    color: "#f3e8ff",
    items: [
      "Horton Road canal bends: position left, slow before bend",
      "Speed limits change – check signs every few hundred metres",
      "Colnbrook area: 40mph limit, watch for cyclists",
      "Oncoming car on narrow road? Find a passing place",
      "Don't drift to 35mph between camera poles – common fault"
    ]
  },
  {
    icon: "🅿️", title: "Manoeuvres",
    color: "#fff7ed",
    items: [
      "Parallel park: within 2 car lengths, within 30cm of kerb",
      "Bay parking (forward and reverse): check both ways",
      "Pull up on the right, reverse 2 car lengths, rejoin",
      "Emergency stop: brake firmly and straight, don't pump",
      "Manoeuvre area at test centre: not for practice"
    ]
  },
  {
    icon: "🗺️", title: "Independent driving",
    color: "#f0fdf4",
    items: [
      "20 minutes of every test is independent driving",
      "You'll follow the examiner's sat nav or road signs",
      "Missing a turn is NOT a fault – just react calmly",
      "Queensmere Shopping Centre is a common destination",
      "Keep normal driving standards throughout – don't relax"
    ]
  },
  {
    icon: "✅", title: "Test day checklist",
    color: "#f9fafb",
    items: [
      "Arrive no more than 10 minutes before your slot",
      "No practice in the test centre car park",
      "You can ask the examiner to repeat any instruction",
      "One serious fault = fail. 15+ minors = fail",
      "If you think you've failed, keep driving – examiners are neutral"
    ]
  }
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let map = null, navMap = null;
let activeRoute = ROUTES[0];
let routeLayers = {}, markerLayers = {};
let gpsActive = false, gpsMarker = null, navGpsMarker = null;
let watchId = null, navWatchId = null;
let minorFaults = 0, seriousFaults = 0;
let checkedItems = new Set();
let currentSpeed = 0;

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  initMap();
  initRouteTabs();
  initPractice();
  initTips();
  selectRoute(ROUTES[0]);
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
});

// ─── MAP ──────────────────────────────────────────────────────────────────────
function initMap() {
  map = L.map('map', { center: TC, zoom: 14, zoomControl: false });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap', maxZoom: 19
  }).addTo(map);
  L.control.zoom({ position: 'topright' }).addTo(map);
  L.marker(TC, { icon: makeLabelIcon('Test Centre', '#1a56db') }).addTo(map);
}

function initRouteTabs() {
  const tabs = document.getElementById('route-tabs');
  ROUTES.forEach(r => {
    const btn = document.createElement('button');
    btn.className = 'route-tab' + (r.id === 1 ? ' active' : '');
    btn.textContent = 'R' + r.id;
    btn.title = r.name;
    btn.onclick = () => selectRoute(r);
    btn.id = 'tab-' + r.id;
    tabs.appendChild(btn);
  });
}

function selectRoute(route) {
  activeRoute = route;
  document.querySelectorAll('.route-tab').forEach(t => t.classList.remove('active'));
  const tab = document.getElementById('tab-' + route.id);
  if (tab) tab.classList.add('active');

  Object.values(routeLayers).forEach(l => map.removeLayer(l));
  Object.values(markerLayers).forEach(l => map.removeLayer(l));
  routeLayers = {}; markerLayers = {};

  const poly = L.polyline(route.waypoints, { color: route.color, weight: 5, opacity: 0.88 }).addTo(map);
  routeLayers[route.id] = poly;

  markerLayers['start'] = L.marker(route.waypoints[0], { icon: makeCircleIcon('S', route.color) }).addTo(map);
  markerLayers['end'] = L.marker(route.waypoints[route.waypoints.length - 1], { icon: makeCircleIcon('E', '#e53e3e') }).addTo(map);

  route.instructions.forEach((inst, i) => {
    const wp = route.waypoints[inst.point];
    if (!wp) return;
    const m = L.marker(wp, { icon: makeCircleIcon((i+1).toString(), '#555', 18) }).addTo(map);
    m.bindPopup('<strong>' + (i+1) + '. ' + inst.text + '</strong>');
    markerLayers['i'+i] = m;
  });

  map.fitBounds(poly.getBounds(), { padding: [50, 50] });

  document.getElementById('panel-route-name').textContent = route.name;
  document.getElementById('panel-route-meta').textContent =
    route.distance + ' · ' + route.duration + ' · ' + route.difficulty;
  document.getElementById('hazard-list').innerHTML =
    route.hazards.map(h => `<div class="hazard-tag">⚠ ${h}</div>`).join('');
}

function makeCircleIcon(label, color, size=26) {
  return L.divIcon({
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};color:#fff;font-size:${Math.floor(size*0.42)}px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.3)">${label}</div>`,
    className: '', iconAnchor: [size/2, size/2]
  });
}

function makeLabelIcon(text, color) {
  return L.divIcon({
    html: `<div style="background:${color};color:#fff;border-radius:6px;padding:3px 8px;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.3)">${text}</div>`,
    className: '', iconAnchor: [40, 10]
  });
}

// ─── GPS ──────────────────────────────────────────────────────────────────────
function toggleGPS() {
  gpsActive ? stopGPS() : startGPS();
}

function startGPS() {
  if (!navigator.geolocation) { alert('GPS not available.'); return; }
  gpsActive = true;
  document.getElementById('gps-btn').classList.add('active');
  const icon = L.divIcon({
    html: '<div style="width:16px;height:16px;border-radius:50%;background:#1a56db;border:3px solid #fff;box-shadow:0 0 0 4px rgba(26,86,219,0.3)"></div>',
    className: '', iconAnchor: [8,8]
  });
  watchId = navigator.geolocation.watchPosition(pos => {
    const ll = [pos.coords.latitude, pos.coords.longitude];
    if (!gpsMarker) { gpsMarker = L.marker(ll, { icon }).addTo(map); }
    else gpsMarker.setLatLng(ll);
    map.setView(ll, 16);
  }, () => {}, { enableHighAccuracy: true, maximumAge: 2000, timeout: 10000 });
}

function stopGPS() {
  gpsActive = false;
  document.getElementById('gps-btn').classList.remove('active');
  if (watchId) navigator.geolocation.clearWatch(watchId);
  if (gpsMarker) { map.removeLayer(gpsMarker); gpsMarker = null; }
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
let navRoutePoly = null;

function startNavigation() {
  if (navWatchId) { navigator.geolocation.clearWatch(navWatchId); navWatchId = null; }
  if (navMap) { navMap.remove(); navMap = null; navGpsMarker = null; }

  const overlay = document.getElementById('nav-overlay');
  overlay.style.display = 'flex';

  document.getElementById('nav-instruction').textContent =
    activeRoute.instructions[0]?.text || 'Follow the blue route';
  document.getElementById('nav-distance').textContent =
    activeRoute.distance + ' · ' + activeRoute.duration;

  // Build the map div with an explicit px height — avoids ALL flex/percent issues
  const mapDiv = document.getElementById('nav-map');
  const totalH = window.screen.height;
  mapDiv.style.cssText = 'width:100%;height:' + totalH + 'px;display:block;';

  // Wait two frames so the overlay is fully painted before Leaflet touches the DOM
  requestAnimationFrame(() => requestAnimationFrame(() => {
    navMap = L.map('nav-map', {
      center: activeRoute.waypoints[0],
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
      preferCanvas: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      keepBuffer: 4
    }).addTo(navMap);

    // Route polyline
    navRoutePoly = L.polyline(activeRoute.waypoints, {
      color: '#3b82f6', weight: 8, opacity: 0.95
    }).addTo(navMap);

    L.marker(activeRoute.waypoints[0], { icon: makeCircleIcon('S','#16a34a',28) }).addTo(navMap);
    L.marker(activeRoute.waypoints[activeRoute.waypoints.length-1], { icon: makeCircleIcon('E','#dc2626',28) }).addTo(navMap);

    navMap.fitBounds(navRoutePoly.getBounds(), { padding: [50,50] });

    // invalidateSize after tiles have had a chance to load
    setTimeout(() => { if (navMap) navMap.invalidateSize(true); }, 500);
    setTimeout(() => { if (navMap) navMap.invalidateSize(true); }, 1200);

    const posIcon = L.divIcon({
      html: '<div style="width:24px;height:24px;border-radius:50%;background:#2563eb;border:4px solid #fff;box-shadow:0 0 0 6px rgba(37,99,235,0.3)"></div>',
      className: '', iconAnchor: [12,12]
    });

    if (navigator.geolocation) {
      navWatchId = navigator.geolocation.watchPosition(pos => {
        const ll = [pos.coords.latitude, pos.coords.longitude];
        currentSpeed = pos.coords.speed ? Math.round(pos.coords.speed * 2.237) : 0;
        document.getElementById('nav-speed').innerHTML = currentSpeed + ' <span>mph</span>';
        if (!navGpsMarker) { navGpsMarker = L.marker(ll, { icon: posIcon }).addTo(navMap); }
        else { navGpsMarker.setLatLng(ll); }
        navMap.setView(ll, 17, { animate: true, duration: 0.5 });
        updateNavInstruction(ll);
      }, err => {
        console.warn('GPS:', err.code, err.message);
        document.getElementById('nav-distance').textContent = 'No GPS – showing full route · ' + activeRoute.distance;
      }, { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 });
    }
  }));
}

function updateNavInstruction(userLL) {
  let closest = { dist: Infinity, index: 0 };
  activeRoute.waypoints.forEach((wp, i) => {
    const d = Math.hypot(userLL[0]-wp[0], userLL[1]-wp[1]);
    if (d < closest.dist) { closest.dist = d; closest.index = i; }
  });
  const next = activeRoute.instructions.find(inst => inst.point > closest.index);
  if (next) {
    document.getElementById('nav-instruction').textContent = next.text;
    const wp = activeRoute.waypoints[next.point];
    if (wp) {
      const m = Math.round(Math.hypot(userLL[0]-wp[0], userLL[1]-wp[1]) * 111320);
      document.getElementById('nav-distance').textContent =
        'In ' + (m < 100 ? m + 'm' : (Math.round(m/100)/10).toFixed(1) + 'km');
    }
  }
}

function stopNavigation() {
  document.getElementById('nav-overlay').style.display = 'none';
  if (navWatchId) { navigator.geolocation.clearWatch(navWatchId); navWatchId = null; }
  if (navMap) { navMap.remove(); navMap = null; navGpsMarker = null; navRoutePoly = null; }
}

// ─── SCREENS ──────────────────────────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  if (name === 'map') setTimeout(() => map && map.invalidateSize(), 50);
}

// ─── PRACTICE ─────────────────────────────────────────────────────────────────
function initPractice() {
  const list = document.getElementById('checklist');
  CHECKLIST.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'checklist-item';
    div.innerHTML = `<div class="check-box" id="chk-${i}"><span class="check-tick">✓</span></div><div class="check-label">${item}</div>`;
    div.onclick = () => toggleCheck(i);
    list.appendChild(div);
  });
}

function toggleCheck(i) {
  const box = document.getElementById('chk-' + i);
  if (checkedItems.has(i)) { checkedItems.delete(i); box.classList.remove('checked'); }
  else { checkedItems.add(i); box.classList.add('checked'); }
}

function addFault(type) {
  if (type === 'minor') minorFaults++;
  else seriousFaults++;
  updateFaultDisplay();
}

function removeFault(type) {
  if (type === 'minor' && minorFaults > 0) minorFaults--;
  else if (type === 'serious' && seriousFaults > 0) seriousFaults--;
  updateFaultDisplay();
}

function updateFaultDisplay() {
  document.getElementById('minor-count').textContent = minorFaults;
  document.getElementById('serious-count').textContent = seriousFaults;
  const pct = Math.min((minorFaults / 15) * 100, 100);
  const bar = document.getElementById('minor-bar');
  bar.style.width = pct + '%';
  bar.style.background = minorFaults < 10 ? '#1a56db' : minorFaults < 15 ? '#d97706' : '#dc2626';
  const card = document.getElementById('result-card');
  const icon = document.getElementById('result-icon');
  const text = document.getElementById('result-text');
  const sub = document.getElementById('result-sub');
  if (seriousFaults > 0) {
    card.style.display='block'; card.className='result-card fail';
    icon.textContent='✗'; text.textContent='Test failed'; text.style.color='#c81e1e';
    sub.textContent = seriousFaults + ' serious/dangerous fault' + (seriousFaults>1?'s':'');
  } else if (minorFaults >= 15) {
    card.style.display='block'; card.className='result-card fail';
    icon.textContent='✗'; text.textContent='Test failed'; text.style.color='#c81e1e';
    sub.textContent='15+ minor faults – too many minors';
  } else if (minorFaults > 0) {
    card.style.display='block'; card.className='result-card';
    icon.textContent='✓'; text.textContent='Passed!'; text.style.color='#057a55';
    sub.textContent = minorFaults + ' minor fault' + (minorFaults!==1?'s':'') + ' – within limit';
  } else {
    card.style.display='none';
  }
}

function resetFaults() {
  minorFaults=0; seriousFaults=0;
  document.getElementById('result-card').style.display='none';
  updateFaultDisplay();
}

// ─── TIPS ─────────────────────────────────────────────────────────────────────
function initTips() {
  const container = document.getElementById('tips-content');
  TIPS.forEach((tip, i) => {
    const div = document.createElement('div');
    div.className = 'tip-section';
    div.id = 'tip-' + i;
    div.innerHTML = `
      <div class="tip-header" onclick="toggleTip(${i})">
        <div class="tip-icon" style="background:${tip.color}">${tip.icon}</div>
        <div class="tip-header-text">${tip.title}</div>
        <div class="tip-chevron">▾</div>
      </div>
      <div class="tip-body">${tip.items.map(item=>`<div class="tip-item"><span class="tip-bullet">→</span><span>${item}</span></div>`).join('')}</div>`;
    container.appendChild(div);
  });
}

function toggleTip(i) { document.getElementById('tip-'+i).classList.toggle('open'); }
