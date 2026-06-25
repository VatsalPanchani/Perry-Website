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
    isBestSeller: true
  },
  {
    id: "2",
    name: "Pipe - Pink (Medium)",
    category: Category.CeramicPipes,
    material: "OD:10mm ID:5mm L:30mm",
    usage: "Mechanical Seals & Pumps",
    price: "₹4.80/pc"
  },
  {
    id: "3",
    name: "Pipe - Pink (Small)",
    category: Category.CeramicPipes,
    material: "OD:8mm ID:3.7/4.5mm L:20mm",
    usage: "Wire Drawing Machines",
    price: "₹3/pc"
  },
  {
    id: "4",
    name: "Pipe - White (Large)",
    category: Category.CeramicPipes,
    material: "OD:10mm ID:5mm L:35mm/40mm",
    usage: "Electrical Furnaces",
    price: "₹6/pc"
  },
  {
    id: "5",
    name: "Pipe - White (Small)",
    category: Category.CeramicPipes,
    material: "OD:8mm ID:3.7/4.5mm L:20mm",
    usage: "Chemical Processing",
    price: "₹3/pc"
  },
  {
    id: "6",
    name: "Ploshing Element",
    category: Category.SpecialComponents,
    usage: "Sand Blasting & Sprayers",
    price: "₹3/pc"
  },
  {
    id: "7",
    name: "Tape Guide",
    category: Category.CeramicHook,
    usage: "Wire & Cable Manufacturing",
    price: "₹3.50/pc"
  },
  {
    id: "8",
    name: "U Hook - Pink",
    category: Category.CeramicHook,
    usage: "Winding Machines",
    price: "₹3/pc",
    isBestSeller: true
  },
  {
    id: "9",
    name: "U Open Hook - White",
    category: Category.CeramicHook,
    usage: "Tension Control Systems",
    price: "₹3/pc"
  },
  {
    id: "10",
    name: "U Hook - White",
    category: Category.CeramicHook,
    usage: "Heating Elements",
    price: "₹4/pc"
  },
  {
    id: "11",
    name: "U Open Hook - Pink",
    category: Category.CeramicHook,
    usage: "Industrial Cutting",
    price: "₹3/pc"
  },
  {
    id: "12",
    name: "Yarn Guide Hook",
    category: Category.CeramicHook,
    usage: "Nut Welding",
    price: "₹4/pc"
  },
  {
    id: "13",
    name: "Ceramic Roller (Garedi)",
    category: Category.CeramicRing,
    material: "ID:30mm",
    usage: "Textile Machinery",
    price: "₹80/pc",
    isBestSeller: true
  },
  {
    id: "14",
    name: "I-let (15mm)",
    category: Category.CeramicRing,
    material: "OD:15mm",
    usage: "High Pressure Pumps",
    price: "₹6/pc"
  },
  {
    id: "15",
    name: "I-let (18mm)",
    category: Category.CeramicRing,
    material: "OD:18mm",
    usage: "Surface Preparation",
    price: "₹7/pc"
  },
  {
    id: "16",
    name: "Pair (7mm)",
    category: Category.CeramicRing,
    material: "OD:7mm",
    usage: "Wire Drawing",
    price: "₹2.5/pc"
  },
  {
    id: "17",
    name: "Nobe",
    category: Category.CeramicRing,
    material: "",
    usage: "High-Speed Bearings",
    price: "₹16/pc"
  },
  {
    id: "18",
    name: "I-let (12/14mm)",
    category: Category.CeramicRing,
    material: "OD:12mm/14mm",
    usage: "Laboratory & Metallurgy",
    price: "₹3 - ₹5/pc"
  },
  {
    id: "19",
    name: "I-let (30mm)",
    category: Category.CeramicRing,
    material: "OD:30mm",
    usage: "High-Temp Fastening",
    price: "₹24/pc"
  },
  {
    id: "20",
    name: "V Guide",
    category: Category.CeramicGuides,
    usage: "Yarn & Wire Guiding",
    price: "₹3/pc"
  },
  {
    id: "21",
    name: "Multihook Guide",
    category: Category.SpecialComponents,
    usage: "Industrial Heaters",
    price: "₹6/pc"
  },
  {
    id: "22",
    name: "Half Round",
    category: Category.SpecialComponents,
    usage: "Fluid Control Valves",
    price: "₹5/pc"
  },
  {
    id: "23",
    name: "Sandblast Nozzle - Pink (Small)",
    category: Category.CeramicPipes,
    material: "Small",
    usage: "Wire & Cable Routing",
    price: "₹4.50/pc"
  },
  {
    id: "24",
    name: "Sandblast Nozzle - Pink (Medium)",
    category: Category.CeramicPipes,
    material: "Medium",
    usage: "Electronics & Thick Film",
    price: "₹7.10/pc",
    isBestSeller: true
  },
  {
    id: "25",
    name: "Sandblast Nozzle - Pink (Large)",
    category: Category.CeramicPipes,
    material: "Large",
    usage: "Electronics & Thick Film",
    price: "₹8.70/pc",
    isBestSeller: true
  },
  {
    id: "26",
    name: "Sandblast Nozzle - White (Small)",
    category: Category.CeramicPipes,
    material: "Small",
    usage: "Electronics & Thick Film",
    price: "₹4.50/pc",
    isBestSeller: true
  }
];