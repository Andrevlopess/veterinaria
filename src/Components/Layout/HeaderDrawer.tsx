import { useNavigate } from 'react-router-dom'
import {GrClose} from 'react-icons/gr'

interface Props {
  closeHeader: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function HeaderDrawer ({closeHeader,isOpen} : Props) {

  const navigate = useNavigate();


    return(
        <div className="fixed top-0 right-0 z-40 h-screen p-4 flex flex-col bg-white w-80 overflow-y-auto transition-transform gap-10" tabIndex={-1}>
          <button
          className='flex justify-end items-center p-4'
          onClick={() => closeHeader(!isOpen)}
          >
            <GrClose color="#000" size={25}/>
          </button>
            <button
          onClick={() => navigate("/sobre-nós")}
          className="text-zinc-900 boredr-2 border-b-zinc-900 text-xl hover:shadow-underline py-2">Sobre nós</button>

        <button
          onClick={() => navigate("/especialidades")}

          className="text-zinc-900 boredr-2 border-b-zinc-900 text-xl hover:shadow-underline py-2">Especialidades</button>

        <button
          onClick={() => navigate("/agendar-consulta")}
          className="text-zinc-900 boredr-2 border-b-zinc-900 text-xl hover:shadow-underline py-2"
        >

          <text className="text-zinc-900 boredr-2 border-b-zinc-900 text-xl">Agendar Consulta</text>

        </button>
        </div>
    )
}