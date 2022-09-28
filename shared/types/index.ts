export interface Links {
  name: string;
  source: string;
  items?: Links[];
}

export interface Hotel {
  title: string;
  description: string;
  priceNightFrom?: number;
  image?: { landing?: string; drawer?: string };
  location?: string;
  services?: Service[];
  mainColor?: string;
}

export interface Service {
  name: string;
  reference: string;
}

export interface Hotels {
  title: string;
  description: string;
  hotelsToShow: Hotel[];
}

export interface Phrase {
  content: string;
  highlight?: string;
}
