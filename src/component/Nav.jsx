import { FiAlignJustify } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
const Nav = () => {
  return (
    <div>
      <nav className="flex mt-3 items-center justify-between px-12 bg-black py-3">
        <div className="flex gap-5 items-center">
          <div><FiAlignJustify className="text-3xl text-white"/></div>
          <img className="w-[43px]" src="./logo.png" alt="logo" />
        </div>
        <div className=" px-4 flex outline-1 w-[400px] py-1 rounded-[20px] bg-white">
          <div><IoIosSearch className="text-2xl" /></div>
          <input  type="text" className="ml-15 text-center " placeholder="Enter keywords..."/>
        </div>
        <div className="flex gap-2 items-center">
          <div><IoPerson className="text-xl text-white" /></div>
          <p className="text-[18px] text-white">Login</p>
        </div>
      </nav>
    </div>
  )
}

export default Nav
