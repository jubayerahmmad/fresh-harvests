import { Product } from "@/types/product";
import { useState } from "react";

const ExtraInfo = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <section className="container mx-auto my-16 px-4 lg:px-8 xl:px-0">
      <div className="max-w-4xl">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "description"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "reviews"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Reviews (1)
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-8">
          {activeTab === "description" ? (
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {product?.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our coconuts are sustainably grown, ensuring the best quality
                and taste. Each coconut is handpicked and carefully prepared,
                offering you the freshest product possible. Rich in healthy
                fats, electrolytes, and essential nutrients, coconuts provide
                both hydration and nourishment. Whether you are using the water,
                flesh, or milk, our coconuts bring versatility to your kitchen
                while supporting healthy living. Perfect for smoothies,
                desserts, curries, and more — let the natural sweetness of the
                coconut elevate your recipes. Enjoy the tropical goodness in
                every bite!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">JD</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">John Doe</h4>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-orange-400">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">2 days ago</p>
                    <p className="text-gray-700">
                      Great quality product! Fresh and exactly as described.
                      Will definitely order again.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-center">
                No more reviews yet. Be the first to leave a review!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
