
export enum Category {
  CeramicGuides = "Ceramic Guides",
  HighAlumina = "High Alumina Products",
  IndustrialComponents = "Industrial Components",
  CeramicPipes = "Ceramic Pipes",
  CeramicHook = "Ceramic Hook",
  CeramicRing = "Ceramic Ring",
  SpecialComponents = "Special Components"
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  material: string;
  usage: string;
  price: string;
  description: string;
  specs: string[];
  image?: string;
  isBestSeller?: boolean;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  gstin: string;
  facebook: string;
  indiaMart: string;
  email: string;
}
