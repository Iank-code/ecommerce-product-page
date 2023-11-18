import cart from "./../assets/navbar/iconCart.svg"
import userImage from "./../assets/navbar/image-avatar.png"

export default function Navbar() {
  return (
    <div>
      <div>
        <span>sneakers</span>
        <div></div>
      </div>

      <div>
        <img src={cart} alt="cart.svg" />
        <img src={userImage} alt="userImage.png" />
      </div>
    </div>
  );
}
