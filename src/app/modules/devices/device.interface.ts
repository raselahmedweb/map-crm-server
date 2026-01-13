export interface IItem {
  _id?: string;
  label: string;
  shape: string;
  color: string;
  price: number;
  copies: number;
}

export enum Shapes {
  CIRCLE = "circle",
  SQUARE = "square",
  TRIANGLE = "triangle",
  RECTANGLE = "rectangle",
  OVAL = "oval",
}
