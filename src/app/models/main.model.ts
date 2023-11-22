export const CATEGORIES = [
  'sorties',
  'courses',
  'essences',
  'achats exceptionnels'
];

export interface Expense {
  value: number | '';
  name: string;
  category: string;
  date: string | null;
  place_number?: number;
  place_address?: string;
  place_postal_code?: number;
  city?: string;
}