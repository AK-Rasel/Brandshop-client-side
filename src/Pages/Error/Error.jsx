import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen grid justify-center items-center">
            <div className="text-center">
                <div className="-mb-20">
                <h3 className="  text-7xl font-bold">Uh-Oh...</h3>
                <p className=" font-semibold text-lg">Pages Not Found</p>
                </div>
                <h1 className="text-[250px] font-extrabold">4<span className="text-[#F0C543]">0</span>4</h1>
                <Link to={'/'} className="btn  bg-[#F0C543] text-[#23393D] hover:bg-[#23393D]
                hover:text-white
                ">Goto Home</Link>
            </div>
        </div>
    );
};

export default Error;