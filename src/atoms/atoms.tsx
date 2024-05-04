import { atom } from "recoil";

export const categoryAtom = atom({
  key: "categoryAtom",
  default: {
    shopping: [],
    transportation: [],
    food: [],
    healthcare: [],
    entertainment: [],
    education: [],
    savings: [],
    Miscellaneous: [],
  },
});
