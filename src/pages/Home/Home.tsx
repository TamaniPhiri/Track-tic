import AddExpense from "./components/add-expense";
import Bars from "./components/bars";

const Home = () => {
  return (
    <section>
      <Bars />
      <div>day week month</div>
      <AddExpense />
    </section>
  );
};

export default Home;
