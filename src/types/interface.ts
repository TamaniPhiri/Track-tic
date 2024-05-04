interface IValues {
  id: number;
  amount: number;
}

export type ICategory = Record<string, IValues[]>;
