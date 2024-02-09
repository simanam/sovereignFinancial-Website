export interface MortgageFormData {
  zipCode: number;
  purchasePrice: number;
  downPaymentAmount: number;
  downPaymentPercentage: number;
  creditScore: string;
  loanTerm: string[];
  name: string; // Added field for name
  email: string;
  phoneNumber: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Path to the icon image
  link: string; // URL path for more details
}
export type FAQItemProps = {
  question: string;
  answer: string;
};

export interface CalculatorData {
  purchasePrice: number;
  creditScore: string;
  loanTerm: string[];
  downPaymentAmount: number;
  downPaymentPercentage: number;
  interestRate: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  zipCode?: number; // Ensure this is consistent with your types
}
