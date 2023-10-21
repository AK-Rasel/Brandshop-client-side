import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
// import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
   const locat = useLocation()
   const naviget = useNavigate();
    
  const { user, googleLogin, login } = useContext(AuthContextProvider);
  const d = useContext(AuthContextProvider);
  
  const [loginError, setLoginError] = useState("");
  const loginEven = (e) => {
    e.preventDefault();

    //
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    login(email, password)
      .then(() => {
        e.target.reset();
        naviget(locat?.state ? locat?.state : "/")
        toast.success("login Succsses");
        // console.log(result.user.email)
        
      })
      .catch((error) => setLoginError(error.message));
  };
  //    google
  const singInWithGoogleHandele = () => {
    googleLogin()
      .then((result) => {
        naviget(locat?.state ? locat?.state : "/")
        toast.success("Google With login Succsses");
        const {
          user: { email },
        } = result;
        fetch("http://localhost:5001/create-user", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .catch((error) => setLoginError(error.message));
  };

  return (
    <div className=" flex flex-col min-h-[70vh]  mx-auto">
      <div className="hero-content flex-col  m-auto w-full ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5 text-[#F0C543]">Login now!</h1>
        </div>
        <div className=" flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={loginEven} className=" p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text border-[#F0C543]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input focus:outline-none rounded-none border-[#F0C543] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input rounded-none focus:outline-none input-bordered border-[#F0C543]"
                required
              />
              {/* massagess */}
              <label className="label">
                {loginError && (
                  <span className="text-red-600">{loginError}</span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn rounded-none bg-[#F0C543] 
                            hover:bg-[#23393D] hover:text-white
                            normal-case"
              >
                Login Now
              </button>
            </div>
          </form>
          <div className="pb-8">
            <div className="flex items-center px-8">
              <hr className="border border-[#23393D] px-5 w-full " />
              <p className="px-8 font-medium text-[#23393D]">Or</p>
              <hr className="border  px-5 w-full border-[#23393D]" />
            </div>

            <div className="p-5 pb-0 text-[#23393D]]">
              <button
                onClick={singInWithGoogleHandele}
                className="btn text-white hover:text-[#23393D] rounded-none bg-[#23393D] 
                            hover:bg-[#F0C543] 
                            normal-case w-full"
              >
                Login With Google{" "}
              </button>
            </div>

            <div className="flex items-center gap-1 justify-center pt-4">
              <p>Do not have an Account?</p>
              <Link
                to={"/register"}
                className=" normal-case font-medium text-[#F0C543] hover:text-[#23393D]"
              >
                Create One
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
