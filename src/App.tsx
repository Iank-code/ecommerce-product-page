import Navbar from "./components/Navbar";
// import product_api from "./helpers/api.js";
import { product_api } from "./helpers/api";

export default function App() {
  console.log(product_api);
  return (
    <div>
      <Navbar />

      {/* Products sections */}
      {product_api.map((product, index: any) => {
        let other;
        let image = product.mainImage || other;
        let discountPercent: number = (product.Newprice / product.OldPrice) * 100;
        return (
          <div
            className="flex justify-center items-center mb-[3em] mt-[5em] gap-[3em]"
            key={index}
          >
            {/* Product images */}
            <div>
              <img src={image} alt={image} className="w-[500px] rounded-2xl" />
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            {/* Product information */}
            <div className="flex flex-col w-[26em]">
              <span>{product.name}</span>
              <span>{product.category}</span>
              <span className="text-slate-400">{product.description}</span>
              <div className="flex justify-between mr-[20em]">
                <span>${product.Newprice}</span>
                <span className="text-orange">{discountPercent}%</span>
              </div>
              <del className="text-slate-400">${product.OldPrice}</del>
            </div>
          </div>
        );
      })}
    </div>
  );
}
