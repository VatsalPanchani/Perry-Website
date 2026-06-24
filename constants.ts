import { Category, Product, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  phone: "9426636910",
  whatsapp: "8530245123",
  address: "Gokul Estate, Shed no. 6, Opp. Maruti Multipack, Opp. Madhav Industries, Shapar (Verawal), Dist: RAJKOT -360024",
  gstin: "24AUBPP7598M1ZU",
  facebook: "https://www.facebook.com/share/1Qg8XX3zjx/",
  indiaMart: "https://www.indiamart.com/earrings-teratech-industries/",
  email: "sanjaypanchani68@gmail.com"
};

export const OWNER_NAME = "Sanjay Panchani";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Pipe - Pink (Large)",
    category: Category.CeramicPipes,
    material: "OD:10mm ID:5mm L:35mm/40mm",
    usage: "Textile Spinning & Winding",
    price: "₹6/pc",
    description: "High-precision ceramic eyelets for smooth yarn passage with minimum friction.",
    specs: ["Surface Finish: Polished", "Hardness: >1500 HV", "Heat Resistant: Up to 1600°C"],
    image: "/images/products/1_1.jpg",
    isBestSeller: true
  },
  {
    id: "2",
    name: "Pipe - Pink (Medium)",
    category: Category.CeramicPipes,
    material: "OD:10mm ID:5mm L:30mm",
    usage: "Mechanical Seals & Pumps",
    price: "₹4.80/pc",
    description: "Wear-resistant alumina rings designed for heavy-duty industrial fluid handling.",
    specs: ["Corrosion Resistant", "High Density", "Zero Porosity"],
    image: "/images/products/2.jpg"
  },
  {
    id: "3",
    name: "Pipe - Pink (Small)",
    category: Category.CeramicPipes,
    material: "OD:8mm ID:3.7/4.5mm L:20mm",
    usage: "Wire Drawing Machines",
    price: "₹3/pc",
    description: "Highly durable guides for metal wire drawing with extreme impact resistance.",
    specs: ["V-Groove Precision", "Low Friction", "Extended Service Life"],
    image: "/images/products/3.jpg"
  },
  {
    id: "4",
    name: "Pipe - White (Large)",
    category: Category.CeramicPipes,
    material: "OD:10mm ID:5mm L:35mm/40mm",
    usage: "Electrical Furnaces",
    price: "₹6/pc",
    description: "Excellent dielectric strength for high-temperature electrical insulation.",
    specs: ["Thermal Shock Proof", "Voltage: Up to 25KV", "Custom Sizes Available"],
    image: "/images/products/4_1.jpg"
  },
  {
    id: "5",
    name: "Pipe - White (Small)",
    category: Category.CeramicPipes,
    material: "OD:8mm ID:3.7/4.5mm L:20mm",
    usage: "Chemical Processing",
    price: "₹3/pc",
    description: "Internal lining for pipes and shafts requiring chemical inertness.",
    specs: ["Acid/Alkali Resistant", "Internal Diameters from 5mm", "Hard Polished"],
    image: "/images/products/5.jpg"
  },
  {
    id: "6",
    name: "Ploshing Element",
    category: Category.SpecialComponents,
    usage: "Sand Blasting & Sprayers",
    price: "₹3/pc",
    description: "Precision nozzles for abrasive media delivery in industrial cleaning.",
    specs: ["High Velocity Tolerance", "Erosion Resistant", "Lightweight"],
    image: "/images/products/6.jpg"
  },
  {
    id: "7",
    name: "Tape Guide",
    category: Category.CeramicHook,
    usage: "Wire & Cable Manufacturing",
    price: "₹3.50/pc",
    description: "Specialized pigtail guides for easy wire threading and smooth operation.",
    specs: ["Easy Threading", "High Wear Resistance", "Polished Surface"],
    image: "/images/products/7.jpg"
  },
  {
    id: "8",
    name: "U Hook - Pink",
    category: Category.CeramicHook,
    usage: "Winding Machines",
    price: "₹3/pc",
    description: "Traverse guides with specialized surface treatment to prevent static buildup.",
    specs: ["Anti-Static", "Low Friction Coefficient", "High Durability"],
    image: "/images/products/8.jpg",
    isBestSeller: true
  },
  {
    id: "9",
    name: "U Open Hook - White",
    category: Category.CeramicHook,
    usage: "Tension Control Systems",
    price: "₹3/pc",
    description: "Precision tension discs for maintaining consistent yarn or wire tension.",
    specs: ["Flatness: <0.01mm", "Smooth Finish", "Consistent Weight"],
    image: "/images/products/9.jpg"
  },
  {
    id: "10",
    name: "U Hook - White",
    category: Category.CeramicHook,
    usage: "Heating Elements",
    price: "₹4/pc",
    description: "High-frequency steatite tubes for electrical insulation in heating elements.",
    specs: ["High Dielectric Strength", "Low Loss Factor", "Thermal Stability"],
    image: "/images/products/10.jpg"
  },
  {
    id: "11",
    name: "U Open Hook - Pink",
    category: Category.CeramicHook,
    usage: "Industrial Cutting",
    price: "₹3/pc",
    description: "Ultra-sharp zirconia blades that retain their edge longer than steel.",
    specs: ["Rust-Proof", "Non-Magnetic", "Extreme Hardness"],
    image: "/images/products/11.jpg"
  },
  {
    id: "12",
    name: "Yarn Guide Hook",
    category: Category.CeramicHook,
    usage: "Nut Welding",
    price: "₹4/pc",
    description: "Durable locating pins for projection welding applications.",
    specs: ["Non-Conductive", "Spatter Resistant", "Long Lifespan"],
    image: "/images/products/12.jpg"
  },
  {
    id: "13",
    name: "Ceramic Roller (Garedi)",
    category: Category.CeramicRing,
    material: "ID:30mm",
    usage: "Textile Machinery",
    price: "₹80/pc",
    description: "Bow-shaped guides for directing yarn paths with minimal tension variation.",
    specs: ["Optimized Curve", "Polished Inner Radius", "Wear Resistant"],
    image: "/images/products/13.jpg",
    isBestSeller: true
  },
  {
    id: "14",
    name: "I-let (15mm)",
    category: Category.CeramicRing,
    material: "OD:15mm",
    usage: "High Pressure Pumps",
    price: "₹6/pc",
    description: "Precision-ground plungers for high-pressure fluid metering and pumping.",
    specs: ["Mirror Finish", "High Compressive Strength", "Chemical Inertness"],
    image: "/images/products/14_1.jpg"
  },
  {
    id: "15",
    name: "I-let (18mm)",
    category: Category.CeramicRing,
    material: "OD:18mm",
    usage: "Surface Preparation",
    price: "₹7/pc",
    description: "Extreme wear-resistant nozzles for aggressive sandblasting media.",
    specs: ["Longest Service Life", "Maintains Bore Size", "Lightweight"],
    image: "/images/products/15.jpg"
  },
  {
    id: "16",
    name: "Pair (7mm)",
    category: Category.CeramicRing,
    material: "OD:7mm",
    usage: "Wire Drawing",
    price: "₹2.5/pc",
    description: "Multi-step cones for continuous wire drawing machines.",
    specs: ["High Surface Quality", "Reduced Wire Breakage", "Thermal Shock Resistant"],
    image: "/images/products/16.jpg"
  },
  {
    id: "17",
    name: "Nobe",
    category: Category.CeramicRing,
    material: "",
    usage: "High-Speed Bearings",
    price: "₹16/pc",
    description: "Lightweight, high-strength ceramic balls for precision bearings.",
    specs: ["Low Density", "High Speed Capability", "Corrosion Resistant"],
    image: "/images/products/17.jpg"
  },
  {
    id: "18",
    name: "I-let (12/14mm)",
    category: Category.CeramicRing,
    material: "OD:12mm/14mm",
    usage: "Laboratory & Metallurgy",
    price: "₹3 - ₹5/pc",
    description: "High-purity crucibles for melting and calcining at extreme temperatures.",
    specs: ["Max Temp: 1750°C", "High Chemical Purity", "Thermal Shock Resistant"],
    image: "/images/products/18.jpg"
  },
  {
    id: "19",
    name: "I-let (30mm)",
    category: Category.CeramicRing,
    material: "OD:30mm",
    usage: "High-Temp Fastening",
    price: "₹24/pc",
    description: "Non-conductive, heat-resistant threaded rods for specialized assemblies.",
    specs: ["Standard Metric Threads", "High Tensile Strength", "Electrical Insulator"],
    image: "/images/products/19.jpg"
  },
  {
    id: "20",
    name: "V Guide",
    category: Category.CeramicGuides,
    usage: "Yarn & Wire Guiding",
    price: "₹3/pc",
    description: "Slit guides for precise positioning of multiple threads or wires.",
    specs: ["Accurate Slit Dimensions", "Smooth Edges", "Easy Installation"],
    image: "/images/products/20.jpg"
  },
  {
    id: "21",
    name: "Multihook Guide",
    category: Category.SpecialComponents,
    usage: "Industrial Heaters",
    price: "₹6/pc",
    description: "Supports for heating coils with excellent thermal shock resistance.",
    specs: ["Low Thermal Expansion", "Good Insulation", "Custom Shapes"],
    image: "/images/products/21.jpg"
  },
  {
    id: "22",
    name: "Half Round",
    category: Category.SpecialComponents,
    usage: "Fluid Control Valves",
    price: "₹5/pc",
    description: "Wear-resistant valve seats for handling abrasive or corrosive fluids.",
    specs: ["Leak-Free Sealing", "High Hardness", "Chemical Compatibility"],
    image: "/images/products/22.jpg"
  },
  {
    id: "23",
    name: "Sandblast Nozzle - Pink (Small)",
    category: Category.CeramicPipes,
    material: "Small",
    usage: "Wire & Cable Routing",
    price: "₹4.50/pc",
    description: "Flanged pulleys for guiding wires around corners with low friction.",
    specs: ["Precision Bearings Included", "Wear Resistant Groove", "Smooth Rotation"],
    image: "/images/products/23.jpg"
  },
  {
    id: "24",
    name: "Sandblast Nozzle - Pink (Medium)",
    category: Category.CeramicPipes,
    material: "Medium",
    usage: "Electronics & Thick Film",
    price: "₹7.10/pc",
    description: "Flat ceramic substrates for electronic circuits and heat dissipation.",
    specs: ["High Thermal Conductivity", "Excellent Flatness", "Good Electrical Insulation"],
    image: "/images/products/24.jpg",
    isBestSeller: true
  },
  {
    id: "25",
    name: "Sandblast Nozzle - Pink (Large)",
    category: Category.CeramicPipes,
    material: "Large",
    usage: "Electronics & Thick Film",
    price: "₹8.70/pc",
    description: "Flat ceramic substrates for electronic circuits and heat dissipation.",
    specs: ["High Thermal Conductivity", "Excellent Flatness", "Good Electrical Insulation"],
    image: "/images/products/25.jpg",
    isBestSeller: true
  },
  {
    id: "26",
    name: "Sandblast Nozzle - White (Small)",
    category: Category.CeramicPipes,
    material: "Small",
    usage: "Electronics & Thick Film",
    price: "₹4.50/pc",
    description: "Flat ceramic substrates for electronic circuits and heat dissipation.",
    specs: ["High Thermal Conductivity", "Excellent Flatness", "Good Electrical Insulation"],
    image: "/images/products/26.jpg",
    isBestSeller: true
  }
];