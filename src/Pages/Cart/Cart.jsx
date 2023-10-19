// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Cart = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const myCart = JSON.parse(localStorage.getItem("my-cart"));
        setCarts(myCart);
    }, []);


    const deleteHandle = (id) => {
        setCarts((items) => {
            const data = items.filter((item) => item.id !== id);
            localStorage.setItem("my-cart", JSON.stringify(data));
            // problem
            return data 
        });
    };

    return (
        <div>

            <div>
                {
                    carts.map(cart => (<div key={cart.id}><div className="w-96 p-6 bg-base-100 shadow-xl my-10 flex-grow">
                        <img className=" h-56 mx-auto mb-8" src='https://i.ibb.co/4tYTfXY/Tesla-Model-S-2016-01.jpg' alt="Shoes" />
                        <div className=" my-auto   pt-0">
                            <h2 className="card-title font-medium text-base text-gray-500">s60</h2>
                            <div className="flex">
                                <p className="text-xl font-semibold">Car Name <span className="text-xl font-semibold">{cart.name}</span></p>

                            </div>
                            <p className="font-medium">inStock</p>
                            <p className="font-medium">price : {cart.price}</p>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">

                                <p>4/5 Ratings</p>
                            </div>
                            <hr className="my-1" />


                            <p></p>


                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa accusantium nulla id cum, odit deserunt reprehenderit unde, velit, sint omnis consequuntur modi. Dolorum cum natus ad necessitatibus commodi corporis!</p>
                            <div className=" flex flex-wrap md:justify-center md:gap-4 justify-between">
                                <button className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">View Details</button>
                                <button onClick={() => deleteHandle(cart.id)} className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Delat</button>

                            </div>
                        </div>
                    </div></div>))
                }
            </div>
        </div>
    );
};

export default Cart;