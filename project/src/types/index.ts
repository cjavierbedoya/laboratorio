export interface LabGuide {
  id: string;
  title: string;
  grade: number;
  subject: string;
  downloadUrl: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  location: string;
  status: 'available' | 'in-use' | 'maintenance';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}