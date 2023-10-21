import { Link, useLoaderData,  } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

import Banner from "../../Components/Header/Banner/Banner";


const Products = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
   

    return (
        <div>
            <Banner></Banner>
            
        <div className="container mx-auto my-16">
            
        
        <div className=" grid gap-10 grid-cols-1  px-5 lg:px-2">
            {
               allProducts.slice(0,1).map(product => (<h1 key={product._id} className="text-center text-5xl font-Montserrat font-bold text-[#F0C543]">{product.brand}</h1>)) 
            }
            {
                allProducts.length ? (
                    allProducts.map((product)=><ProductsCard key={product._id}
                        product={product}></ProductsCard>)
                ):<div className=" h-[70vh] grid justify-center items-center">
                <div className="text-center">
                    <div >
                    <h3 className="  text-7xl font-bold mb-5">Product Coming soon.....</h3>
                    </div>
                    <Link to={'/'} className="btn  bg-[#F0C543] text-[#23393D] hover:bg-[#23393D]
                    hover:text-white
                    ">Goto Home</Link>
                </div>
            </div>
            }
        </div>
        </div>
        </div>
    );
};

export default Products;