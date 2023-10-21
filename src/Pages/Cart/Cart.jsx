// import { Link } from "react-router-dom";

import { useEffect, useState, useContext } from "react";

import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

// import Swal from "sweetalert2";

const Cart = () => {
  const data = useContext(AuthContextProvider);
  const email = data.user.email;
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/request-cart", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setCarts(data);
    };
    fetchData();
  }, []);

  const deleteHandle = (id) => {
    const originalCartItems = [...carts];
    setCarts((items) => {
      const data = items.filter((item) => item.id !== id);

      const deleteCart = async () => {
        try {
          const response = await fetch(
            "http://localhost:5001/delete-cart-item",
            {
              method: "DELETE",
              body: JSON.stringify({ id, email }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) throw new Error("deletion failed");
        } catch (err) {
          console.log(err.message);
          setCarts(originalCartItems);
        }
      };

      deleteCart();

      return data ? (
        data
      ) : (
        <div>
          <h1>no Found</h1>
        </div>
      );
    });
  };

  return (<>{!carts.length ? ( <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-6xl font-bold mb-6">data not Found</h1>
      <Link to={'/'} className="btn bg-[#F0C543] hover:bg-[#23393D] hover:text-white">Go to home</Link>
    </div>
  </div>
</div>) : (
    <div>
      {carts.map((cart, index) => (
  
        <div className=" container mx-auto" key={index}>
          <div className="mx-14">
            <div className="flex justify-between rounded-xl  md:card-side bg-base-100 border hover:border-[#F0C543] my-10">
              <img
                className=" w-40"
                src={cart.image}
                alt="Movie"
              />
              <div className="flex items-center gap-11">
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
        </div>
      ))}
    </div>
  )
  }</>
    
  );
};

export default Cart;



// (
//   <div>
//     {carts.map((cart, index) => (

//       <div className=" container mx-auto" key={index}>
//         <div className="mx-14">
//           <div className="flex justify-between rounded-xl  md:card-side bg-base-100 border hover:border-[#F0C543] my-10">
//             <img
//               className=" w-40"
//               src={cart.image}
//               alt="Movie"
//             />
//             <div className="flex items-center gap-11">
//               <div className="flex">
//                 <p className="text-xl font-semibold">{cart.name}</p>
//                 {/* <p className="text-xl font-semibold">{model}</p> */}
//               </div>

//               <p className="font-medium">Price : ${cart.price}</p>
//               <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
//                 {/* <p>{rating}/5 Ratings</p> */}
//               </div>
//               <hr className="my-1 border border-[#F0C543]" />

//               {/* {description.length > 150 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>} */}
//               <div className="card-actions justify-end">
//                 {/* <Link to={`/product-details/${_id}`} className="btn  rounded-none hover:bg-[#F0C543] text-[#F0C543] hover:text-white btn-ghost font-semibold normal-case text-base">View Details</Link> */}
//                 <button
//                   onClick={() => deleteHandle(cart.id)}
//                   className="btn  rounded-none btn-ghost text-[#F0C543] font-semibold normal-case text-base"
//                 >
//                   Delate
//                 </button>
//                 {/* <Link to={`/update-product/${_id}`} className="btn hover:bg-[#F0C543] rounded-none btn-ghost text-[#F0C543] hover:text-white  font-semibold normal-case text-base">Update</Link> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );
