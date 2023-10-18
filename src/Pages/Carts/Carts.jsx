

const Cart = () => {
    return (
        <div className=" w-96 bg-base-100 shadow-xl my-10 ">
            <figure><img src="https://images.cars.com/in/v2/stock_photos/7f212472-c429-4681-882b-29e52f4d52b5/884b28bd-d67f-4c90-a7e5-a066090db8f7.png?w=1000" alt="Shoes" /></figure>
            <div className="card-body pt-0">
                <h2 className="card-title font-medium text-base text-gray-500">BMW</h2>
                <p className="text-xl font-semibold">Nissan Sports T10</p>
                <p className="font-medium">Price:  $62000</p>
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
                <hr  className="my-1"/>
                <div className="card-actions  justify-center">
                    <button className="btn w-full rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;