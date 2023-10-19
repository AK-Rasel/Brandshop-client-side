// import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div className="w-96 p-6 bg-base-100 shadow-xl my-10 flex-grow">
            <img className=" h-56 mx-auto mb-8" src='https://i.ibb.co/4tYTfXY/Tesla-Model-S-2016-01.jpg' alt="Shoes" />
            <div className=" my-auto   pt-0">
                <h2 className="card-title font-medium text-base text-gray-500">s60</h2>
                <div className="flex">
                <p className="text-xl font-semibold">Car Name <span className="text-xl font-semibold">ma</span></p>
                {/* <p className="text-xl font-semibold">{model}</p> */}
                </div>
                <p className="font-medium">inStock</p>
                <p className="font-medium">8000</p>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>5 Ratings</p>
                </div>
                <hr  className="my-1"/>
                {/* {description.length > 150 ? <p>{description.slice(0,100)}...</p> :<p>{description}</p> } */}
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa accusantium nulla id cum, odit deserunt reprehenderit unde, velit, sint omnis consequuntur modi. Dolorum cum natus ad necessitatibus commodi corporis!</p>
                <div className=" flex flex-wrap md:justify-center md:gap-4 justify-between">
                    <button   className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">View Details</button>
                    <button  className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Delat</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Cart;