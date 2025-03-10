export type Mage = {
  id: string;
  name: string;
  email: string;
  roles: string[];
  house: House;
  balance: number;
  magic_level: number;
};

export type NewMageEntry = Omit<Mage, "id" | "roles" | "balance" | "magic_level" | "password">;

export type MageFromRequest = {
  name: string;
  email: string;
  house: string;
  password: string;
};

export type ContextWithParams = {
  params: { [key: string]: string | undefined };
};

export const HousesKeys = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"] as const;

export type House = (typeof HousesKeys)[number];
