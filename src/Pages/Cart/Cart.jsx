// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

// import Swal from "sweetalert2";

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
      return data ? (
        data
      ) : (
        <div>
          <h1>no Found</h1>
        </div>
      );
    });
  };

  return (
    <div>
      {carts.map((cart) => (
        // <div key={cart.id}><div className="w-96 p-6 bg-base-100 shadow-xl my-10 flex-grow">
        //     <img className=" h-56 mx-auto mb-8" src={cart.photo} alt="Shoes" />
        //     <div className=" my-auto   pt-0">
        //         <h2 className="card-title font-medium text-base text-gray-500">{cart.brand}</h2>
        //         <div className="flex">
        //             <p className="text-xl font-semibold">{cart.name}</p>

        //         </div>
        //         <p className="font-medium">inStock</p>
        //         <p className="font-medium">price :${cart.price}</p>
        //         <div className="flex items-center gap-2 text-sm font-medium text-gray-500">

        //             <p>4/5 Ratings</p>
        //         </div>
        //         <hr className="my-1" />

        //         <p></p>

        //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa accusantium nulla id cum, odit deserunt reprehenderit unde, velit, sint omnis consequuntur modi. Dolorum cum natus ad necessitatibus commodi corporis!</p>
        //         <div className=" flex flex-wrap md:justify-center md:gap-4 justify-between">
        //             <button className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">View Details</button>
        //             <button onClick={() => deleteHandle(cart.id)} className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Delat</button>

        //         </div>
        //     </div>
        // </div></div>
        <div className="container mx-auto" key={cart.id}>
          <div className="card rounded-xl h-60 md:card-side bg-base-100 border hover:border-[#F0C543] my-10">
            <img
              className="h-full"
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
              alt="Movie"
            />
            <div className="card-body">
              <div className="flex">
                <p className="text-xl font-semibold">{cart.name}</p>
                {/* <p className="text-xl font-semibold">{model}</p> */}
              </div>

              <p className="font-medium">Price : ${cart.price}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                {/* <p>{rating}/5 Ratings</p> */}
              </div>
              <hr className="my-1 border border-[#F0C543]" />

              {/* {description.length > 150 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>} */}
              <div className="card-actions justify-end">
                {/* <Link to={`/product-details/${_id}`} className="btn  rounded-none hover:bg-[#F0C543] text-[#F0C543] hover:text-white btn-ghost font-semibold normal-case text-base">View Details</Link> */}
                <button
                  onClick={() => deleteHandle(cart.id)}
                  className="btn  rounded-none btn-ghost text-[#F0C543] font-semibold normal-case text-base"
                >
                  Delate
                </button>
                {/* <Link to={`/update-product/${_id}`} className="btn hover:bg-[#F0C543] rounded-none btn-ghost text-[#F0C543] hover:text-white  font-semibold normal-case text-base">Update</Link> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
