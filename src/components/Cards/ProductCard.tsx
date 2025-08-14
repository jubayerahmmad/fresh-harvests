import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow p-2 ">
        <div className="w-[149px] h-[120px] lg:w-[230px] lg:h-[200px] xl:w-[258px] xl:h-[208px] bg-gray-200 rounded-md mx-auto">
          <Image
            src={product?.images[0]}
            alt={product?.productName}
            width={500}
            height={500}
            unoptimized
            className="w-full h-full "
          />
        </div>

        <div className="text-center p-2">
          <h3 className="text-lg font-semibold ">{product?.productName}</h3>
          <p className="text-gray-600 ">${product?.price}</p>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1">
            <Link href={`/shop/${product?.id}`} className="w-full ">
              <button className="w-full px-1 border border-gray-300 bg-white text-black py-2 rounded hover:bg-[#FF6A1A] transition">
                See Details
              </button>
            </Link>
            <button className="w-full px-1 border border-gray-300 bg-white text-black py-2 rounded hover:bg-[#FF6A1A] transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
