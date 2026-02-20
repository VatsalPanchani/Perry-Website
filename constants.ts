import { Category, Product, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  phone: "9426636910",
  whatsapp: "8530245123",
  address: "Gokul Estate, Shed no. 6, Opp. Maruti Multipack, Opp. Madhav Industries, Shapar (Verawal), Dist: RAJKOT -360024",
  gstin: "24AUBPP7598M1ZU",
  facebook: "https://facebook.com/perryceratech",
  indiaMart: "https://www.indiamart.com/perry-cera-tech",
  email: "perryceratech@gmail.com"
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1563911302283-d2bc1d0bd49b?auto=format&fit=crop&q=80&w=800",
    isBestSeller: true
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
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
    isBestSeller: true
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
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    isBestSeller: true
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
    image: "https://images.unsplash.com/photo-1530311708274-b364488a7262?auto=format&fit=crop&q=80&w=800"
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
    image: "https://images.unsplash.com/photo-1590244439193-f20597807d4f?auto=format&fit=crop&q=80&w=800"
  }
];