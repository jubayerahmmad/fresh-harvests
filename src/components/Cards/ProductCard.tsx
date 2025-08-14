import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-400/20 w-full mx-auto">
      {/* Product Image with Heart Icon */}
      <div className="relative p-6 pb-4">
        <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-50 rounded-xl overflow-hidden relative">
          <Image
            src={product?.images[0]}
            alt={product?.productName}
            width={500}
            height={500}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center px-6 pb-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.productName}
        </h3>

        <p className="text-xl font-semibold text-gray-900">${product?.price}</p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href={`/shop/${product?.id}`} className="block w-full">
            <button className="w-full py-3 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 cursor-pointer">
              Learn More
            </button>
          </Link>

          <button className="w-full py-3 px-4 text-sm font-medium text-white bg-orange-500 hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
