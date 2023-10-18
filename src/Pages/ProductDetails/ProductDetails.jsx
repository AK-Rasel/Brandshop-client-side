

const ProductDetails = () => {
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content gap-12 flex-col items-start lg:items-center lg:flex-row">
                    <img src="https://templates.hibotheme.com/motoz/default/assets/img/product/single-product-1.webp" className="max-w-sm flex-1 rounded-lg shadow-2xl " />
                    <div className="space-y-3 ">
                        <h1 className="text-2xl font-bold">Audi Trone Electric Car</h1>
                        <p className=" font-semibold">Price: $240.10</p>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>2K+ Ratings</p>
                        </div>
                        <p className="p-2">Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur aut odit aut.</p>
                        <p>Availability :  In Stock</p>
                        <p>Category :Sports Car</p>
                        <p>Tags :White</p>
                        <button className="btn rounded-none btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;