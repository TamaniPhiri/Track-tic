import { Input } from "@/Components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { categoryAtom } from "@/atoms/atoms";
import { Button } from "@/Components/ui/button";
import { IValues } from "@/types/interface";
import { useToast } from "@/Components/ui/use-toast";

const AddExpense = () => {
  const [categories, setCategories] = useRecoilState(categoryAtom);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const { toast } = useToast();

  console.log(categories);

  const handleExpenseAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpenseAmount(event.target.value);
  };

  const handleAddExpense = () => {
    if (selectedCategory && expenseAmount) {
      const newExpense: IValues = {
        id: Date.now(),
        amount: parseFloat(expenseAmount),
      };

      setCategories({
        ...categories,
        [selectedCategory]: [...categories[selectedCategory], newExpense],
      });

      setExpenseAmount("");
      toast({
        title: "Success",
        description: `Added the expense under ${selectedCategory}`,
      });
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-circle-plus"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="min-h-[50vh] bg-black border-t-neutral-600"
      >
        <SheetHeader>
          <SheetTitle className="text-white">Add Expense</SheetTitle>
          <SheetDescription className="gap-4 flex flex-col">
            <Select
              value={selectedCategory}
              onValueChange={(e) => setSelectedCategory(e)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="Miscellaneous">Miscellaneous</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className=" bg-black border-neutral-600"
              placeholder="Amount"
              type="tel"
              value={expenseAmount}
              onChange={handleExpenseAmountChange}
            />
            <Button onClick={handleAddExpense}>Add</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddExpense;
