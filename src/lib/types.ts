export type TNavLinks = {
  name: string;
  href: string;
  icon?: any;
};

export interface IDataValueSection {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IDataFeatureSection {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IDesign {
  id: number;
  image: string;
}

export interface IPrices {
  title: string;
  price: number;
  description: IDescPrice[];
}
interface IDescPrice {
  title: string;
}
