import Layout from "@/Components/global/Layout";
import AddExpense from "./components/add-expense";
import Bars from "./components/bars";

const Home = () => {
  return (
    <Layout>
      <section>
        <Bars />
        <div>day week month</div>
        <AddExpense />
      </section>
    </Layout>
  );
};

export default Home;
