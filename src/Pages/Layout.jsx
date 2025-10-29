import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-16 bg-bright-gray min-h-[calc(100vh-96px)]">
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
