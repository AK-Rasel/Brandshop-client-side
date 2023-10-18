
import BrandCard from "../../Components/BrandCard/BrandCards";
import Banner from "../../Components/Header/Banner/Banner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Cart from "../ProductsCard/ProductsCard";



const Home = () => {
    return (
        <>
        <Banner/>
        <BrandCard/>
        {/* <Cart/> */}
        <WhyChooseUs/>
        </>
    );
};

export default Home;