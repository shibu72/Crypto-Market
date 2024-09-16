import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-[70%] m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
