export interface ProductsProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock_amount: number;
  category: string;
  created_at: Date;
}

export interface StripeProduct {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: any;
  livemode: boolean;
  product: string;
  tax_behavior: string;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}
