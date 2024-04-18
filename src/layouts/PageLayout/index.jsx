import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/Footer";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
export default PageLayout;
