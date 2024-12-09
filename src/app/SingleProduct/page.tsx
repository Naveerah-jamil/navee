'use client'
import Image from "next/image";
import { useState } from "react";

export default function SingleProduct() {
  // Adding a state for managing cart action (optional)
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (e: any) => {
    e.preventDefault();  // Prevent default button behavior (i.e., page navigation)
    setCartCount(cartCount + 1);  // Increment cart count (as an example)
  };

  return (
    <div className="container mx-auto px-4 overflow-hidden">
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full h-auto mt-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2 h-auto mb-6 md:mb-0 flex justify-center">
          <div className="w-full max-w-md md:max-w-lg h-auto rounded-lg overflow-hidden">
            <Image
              src="/assets/image1.png"
              alt="Product Image"
              width={675}
              height={607}
              className="object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-12 flex flex-col overflow-hidden">
          <h1 className="font-Inter font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-gray-800 mb-4">
            Library Stool Chair
          </h1>
          <button className="w-full md:w-auto px-6 py-2 bg-teal-600 text-white rounded-full text-lg font-semibold mb-4">
            $20.00 USD
          </button>
          <hr className="border-gray-300 my-4" />
          <p className="font-Inter text-gray-700 text-sm md:text-base leading-relaxed opacity-80 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button
            onClick={handleAddToCart} // Add event handler to prevent page navigation
            className="w-full md:w-1/2 px-6 py-3 bg-teal-600 text-white rounded-lg text-lg font-semibold"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full mt-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-Inter font-bold text-xl md:text-2xl text-gray-800">
            Featured Products
          </h2>
          <button className="text-teal-600 hover:underline">View All</button>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/image.png"
                alt="Product 1"
                width={312}
                height={312}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex">
              <h3 className="text-gray-800 text-sm font-medium">Library Stool Chair</h3>
              <p className="text-gray-500 text-sm pl-[80px]">$20</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/image10.png"
                alt="Product 2"
                width={312}
                height={312}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex">
              <h3 className="text-gray-800 text-sm font-medium">Library Stool Chair</h3>
              <p className="text-gray-500 text-sm pl-[80px]">$20</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/image3.png"
                alt="Product 3"
                width={312}
                height={312}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex">
              <h3 className="text-gray-800 text-sm font-medium">Library Stool Chair</h3>
              <p className="text-gray-500 text-sm pl-[80px]">$20</p>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/image4.png"
                alt="Product 4"
                width={312}
                height={312}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex">
              <h3 className="text-gray-800 text-sm font-medium">Library Stool Chair</h3>
              <p className="text-gray-500 text-sm pl-[80px]">$20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
