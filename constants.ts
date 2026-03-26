import { Category, Product, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  phone: "9426636910",
  whatsapp: "8530245123",
  address: "Gokul Estate, Shed no. 6, Opp. Maruti Multipack, Opp. Madhav Industries, Shapar (Verawal), Dist: RAJKOT -360024",
  gstin: "24AUBPP7598M1ZU",
  facebook: "https://facebook.com/perryceratech",
  indiaMart: "https://www.indiamart.com/perry-cera-tech",
  email: "sanjaypanchani68@gmail.com"
};

export const OWNER_NAME = "Sanjay Panchani";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Ceramic Thread Guide (Eyelet)",
    category: Category.CeramicGuides,
    material: "99% Alumina Ceramic",
    usage: "Textile Spinning & Winding",
    price: "₹850",
    description: "High-precision ceramic eyelets for smooth yarn passage with minimum friction.",
    specs: ["Surface Finish: Polished", "Hardness: >1500 HV", "Heat Resistant: Up to 1600°C"],
    image: "/images/products/1.jpg",
    isBestSeller: true
  },
  {
    id: "2",
    name: "Alumina Ceramic Seal Ring",
    category: Category.HighAlumina,
    material: "95%-99.7% Alumina",
    usage: "Mechanical Seals & Pumps",
    price: "₹1,200",
    description: "Wear-resistant alumina rings designed for heavy-duty industrial fluid handling.",
    specs: ["Corrosion Resistant", "High Density", "Zero Porosity"],
    image: "/images/products/2.jpg"
  },
  {
    id: "3",
    name: "Ceramic Roller Guide",
    category: Category.CeramicGuides,
    material: "ZTA (Zirconia Toughened Alumina)",
    usage: "Wire Drawing Machines",
    price: "₹3,500",
    description: "Highly durable guides for metal wire drawing with extreme impact resistance.",
    specs: ["V-Groove Precision", "Low Friction", "Extended Service Life"],
    image: "/images/products/3.jpg"
  },
  {
    id: "4",
    name: "High Alumina Insulator",
    category: Category.IndustrialComponents,
    material: "High-Grade Alumina",
    usage: "Electrical Furnaces",
    price: "₹450",
    description: "Excellent dielectric strength for high-temperature electrical insulation.",
    specs: ["Thermal Shock Proof", "Voltage: Up to 25KV", "Custom Sizes Available"],
    image: "/images/products/4.jpg"
  },
  {
    id: "5",
    name: "Ceramic Bushing & Sleeves",
    category: Category.HighAlumina,
    material: "Standard Industrial Alumina",
    usage: "Chemical Processing",
    price: "₹950",
    description: "Internal lining for pipes and shafts requiring chemical inertness.",
    specs: ["Acid/Alkali Resistant", "Internal Diameters from 5mm", "Hard Polished"],
    image: "/images/products/5.jpg"
  },
  {
    id: "6",
    name: "Ceramic Nozzle Tips",
    category: Category.IndustrialComponents,
    material: "Wear-Resistant Ceramic",
    usage: "Sand Blasting & Sprayers",
    price: "₹600",
    description: "Precision nozzles for abrasive media delivery in industrial cleaning.",
    specs: ["High Velocity Tolerance", "Erosion Resistant", "Lightweight"],
    image: "/images/products/6.jpg"
  },
  {
    id: "7",
    name: "Ceramic Pigtail Guide",
    category: Category.CeramicGuides,
    material: "99% Alumina Ceramic",
    usage: "Wire & Cable Manufacturing",
    price: "₹750",
    description: "Specialized pigtail guides for easy wire threading and smooth operation.",
    specs: ["Easy Threading", "High Wear Resistance", "Polished Surface"],
    image: "/images/products/7.jpg"
  },
  {
    id: "8",
    name: "Ceramic Traverse Guide",
    category: Category.CeramicGuides,
    material: "Titanium Dioxide Ceramic",
    usage: "Winding Machines",
    price: "₹1,100",
    description: "Traverse guides with specialized surface treatment to prevent static buildup.",
    specs: ["Anti-Static", "Low Friction Coefficient", "High Durability"],
    image: "/images/products/8.jpg",
    isBestSeller: true
  },
  {
    id: "9",
    name: "Ceramic Tension Disc",
    category: Category.IndustrialComponents,
    material: "95% Alumina Ceramic",
    usage: "Tension Control Systems",
    price: "₹300",
    description: "Precision tension discs for maintaining consistent yarn or wire tension.",
    specs: ["Flatness: <0.01mm", "Smooth Finish", "Consistent Weight"],
    image: "/images/products/9.jpg"
  },
  {
    id: "10",
    name: "Ceramic Tube Insulator",
    category: Category.HighAlumina,
    material: "Steatite Ceramic",
    usage: "Heating Elements",
    price: "₹550",
    description: "High-frequency steatite tubes for electrical insulation in heating elements.",
    specs: ["High Dielectric Strength", "Low Loss Factor", "Thermal Stability"],
    image: "/images/products/10.jpg"
  },
  {
    id: "11",
    name: "Ceramic Cutting Blade",
    category: Category.IndustrialComponents,
    material: "Zirconia Ceramic",
    usage: "Industrial Cutting",
    price: "₹2,800",
    description: "Ultra-sharp zirconia blades that retain their edge longer than steel.",
    specs: ["Rust-Proof", "Non-Magnetic", "Extreme Hardness"],
    image: "/images/products/11.jpg"
  },
  {
    id: "12",
    name: "Ceramic Welding Pin",
    category: Category.HighAlumina,
    material: "Silicon Nitride",
    usage: "Nut Welding",
    price: "₹1,500",
    description: "Durable locating pins for projection welding applications.",
    specs: ["Non-Conductive", "Spatter Resistant", "Long Lifespan"],
    image: "/images/products/12.jpg"
  },
  {
    id: "13",
    name: "Ceramic Bow Guide",
    category: Category.CeramicGuides,
    material: "99% Alumina Ceramic",
    usage: "Textile Machinery",
    price: "₹900",
    description: "Bow-shaped guides for directing yarn paths with minimal tension variation.",
    specs: ["Optimized Curve", "Polished Inner Radius", "Wear Resistant"],
    image: "/images/products/13.jpg",
    isBestSeller: true
  },
  {
    id: "14",
    name: "Ceramic Plunger",
    category: Category.HighAlumina,
    material: "Zirconia Toughened Alumina",
    usage: "High Pressure Pumps",
    price: "₹4,200",
    description: "Precision-ground plungers for high-pressure fluid metering and pumping.",
    specs: ["Mirror Finish", "High Compressive Strength", "Chemical Inertness"],
    image: "/images/products/14_1.jpg"
  },
  {
    id: "15",
    name: "Ceramic Sandblasting Nozzle",
    category: Category.IndustrialComponents,
    material: "Boron Carbide",
    usage: "Surface Preparation",
    price: "₹5,500",
    description: "Extreme wear-resistant nozzles for aggressive sandblasting media.",
    specs: ["Longest Service Life", "Maintains Bore Size", "Lightweight"],
    image: "/images/products/15.jpg"
  },
  {
    id: "16",
    name: "Ceramic Wire Drawing Cone",
    category: Category.CeramicGuides,
    material: "Zirconia Ceramic",
    usage: "Wire Drawing",
    price: "₹6,800",
    description: "Multi-step cones for continuous wire drawing machines.",
    specs: ["High Surface Quality", "Reduced Wire Breakage", "Thermal Shock Resistant"],
    image: "/images/products/16.jpg"
  },
  {
    id: "17",
    name: "Ceramic Bearing Ball",
    category: Category.IndustrialComponents,
    material: "Silicon Nitride",
    usage: "High-Speed Bearings",
    price: "₹1,200",
    description: "Lightweight, high-strength ceramic balls for precision bearings.",
    specs: ["Low Density", "High Speed Capability", "Corrosion Resistant"],
    image: "/images/products/17.jpg"
  },
  {
    id: "18",
    name: "Ceramic Crucible",
    category: Category.HighAlumina,
    material: "99.7% Alumina",
    usage: "Laboratory & Metallurgy",
    price: "₹850",
    description: "High-purity crucibles for melting and calcining at extreme temperatures.",
    specs: ["Max Temp: 1750°C", "High Chemical Purity", "Thermal Shock Resistant"],
    image: "/images/products/18.jpg"
  },
  {
    id: "19",
    name: "Ceramic Threaded Rod",
    category: Category.IndustrialComponents,
    material: "Alumina Ceramic",
    usage: "High-Temp Fastening",
    price: "₹1,600",
    description: "Non-conductive, heat-resistant threaded rods for specialized assemblies.",
    specs: ["Standard Metric Threads", "High Tensile Strength", "Electrical Insulator"],
    image: "/images/products/19.jpg"
  },
  {
    id: "20",
    name: "Ceramic Slit Guide",
    category: Category.CeramicGuides,
    material: "95% Alumina Ceramic",
    usage: "Yarn & Wire Guiding",
    price: "₹400",
    description: "Slit guides for precise positioning of multiple threads or wires.",
    specs: ["Accurate Slit Dimensions", "Smooth Edges", "Easy Installation"],
    image: "/images/products/20.jpg"
  },
  {
    id: "21",
    name: "Ceramic Heater Support",
    category: Category.HighAlumina,
    material: "Cordierite Ceramic",
    usage: "Industrial Heaters",
    price: "₹700",
    description: "Supports for heating coils with excellent thermal shock resistance.",
    specs: ["Low Thermal Expansion", "Good Insulation", "Custom Shapes"],
    image: "/images/products/21.jpg"
  },
  {
    id: "22",
    name: "Ceramic Valve Seat",
    category: Category.IndustrialComponents,
    material: "Zirconia Ceramic",
    usage: "Fluid Control Valves",
    price: "₹2,100",
    description: "Wear-resistant valve seats for handling abrasive or corrosive fluids.",
    specs: ["Leak-Free Sealing", "High Hardness", "Chemical Compatibility"],
    image: "/images/products/22.jpg"
  },
  {
    id: "23",
    name: "Ceramic Pulley",
    category: Category.CeramicGuides,
    material: "Alumina Ceramic",
    usage: "Wire & Cable Routing",
    price: "₹1,800",
    description: "Flanged pulleys for guiding wires around corners with low friction.",
    specs: ["Precision Bearings Included", "Wear Resistant Groove", "Smooth Rotation"],
    image: "/images/products/23.jpg"
  },
  {
    id: "24",
    name: "Ceramic Substrate",
    category: Category.HighAlumina,
    material: "96% Alumina",
    usage: "Electronics & Thick Film",
    price: "₹250",
    description: "Flat ceramic substrates for electronic circuits and heat dissipation.",
    specs: ["High Thermal Conductivity", "Excellent Flatness", "Good Electrical Insulation"],
    image: "/images/products/24.jpg",
    isBestSeller: true
  },
  {
    id: "25",
    name: "Ceramic Substrate",
    category: Category.HighAlumina,
    material: "96% Alumina",
    usage: "Electronics & Thick Film",
    price: "₹250",
    description: "Flat ceramic substrates for electronic circuits and heat dissipation.",
    specs: ["High Thermal Conductivity", "Excellent Flatness", "Good Electrical Insulation"],
    image: "/images/products/25.jpg",
    isBestSeller: true
  },
  {
    id: "26",
    name: "Ceramic Substrate",
    category: Category.HighAlumina,
    material: "96% Alumina",
    usage: "Electronics & Thick Film",
    price: "₹250",
    description: "Flat ceramic substrates for electronic circuits and heat dissipation.",
    specs: ["High Thermal Conductivity", "Excellent Flatness", "Good Electrical Insulation"],
    image: "/images/products/26.jpg",
    isBestSeller: true
  }
];