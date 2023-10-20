
import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandCard/BrandCards";
import Banner from "../../Components/Header/Banner/Banner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import HowCanWeHelp from "../../Components/HowCanWeHelp/HowCanWeHelp";




const Home = () => {
    
    return (
        <>
        <Banner/>
        <BrandCard/>
        {/* <Cart/> */}
        <WhyChooseUs/>
        <HowCanWeHelp/>
        </>
    );
};

export default Home;