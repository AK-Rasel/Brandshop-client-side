import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id,image,brand,model,name,availability,price,description,rating,category} =  product
    const upDatehandle = (e) => {
        e.preventDefault()
        const from = e.target
        const name  = from.name.value
        const brand  = from.brand.value
        const model  = from.model.value
        const availability  = from.availability.value
        const price  = from.price.value
        const description  = from.description.value
        const rating = from.rating.value
        const category = from.category.value
        const image = from.image.value
         const upDateProduct = {model,name,brand,availability,price,description,rating,category,image}

         fetch(`http://localhost:5001/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(upDateProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data. modifiedCount > 0) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  

            }
        })
    }
    return (
        <div className="hero min-h-[70vh] ">
            <div className="max-w-7xl  mx-auto  py-12 px-36">
                <form onSubmit={upDatehandle}>
                    <div className="hero-content flex-col">
                        <h1 className="font-Montserrat uppercase text-4xl font-bold text-[#F0C543]">Update Product</h1>
                        
                    </div>
                    <div className="flex gap-6">
                        <div className="w-full">
                            {/* Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input defaultValue={name} type="text" name="name" placeholder="Enter coffee name"  className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* Brand Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input defaultValue={brand} type="text" name="brand" placeholder="Enter Brand Name" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/*  model */}
                            <div>
                                <label className="label">
                                    <span className="label-text">model Name</span>
                                </label>
                                <input defaultValue={model} type="text" name="model" placeholder="Enter Model Name" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* Availability */}
                            <div>
                            <label className="label">
                                    <span className="label-text">Availability</span>
                                </label>
                                <input defaultValue={availability} type="text" name="availability" placeholder="Enter category" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                        </div>

                        <div className="w-full">
                            {/* Price */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={price} type="text" name="price" placeholder="Enter Price" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* description */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input defaultValue={description} type="text" name="description" placeholder="Enter Descriptione" className="input focus:outline-none rounded-none border-[#F0C543] input-bordered w-full " />
                            </div>
                            {/* Rating */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input defaultValue={rating} name="rating" type="text" placeholder="Enter Rating " className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* category */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">category</span>
                                </label>
                                <input defaultValue={category}  type="text" name="category" placeholder="Enter category" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                        </div>
                        {/*  */}

                    </div>
                    <div className="flex flex-col gap-6">
                        {/* Image */}
                        <div>
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                           
                            <input defaultValue={image} type="url" name="image" placeholder="Enter Image URL" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                        </div>
                       
                        <input type="submit" value="Update Product" className="btn rounded-none text-lg w-full bg-[#F0C543]  border font-Rancho normal-case  text-[#23393D]  hover:bg-[#23393D] hover:text-white" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateProduct;