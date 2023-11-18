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
    <div className="flex justify-between">
      <div className="flex gap-10">
        <span>sneakers</span>

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

      <div>
        <img src={cart} alt="cart.svg" />
        <img src={userImage} alt="userImage.png" />
      </div>
    </div>
  );
}
