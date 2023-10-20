import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
// import { useEffect, useState } from "react";
import Banner from "../../Components/Header/Banner/Banner";


const Products = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
    // const name = useParams()
    // const [brandProducts, setBrandProducts] = useState({})
    // console.log(name)
    // const find = allProducts.filter(allProduct => allProduct.brand == name)

    return (
        <div>
            <Banner></Banner>
            {/* <div className="grid grid-cols-3 gap-8 container mx-auto">
            {
                allProducts.map(brandProducts=><ProductsCard key={brandProducts._id} brandProducts={brandProducts} ></ProductsCard>)
                
            }
           
        </div> */}
        <div className="container mx-auto my-16">
            
        
        <div className=" grid gap-10 grid-cols-1  ">
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