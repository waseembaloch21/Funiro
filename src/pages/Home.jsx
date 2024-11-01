import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div className='container mx-auto '>
      <section className="text-gray-600 pt-10  body-font relative" data-aos="fade-up"  data-aos-duration="3000">
        <div className="absolute  inset-0 bg-white">
          <img className=' container h-full w-full mx-auto' src="https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8SBzd6u2RRJF7HHbCE2yVAQsNiYEpqLlyn6a4lKrjydBdUe8oPNwdnnBGWsdl~TesS12RhESv23mFB00ic6R7Hfxgr7weZEIPMho8e7PtcmBUCSV11BizLPM0B-sMQUQGpDICE5r1XpZzM6N85acUJxJCHkuxgqkYxzKCHctD5IVAmb7NxA6D7dmxOLoq4RHWqnINY8dguK3AZ0j0GL0aY35GCqA1DL2sllHkfKtg-y~at2j75lyJml41GxOviO7y~wDsb9vEIiaHDK~crSVlxVZUQvw0kRVy5kMKyPJX5qv4s0QJ8MQcSmcTF3-l219LhuQmH3Kn87u7VYEuKmTg__" alt="" />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 cartTotal p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              New Arrival
            </h2>
            <h2 className=" text-4xl text mb-1 font-medium title-font">
              Discover Our
              <br />
              New Collection
            </h2>

            <p className="leading-relaxed mb-5 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam similique ut ipsum atque neque qui mattis.
            </p>

            <Link to={'shop'} className="text-white text-center justify-center items-center button border p-4  text-lg">
              Buy Now
            </Link>

          </div>
        </div>
      </section>

      <section className="text-gray-600 container mx-auto px-20 body-font" data-aos="fade-down"  data-aos-duration="3000">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-center text-black text-3xl font-medium '>Browse The Range</h1>
          <p className='text-center mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-80 sm:h-60 md:h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ROUXBy1r-Nah0CWZC2ufVJFltz65~sxUTwljJHPyFqpY2oRRu7W0BeOeYwFEVpk35NYYtbGhFIj8ZjZ3yhxhplmkVgF3ohqjaQDF5v-1e6cZOYrOlYuE-lbtTFexU4oI-yoF-bJgn~aNfGmdXv5b8iO1ILt3R8K~TciHhyjC85n2nkbVkX9S~grIGCXIhwprfcN-opwExYxQJlZ2iFsi9NOuFkBVrU7gZC99dnF0H3PBMTo0mZoIanBmBoBdtjrJU0P4rLJP~tErXFiPMtMUeMqfindXmwCtaN9GdnZpzT7Xyt767TXYYIaMvCwQuiv1iO88CzwMXm4yvJAZbQl7zg__"
                  alt="blog"
                />
              </div>
              <h1 className="text-center text-black font-bold text-2xl p-5">Dining</h1>
            </div>


            <div className="p-4 md:w-1/3 w-full">
              <div className="h-80 sm:h-60 md:h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fQpIBJ2PUtP4n8DCrEndV5DepSlEFHSYVTTV9738ZplFkpq8i2MpFJxZq~KVH34J62LHMevhaM9AKLZZARLqZqleZLZfzQzv24Ruwj-~f5ktjEOly7CxmwS1txF7uBNkJseWNuhxp9ZBu9~OgUkqTdhoJIkQgVPLgquuUICmsE5J0YpnhYRW9jA8r1a370xUXu~p940pNJ3vI2FHMvhvrB9vz6TecCrdbJ6jLo8lTxGuVvyGasMK2TMRtAqp81vTVysWlbmnyyQj0bnFmGs~d4fDv8F2WUKFTS0EwNyKl4HEKm4~vfHJHryj2lUdTmEIdNbyeuq7528trdPeUGnw2w__"
                  alt="blog"
                />
              </div>
              <h1 className="text-center text-black font-bold text-2xl p-5">Living</h1>
            </div>


            <div className="p-4 md:w-1/3 w-full">
              <div className="h-80 sm:h-60 md:h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJEj7b7kQKnpwg49f3Z7iQO2FOiTEzkulw8H6PwiVDb1G6Q2wHsGyD5B3CDLBYUSjWdiehKzruQ47CMrxM~CGF0~4em2BR~Vnp7CuJuRhHmPUN1FZUEKoGoIP3aiZCi8GIcQvFt36FYoECJllvn8JPBBz-qMCD7CZieJmO-gIRPpxqEDQDcXnp5AGQXbS2b8YtBS~AgnH1NvZVary-skpa777JfuqxJMDHYfCeiJOyqV0wiUykyU6XNgbPrPYfA7Rfj5HoXhY7TjHq3EFexi~aL1fBqZO9b05Rrqu6-xnwiOsnGUW15g813v6jBhzhGWiZSNbocNrD6ddrv6brxWfw__"
                  alt="blog"
                />
              </div>
              <h1 className="text-center text-black font-bold text-2xl p-5">Bedroom</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 container mx-auto px-20 body-font " data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='font-bold text-3xl text-black text-center pb-10'>Our Product</h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io-T8oYjTlIA3w2Ah9tcLnnsdn-uf9FCbYL0IEJGVg97D2v0pdUGTrmTC~Wz2sfK44jEIV5f4SoP7iBdFR1kJz8FeDntd9HBZNykPh4nOrbyuLQcqG~yGm~ILH9IAlvKgiyY09zH8Nr6LzaVPleBYK2Mo7WeobKWny38yJnKQ8wbG1JKQihzyXVovvvKnhZR4AvQo6O38kwUveGfJeakOULR8-lBNisUuRVUQ9lc4TnfZbVsWz8lvdcJbVgRITz-GNCMnQWm115-NDtLJf4o6fQtAT4n8TACPo~eRWygfAws1~dZKaIFog-5cgWM5ex2Y9l9-EV2YTu4gZNbAe2irw__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn'>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPkCIuSCU3BltuEUqyNQQv7iOxve9TexF5NPxdMm3KLAABVOzb3Ya4YU1M-tOOLD43NUdHlTg4LB2aw3drHcCWNA3ppox32RIJ1MJrtzZk1Ad85Kz9rHa7wQnLrxY80AVP8QKQ5kNX6jEM7Q5zKp01yMIGNdTA3X0K9jshkL9ZoJxWplP8Xyln2uDaG8O9SV2mEe7tvbRtGRioR9Oanot1TMZkwEDWE-nESnUgI7Iw2hAGBggXDVSA3gXqws9tYS1uYPCjFMz0T2F8ZPrk5KHrxTcxacS25xFIvUAm1L73hGOtxEzeykzgAAbKv-bgHRtW442cBGYMIz75gyRmBbxg__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Leviosa</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvZ1pS8MvRL8RbQiryxFxi-AoUn7BhmvJnZAhG~97SIB9pXivR8XdyPu8ZqG5iagz2JJQJO0DXVPNPKyczYiU6bKrift80vFDraZJvpm7pmWRfXZ3gzY94~gwckPqnDDEAfRHJ~v1n~3tvXTEhN8aF0kVBVkRCHcoHGBdKkyKhfKXUDKAiy2IAyFNB~vRXfbftPLFCiWLCp4fHfZrA0H7~WL64-5UuUsPk1wzoj1iNtlr9~cpyrhDs4HIQ~gycivBnha~dzbR0-W5MP8iidHmQNuhH0bbFppoayMXCmOK~7qRyDUeVgL8VCzHj3L0f~n~VoL7Wv39WO6D~-LLQgicQ__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Lolito</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Luxury big sofa</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 7.000.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FaQYFO-~0EAXTLYl7fwBcyUWBh6h2-~MB6bdJD64bNL4lF~blIb3EVKnFq3Uet-Z8X3R79O5zGtKZfztDraxqGUa5-ZTFb68e1WIHXlUHweIKtUOTwuHixdZfDn9ikko81C6OvBcu-RkvRTKraTfWD2t-oezbqDOdOPAZCmhPiYDWBwGTyF60wDExRJXNR799CGpLb9t6krzJK1qod4FjQiSFElfFZRCcq67lImFSW9EI~MF7Z7CoS7gw9XpYWwscUYlbguSTh5J3tZpMEg-HDS2whHSS6MMCggKxvXmraKX38drOaiDLZ9IuOr0-8C3Yy8kO6R87aSeurF3ol0ZHQ__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDKgf9OKU4yzQr2ONoUOhlWQCI7c3S-bcQ5WafKFRxLMal-oZ8bzhXX9obSCDW8C9pMp2Lakzaf9fiKgCnsOLvT9fO1j5kREbeXK3OP6C99NQlCn8wh3s1N3rkP9DhmuSVw0ECkMtrfTJ-T~Tn4ANdCRKTVZsvNO9woycX5TJkraeVDooWBP~EBBPqzSqQOKK9gb-ueHGevT5zSv5Jg4Pp0M~LjRYMXB6mwWjp0kKvBBZ-sEDJRwa-hIIzbnzyK5FjHe720l0SBPTdyINJPJw48Jt1-e85Rhut7Xy7ITCDExEU~3DiL8fnKOftF3LXnRyPm2E0BXGMReEoBMYgAMjA__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dvMAkAAt7Wzwdh61RI7VG40~IMZVI6ZrNzNdwSEg1F5mYcdrYIuloQC1Wcm8B2mBKzVqwQDTikc-Ron8e6KwcbMZHl2HPFhCiGFk~hyDGy8oQl8DBGrpDg623YNJQWaTKmWOyh7ta0gutE7Por0zU5EfSe4c0U5F4kZ8Y56xr6GWVaaGWQz95U~mZfzQpHOQKmqB3lLkoC7~PehzVA1ibteNWyy5zmyTjtwlFeafd3ROpVtI9QpajgH8HbOgeXSlLMP3Lppk~DiZIwsZ~yvW8tkbByksYd2PL8y3~Lw-KREmGnaodNXVUgkj6r6S3uVbnPzCSt8PQw9LcsNIYiIjAg__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn'>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2pAteqpYoEgI5F0-t-qRfHlLMx7Bq7jnwjXXsBjurk6powJaHXdwkl~Jm6ba9f0lbSSEA1X~gH4nakIDEussB6ifY01Rz0-vGwAe7N9g9gI8o1AoGo2n-i-B1cZDfpsNr16lYbDan9MpT2rJYL89M1JJDWrniYz3~FbXdK3mSK5pI0jPgcC2A5urflCU7Q482eTCY5zZD~edKMuKr81Ay8CNKC20puvJ2PM-VCEIAV-3xM4VEZ4GMUWJjumT2ByolPtczO7dx3H3HP8Q8JPseFme8YXMCkXmzqbXwgO6wwQvhKIVpEEfF30p44pe8ZFRDFMztKMd2s~31jWbgHeCQ__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
            <div className="lg:w-1/4 product border  border-white md:w-1/2 p-4 w-full">
              <div className="relative group">
                <a className="block relative h-48 w-full rounded overflow-hidden group-hover:bg-gray-300 transition duration-300 ease-in-out">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:blur-sm transition duration-300 ease-in-out"
                    src="https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjAb59s6dJpDaTDenpc2UxX3UGc7jafDlsXV9jNL77HpTOLmmIpBM0ZUYHZCSocr8B9zdLg0wruC8C5OmzWnz2N-dHNYAr~ALv6mTcTxs3NXYHJBXVLtysxhZ2oKSvSTlZwKzlIMQbHTcWvlJWXnx599zeeifTwxbzh6vI4vzFE0ohUEuHy7vM7ZjJWUe9kAJxnKVS4jVg5G2u7Czfbp8xw27bSvATzAKSrURFqQOVqGj1iHIeXee3AMA9dqmi1Mvgx9odI3KrDPtGnC6Fd9z9SOozf2G-UGuL83zd15GUNYo~53t~7whz0mrTtZIhPApjn1Z8w8AgDzcziOFyT8rg__"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className='uibtn' >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">Syltherine</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stylish cafe chair</h3>
                <p className="mt-1 text-gray-900 title-font text-lg font-medium">Rp 2.500.000</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='text-black mt-5 border more p-2  px-14 text text-center '>Show More</button>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="img"  data-aos="zoom-in-up" data-aos-duration="3000">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                50+ Beautiful rooms
                <br />
                inspiration
              </h2>
              <p className="mb-4 text-black font-normal">
                Our designer already made a lot of beautiful
                <br />
                prototipe of rooms that inspire you
              </p>
              <button className='border button text-white p-3 mx-2 px-10'>Explore More</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhqwrFKeI1YA~o6c6hIQW3MmftdtH5lDJ~3u3oAm~JVsIqJTEFnurmE7~t~WqLaxbsHho3jbG7bvvqBIEMSREfi3tRBuUgdCDdMTsAoCinVhZ4V~Rh38DnK2w2fUeHKKb6N1X4NCVy8YM0HZ-TCDstpfoKLgTwZCrQkHWQWD97Tb56jhewaeG0U3cOzPDo-emGgiyk1vayqHs7DOJ3D1x1QQ7x-Z4t0fsQ1~zmYXliBweMtbSjBZcb5sC7kFx6hb58lVlzKAJPjV-TBNf3Pg-BNp7Hyztk3XYaqxgIbqK6nn4FeJTQGUEueiIMaFRr1lAIwwNOEIC4CDNpjF0Ze4hA__"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O91mkXFBjJmRYaDGu1EF7E4mNZgdRaBLFcFr1h5mkF-R2d5QDzB-VOZmN-mN8X2U6pMvXus-YflCPCM66SO3HBcCo44ruK1xdD8Fnhw20QBZg8YAxlieVB~c1AqWSmpqlil48S49QGdPtLqWppzfu4vpXnbLBue3R9MDJ19bzMkqlGxSIROiHRczDS808pQcOr-oj7sToSpvrF-sdm0AF086JbGbMvtAlRKaHJ~P~uJk1Jd570GUXUM9u2V17a7T~n8hqv9E~c5sfGTTMS2voJbDJS6CNwXSmy2C-Pl6XCrHUykbhGl~GOKvoTFhbcncgSHHMda7uF2y9iI6XTsE2g__"
                alt="office content 2"
              />
            </div>
          </div>
        </section>

      </div>

      <div className="container">
        <section className="text-gray-600 body-font"  data-aos="zoom-in-up" data-aos-duration="3000">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col justify-center items-center">
            <p className="text-center font-normal text-black">Share your setup with</p>
            <h1 className="text-center text-black font-bold text-3xl">#FuniroFurniture</h1>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKMNxcKC5R2E9WoZxAoPNhgV6~vktt3u1bIxvL5lCWxUG-kgg74yZyv5oJaYDYRdpJRRX7-6hKlFPuTLX-Mza4cKIgcOAxthbjbIiBKf06-HyRnVwalHCNHmI14H6Lwp20zOhgOUN~7FaCsxI~~~I8~6~Ss784faKW3dJmKqzQA-Vcax01Klbb3Mlb9u-E6vI0l1FK7UoDmVEoi2qtQpzZdzexyfXfV12MOERs2-YxdxpNMQGfGEvuUaeiF0U7mZVIasFWI4bnAl9sWMGfUSJUXAjLpNUDxmnOTlmVk~QsPAykuzpFPEyVrXWrfiCWQgyksVqFapPwpM3l5vT-wALg__"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://s3-alpha-sig.figma.com/img/057c/3bab/f9de6c6ff643cd2e7661215ad26aed46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwdpXXVUqVZTfcT2vWVID2QXHy7G431hc0JZyVNSgDYx052alJa~jbpoiO0gBqzNMnbReO40Iw2-RMRVa4zjvZk0nF-MkCFS-ex2x8131YjWjFrm3ekE~rEwOvejx6DtSpRBH4BAza5VHFF8L3bOEtPCyTfcuV1oXHI4Xb3J00jXlgzAardljYl6GPLFK9WJ0lTnpyS9j9xQdOYZCOSnIh2xdHPQh5paQwitXKJ6Jso8xMJaomxwPKmQSCsc-qhIYf3kLpZu6-g4k~moKzQ6AHkoLxwDGbbSDoU5KiYYtq39qoWs8aG5U86Tk1Sa-5JJqEqcN3dDES29KUEhoTAbng__"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://s3-alpha-sig.figma.com/img/9954/4b25/1da1dc5c1c4cd5091a6369784c3b3366?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oePmNhazmDe7I6oxgLtVoC1cFkBuXAcnw~-y1AXIhG-sfMwYrkHGQJJa~dVOfOuFfkXSfO45uMowjnyWEba1hF9~1yAVaoWzNhTUhxTe32gv3i9ymSZnTjdimJbZhe7WhBShtan7ZIuZM2Pm3zhJ2izp8jLLwmfsE24pws9BM3gb5ghshSGSZC9dOoHDHMyMV1V2ayekKK~h72lzWs~BFS0EyyztVQvejqUd9JjcXXlXACkW8~Rye7daufUO27kf0RKiO7IMUp8mO7G~64D3WqMHO0ZAju3LEgQ0VEqex7hyCCai62NfzVPx-9KkJLba3XCzJH5UIcwkKPSvmacufw__"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdisMzNvNRcJgAAA0Gy57Qdx1hLpUAXIThYxH3pC660KofWcv5UnDzB1m1vMZ0d-d9Dx6pG-DzpNaVgRxu3vTOs1vRFKW~kotFBUl4uXIUVOeg-928WBGv-avnmfnf8c05~gCYEC2Ho6yXjYgFO6FMw-YuZxx3f9IajdF6Ei~o5yoEvv6iPhb7IG4l1Oil2sf2gF7mSvg1bgSxTlb1OwC6wkiVHvBuYFzw6nc5bdqnhFYsLO7B722RhZnTiSA6ruS~BYkU7baW6bdUTYSzk6UDqpVkqrUEKWOacoqD6hAYk~~4jSTFaDDbjO-3hjMhfV3B8zA18qI4urjsqoZF-Mcg__"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://s3-alpha-sig.figma.com/img/b167/0f90/40560e3b59b4fd3c2538107c6fa70736?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECOILltds2HLBbbQMcn-EA1J-HwU8cRJ~XAxtKB5TD4i84tNjn7IWloK0oaDgs7n~2hVzZtLrSqXvj8CMZraHnRRJ9rIRt8WYMtGxlj1Mp8A0aU~6EyvkrtLDI0cpKxw~OVWw6Kty~rRj7MFQ8yugEuMkPzvMXuV9-uubQxUz7YyAycnMrUTuuM2wbNuL5V8A3g2OzhtzrEqkDOxWddsafb00~8JGR~a-dFGQj9VJMveLlGkAVksAMn4I68vlXNhQJiLAIw~2FVhJTT8G-XJ6NFN3B8yIy-9Zcei4Cd9d75DtGxdvu~Rc2t3YtRTNBFNMtxCqskEjt1fMluaWdMyEg__"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://s3-alpha-sig.figma.com/img/9532/f812/360b02673b349021a24f23d4184b4e15?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naqKn-NewyDuO7M5XHWkFx05SYL-ByfpiH2lG7UVcETFkxtIX9cEili1KyNuQF0VtV00CSjr~OsIcgwJAjYpmKJV6bhh51Eyk~J5Mdr4X3N2LUNwDnyIQloIKO9lrLnsZEjCFCuKLBmbVL0CT3bzD4Kporp7bin~piNsrw8nJJRmeaZrNRl0ykcVL~fQltrpi6Nfval7V0MLUuunoOjv-Qo3wS0rfaKIq97yemq6bxyupAb3GpkQmhpCNQ91CMe7IKOo9oImJ~yTYXRdRYgcTkr6GJbZytAJ86Y4OI640c4IiAoNaKTeJjdRiqjpvh4T0IhuDv1UYWONOCxHIi3LZg__"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>
  )
}

export default Home