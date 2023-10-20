import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  const NavLinks = <>
    <li><NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#F0C543] underline link link-hover" : ""
      }
    >
      Home
    </NavLink></li>

    <li><NavLink
      to="/add-new-product"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#F0C543]  underline link link-hover" : ""
      }
    >
      Add New Product
    </NavLink></li>

    <li><NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#F0C543] underline link link-hover" : ""
            }
        >
            Cart
        </NavLink></li>
  </>
  return (
    // <footer className="footer bg-[#23393D]   p-10  text-neutral-content">

    //   <Link to="/" className=" font-bold text-3xl  border-none normal-case "> Auto<span className="text-[#F0C543]">Motors</span></Link>

      // <ul className="flex gap-4">
      //   {NavLinks}
      // </ul>

    // </footer>
    <footer className="footer h-48 footer-center p-10 bg-[#23393D]     text-neutral-content ">
      <aside className="space-y-5">
      <Link to="/" className=" font-bold text-3xl  border-none normal-case "> Auto<span className="text-[#F0C543]">Motors</span></Link>
      <ul className="flex gap-4">
        {NavLinks}
      </ul>
      </aside>
      
    </footer>
  );
};

export default Footer;