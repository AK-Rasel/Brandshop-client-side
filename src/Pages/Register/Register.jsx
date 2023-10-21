import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createRegister } = useContext(AuthContextProvider);
  const locat = useLocation()
  
  const naviget = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const registerHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setRegisterError("Password must contain last 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Must give an upper case letter.");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setRegisterError("Must include a special character");
      return;
    }

    // reset error
    setRegisterError("");
    // setRegisterSuccess('')

    // console.log(password, email)

    createRegister(email, password)
      .then((result) => {
        e.target.reset();
        naviget(locat?.state ? locat?.state : "/")
        toast.success("Register Succsses Fully");
        // console.log(result.user)
        // setRegisterSuccess("Register Successfully")
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
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div className=" flex flex-col min-h-[70vh]  mx-auto">
      <div className="hero-content flex-col  m-auto w-full ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5 text-[#F0C543]">
            Register now!
          </h1>
        </div>
        <div className=" flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={registerHandle} className=" p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text border-[#F0C543]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter New Email"
                className="input rounded-none focus:outline-none border-[#F0C543] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input rounded-none focus:outline-none input-bordered border-[#F0C543]"
                required
              />
              {/* massagess */}
              <label className="label">
                {registerError && (
                  <span className="text-red-600">{registerError}</span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn rounded-none bg-[#F0C543] 
                            hover:bg-[#23393D] hover:text-white
                            normal-case"
              >
                Register Now
              </button>
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
              <Link
                to={"/login"}
                className=" normal-case font-medium text-[#F0C543] hover:text-[#23393D]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
