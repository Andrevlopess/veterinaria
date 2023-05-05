import { useNavigate } from 'react-router-dom'
import { IEspecialidades } from '../../Types/Types';

type Props = {
    esp: IEspecialidades;
}

export default function EspecialidadeCard({ esp }: Props) {

    const navigate = useNavigate();

    return (
            <button
                onClick={() => navigate(`/especialidade`, { state: esp })}
                className="flex m-5 shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition items-center p-6 bg-white justify-around ">
                <text className="text-zinc-900 text-3xl my-8">{esp.title}</text>

            </button>
    )
}