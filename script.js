const asset = (name) => `assets/references/${name}`;

const moodImages = [
  {
    src: asset("elevation-5.jpg"),
    caption: "Fluid premium elevation with dramatic car arrival.",
  },
  {
    src: asset("house-entrance-with-porte-cochere-7.jpg"),
    caption: "Large covered drop-off with strong lighting and scale.",
  },
  {
    src: asset("living-room.jpg"),
    caption: "Warm double-height living, open kitchen and broad glazing.",
  },
  {
    src: asset("kitchen-dry-2.jpg"),
    caption: "Open dry kitchen with height, ventilation and refined materials.",
  },
];

const snapshots = [
  {
    number: "01",
    title: "Mixed-use planning",
    body: "Supermarket frontage must be visible and practical, while the family entrance remains private, secure and premium.",
  },
  {
    number: "02",
    title: "Vertical movement",
    body: "Lift and staircase must connect basement, ground, residence floors and terrace with clear lobby planning.",
  },
  {
    number: "03",
    title: "Luxury daily use",
    body: "High ventilation, generous seating, storage, smart automation and low-maintenance finishes are core priorities.",
  },
  {
    number: "04",
    title: "Services ready",
    body: "Biometric access, solar, inverter, server room, pressure pump, water softener and cleaning systems need early coordination.",
  },
];

const elevationControls = [
  {
    title: "Unique elevation",
    body: "Builder and architect must not copy a standard facade. Elevation should be custom to the plot, mixed-use frontage, privacy needs and family identity.",
  },
  {
    title: "Pattern language",
    body: "Facade pattern, balcony bands, fins, lighting lines, glass rhythm and garden edges must follow one consistent design system.",
  },
  {
    title: "Theme management",
    body: "Exterior, entrance, reception, living, bedrooms and service zones must have approved theme boards before material purchase.",
  },
  {
    title: "Material palette",
    body: "Stone, tile, glass, metal, timber finish, paint and lighting color samples must be submitted for owner approval before execution.",
  },
  {
    title: "2D + 3D proof",
    body: "Provide 2D plans, 3D elevation, room views, service drawings and detailed sketches for custom joinery, pooja, closets and kitchens.",
  },
  {
    title: "Variation control",
    body: "Any elevation, material or pattern change after approval must include cost impact, quality impact and timeline impact before work proceeds.",
  },
];

const budgetItems = [
  {
    title: "Exact quote before start",
    body: "Builder must submit a line-item quotation with quantity, unit rate, brand/grade, labor, taxes, transport, exclusions and validity period before work starts.",
  },
  {
    title: "Budget planning",
    body: "Provide budget split for civil, structure, MEP, lift, interiors, furniture, automation, supermarket fit-out, landscaping, terrace services and contingencies.",
  },
  {
    title: "Furniture cost included",
    body: "Built-in furniture, loose furniture, wardrobes, sofas, beds, dining table, office furniture, outdoor seating, supermarket fixtures, hardware, delivery and installation must be quoted and included in the total cost plan.",
  },
  {
    title: "Stage-wise payment",
    body: "Payment schedule must be linked to measurable stages: drawings, excavation/basement, structure, MEP rough-in, waterproofing, finishes, interiors and handover.",
  },
  {
    title: "Material schedule",
    body: "Before procurement, share material specification sheets, samples, warranty details, alternate options and quality grade for every major finish.",
  },
  {
    title: "Quality checkpoints",
    body: "Inspection checkpoints required for concrete, waterproofing, plumbing pressure test, electrical load test, lift safety, CCTV, automation and final snag list.",
  },
  {
    title: "Cost variation approval",
    body: "No extra work, furniture upgrade or material change should proceed without written variation quote, reason, photos/drawings, timeline impact and owner approval.",
  },
];

const experienceSteps = [
  {
    title: "Street Frontage",
    body: "Supermarket, frontage parking, commercial visibility and clean public access.",
  },
  {
    title: "Private Arrival",
    body: "Automatic gate, CCTV, garden, porte cochere and sheltered home entry.",
  },
  {
    title: "Basement Core",
    body: "Car parking, pressure wash, maintenance store and lift/stair access.",
  },
  {
    title: "Family Floors",
    body: "Living, bedrooms, kitchens, pooja, storage, bathrooms and automation.",
  },
  {
    title: "Service Terrace",
    body: "Laundry, office, rooftop seating, solar, pumps and water softener.",
  },
];

const floorSections = [
  {
    kicker: "Ground Floor",
    title: "Commercial frontage and private house arrival",
    summary:
      "The ground floor should balance a visible supermarket frontage with a premium, private and secure home entrance.",
    builderFocus: "Separate public supermarket movement from private family entry and vehicle movement.",
    coordination: "Confirm gate width, driveway turning, lift lobby, supermarket loading and hidden washroom position.",
    hero: asset("house-entrance-with-porte-cochere-4.jpg"),
    heroAlt: "Covered entrance and porte cochere reference",
    heroCaption: "Ground floor arrival language: broad, sheltered, premium and easy for vehicles.",
    requirements: [
      "Supermarket at frontage with dedicated storage area and frontage parking.",
      "Private main entrance for the house, clearly separated from the supermarket flow.",
      "Automatic larger size main gate with remote access.",
      "Biometric access control for private entry and selected internal access points.",
      "Video door phone with networking provision.",
      "CCTV coverage at entrance, gate, frontage and circulation points.",
      "Garden feature and good-looking entrance flooring with a large porte cochere feel.",
      "Driveway/ramp connection leading to basement car parking.",
      "Maintain open space around the house wherever possible for ventilation.",
      "Perfect architectural elevation with broad entrance and strong first impression.",
      "Shoe and umbrella storage near the private entry.",
      "Lift and staircase core from basement upward.",
      "Washroom must not be directly visible from the reception or entrance.",
      "Minimal cozy reception/waiting space for sitting and wearing footwear.",
      "Key cabinet and utility storage near the entry/service zone.",
    ],
    references: [
      ["super-market-design.jpg", "Supermarket display and lighting"],
      ["super-market-design-2.jpg", "Supermarket category signage"],
      ["super-market-design-3.jpg", "Supermarket product island"],
      ["minimal-cozy-reception.jpg", "Reception waiting sofa"],
      ["minimal-cozy-reception-2.jpg", "Soft seating corner"],
      ["minimal-cozy-reception-3.jpg", "Curved waiting bench"],
      ["minimal-cozy-reception-4.jpg", "Reception counter mood"],
      ["shoe-and-umbralla-cabinet.jpg", "Shoe and umbrella cabinet"],
      ["key-cabinet.jpg", "Key cabinet"],
      ["lift-and-steps.jpg", "Lift and stair lobby"],
      ["lift-and-steps-2.jpg", "Lift and staircase compact option"],
      ["lift-and-steps-3.jpg", "Lift and stair core"],
      ["try-to-accomidate-if-needed.jpg", "Concealed corridor/washroom idea"],
      ["try-to-accomidate-if-needed-1.jpg", "Concealed corridor option"],
    ],
  },
  {
    kicker: "Basement",
    title: "Parking, wash bay, storage and vertical access",
    summary:
      "The basement should be functional, well-lit and maintainable, with safe movement from parking to the house core.",
    builderFocus: "Create durable, ventilated, easy-clean parking with safe access to the home core.",
    coordination: "Confirm ramp slope, drainage falls, pressure wash waterproofing, exhaust ventilation and ceiling clear height.",
    hero: asset("basement-car-parking.jpg"),
    heroAlt: "Basement car parking reference",
    heroCaption: "Premium basement parking with clear lighting and durable floor finish.",
    requirements: [
      "Basement car parking with sufficient turning and circulation space.",
      "Pressure washing zone in the basement parking area with drainage and washable finishes.",
      "Direct basement to ground floor staircase and lift access.",
      "Basement storage room for maintenance items and tools.",
      "Small seating arrangement in basement parking, if space permits.",
      "Durable flooring, ventilation, lighting, safety signage and CCTV to be coordinated.",
    ],
    references: [
      ["basement-car-parking-2.jpg", "Parking with seating view"],
      ["basement-car-parking-to-ground-floor-starecase-and-also-lift-needed.jpg", "Stair/lift access from basement"],
      ["pressure-washing-in-basement-car-parking.jpg", "Pressure washing bay"],
      ["storage-room-near-kitchen.jpg", "Maintenance store shelving"],
    ],
  },
  {
    kicker: "First Floor",
    title: "Main family living, kitchen, pooja and optional bedroom",
    summary:
      "The first floor should feel open and premium, with high ceiling living, dining, kitchens, storage and smart home systems.",
    builderFocus: "Make the main family floor feel broad, bright and luxurious while protecting storage and service practicality.",
    coordination: "Confirm structural feasibility for high ceiling, AV routing, kitchen exhaust, pooja ventilation and curtain automation.",
    hero: asset("living-room.jpg"),
    heroAlt: "High ceiling living room reference",
    heroCaption: "Main living room: large sofa, high ceiling feeling, ventilation and open family zone.",
    requirements: [
      "Living room with high ceiling, larger sofa and smaller side seating area.",
      "Larger ventilation and broad glazing wherever structure allows.",
      "100 inch TV unit with clean wall integration.",
      "Centralized sound system that can serve all floors and also be isolated by floor/zone.",
      "Robot cleaning provision with concealed charging/docking point.",
      "Dry kitchen and wet kitchen, planned separately for daily cooking and entertaining.",
      "Storage room near kitchen for pantry and household supplies.",
      "Bedroom if space permits: sofa seater, reading table, medical storage, general storage, TV unit and sound system.",
      "Dressing room/walk-in closet with ironing table and dirty clothes basket.",
      "Large bathroom with vanity area and toilet accessible from the bathroom.",
      "Pooja room with premium white marble/home temple direction.",
      "Automatic curtains for main glazed areas.",
      "Full home automation with Android/Alexa integration.",
      "If the first-floor bedroom cannot be accommodated, move it to second floor planning.",
    ],
    references: [
      ["full-view.png", "Grand living atmosphere"],
      ["staircase.jpg", "Feature staircase/light ceiling"],
      ["dinning-area.jpg", "Formal dining option"],
      ["dinnaing-area.jpg", "Dining and double-height glazing"],
      ["kitchen-dry.jpg", "Dry kitchen option"],
      ["kitchen-dry-2.jpg", "Dry kitchen with dining"],
      ["wet-kitchen.jpg", "Wet kitchen option"],
      ["storage-room-near-kitchen-2.jpg", "Kitchen storage/laundry style"],
      ["storage-room-near-kitchen-3.jpg", "Pantry storage"],
      ["robot-cleaning-mc.jpg", "Robot cleaner docking"],
      ["bedroom-1.jpg", "Bedroom option"],
      ["beed-room-2.jpg", "Bedroom lounge option"],
      ["contemporary-walk-in-closet.jpg", "Walk-in closet"],
      ["dress-ironing-and-dirty-clothes-basket-in-walk-in-closet.jpg", "Ironing and laundry basket"],
      ["bathroom-1.jpg", "Large bathroom option"],
      ["bathroom-2.jpg", "Vanity and bath option"],
      ["bathroom-3.jpg", "Bathroom with vanity and tub"],
      ["toilet.jpg", "Toilet reference"],
      ["pooja-room-2.png", "Pooja room warm marble option"],
      ["white-marble-home-temple.jpg", "White marble home temple"],
      ["pooja-room.png", "Marble temple detail"],
    ],
  },
  {
    kicker: "Second Floor",
    title: "Two bedroom suites, coffee station and floor storage",
    summary:
      "The second floor should support two comfortable bedroom suites with repeatable storage, bathroom and automation standards.",
    builderFocus: "Deliver two complete bedroom suites with storage, privacy, bathroom comfort and everyday convenience.",
    coordination: "Confirm plumbing stacks, wardrobe depth, coffee station water/power, curtain motor pockets and cleaning store location.",
    hero: asset("contemporary-walk-in-closet-3.jpg"),
    heroAlt: "Contemporary walk-in closet reference",
    heroCaption: "Bedroom suite direction: walk-in closet, vanity, seating and integrated storage.",
    requirements: [
      "Two bedrooms with sofa seater, reading table, medical storage, general storage, TV unit and sound system.",
      "Each bedroom to include dressing room or walk-in closet with ironing table and dirty clothes basket where possible.",
      "Large bathroom with vanity area for each suite.",
      "Toilet accessible from bathroom and planned for privacy.",
      "Automatic curtains and Android/Alexa smart home integration.",
      "Second floor coffee station with concealed storage and appliance provision.",
      "Cleaning material storage area on the floor for practical maintenance.",
    ],
    references: [
      ["bedroom-1.jpg", "Bedroom suite one"],
      ["beed-room-2.jpg", "Bedroom suite two"],
      ["contemporary-walk-in-closet-2.jpg", "Long walk-in closet"],
      ["contemporary-walk-in-closet-4.jpg", "Dressing vanity"],
      ["contemporary-walk-in-closet.jpg", "Wardrobe lighting"],
      ["dress-ironing-and-dirty-clothes-basket-in-walk-in-closet.jpg", "Ironing and clothes basket"],
      ["bathroom-1.jpg", "Bathroom suite"],
      ["bathroom-2.jpg", "Large vanity bathroom"],
      ["toilet.jpg", "Toilet detail"],
      ["2nd-floor-coffee-station.jpg", "Coffee station option"],
      ["2nd-floor-coffee-station-2.jpg", "Coffee station wall unit"],
      ["each-floor-cleaning-material-storage-area.jpg", "Cleaning storage"],
    ],
  },
  {
    kicker: "Third Floor / Half Terrace",
    title: "Laundry, office, rooftop living and service room",
    summary:
      "The upper level should combine practical household services with a refined rooftop lifestyle area.",
    builderFocus: "Combine laundry, office and rooftop seating without making services visible or difficult to maintain.",
    coordination: "Confirm drainage, waterproofing, server cooling, inverter ventilation, roof access and weather protection.",
    hero: asset("roof-top-1.jpg"),
    heroAlt: "Rooftop seating reference",
    heroCaption: "Rooftop seating with low maintenance finishes and planting.",
    requirements: [
      "Washing area with washing machines, sink, storage and natural light.",
      "Rooftop seating area with weather-suitable furniture and planting.",
      "Office room with clean work setup, good daylight and privacy.",
      "Server room with inverter, solar inverter and network rack location.",
      "Provide safe access, waterproofing, drainage and service routes.",
    ],
    references: [
      ["washing-area.jpg", "Washing area"],
      ["roof-top.jpg", "Covered rooftop seating"],
      ["roof-top-1.jpg", "Open rooftop seating"],
      ["office-room.jpg", "Office room"],
    ],
  },
  {
    kicker: "Terrace",
    title: "Solar, water and pressure systems",
    summary:
      "The terrace must be planned as a service-ready zone without compromising waterproofing or future maintenance access.",
    builderFocus: "Keep the terrace serviceable, safe and waterproofed while preserving usable open space.",
    coordination: "Confirm solar orientation, pump noise control, water softener bypasses, tank position and maintenance walkways.",
    hero: asset("roof-top.jpg"),
    heroAlt: "Terrace seating and covered service-friendly roof reference",
    heroCaption: "Terrace zones should balance amenity, waterproofing and service access.",
    requirements: [
      "Solar panel installation zone with proper orientation and maintenance pathway.",
      "Pressure pump location with acoustic and vibration consideration.",
      "Water softener location and plumbing bypass access.",
      "Coordinate overhead water tank, drainage, waterproofing and electrical safety.",
    ],
    references: [
      ["roof-top.jpg", "Terrace circulation"],
      ["roof-top-1.jpg", "Terrace seating"],
      ["washing-area.jpg", "Service area quality benchmark"],
    ],
  },
];

const systems = [
  {
    title: "Security and Access",
    body: "Automatic main gate, remote access, biometric access, video door phone, CCTV at gate/frontage/basement/lift lobby and networked monitoring.",
  },
  {
    title: "Biometric Control",
    body: "Fingerprint/face access for main private entry, lift lobby or server room where required, with manual override and secure power backup.",
  },
  {
    title: "Lift and Stair Core",
    body: "Continuous basement-to-upper-floor movement with safe stair width, lift lobby planning, lighting and emergency access.",
  },
  {
    title: "Smart Home",
    body: "Android/Alexa ready automation for curtains, selected lighting, AV scenes, cameras and other compatible systems.",
  },
  {
    title: "Audio and AV",
    body: "Centralized sound system with all-floor control and independent isolation by floor or zone, plus 100 inch TV provision.",
  },
  {
    title: "Cleaning and Maintenance",
    body: "Robot cleaner docks, floor-wise cleaning storage, basement pressure wash bay, drainage and maintenance store.",
  },
  {
    title: "Power, Solar and Network",
    body: "Server room, inverter, solar inverter, solar panels, pressure pump, water softener and structured cabling coordination.",
  },
];

const coordinationCards = [
  {
    title: "Architect / Structure",
    body: "Items to resolve before final drawings and elevation freeze.",
    points: ["Plot dimension verification", "Setbacks and road access", "Ramp and basement feasibility", "Lift and stair core sizing"],
  },
  {
    title: "MEP / Services",
    body: "Systems that need early routing so interiors stay clean.",
    points: ["Drainage and waterproofing", "Kitchen exhaust and fresh air", "Solar and inverter routes", "Pressure pump and water softener"],
  },
  {
    title: "Interior / Joinery",
    body: "Built-in items that should be planned before civil completion.",
    points: ["Shoe and umbrella cabinet", "Walk-in closet and ironing", "Kitchen and pantry storage", "Coffee and cleaning stations"],
  },
  {
    title: "Automation / Network",
    body: "Technology scope to coordinate with electrical and false ceiling.",
    points: ["Video door phone and CCTV", "Biometric access control", "Centralized audio zones", "Curtain automation", "Server rack and access points"],
  },
];

const galleryItems = floorSections.flatMap((section) =>
  section.references.map(([file, caption]) => ({
    src: asset(file),
    caption,
    category: categoryForSection(section.kicker),
  })),
);

galleryItems.unshift(
  {
    src: asset("house-size.jpg"),
    caption: "House size and road frontage reference",
    category: "exterior",
  },
  {
    src: asset("elevation.jpg"),
    caption: "Mixed-use elevation with commercial frontage",
    category: "exterior",
  },
  {
    src: asset("elevation-2.jpg"),
    caption: "Layered green elevation option",
    category: "exterior",
  },
  {
    src: asset("elevation-3.jpg"),
    caption: "Organic facade language",
    category: "exterior",
  },
  {
    src: asset("elevation-5.jpg"),
    caption: "Premium curved house elevation",
    category: "exterior",
  },
  {
    src: asset("elevation-6.jpg"),
    caption: "Luxury multi-level facade",
    category: "exterior",
  },
  {
    src: asset("house-entrance-with-porte-cochere.jpg"),
    caption: "Classic large approach and garden entry",
    category: "ground",
  },
  {
    src: asset("house-entrance-with-porte-cochere-2.jpg"),
    caption: "Warm covered entrance option",
    category: "ground",
  },
  {
    src: asset("house-entrance-with-porte-cochere-3.jpg"),
    caption: "Luxury covered driveway scale",
    category: "ground",
  },
  {
    src: asset("house-entrance-with-porte-cochere-5.jpg"),
    caption: "Hotel-style porte cochere arrival",
    category: "ground",
  },
  {
    src: asset("house-entrance-with-porte-cochere-6.jpg"),
    caption: "Commercial frontage entry scale",
    category: "ground",
  },
  {
    src: asset("house-entrance-with-porte-cochere-7.jpg"),
    caption: "Large covered entrance lighting",
    category: "ground",
  },
);

const imageVisionDetails = {
  "2nd-floor-coffee-station-2.jpg":
    "Use this as a clean concealed refreshment wall for the second floor. The matte cabinet faces, linear warm lighting and floating counter should make the coffee zone feel premium without becoming visually heavy.",
  "2nd-floor-coffee-station.jpg":
    "This image shows how the coffee station can become a small luxury pause point between bedrooms. The builder should plan water, power, appliance ventilation and hidden storage so the counter stays uncluttered.",
  "basement-car-parking-2.jpg":
    "This reference adds a small lounge feeling to the basement rather than making it only a parking area. The vision is a broad, ventilated basement with clean matte flooring, warm lighting and a comfortable waiting corner if space permits.",
  "basement-car-parking-to-ground-floor-starecase-and-also-lift-needed.jpg":
    "This image explains the basement-to-house connection clearly: parking must lead to a safe stair and lift core. The materials should feel durable and calm, with bright wall surfaces, anti-slip steps and lighting that makes movement safe.",
  "basement-car-parking.jpg":
    "Use this for the parking mood: organized bays, strong ceiling lighting and a premium matte floor. The builder should keep column positions, turning radius, ventilation and camera coverage practical from the beginning.",
  "bathroom-1.jpg":
    "This bathroom reference supports a quiet spa-like layout with natural light and a broad, uncluttered vanity wall. Matte stone surfaces, concealed niches and soft lighting should make the space feel calm and expensive.",
  "bathroom-2.jpg":
    "This image shows a larger bathroom with vanity, bath and shower areas separated without feeling cramped. The target is warm matte texture, indirect light, good drainage and a private toilet connection from the bathroom.",
  "bathroom-3.jpg":
    "This reference is useful for a long luxury vanity with natural light and a bathtub zone. It should guide the builder to provide broad circulation, hidden storage, waterproofing and a premium hotel-style finish.",
  "bedroom-1.jpg":
    "This bedroom image captures natural light, broad glazing and a peaceful matte material palette. The bedroom should include calm seating, storage, reading area, TV/audio provision and good curtain automation.",
  "beed-room-2.jpg":
    "This reference shows the bigger-suite feeling: bed, sofa seating and large view in one room. The vision is a high, airy bedroom that feels like a private retreat, not a compact room with furniture squeezed in.",
  "contemporary-walk-in-closet-2.jpg":
    "This long walk-in closet reference shows a clean corridor of storage with a vanity focus at the end. The builder should protect wardrobe depth, lighting, ventilation and a comfortable dressing bench.",
  "contemporary-walk-in-closet-3.jpg":
    "This image is the strongest walk-in closet direction: broad central island, glass-front wardrobes and soft lighting. Use matte laminates, warm internal lights and enough clearance around the island.",
  "contemporary-walk-in-closet-4.jpg":
    "This dressing room explains the vanity requirement with natural filtered light and a calm makeup table. The mood should be matte, organized and soft, with hidden wiring for dryer, mirror light and grooming appliances.",
  "contemporary-walk-in-closet.jpg":
    "This closet reference shows vertical storage, display lighting and a soft luxury palette. It supports the requirement for a dressing room that feels rich but practical for daily use.",
  "dinnaing-area.jpg":
    "This dining reference highlights the need for height, broad glass and natural light. The dining area should feel connected to the main living volume, using matte marble/stone flooring and warm ceiling lighting.",
  "dinning-area.jpg":
    "This image shows a formal dining table with a dramatic light feature and high vertical space. The builder should coordinate chandelier height, slab opening, glazing and flooring so the dining space feels grand.",
  "dress-ironing-and-dirty-clothes-basket-in-walk-in-closet.jpg":
    "This is the practical detail for the walk-in closet: fold-out ironing and hidden dirty-clothes basket. It should be built into joinery before installation so laundry handling stays invisible and convenient.",
  "each-floor-cleaning-material-storage-area.jpg":
    "This image explains why each floor needs a dedicated cleaning storage cabinet. It should hide mops, bottles and utility tools in a matte cabinet with ventilation and easy access near service areas.",
  "elevation-2.jpg":
    "This elevation shows layered balconies, planting and a soft organic facade. It should inspire a unique facade pattern with greenery, shade and broad horizontal bands rather than a flat box.",
  "elevation-3.jpg":
    "This image supports the idea of a custom sculptural facade. The final elevation should feel unique to Pavithran's house, using smooth forms, glass and matte exterior surfaces with strong identity.",
  "elevation-5.jpg":
    "This is a key inspiration for a bold premium arrival, with sweeping forms and a car-focused entrance. The builder and architect should use it as a direction for uniqueness, not as a direct copy.",
  "elevation-6.jpg":
    "This reference shows a multi-level luxury facade with horizontal movement, glass and dramatic lighting. The final house should use a controlled pattern language so every floor feels connected in one theme.",
  "elevation.jpg":
    "This image is useful because it combines commercial frontage with a large building presence. It supports the idea that the supermarket frontage and private residence must look planned together.",
  "full-view.png":
    "This interior reference shows the drama of a grand living space with high ceiling, chandelier and glossy reflection. For Pavithran's home, translate the scale and lighting into a calmer matte luxury finish.",
  "house-entrance-with-porte-cochere-2.jpg":
    "This porte cochere reference is warm and grounded, with columns and sheltered seating. It helps explain the need for a broad, weather-protected entrance that still feels private and premium.",
  "house-entrance-with-porte-cochere-3.jpg":
    "This image shows a long luxury arrival corridor with car drop-off. It supports the vision for a broader entrance where vehicles, guests and the private lobby are handled cleanly.",
  "house-entrance-with-porte-cochere-4.jpg":
    "This is a strong entrance mood reference: matte wall surfaces, warm ceiling, glass frontage and a protected arrival path. The private home entrance should use this kind of calm, rich language.",
  "house-entrance-with-porte-cochere-5.jpg":
    "This image is about scale and night-time arrival. The builder should plan exterior lighting, column placement, driveway curve and CCTV without disturbing the premium look.",
  "house-entrance-with-porte-cochere-6.jpg":
    "This reference shows a commercial-grade frontage and broad approach. It is useful for thinking about the supermarket edge and how the building meets the road.",
  "house-entrance-with-porte-cochere-7.jpg":
    "This image shows the large canopy feeling you want at the entrance. The ceiling lighting, drop-off width and architectural scale should make arrival feel important.",
  "house-entrance-with-porte-cochere.jpg":
    "This reference gives a classic broad driveway and garden arrival mood. Use it for the idea of layered landscaping, clear gate-to-entry movement and a welcoming approach.",
  "house-size.jpg":
    "This image is the site-planning reference and must be checked by the architect before design freeze. It should drive parking, road approach, frontage width, setback, ramp and ventilation decisions.",
  "key-cabinet.jpg":
    "This image explains a small but important daily detail: keys should be concealed, organized and close to the entry. It should be integrated with the shoe/umbrella or reception storage.",
  "kitchen-dry-2.jpg":
    "This dry kitchen reference gives the right feeling for natural light, high space and connection to dining. Matte cabinetry, stone island and open volume should make the kitchen feel premium.",
  "kitchen-dry.jpg":
    "This image shows a brighter, more urban dry kitchen with tall glazing. It supports a clean entertainment kitchen with broad counters, hidden appliances and good family visibility.",
  "lift-and-steps-2.jpg":
    "This compact lift and stair reference shows how vertical movement can be elegant even in a tight zone. The builder should coordinate lift door finish, stair lighting and lobby width.",
  "lift-and-steps-3.jpg":
    "This image shows a richer lift-and-stair lobby with polished floor and warm step lighting. The core should feel like a design feature, not a leftover service corner.",
  "lift-and-steps.jpg":
    "This lift reference supports a broad, clean central core connected to living spaces. It should be planned from basement to terrace with consistent matte finishes and good lighting.",
  "living-room.jpg":
    "This living room captures the main vision: natural light, high ceiling, broad seating and calm matte materials. The final space should feel open, airy and easy for family gatherings.",
  "minimal-cozy-reception-2.jpg":
    "This reception image is a soft waiting corner for wearing footwear or receiving guests. The curved seating and matte walls should keep the entrance warm and calm.",
  "minimal-cozy-reception-3.jpg":
    "This curved bench reference explains the waiting area clearly. Use concealed lighting, rounded forms and washable matte finishes so the reception is beautiful and practical.",
  "minimal-cozy-reception-4.jpg":
    "This image shows a premium reception counter mood with curved wall and soft lighting. It is useful if the entry needs a more formal waiting or greeting point.",
  "minimal-cozy-reception.jpg":
    "This reception image shows a quiet, premium sofa zone with a feature wall. It should guide the entrance waiting area to feel cozy without becoming crowded.",
  "office-room.jpg":
    "This office reference is clean, bright and professional. It supports a quiet upper-floor work room with daylight, glass, storage, network points and a calm matte finish.",
  "pooja-room-2.png":
    "This pooja room gives a warm marble temple direction with soft lighting and devotional focus. The final design should be serene, well-ventilated and easy to clean.",
  "pooja-room.png":
    "This temple reference shows detailed white marble carving. It is useful for craftsmanship expectations, but the final design should remove visible branding and be customized to the home.",
  "pressure-washing-in-basement-car-parking.jpg":
    "This image explains the basement pressure washing bay requirement. The builder must plan drainage, waterproof wall finish, hose points, pressure equipment and safe non-slip flooring.",
  "robot-cleaning-mc.jpg":
    "This reference shows how robot cleaning should be hidden into cabinetry. Each floor should have a practical charging/docking place where the machine is accessible but not visually exposed.",
  "roof-top-1.jpg":
    "This rooftop reference supports an open seating area with soft outdoor furniture and planting. The terrace should feel calm, matte and low-maintenance, with drainage handled properly.",
  "roof-top.jpg":
    "This image shows a covered outdoor terrace with clean flooring and garden edge. It should guide weather protection, evening lighting, seating and a broad walking path.",
  "shoe-and-umbralla-cabinet.jpg":
    "This image explains the need for hidden shoe and umbrella storage near entry. The final cabinet should be taller, cleaner and matte, with ventilation and easy daily access.",
  "staircase.jpg":
    "This staircase reference shows how stairs can become a dramatic feature with lighting and height. Use it as inspiration for a broad, premium stair experience where structure allows.",
  "storage-room-near-kitchen-2.jpg":
    "This storage/laundry image shows clean shelves and baskets. It supports a practical storage room near the kitchen with organized zones for household items.",
  "storage-room-near-kitchen-3.jpg":
    "This pantry reference explains how food storage should be visible, organized and easy to reach. Use shelves, labeled containers and good lighting so the kitchen stays clutter-free.",
  "storage-room-near-kitchen.jpg":
    "This image shows a tougher maintenance-style store with open shelving. It is suitable for basement or utility storage where durability matters more than decoration.",
  "super-market-design-2.jpg":
    "This supermarket image explains category signage and customer navigation. The frontage shop should use clear departments, lighting and organized shelving, while keeping house entry separate.",
  "super-market-design-3.jpg":
    "This reference shows a premium product island and branded vertical feature. It supports a supermarket design that feels organized and modern rather than basic storage racks.",
  "super-market-design.jpg":
    "This supermarket reference has warm ceiling lighting and display shelves. Use it for a modern retail frontage with clear movement, storage at back and easy stocking.",
  "toilet.jpg":
    "This toilet reference shows a clean concealed WC space with matte wall texture and soft lighting. The washroom should not be directly visible from the entrance or reception.",
  "try-to-accomidate-if-needed-1.jpg":
    "This corridor reference helps hide functional areas behind a soft curved wall. It is useful for keeping washroom doors, service entries or storage out of direct view.",
  "try-to-accomidate-if-needed.jpg":
    "This image supports a calm curved passage language. Use it if the layout needs to conceal a washroom or transition area while maintaining a premium feel.",
  "washing-area.jpg":
    "This washing area reference combines daylight, plants, washing machines and storage. The upper-floor laundry should feel bright and practical, with drainage and ventilation planned early.",
  "wet-kitchen.jpg":
    "This wet kitchen reference is narrow but bright, with sliding glass and greenery. It should guide ventilation, exhaust, washable matte finishes and separation from the dry kitchen.",
  "white-marble-home-temple.jpg":
    "This image supports the white marble pooja room direction with glass enclosure and lighting. The final design should be customized, brand-free and coordinated with ventilation and cleaning access.",
};

function categoryForSection(kicker) {
  if (kicker.includes("Ground")) return "ground";
  if (kicker.includes("Basement")) return "basement";
  if (kicker.includes("First")) return "first";
  if (kicker.includes("Second")) return "second";
  if (kicker.includes("Third") || kicker.includes("Terrace")) return "terrace";
  return "services";
}

function fileNameFromSrc(src) {
  return src.split("/").pop();
}

function detailForImage(src, caption, category) {
  const filename = fileNameFromSrc(src);
  if (imageVisionDetails[filename]) return imageVisionDetails[filename];

  const categoryDetails = {
    exterior:
      "This exterior image should guide a unique facade language with broad forms, controlled lighting and matte exterior materials. The architect should use it as inspiration while creating a custom elevation for the actual site.",
    ground:
      "This ground-floor reference supports the arrival, frontage or entry experience. It should be translated into a broad, naturally lit, matte-finished space with clear public and private movement.",
    basement:
      "This basement reference should guide parking, service and access planning. The focus is durable matte flooring, safe lighting, ventilation, drainage and clean movement to lift and stairs.",
    first:
      "This first-floor reference supports the main family living experience. The important design language is natural light, high ceiling feeling, broad circulation and calm matte finishes.",
    second:
      "This second-floor reference supports private bedroom-suite comfort. It should be used to plan storage, soft lighting, concealed services and a matte luxury finish.",
    terrace:
      "This upper-floor reference supports terrace, laundry or service planning. The builder should protect waterproofing, drainage, natural light and long-term maintenance access.",
    services:
      "This reference explains a practical service or system requirement. It should be coordinated early so the final interior remains clean, organized and easy to maintain.",
  };

  return `${caption}. ${categoryDetails[category] || categoryDetails.services}`;
}

function visionTagsForImage(category) {
  const common = ["Natural light", "Broad space", "Matte finish"];
  const categoryTags = {
    exterior: ["Unique elevation", "Facade pattern", "Night lighting"],
    ground: ["Private arrival", "Retail frontage", "Hidden storage"],
    basement: ["Ventilation", "Durable flooring", "Drainage"],
    first: ["High ceiling", "Family gathering", "Automation"],
    second: ["Suite comfort", "Concealed storage", "Soft lighting"],
    terrace: ["Waterproofing", "Outdoor seating", "Service access"],
    services: ["Easy maintenance", "Utility planning", "Clean cabinet"],
  };

  return [...common, ...(categoryTags[category] || categoryTags.services)].slice(0, 5);
}

function renderMood() {
  const moodGrid = document.querySelector("#moodGrid");
  if (!moodGrid) return;
  moodGrid.innerHTML = moodImages
    .map(
      (item) => `
        <figure class="mood-card">
          <img src="${item.src}" alt="${item.caption}" loading="lazy" decoding="async">
          <figcaption>${item.caption}</figcaption>
        </figure>
      `,
    )
    .join("");
}

function renderSnapshots() {
  const snapshotGrid = document.querySelector("#snapshotGrid");
  if (!snapshotGrid) return;
  snapshotGrid.innerHTML = snapshots
    .map(
      (item) => `
        <article class="snapshot-card">
          <span class="snapshot-number">${item.number}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderExperience() {
  const experienceTrack = document.querySelector("#experienceTrack");
  if (!experienceTrack) return;
  experienceTrack.innerHTML = experienceSteps
    .map(
      (item, index) => `
        <article class="experience-step" data-step="${String(index + 1).padStart(2, "0")}">
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderElevationControls() {
  const elevationGrid = document.querySelector("#elevationGrid");
  if (!elevationGrid) return;
  elevationGrid.innerHTML = elevationControls
    .map(
      (item, index) => `
        <article class="elevation-card">
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFloors() {
  const floorStack = document.querySelector("#floorStack");
  if (!floorStack) return;
  floorStack.innerHTML = floorSections
    .map(
      (section) => `
        <article class="floor-block">
          <figure class="floor-media">
            <img src="${section.hero}" alt="${section.heroAlt}" loading="lazy" decoding="async">
            <figcaption>${section.heroCaption}</figcaption>
          </figure>
          <div class="floor-content">
            <span class="floor-kicker">${section.kicker}</span>
            <h3>${section.title}</h3>
            <p>${section.summary}</p>
            <div class="floor-insight-grid">
              <div class="floor-insight">
                <span>Builder focus</span>
                <strong>${section.builderFocus}</strong>
              </div>
              <div class="floor-insight">
                <span>Coordination note</span>
                <strong>${section.coordination}</strong>
              </div>
              <div class="floor-insight">
                <span>Reference set</span>
                <strong>${section.references.length} visual references grouped for this level.</strong>
              </div>
            </div>
            <ul class="requirement-list">
              ${section.requirements.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="reference-strip" aria-label="${section.kicker} reference images">
              ${section.references
                .slice(0, 4)
                .map(
                  ([file, caption]) => {
                    const src = asset(file);
                    const category = categoryForSection(section.kicker);
                    const detail = detailForImage(src, caption, category);
                    return `
                    <button type="button" data-src="${src}" data-caption="${caption}" data-detail="${detail}">
                      <img src="${asset(file)}" alt="${caption}" loading="lazy" decoding="async">
                      <span class="reference-overlay">${caption}</span>
                    </button>
                  `;
                  },
                )
                .join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSystems() {
  const systemsGrid = document.querySelector("#systemsGrid");
  if (!systemsGrid) return;
  systemsGrid.innerHTML = systems
    .map(
      (system) => `
        <article class="system-card">
          <h3>${system.title}</h3>
          <p>${system.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderBudget() {
  const budgetGrid = document.querySelector("#budgetGrid");
  if (!budgetGrid) return;
  budgetGrid.innerHTML = budgetItems
    .map(
      (item, index) => `
        <article class="budget-card">
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCoordination() {
  const coordinationGrid = document.querySelector("#coordinationGrid");
  if (!coordinationGrid) return;
  coordinationGrid.innerHTML = coordinationCards
    .map(
      (card) => `
        <article class="coordination-card">
          <div>
            <h3>${card.title}</h3>
            <p>${card.body}</p>
          </div>
          <ul>
            ${card.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderGallery(filter = "all") {
  const galleryGrid = document.querySelector("#galleryGrid");
  if (!galleryGrid) return;
  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  galleryGrid.innerHTML = filtered
    .map((item) => {
      const detail = detailForImage(item.src, item.caption, item.category);
      const tags = visionTagsForImage(item.category);
      return `
        <figure class="gallery-card" data-category="${item.category}">
          <button type="button" data-src="${item.src}" data-caption="${item.caption}" data-detail="${detail}">
            <img src="${item.src}" alt="${item.caption}" loading="lazy" decoding="async">
            <span class="image-sweep"></span>
          </button>
          <figcaption>
            <strong>${item.caption}</strong>
            <p>${detail}</p>
            <span class="vision-tags">
              ${tags.map((tag) => `<em>${tag}</em>`).join("")}
            </span>
            <span class="tag">${labelForCategory(item.category)}</span>
          </figcaption>
        </figure>
      `;
    })
    .join("");
}

function labelForCategory(category) {
  const labels = {
    exterior: "Exterior",
    ground: "Ground Floor",
    basement: "Basement",
    first: "First Floor",
    second: "Second Floor",
    terrace: "Upper Floors / Terrace",
    services: "Services",
  };
  return labels[category] || category;
}

function setupFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderGallery(button.dataset.filter);
      setupPremiumInteractions();
    });
  });
}

function setupLightbox() {
  const lightbox = document.querySelector("#lightbox");
  const image = document.querySelector("#lightboxImage");
  const caption = document.querySelector("#lightboxCaption");
  const closeButton = document.querySelector("#closeLightbox");

  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-src]");
    if (!trigger) return;
    image.src = trigger.dataset.src;
    image.alt = trigger.dataset.caption;
    caption.textContent = trigger.dataset.detail
      ? `${trigger.dataset.caption}. ${trigger.dataset.detail}`
      : trigger.dataset.caption;
    lightbox.showModal();
  });

  closeButton.addEventListener("click", () => {
    lightbox.close();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
}

function setupPrint() {
  const printDeck = document.querySelector("#printDeck");
  if (!printDeck) return;
  printDeck.addEventListener("click", () => {
    window.print();
  });
}

function setupThemes() {
  const themeButtons = document.querySelectorAll(".theme-dot");
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.dataset.theme = button.dataset.theme;
      themeButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });
}

function setupRealtimeCanvas() {
  const canvas = document.querySelector("#renderCanvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * scale));
    canvas.height = Math.max(1, Math.floor(height * scale));
    context.setTransform(scale, 0, 0, scale, 0, 0);
  };

  const themeColor = (name) => getComputedStyle(document.body).getPropertyValue(name).trim();

  const drawGuide = (time) => {
    context.clearRect(0, 0, width, height);
    if (!width || !height) return;

    const copper = themeColor("--copper") || "#d9b58c";
    const sage = themeColor("--sage") || "#a8c5af";
    const progress = (Math.sin(time / 900) + 1) / 2;
    const sweep = width * ((time / 3600) % 1);

    context.save();
    context.globalAlpha = 0.72;
    context.lineWidth = 1.2;
    context.strokeStyle = "rgba(255, 255, 255, 0.72)";

    for (let i = 0; i < 5; i += 1) {
      const y = height * (0.22 + i * 0.13);
      const offset = Math.sin(time / 700 + i) * 8;
      context.beginPath();
      context.moveTo(width * 0.15, y + offset);
      context.bezierCurveTo(width * 0.34, y - 34, width * 0.62, y + 34, width * 0.88, y - offset);
      context.stroke();
    }

    context.strokeStyle = copper;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(width * 0.18, height * 0.78);
    context.lineTo(width * 0.86, height * 0.78);
    context.stroke();

    context.strokeStyle = sage;
    context.globalAlpha = 0.58;
    for (let i = 0; i < 7; i += 1) {
      const x = width * (0.18 + i * 0.11);
      context.beginPath();
      context.moveTo(x, height * 0.18);
      context.lineTo(x + Math.sin(time / 800 + i) * 8, height * 0.82);
      context.stroke();
    }

    context.globalAlpha = 0.9;
    [0.24, 0.42, 0.61, 0.78].forEach((point, index) => {
      const pulse = 4 + Math.sin(time / 300 + index) * 2;
      context.fillStyle = index % 2 === 0 ? copper : sage;
      context.beginPath();
      context.arc(width * point, height * (0.74 - progress * 0.08), pulse, 0, Math.PI * 2);
      context.fill();
    });

    const gradient = context.createLinearGradient(sweep - 90, 0, sweep + 90, 0);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.34)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.fillStyle = gradient;
    context.fillRect(sweep - 90, 0, 180, height);
    context.restore();
  };

  const animate = (time) => {
    drawGuide(time);
    animationFrame = requestAnimationFrame(animate);
  };

  resize();
  animationFrame = requestAnimationFrame(animate);
  window.addEventListener("resize", resize);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrame));
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupScrollProgress() {
  const progress = document.querySelector("#scrollProgress");
  if (!progress) return;
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${percentage}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function setupPremiumInteractions() {
  const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersLessMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!supportsFinePointer || prefersLessMotion) return;

  const interactiveCards = document.querySelectorAll(
    [
      ".gallery-card",
      ".floor-block",
      ".mood-card",
      ".image-panel",
      ".system-card",
      ".elevation-card",
      ".budget-card",
      ".material-vision-grid article",
      ".creative-card",
      ".coordination-card",
      ".snapshot-card",
      ".experience-step",
    ].join(","),
  );

  interactiveCards.forEach((card) => {
    if (card.dataset.tiltReady === "true") return;
    card.dataset.tiltReady = "true";
    let animationFrame = 0;

    card.addEventListener("mousemove", (event) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const depth = card.classList.contains("gallery-card") || card.classList.contains("floor-block") ? 5 : 3;
        const rotateX = (-y * depth).toFixed(2);
        const rotateY = (x * depth).toFixed(2);
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        card.style.boxShadow = "0 30px 78px rgba(21, 21, 21, 0.16)";
      });
    });

    card.addEventListener("mouseleave", () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });
}

function setupPageFlip() {
  const main = document.querySelector("main");
  const toggleButton = document.querySelector("#pageFlipToggle");
  const controls = document.querySelector("#pageFlipControls");
  const prevButton = document.querySelector("#prevPage");
  const nextButton = document.querySelector("#nextPage");
  const exitButton = document.querySelector("#exitPageFlip");
  const status = document.querySelector("#pageFlipStatus");
  const pages = Array.from(document.querySelectorAll("main > section"));

  if (!main || !toggleButton || !controls || !prevButton || !nextButton || !exitButton || !status || pages.length === 0) {
    return;
  }

  const stage = document.createElement("section");
  stage.className = "flipbook-stage";
  stage.setAttribute("aria-label", "Notebook page flip presentation");
  stage.setAttribute("data-print-hidden", "");
  stage.innerHTML = `
    <div class="flipbook-shell">
      <div class="notebook-page notebook-left" data-side="left">
        <div class="page-content" id="flipLeftPage"></div>
      </div>
      <div class="notebook-page notebook-right" data-side="right">
        <div class="page-content" id="flipRightPage"></div>
      </div>
      <div class="turning-page" id="turningPage" aria-hidden="true">
        <div class="turning-face turning-front">
          <div class="page-content" id="turningFront"></div>
        </div>
        <div class="turning-face turning-back">
          <div class="page-content" id="turningBack"></div>
        </div>
      </div>
    </div>
  `;
  main.appendChild(stage);

  const leftPage = stage.querySelector("#flipLeftPage");
  const rightPage = stage.querySelector("#flipRightPage");
  const turningPage = stage.querySelector("#turningPage");
  const turningFront = stage.querySelector("#turningFront");
  const turningBack = stage.querySelector("#turningBack");

  let activePage = 0;
  let isAnimating = false;

  const removeDuplicateIds = (root) => {
    root.querySelectorAll("[id]").forEach((item) => item.removeAttribute("id"));
  };

  const makeBlankPage = (label = "Pavithran's House") => {
    const blank = document.createElement("article");
    blank.className = "blank-notebook-page";
    blank.innerHTML = `
      <span>PH</span>
      <h2>${label}</h2>
      <p>Notebook presentation mode for builder discussion.</p>
    `;
    return blank;
  };

  const clonePage = (pageIndex, blankLabel) => {
    if (pageIndex < 0 || pageIndex >= pages.length) return makeBlankPage(blankLabel);
    const clone = pages[pageIndex].cloneNode(true);
    clone.classList.remove("reveal", "is-visible");
    clone.classList.add("notebook-section");
    clone.dataset.pageNumber = String(pageIndex + 1);
    removeDuplicateIds(clone);
    return clone;
  };

  const setContent = (container, pageIndex, blankLabel) => {
    container.replaceChildren(clonePage(pageIndex, blankLabel));
    container.scrollTop = 0;
  };

  const updateSpread = () => {
    setContent(leftPage, activePage - 1, "Concept Index");
    setContent(rightPage, activePage, "End of Notebook");

    status.textContent = `Page ${activePage + 1} / ${pages.length}`;
    prevButton.disabled = activePage === 0;
    nextButton.disabled = activePage === pages.length - 1;
  };

  const openPageMode = (pageIndex = activePage) => {
    activePage = Math.max(0, Math.min(pages.length - 1, pageIndex));
    window.scrollTo(0, 0);
    document.body.classList.add("page-flip-mode");
    controls.hidden = false;
    toggleButton.textContent = "Exit Flip";
    updateSpread();
  };

  const closePageMode = () => {
    document.body.classList.remove("page-flip-mode");
    controls.hidden = true;
    toggleButton.textContent = "Page Flip";
    stage.classList.remove("is-turning-forward", "is-turning-backward");
    turningFront.replaceChildren();
    turningBack.replaceChildren();
  };

  const goToPage = (pageIndex) => {
    if (!document.body.classList.contains("page-flip-mode")) return;
    if (isAnimating) return;

    const targetPage = Math.max(0, Math.min(pages.length - 1, pageIndex));
    if (targetPage === activePage) return;

    if (Math.abs(targetPage - activePage) > 1) {
      activePage = targetPage;
      updateSpread();
      return;
    }

    isAnimating = true;
    const direction = targetPage > activePage ? "forward" : "backward";
    stage.classList.toggle("is-turning-forward", direction === "forward");
    stage.classList.toggle("is-turning-backward", direction === "backward");

    if (direction === "forward") {
      setContent(turningFront, activePage, "End of Notebook");
      setContent(turningBack, targetPage, "End of Notebook");
    } else {
      setContent(turningFront, activePage - 1, "Concept Index");
      setContent(turningBack, targetPage - 1, "Concept Index");
    }

    window.setTimeout(() => {
      activePage = targetPage;
      updateSpread();
      stage.classList.remove("is-turning-forward", "is-turning-backward");
      turningFront.replaceChildren();
      turningBack.replaceChildren();
      isAnimating = false;
    }, 760);
  };

  toggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("page-flip-mode")) {
      closePageMode();
      return;
    }
    const nearestPage = pages.findIndex((page) => page.getBoundingClientRect().top >= -80);
    openPageMode(nearestPage >= 0 ? nearestPage : 0);
  });

  exitButton.addEventListener("click", closePageMode);
  prevButton.addEventListener("click", () => goToPage(activePage - 1));
  nextButton.addEventListener("click", () => goToPage(activePage + 1));

  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("page-flip-mode")) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      goToPage(activePage + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goToPage(activePage - 1);
    }
    if (event.key === "Escape") {
      closePageMode();
    }
  });

  document.querySelectorAll(".nav-links a, .hero-actions a").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!document.body.classList.contains("page-flip-mode")) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      const pageIndex = pages.indexOf(target);
      if (pageIndex < 0) return;
      event.preventDefault();
      goToPage(pageIndex);
    });
  });

  updateSpread();
}

function uniqueSources(sources) {
  return [...new Set(sources.filter(Boolean))];
}

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function allReferenceImageSources() {
  return uniqueSources([
    asset("elevation-6.jpg"),
    asset("elevation-5.jpg"),
    asset("house-size.jpg"),
    ...moodImages.map((item) => item.src),
    ...floorSections.map((section) => section.hero),
    ...floorSections.flatMap((section) => section.references.map(([file]) => asset(file))),
    ...galleryItems.map((item) => item.src),
  ]);
}

function criticalImageSources() {
  return uniqueSources([
    asset("elevation-6.jpg"),
    asset("elevation-5.jpg"),
    asset("living-room.jpg"),
    asset("house-size.jpg"),
    asset("house-entrance-with-porte-cochere-4.jpg"),
    asset("basement-car-parking.jpg"),
    ...moodImages.map((item) => item.src),
    ...floorSections.slice(0, 4).map((section) => section.hero),
    ...galleryItems.slice(0, 12).map((item) => item.src),
  ]);
}

function createPreloaderController() {
  const root = document.querySelector("#sitePreloader");
  const bar = document.querySelector("#preloaderProgressBar");
  const status = document.querySelector("#preloaderStatus");
  let total = 0;

  const setProgress = (completed, count) => {
    total = count || total || 1;
    const percentage = Math.min(100, Math.round((completed / total) * 100));
    if (bar) {
      bar.style.width = `${percentage}%`;
    }
    if (status) {
      status.textContent = percentage >= 100 ? "Opening presentation" : `Warming key visuals ${percentage}%`;
    }
  };

  return {
    root,
    setTotal(count) {
      total = Math.max(1, count);
      setProgress(0, total);
    },
    update(completed, count) {
      setProgress(completed, count);
    },
    complete() {
      setProgress(1, 1);
    },
  };
}

function loadImageSource(src, timeout = 6500, priority = "auto") {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    let timer = 0;

    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(src);
    };

    timer = window.setTimeout(finish, timeout);
    image.decoding = "async";
    if ("fetchPriority" in image) {
      image.fetchPriority = priority;
    }
    image.onload = () => {
      if (image.decode) {
        image.decode().catch(() => undefined).finally(finish);
        return;
      }
      finish();
    };
    image.onerror = finish;
    image.src = src;

    if (image.complete) {
      image.onload();
    }
  });
}

async function preloadImages(sources, options = {}) {
  const queue = uniqueSources(sources);
  const concurrency = Math.max(1, Math.min(options.concurrency || 4, queue.length || 1));
  const controller = options.controller;
  const timeout = options.timeout || 6500;
  const priority = options.priority || "auto";
  let nextIndex = 0;
  let completed = 0;

  if (controller) {
    controller.setTotal(queue.length);
  }

  if (queue.length === 0) {
    if (controller) controller.complete();
    return;
  }

  const worker = async () => {
    while (nextIndex < queue.length) {
      const src = queue[nextIndex];
      nextIndex += 1;
      await loadImageSource(src, timeout, priority);
      completed += 1;
      if (controller) {
        controller.update(completed, queue.length);
      }
    }
  };

  await Promise.all(Array.from({ length: concurrency }, worker));
}

function revealPresentation(preloader) {
  if (preloader) {
    preloader.complete();
  }
  document.documentElement.classList.remove("js-loading");
  document.documentElement.classList.add("js-ready");

  window.setTimeout(() => {
    if (preloader && preloader.root) {
      preloader.root.remove();
    }
    document.documentElement.classList.remove("js-ready");
  }, 720);
}

function warmRemainingImages(alreadyRequested) {
  const requested = new Set(alreadyRequested);
  const remaining = allReferenceImageSources().filter((src) => !requested.has(src));
  const schedule = window.requestIdleCallback
    ? (callback) => window.requestIdleCallback(callback, { timeout: 2500 })
    : (callback) => window.setTimeout(callback, 900);

  schedule(() => {
    preloadImages(remaining, { concurrency: 2, timeout: 4800 }).catch(() => undefined);
  });
}

function renderPresentationContent() {
  renderSnapshots();
  renderExperience();
  renderElevationControls();
  renderMood();
  renderFloors();
  renderSystems();
  renderBudget();
  renderCoordination();
  renderGallery();
}

function setupPresentationInteractions() {
  setupFilters();
  setupLightbox();
  setupPrint();
  setupThemes();
  setupRealtimeCanvas();
  setupRevealAnimation();
  setupScrollProgress();
  setupPremiumInteractions();
  setupPageFlip();
}

async function initializePresentation() {
  const preloader = createPreloaderController();
  const criticalSources = criticalImageSources();
  const criticalLoad = preloadImages(criticalSources, {
    controller: preloader,
    concurrency: 5,
    timeout: 5200,
    priority: "high",
  });

  renderPresentationContent();
  setupPresentationInteractions();

  await Promise.all([Promise.race([criticalLoad, delay(5200)]), delay(750)]);
  revealPresentation(preloader);
  warmRemainingImages(criticalSources);
}

initializePresentation().catch(() => {
  renderPresentationContent();
  setupPresentationInteractions();
  revealPresentation(createPreloaderController());
});
