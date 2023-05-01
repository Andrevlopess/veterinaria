
import EspecialidadeCard from "../Components/Cards/EspecialidadesCard";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { especialidades } from "../Utils/Especialidades";

export default function EspecialidadesPage() {
    return (
        <div className="font-display">
            <Header />
            <div className="items-center flex flex-col my-10 p-6">
                <text className="text-7xl text-dark-green my-10">
                    Especialidades
                </text>

                <div className="grid md:grid-cols-3">
                    {especialidades.map((esp) => {
                        return (
                            <EspecialidadeCard esp={esp} />
                        )
                    })}

                </div>
                <text className="text-xl text-dark-green my-16 ">
                    Serviços especializados como clinico geral e também serviços terceirados como radiologia, ortopedia e ultrassonografia.
                </text>

            </div>

            <Footer />
        </div>
    )
}