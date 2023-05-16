export interface CustomerStripe {
  object: "string";
  data: CustomerProps[];
}

export interface CustomerProps {
  id: string;
  name: string;
  email: string;
}
