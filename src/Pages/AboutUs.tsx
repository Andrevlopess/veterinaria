import PlaceholderCard from "../Components/Cards/PlaceholderCard";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import castration from '../assets/castration.svg';
import vaccination from '../assets/vaccination.svg';


export default function AboutUsPage() {
    return (
        <div className="font-display bg-gradient-to-br from-blue-500 to-blue-600">
            <Header />
            <div className="flex flex-col md:px-16 md:py-24 px-4 py-10">
                <p className="md:text-6xl text-4xl text-white text-center  font-bold">Desde 2002 trabalhando com qualidade, conforto e segurança para nosso animais e clientes.</p>

                <div className="grid md:grid-cols-2 gap-20 md:py-16 py-6 ">
                    <div className="flex flex-col shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition bg-white">
                        <img src={castration} alt="castrationImage" />
                        <text className="text-zinc-900 text-2xl py-10 px-4 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque, provident debitis fugiatl Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam sunt nihil quae temporibus. Corrupti officia ipsum, labore ea omnis autem qui natus facilis placeat similique eligendi possimus magni in!</text>
                    </div>
                    <div className="flex flex-col shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition bg-white">
                        <img src={vaccination} alt="castrationImage" />
                        <text className="text-zinc-900 text-2xl py-10 px-4 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque, provident debitis fugiatl Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam sunt nihil quae temporibus. Corrupti officia ipsum, labore ea omnis autem qui natus facilis placeat similique eligendi possimus magni in!</text>
                    </div>
                </div>
                <div className="flex flex-col justify-center ">
                    <text className="md:text-6xl text-4xl text-white text-center md:px-16 md:py-24 px-4 py-10 font-bold">Eleito 5 vezes seguidas a melhor clinica veterinária de Jundiaí</text>

                    <div className="flex">
                        {
                            Array.from({ length: 5 }).map((_, i) => {
                                return (
                                    <PlaceholderCard key={i} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}