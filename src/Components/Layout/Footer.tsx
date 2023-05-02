import { especialidades } from "../../Utils/Especialidades"
import React from '../../assets/react.svg'

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-4 sm:grid-cols-2 p-10 border-t-2 border-white flex-wrap">
      <div className=" m-4 justify-center items-center flex">
        <img src={React} />
      </div>
      <div className="flex flex-col  m-4 justify-center items-center">
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
          {especialidades.map(esp => {
            return (
              <li className="text-white pl-2">
                {esp.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col  m-4 justify-center items-center">
        <text className="text-slate-100 text-2xl">Contatos</text>
        <text className="text-slate-100">(11) 91234-5678</text>
        <text className="text-slate-100">(11) 98765-4321</text>
      </div>
    </footer>
  )
}