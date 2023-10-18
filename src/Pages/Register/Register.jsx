import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className=" flex flex-col min-h-[70vh]  mx-auto">
            <div className="hero-content flex-col  m-auto w-full ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-[#F0C543]">Register now!</h1>
                </div>
                <div className=" flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form className=" p-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text border-[#F0C543]">Email</span>
                            </label>
                            <input type="email" placeholder="Enter New Email" className="input rounded-none focus:outline-none border-[#F0C543] input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input rounded-none focus:outline-none input-bordered border-[#F0C543]" required />
                            {/* massagess */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover border-[#F0C543]">massagess</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-none bg-[#F0C543] 
                            hover:bg-[#23393D] hover:text-white
                            normal-case">Register Now</button>
                        </div>
                    </form>
                    <div className="pb-8">
                        <div className="flex items-center px-8">
                            <hr className="border border-[#23393D] px-5 w-full " />
                            <p className="px-8 font-medium text-[#23393D]">Or</p>
                            <hr className="border  px-5 w-full border-[#23393D]" />

                        </div>
                        

                        <div className="flex items-center gap-1 justify-center">
                            <p>Have an Account?</p>
                            <Link to={'/login'} className=" normal-case font-medium text-[#F0C543] hover:text-[#23393D]">Sign In</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Register;