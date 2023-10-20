import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductsCard = ({ product }) => {
    const { _id, image, brand, model, name, availability, price, description, rating } = product
    // console.log(brandProducts)

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
        
        <div>

            <div className="card md:card-side bg-base-100 border hover:border-[#F0C543]">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">

                    <div className="flex">
                        <p className="text-xl font-semibold">{name} <span className="text-xl font-semibold opacity-70">{model}</span></p>
                        {/* <p className="text-xl font-semibold">{model}</p> */}
                    </div>
                    <p className="font-medium">{availability}</p>
                    <p className="font-medium">{price}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">

                        <p>{rating}/5 Ratings</p>
                    </div>
                    <hr className="my-1 border border-[#F0C543]" />

                    {description.length > 150 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>}
                    <div className="card-actions justify-end">
                        <Link to={`/product-details/${_id}`} className="btn  rounded-none hover:bg-[#F0C543] text-[#F0C543] hover:text-white btn-ghost font-semibold normal-case text-base">View Details</Link>
                        {/* <button onClick={() => deleteHandle(_id)} className="btn  rounded-none btn-ghost text-red-500 font-semibold normal-case text-base">Delat</button> */}
                        <Link to={`/update-product/${_id}`} className="btn hover:bg-[#F0C543] rounded-none btn-ghost text-[#F0C543] hover:text-white  font-semibold normal-case text-base">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;