import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer
            position="top-center"
            reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;