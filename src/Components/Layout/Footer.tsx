import { especialidades } from "../../Utils/Especialidades"
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import InstagramIcon from '../../assets/InstagramIcon.png'
import GmailIcon from '../../assets/GmailIcon.png'
import WhatsAppIcon from '../../assets/WhatsAppIcon.png'
import TwitterIcon from '../../assets/TwitterIcon.png'

export default function Footer() {

  const nav = useNavigate();

  return (
    <footer className="grid md:grid-cols-4 sm:grid-cols-2 p-10 border-t-2 border-white flex-wrap">
      <div className=" m-4 justify-center items-center flex">
        <img src={Logo} alt="logotipo" />
      </div>
      <div className="flex flex-col  m-4 justify-start items-center">
        <text className="text-white text-2xl">Av. fictícia, 000, Jundiaí, SP</text>
        <div className="flex flex-col mt-4">
          <text className="text-2xl text-slate-100">
            Horário de atendimento
          </text>
          <text className="text-lg  text-slate-100 pl-2">
            Segunda a sexta, das 8:00 ás 18:30
          </text>
          <text className="text-lg  text-slate-100 pl-2">
            Sábado, das 8:00 a 12:00
          </text>
        </div>
      </div>
      <div className=" m-4 justify-center items-center flex flex-col">
        <text className="text-2xl text-slate-100">
          Especialidades
        </text>
        <ul className="list-disc">
          {especialidades.map((esp, i) => {
            return (
              <button
                className="block hover:shadow-underline"
                onClick={() => nav("/especialidade", { state: esp })}>
                <li className="text-white pl-2" key={i}>
                  {esp.title}
                </li>
              </button>

            )
          })}
        </ul>
      </div>
      <div className="flex flex-col  m-4 justify-start items-center">
        <>
          <text className="text-slate-100 text-2xl">Contatos</text>
          <text className="text-slate-100">(11) 91234-5678</text>
          <text className="text-slate-100">(11) 98765-4321</text>
        </>
        <div className="grid grid-cols-2 gap-4 p-4">
          <a href="https://wa.me/11954291628">
            <img src={WhatsAppIcon} className="w-10 h-10" alt="whatsapp image link" />
          </a>
          <a href="mailto:andrellopes021@gmail.com">
            <img src={GmailIcon} className="w-10 h-10" alt="gmail image link" />
          </a>
          <a href="https://www.instagram.com/andrevlopesz/">
            <img src={InstagramIcon} className="w-10 h-10" alt="instagram image link" />
          </a>
          <a href="https://twitter.com/andrevlopess">
            <img src={TwitterIcon} className="w-10 h-10" alt="twitter image link" />
          </a>
        </div>
      </div>
    </footer>
  )
}