import { useContext } from 'react';
import { UserContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


function Header() {
  const { user, setUser } = useContext(UserContext);
  console.log("user is logged in==>", user);

  const handleLogoutUser = async () => {
    await signOut(auth);
  }

  return (
    <Link>
      <header className="body-font container mx-auto px-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src='https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKnHcKE5Lsm6d2ptkIrFTsXl5CDDRDCTdEU5xdqmFImz0-sCLxyoqPhICQ8Oxefj~FrXi8llAFo-u4yDPUXQe72Ubf1AUxxC8q8HZfywaWMrMuc3TgaAzxjPSiFEP92NAnSDfgcWorcLC~jE4deZJGwOmnUU-2BLEGOehDWjZROZBA4-iARULPUGeOg4yeuDv3QmIQjY68ifPHBp7maePBiMHihaadPI~7d7QmB6yaXaNoiCe~ur4Z4q4SWHQt9mW8Pn3l-Tb38K~KhIeirqDum3UZ6dPLRblfza-VkLkB~3GwX32LXYuIAmBPoYdj7lSDjnuvqAkxCi2IVomV2zpQ__' alt=""
            className='inline-block m-2 h-10 w-10 rounded-full ' />
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-serif text-black">Funiro</span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">Home</Link>
            <Link to={'shop'} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">Shop</Link>
            <Link to={'about'} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">About</Link>
            <Link to={'contactUs'} className="mr-5 cursor-pointer  text-black font-bold font-serif hover:text-gray-900">Contact us</Link>
          </nav>
          
            <div className='flex gap-9'>
            
            <Link to={'blog'} className="  text-2xl  font-serif text-black">
            <CiUser />
          </Link>
            <Link to={'checkOut'}  className="  text-2xl  font-serif text-black">
            <CiSearch />
          </Link>

          <Link to={'productComparison'}  className="  text-2xl  font-serif text-black">
          <GoHeart />
          </Link>

          <Link to={'cart'} className="text-2xl font-serif text-black">
          <IoCartOutline />
          </Link>
            </div>
            
          {user?.isLogin ? (
            <img src={user?.userInfo?.photoURL} alt="" className='inline-block m-2 h-10 w-10 rounded-full ring-2 ring-white' />
          ) : (
            <Link to={'signup'} className="focus:outline-none  font-serif text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Sign Up
            </Link>
          )}

          {user.isLogin ? (
            <button onClick={handleLogoutUser} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium font-serif rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
          ) : (
            <Link to={'signin'} className="focus:outline-none font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
              Log in
            </Link>
          )}
        </div>
      </header>
    </Link>

  )
}

export default Header;