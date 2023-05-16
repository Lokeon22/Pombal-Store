export interface User {
  user: {
    id: number;
    name: string;
    email: string;
    created_at: string;
    is_admin: boolean;
  };
  token: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  created_at: string;
  is_admin: boolean;
}
