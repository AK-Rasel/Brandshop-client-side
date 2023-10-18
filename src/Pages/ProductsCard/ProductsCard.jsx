import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductsCard = ({brandProducts}) => {
    const {_id,image,brand,model,name,availability,price,description,rating} = brandProducts
    console.log(brandProducts)

    // const deleteHandle = _id => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
            
    //         fetch(`http://localhost:5001/products/${_id}`,{
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.dletedCount > 0) {
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your file has been deleted.',
    //                     'success'
    //                   )
    //             }
    //         })
    //         }
    //       })
    // }


    return (
        <div className=" p-6 bg-base-100 shadow-xl my-10 flex-grow">
            <img className=" h-56 mx-auto mb-8" src={image} alt="Shoes" />
            <div className=" my-auto   pt-0">
                <h2 className="card-title font-medium text-base text-gray-500">{brand}</h2>
                <div className="flex">
                <p className="text-xl font-semibold">{name} <span className="text-xl font-semibold">{model}</span></p>
                {/* <p className="text-xl font-semibold">{model}</p> */}
                </div>
                <p className="font-medium">{availability}</p>
                <p className="font-medium">{price}</p>
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
                <hr  className="my-1"/>
                {description.length > 150 ? <p>{description.slice(0,100)}...</p> :<p>{description}</p> }
                <div className=" flex flex-wrap md:justify-center md:gap-4 justify-between">
                    <button  className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">View Details</button>
                    {/* <button onClick={() => deleteHandle(_id)} className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Delat</button> */}
                    <Link to={`/update-product/${_id}`} className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;