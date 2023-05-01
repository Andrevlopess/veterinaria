import { useNavigate} from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate();

  return (
    <div className="flex justify-around items-center p-10 bg-cyan-500">
      <button
      onClick={() => navigate("/")}
      >logo</button>
      <>
        <button 
        
        className="text-white text-xl">Sobre nós</button>
        <button
          onClick={() => navigate("/especialidades")}
          
          className="text-white text-xl">Especialidades</button>
        <text className="text-white text-xl">Agendar Consulta</text>
      </>
      <text className="text-white text-xl">(11) 91234-5678</text>
    </div>
  )
}