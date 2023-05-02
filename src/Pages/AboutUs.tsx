import Header from "../Components/Layout/Header";
import castration from '../assets/castration.svg';
import vaccination from '../assets/vaccination.svg';


export default function AboutUsPage() {
    return (
        <div className="font-display bg-gradient-to-r from-cyan-500 to-blue-500">
            <Header />
            <div className="flex flex-col">
                <p className="md:text-6xl text-4xl text-white text-center md:px-16 md:py-24 p-6 leading-loose">Desde 2002 trabalhando com qualidade, conforto e segurança para nosso animais e clientes.</p>
                
                <div className="grid md:grid-cols-2 gap-20 md:p-20 p-6 z-10 ">
                    <div className="flex flex-col shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition bg-white">
                        <img src={castration} alt="castrationImage"/>
                        <text className="text-dark-green text-2xl py-10 px-4 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque, provident debitis fugiatl Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam sunt nihil quae temporibus. Corrupti officia ipsum, labore ea omnis autem qui natus facilis placeat similique eligendi possimus magni in!</text>
                    </div>
                    <div className="flex flex-col shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition bg-white">
                        <img src={vaccination} alt="castrationImage"/>
                        <text className="text-dark-green text-2xl py-10 px-4 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque, provident debitis fugiatl Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam sunt nihil quae temporibus. Corrupti officia ipsum, labore ea omnis autem qui natus facilis placeat similique eligendi possimus magni in!</text>
                    </div>
                </div>
               
               

            </div>
        </div>
    )
}