import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const BrandCards = () => {
    const [brandNameCards, setBrandNameCards] = useState([])
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setBrandNameCards(data))
    }, [])
    return (
        <div className="px-5 lg:px-2">
            <div className="text-center my-10">
                <h1 className="font-extrabold md:text-4xl lg:text-5xl uppercase font-Montserrat text-[#F0C543]">Find Your Dream Brands</h1>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brandNameCards.map(brandNameCard => <BrandCard key={brandNameCard.id} brandNameCard={brandNameCard}></BrandCard>)
                }
            </div>
        </div>

    );
};

export default BrandCards;