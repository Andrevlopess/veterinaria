import { especialidades } from "../../Utils/Especialidades"

export default function Footer(){
    return(
        <footer className="flex justify-evenly p-10 bg-cyan-500">
        <text>logo</text>
        <div className="flex flex-col ">
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
        <div>
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
        <div className="flex flex-col">
          <text className="text-slate-100 text-2xl">Contatos</text>
          <text className="text-slate-100">(11) 91234-5678</text>
          <text className="text-slate-100">(11) 98765-4321</text>
        </div>
      </footer>
    )
}