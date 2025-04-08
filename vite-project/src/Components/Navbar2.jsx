import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";



export default function Navbar2() {

  const [open, close] = useState(false)

  const toggleMenu = () => {
    close(!open)
  }

  const navmenu = [
    { href: "/", name: "home" },
    { href: "/", name: "About" },
    { href: "/", name: "Services" },
    { href: "/", name: "Contact" },
  ]


  return (
    <nav className='bg-black text-white items-center flex justify-between py-10  px-10 relative'>

      <div>
        logo
      </div>
      <ul className='hidden md:flex gap-4' >
        {
          navmenu.map((item, index) => (
            <li key={index}><a href={item.href}> {item.name}</a></li>

          ))
        }

      </ul>

      <div className='hidden md:flex gap-4'>
        <button>Login</button>
        <button>signup</button>

      </div>


      <div className='md:hidden' onClick={toggleMenu}>
        { open? <ImCross/> :<FaBars/>}

      </div>

      {open && (
        <ul className="md:hidden absolute top-full left-0 bg-gray-900 w-full flex flex-col items-center gap-4 py-6 z-10">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      )}
     


    </nav>

  )
}
