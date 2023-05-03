import { FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HeaderDrawer from './HeaderDrawer';

export default function Header() {

  const navigate = useNavigate();

  const [isHeaderOpen, setIsHeaderOpen] = useState(false)


  return (
    <div className="flex md:justify-around justify-between items-center p-10 border-b-2 ">
      <button
        onClick={() => navigate("/")}
      >logo</button>
      <div className="hidden md:flex gap-6 items-center">
        <button
          onClick={() => navigate("/sobre-nós")}
          className="text-white text-xl hover:shadow-underline py-2">Sobre nós</button>

        <button
          onClick={() => navigate("/especialidades")}

          className="text-white text-xl hover:shadow-underline py-2">Especialidades</button>

        <button
          onClick={() => navigate("/agendar-consulta")}
          className="text-white text-xl hover:shadow-underline py-2"
        >

          <text className="text-white text-xl">Agendar Consulta</text>

        </button>
      </div>
      <text className="text-white text-xl hidden md:flex hover:shadow-underline py-2">(11) 91234-5678</text>
      <button
        onClick={() => setIsHeaderOpen(!isHeaderOpen)}
        className='flex md:hidden'>
        <FiMenu color={"#fff"} size={25} />
      </button>

      {isHeaderOpen &&
          <HeaderDrawer closeHeader={setIsHeaderOpen} isOpen={isHeaderOpen}/>
      }
    </div>
  )
}