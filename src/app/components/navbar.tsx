import Link from "next/link"
import { RiPlantFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 bg-white body-font" id="navbar">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <RiPlantFill/>
      <span className="ml-3 text-xl font-bold">Plantify</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-bold lg:gap-5 justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/bestPlants" className="mr-5 hover:text-gray-900">Best plants</Link>
      <Link href="/benefits" className="mr-5 hover:text-gray-900">Benefits</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900">Contact us</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar;
