import { Link } from "react-router-dom";
import cart from "./../assets/navbar/iconCart.svg";
import userImage from "./../assets/navbar/image-avatar.png";

export default function Navbar() {
  interface links {
    name: string;
    path: string;
  }
  const navLink: links[] = [
    {
      name: "Collections",
      path: "/collections",
    },
    {
      name: "Men",
      path: "/collections",
    },
    {
      name: "Women",
      path: "/collections",
    },
    {
      name: "About",
      path: "/collections",
    },
    {
      name: "Contact",
      path: "/collections",
    },
  ];
  return (
    <div className="flex justify-between items-center px-[10em] py-[2em] border-b-[2px] ">
      <div className="flex gap-10 items-center">
        <h1 className="text-[40px] font-['Kanit']">sneakers</h1>

        <div className="flex gap-3">
          {navLink.map((link, index) => {
            return (
              <Link key={index} to={link.path}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <img src={cart} alt="cart.svg" />
        <img src={userImage} alt="userImage.png" className="w-[40px]" />
      </div>

    </div>
  );
}
