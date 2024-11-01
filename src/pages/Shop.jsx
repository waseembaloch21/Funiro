import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductCard from '../components/ProductCard';

import { IoTrophyOutline } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { GrSupport } from "react-icons/gr";

function Shop() {
  const [products, setProducts] = useState([])
 
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  },[]  )

  



  return (
    <div className='container mx-auto '>

      <div className="relative container mx-auto">
        <img
          className="h-60 w-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1k2~TI16jFkGQLu1hF6zQaqAEqLkM3RKvTzXNQj5UqhnvHscTHf6GDmGoXWpZzl4JMbzFpXs3ko8v-e-YGmNjoNamMKFBehhdv7Q2njuPu1YZnAp6e6bR4inQ~N0drYhkEnzHsdPoc3T2tvkoIfZs1cZ~r2mjdDh~ElcH~OwwLVmu7JukfTfoOkJdhn9X0RMMg0v36R6-DYy988H9z84fPkhVyFi1uCyZiK8g7dLPilqt1t3im8IzPyfTbCf8NUPCQE1nKe-EZ1SWkWdFMl~iYPkrjv2pj~YMKVWfI0FMX~dELlL2NEUjpWnn3xh9veXbX1fSiVQiVLbaqNBrqYNA__"
          alt="Cart Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-50">

          <h1 className="text-3xl font-semibold">Shop</h1>
          <h1 className="text-sm text-black">Home › Shop</h1>
        </div>
      </div>

     

      {loading ? (
        <h1 className='text-center font-serif text-3xl'>Loading....</h1>
      ) : (
        <div className='container px-5 py-24 mx-auto'> 
          <div className=" font-serif flex flex-wrap -m-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>

      )}

<section className="text-gray-600 cartTotal body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
  
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        High Quality
        </h2>
        <p className="leading-relaxed">Crafted from top materials</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        Warranty Protection
        </h2>
        <p className="leading-relaxed">Over 2 years</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        Free Shipping
        </h2>
        <p className="leading-relaxed">Order over $150</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        24 / 7 Support
        </h2>
        <p className="leading-relaxed">Dedicated support</p>
      </div>
    </div>
  </div>
</section>



      {/* <div className='container mx-auto  overflow-hidden flex flex-wrap p-5 flex-col md:flex-row items-center justify-between cartTotal h-64 w-full'>
        <div className='flex items-center pr-8 mb-4 md:mb-0'>
          <span className='text-4xl mr-2'><IoTrophyOutline /></span>
          <div>
            <h1 className='font-bold'>High Quality</h1>
            <p>Crafted from top materials</p>
          </div>
        </div>

        <div className='flex items-center pr-8 mb-4 md:mb-0'>
          <span className='text-4xl mr-2'><IoShieldCheckmark /></span>
          <div>
            <h1 className='font-bold'>Warranty Protection</h1>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className='flex items-center pr-8 mb-4 md:mb-0'>
          <span className='text-4xl mr-2'><GiCargoShip /></span>
          <div>
            <h1 className='font-bold'>Free Shipping</h1>
            <p>Order over $150</p>
          </div>
        </div>

        <div className='flex items-center pr-8 mb-4 md:mb-0'>
          <span className='text-4xl mr-2'><GrSupport /></span>
          <div>
            <h1 className='font-bold'>24 / 7 Support</h1>
            <p>Dedicated support</p>
          </div>
        </div>
      </div> */}
    </div>


  )
}

export default Shop;