import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
