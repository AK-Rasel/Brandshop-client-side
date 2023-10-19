import { useLoaderData, useParams } from "react-router-dom";
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
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-12 ">
            {
                allProducts.length ? (
                    allProducts.map((product)=><ProductsCard key={product._id}
                        product={product}></ProductsCard>)
                ):<h1>Coming soon!</h1>
            }
        </div>
        </div>
    );
};

export default Products;