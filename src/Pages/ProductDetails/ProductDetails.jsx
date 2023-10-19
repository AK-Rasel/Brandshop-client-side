import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const productData = useLoaderData()
    const {_id : id,image,brand,model,name,availability,price,description,rating,category} = productData
    
    const cartHandle = () =>{
        const myCart = localStorage.getItem("my-cart");
        if (!myCart) {
          localStorage.setItem("my-cart", JSON.stringify([]));
        }
    
        if (myCart) {
          const myCart = JSON.parse(localStorage.getItem("my-cart"));
          const carItem = {
            id,
            name,
            brand,
            price,
          };
    
          const cars = myCart.find((item) => item.id === carItem.id);
    
          if (cars) {
            console.log("Already added");
          } else localStorage.setItem("my-cart", JSON.stringify([...myCart, carItem]));
        }
    }
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content gap-12 flex-col items-start lg:items-center lg:flex-row">
                    <img src={image} className="max-w-sm flex-1 rounded-lg shadow-2xl " />
                    <div className="space-y-3 ">
                        <h1 className="text-2xl font-bold">{brand}</h1>
                        <h1 className="text-2xl font-bold">{name} <span>{model}</span></h1>
                        <p className=" font-semibold">Price: ${price}</p>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>{rating} Ratings</p>
                        </div>
                        <p className="p-2">{description}</p>
                        <p>Availability :  {availability}</p>
                        <p>Category :{category}</p>
                        <p>Tags :White</p>
                        <button onClick={cartHandle} className="btn rounded-none btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;