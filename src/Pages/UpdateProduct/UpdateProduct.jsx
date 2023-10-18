

const UpdateProduct = () => {
    const upDatehandle = () => {
        e.preventDefault()
        const from = e.target
        const name  = from.name.value
        const brand  = from.brand.value
        const model  = from.model.value
        const availability  = from.availability.value
        const price  = from.price.value
        const description  = from.description.value
        const rating = from.rating.value
        const tags = from.tags.value
        const image = from.image.value
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
                                <input type="text" name="name" placeholder="Enter coffee name"  className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* Brand Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="Enter Brand Name" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/*  model */}
                            <div>
                                <label className="label">
                                    <span className="label-text">model Name</span>
                                </label>
                                <input type="text" name="model" placeholder="Enter Model Name" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* Availability */}
                            <div>
                            <label className="label">
                                    <span className="label-text">Availability</span>
                                </label>
                                <input type="text" name="availability" placeholder="Enter Category" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                        </div>

                        <div className="w-full">
                            {/* Price */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter Price" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* description */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter Descriptione" className="input focus:outline-none rounded-none border-[#F0C543] input-bordered w-full " />
                            </div>
                            {/* Rating */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name="rating" type="text" placeholder="Enter Rating " className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* Tags */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Tags</span>
                                </label>
                                <input type="text" name="tags" placeholder="Enter Tags" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
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
                           
                            <input type="url" name="image" placeholder="Enter Image URL" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                        </div>
                       
                        <input type="submit" value="Update Product" className="btn rounded-none text-lg w-full bg-[#F0C543]  border font-Rancho normal-case  text-[#23393D]  hover:bg-[#23393D] hover:text-white" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateProduct;