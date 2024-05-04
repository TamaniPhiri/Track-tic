import Layout from "@/Components/global/Layout";
import Bars from "./components/bars";

const Home = () => {
  return (
    <Layout>
      <section>
        <Bars />
        <div>day week month</div>
      </section>
    </Layout>
  );
};

export default Home;
