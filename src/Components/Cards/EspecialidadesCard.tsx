import { IEspecialidades } from "../../Types/MainJobs";
import {useNavigate} from 'react-router-dom'

type Props = {
    esp: IEspecialidades;
}

export default function EspecialidadeCard({ esp }: Props) {

    const navigate = useNavigate();

    return (
        <button 
        onClick={() => navigate(`/especialidadesDetail`, {state: esp})}
        className="flex flex-col m-5 shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition items-center py-6 px-2 bg-white">
            <text className="text-dark-green text-3xl my-8">{esp.title}</text>
            <img src={esp.img} alt={`${esp.title} image`} />
        </button>
    )
}