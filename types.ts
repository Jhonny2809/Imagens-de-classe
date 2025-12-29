
export interface KitItem {
  title: string;
  description: string;
}

export interface ClassKit {
  id: string;
  name: string;
  color: string;
  textColor: string;
  price: string;
  oldPrice: string;
  items: string[];
  borderColor: string;
  iconUrl: string;
  checkoutUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UpsellState {
  isOpen: boolean;
  selectedKit: ClassKit | null;
}
