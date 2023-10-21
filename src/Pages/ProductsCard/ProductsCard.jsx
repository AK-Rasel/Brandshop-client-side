import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductsCard = ({ product }) => {
    const { _id, image, brand, model, name, availability, price, description, rating } = product
    // console.log(brandProducts)

    return (

        <div>

            <div className="card md:card-side bg-base-100 border hover:border-[#F0C543]">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="flex justify-center items-center p-8 ">

                    <div className="space-y-1 md:space-y-2 lg:space-y-3">
                        
                            <p className="lg:text-3xl text-xl font-semibold">Name  : {name} </p>
                            <p className="lg:text-2xl text-xl font-semibold">Model : {model}</p>
                        
                        <p className="font-medium">Availability : {availability}</p>
                        <p className="font-medium">Price : ${price}</p>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">

                            <p>Ratings  {rating}/5 </p>
                        </div>
                        <hr className="my-1 border border-[#F0C543]" />

                        {description.length > 150 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>}
                        <div className="card-actions justify-end">
                            <Link to={`/product-details/${_id}`} className="btn  rounded-none hover:bg-[#F0C543] text-[#F0C543] hover:text-white btn-ghost font-semibold normal-case text-base">View Details</Link>
                            {/* <button onClick={() => deleteHandle(_id)} className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Delat</button> */}
                            <Link to={`/update-product/${_id}`} className="btn hover:bg-[#F0C543] rounded-none btn-ghost text-[#F0C543] hover:text-white  font-semibold normal-case text-base">Update</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;