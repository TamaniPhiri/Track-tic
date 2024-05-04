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

const AddExpense = () => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="min-h-[50vh] bg-black border-t-neutral-600"
      >
        <SheetHeader>
          <SheetTitle className="text-white">Add Expense</SheetTitle>
          <SheetDescription className="gap-4 flex flex-col">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Input className=" bg-black border-neutral-600" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddExpense;
