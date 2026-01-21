import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
