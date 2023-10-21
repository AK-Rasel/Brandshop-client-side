import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContextProvider } from "../../AuthProvider/AuthProvider";

const ProductDetails = () => {
  const productData = useLoaderData();
  const {
    user: { email },
  } = useContext(AuthContextProvider);
  const {
    _id: id,
    image,
    brand,
    model,
    name,
    availability,
    price,
    description,
    rating,
    category,
  } = productData;

  const cartHandle = () => {
    // const myCart = localStorage.getItem("my-cart");
    // if (!myCart) {
    //   localStorage.setItem("my-cart", JSON.stringify([]));
    // }

    // if (myCart) {
    //   const myCart = JSON.parse(localStorage.getItem("my-cart"));
    //   const carItem = {
    //     id,
    //     name,
    //     brand,
    //     price,
    //   };

    //   const cars = myCart.find((item) => item.id === carItem.id);

    //   if (cars) {
    //     console.log("Already added");
    //   } else localStorage.setItem("my-cart", JSON.stringify([...myCart, carItem]));
    // }

    fetch("http://localhost:5001/add-to-cart", {
      method: "PUT",
      body: JSON.stringify({ id, image, brand, model, name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="container mx-auto ">
      <div className="hero min-h-screen ">
        <div className="hero-content gap-12 flex-col items-start lg:items-center lg:flex-row">
          <img src={image} className="max-w-xs md:max-w-md  flex-1 rounded-lg shadow-2xl " />
          <div className="space-y-3 ">
            <h1 className="text-4xl font-bold">{brand}</h1>
            <h1 className="text-xl font-semibold">Model Name : {name} <span>{model}</span>
            </h1>
            <p className=" font-semibold">Price: ${price}</p>
            <p className="font-medium">{rating}/5 Ratings</p>
            <div className="space-y-2  md:text-start font-medium">
              <p className="font-normal">{description}</p>
              <p>Availability : {availability}</p>
              <p>Category : {category}</p>
              <button
                onClick={cartHandle}
                className="btn rounded-none bg-[#F0C543] text-[#23393D] hover:bg-[#23393D] hover:text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
