

const AddNewProduct = () => {
    return (
        <div className="hero min-h-[70vh] ">
            <div className="max-w-7xl  mx-auto  py-12 px-36">
                <form  >
                    <div className="hero-content flex-col">
                        <h1 className="font-Montserrat uppercase text-4xl font-bold text-[#F0C543]">Add New Product</h1>
                        
                    </div>
                    <div className="grid grid-cols-2  gap-6">
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
                                <input type="text" name="Brand" placeholder="Enter Brand Name" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/*  model */}
                            <div>
                                <label className="label">
                                    <span className="label-text">model Name</span>
                                </label>
                                <input type="text" name=" model" placeholder="Enter Model Name" className="input border-[#F0C543]  focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            {/* Availability */}
                            <div>
                            <label className="label">
                                    <span className="label-text">Availability</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter Category" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
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
                                <input type="text" name="description" placeholder="Enter Descriptione" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                            </div>
                            
                            {/* Rating */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name="Rating" type="text" placeholder="Enter Rating " className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
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
                           
                            <input type="url" name="Image" placeholder="Enter Image URL" className="input border-[#F0C543] focus:outline-none rounded-none input-bordered w-full " />
                        </div>
                       
                        <input type="submit" value="Add New Product" className="btn rounded-none text-lg w-full bg-[#F0C543]  border font-Rancho normal-case  text-[#23393D]  hover:bg-[#23393D] hover:text-white" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddNewProduct;