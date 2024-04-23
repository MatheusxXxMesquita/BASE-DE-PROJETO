import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../Pages/sitePages/Home";
import Login from "../Pages/adminPages/Login";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/cardapio" element={<Login/>}/>
            </Route>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
