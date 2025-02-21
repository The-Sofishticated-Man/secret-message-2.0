import { FaArrowRight } from "react-icons/fa6";
const NavBar = () => {
  return (
    <nav className='flex justify-end items-center p-5 px-10'>
      <div className="flex items-center gap-2 text- ">
        <a href="#" className="font-primary text-2xl text-primary ">Log in</a>
        <FaArrowRight size={20} />
      </div>
    </nav>
  )
}

export default NavBar