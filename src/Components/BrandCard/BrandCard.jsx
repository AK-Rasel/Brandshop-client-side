

const BrandCard = ({ brandNameCard }) => {
    const { name, image } = brandNameCard
    return (
        

            <div className="card bg-base-100 shadow-xl mb-10">
                <img src={image} alt="Shoes" className=" p-2 h-56 mx-auto" />
                <div className="p-4 ">
                    <h2 className=" text-center font-Montserrat font-bold text-xl py-5">{name}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full bg-[#F0C543]  text-[#23393D] border-none font-bold hover:bg-[#23393D] hover:text-white ">View Diteles</button>
                    </div>
                </div>
            </div>
        
    );
};

export default BrandCard;