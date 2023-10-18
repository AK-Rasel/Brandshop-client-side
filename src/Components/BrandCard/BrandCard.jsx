import { Link } from "react-router-dom";


const BrandCard = ({ brandNameCard }) => {
    const { name, image } = brandNameCard
    return (
        

            <Link to={`products/${name}`} className="card bg-base-100 shadow-xl mb-10">
                <img src={image} alt="Shoes" className=" p-2 h-56 mx-auto" />
                <div className="p-4 ">
                    <h2 className=" text-center font-Montserrat font-bold text-xl py-5">{name}</h2>
                </div>
            </Link>
        
    );
};

export default BrandCard;