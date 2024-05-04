import { ICategory } from "@/types/interface";
import { atom } from "recoil";

export const categoryAtom = atom<ICategory>({
  key: "categoryAtom",
  default: {
    shopping: [
      {
        id: 0,
        amount: 0,
      },
    ],
    transportation: [],
    food: [],
    healthcare: [],
    entertainment: [],
    education: [],
    savings: [],
    Miscellaneous: [],
  },
});
