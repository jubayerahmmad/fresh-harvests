"use client";
import Loader from "@/components/Loader";
import { useGetProductByIdQuery } from "@/services/productApi";
import { Product } from "@/types/product";

import { Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

import ProductByCategory from "../_components/ProductByCategory";
import ExtraInfo from "../_components/ExtraInfo";
import { useState } from "react";

const SingleProduct = () => {
  const param = useParams();
  const id = param.id as string;
  const { data, isLoading, isError } = useGetProductByIdQuery(id);
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = data?.data as Product | undefined;
  console.log(categoryName);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center my-12">
        <Loader />
      </div>
    );
  if (isError || !product) return <p>Something went wrong!</p>;

  return (
    <>
      <div className="container mx-auto mt-30 px-4 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Product Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={product?.images[0]}
                  alt={product?.productName}
                  width={600}
                  height={600}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 lg:py-8">
            {/* Category Badge */}
            <div className="inline-block">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Vegetables
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              {product?.productName}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">5.0</span>
              <span className="text-sm text-gray-500">(1 review)</span>
            </div>

            {/* Price */}
            <div className="text-3xl lg:text-4xl font-bold text-orange-500">
              ${product?.price}/kg
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              {product?.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold text-gray-900">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="p-2"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center py-2 border-0 focus:outline-none focus:ring-0"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="p-2 text-white"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex-1 font-medium">
                  <Heart className="w-5 h-5" />
                  Save as favorite
                </button>
                <button className="flex items-center justify-center gap-3 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex-1 font-medium">
                  <ShoppingCart className="w-5 h-5" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExtraInfo product={product} />
      <ProductByCategory
        categoryId={product?.categoryId}
        setCategoryName={setCategoryName}
      />
    </>
  );
};

export default SingleProduct;
