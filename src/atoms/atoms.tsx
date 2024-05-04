import { atom } from "recoil";

export const categoryAtom = atom({
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
