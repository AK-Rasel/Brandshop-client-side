import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen grid justify-center items-center font-Montserrat">
            <div className="text-center space-y-6">
                
                <div className="">
                <h1 className="-mb-14 text-[250px] font-extrabold">4<span className="text-[#F0C543]">0</span>4</h1>
                <p className=" font-semibold text-2xl">Pages Not Found</p>
                <p className="text-lg font-medium text-gray-500">THe page you're looking for dose not seen to exist</p>
                </div>
                
                
                <Link to={'/'} className="btn  bg-[#F0C543] text-[#23393D] hover:bg-[#23393D]
                hover:text-white
                ">Goto Home</Link>
            </div>
        </div>
    );
};

export default Error;