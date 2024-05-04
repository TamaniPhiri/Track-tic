import { ICategory } from "@/types/interface";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const categoryAtom = atom<ICategory>({
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
  effects_UNSTABLE: [persistAtom],
});
