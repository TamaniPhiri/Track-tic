import AddExpense from "@/pages/Home/components/add-expense";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 px-4">
      <div className="flex w-full items-center p-4 justify-between bg-black bg-opacity-70 backdrop-blur-md">
        <div>1</div>
        <AddExpense />
        <div>1</div>
      </div>
    </nav>
  );
};

export default NavBar;
