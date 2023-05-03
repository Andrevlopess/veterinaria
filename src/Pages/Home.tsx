import MainJobsCard from "../Components/Cards/MainJobsCard";
import "../Styles/index.css"
import {useNavigate} from 'react-router-dom'
import DogBanner from '../assets/DogBanner.svg'
import { mainJobs } from "../Utils/MainJobs";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { useInView, animated } from '@react-spring/web'
import {FiChevronRight} from 'react-icons/fi'
import { depoimentos} from "../Utils/Depoimentos";
import DepoimentoCard from "../Components/Cards/DepoimentoCard";

function Home() {

  const [refText, inViewText] = useInView();
  const nav = useNavigate()

  return (
    <>
      <div className='bg-blue-500 font-display'>
        <Header />

        <div className="pt-8 flex flex-wrap-reverse justify-around">
          <img src={DogBanner} alt="React Logo" />
          <animated.div
            
            style={{
              opacity: inViewText ? 1 : 0,
              y: inViewText ? -10 : 0,
              transition: "0.5s ease-in-out"
            }}
            ref={refText}
            className="flex flex-col p-10 gap-4 sm:w-1/2 w-full items-start ">
            <text className="text-4xl sm:text-6xl text-white">Centro médico veterinário André</text>
            <text className="text-2xl sx:text-4xl text-white">Onde seu animal de estimação é nosso maior cuidado e responsabilidade, com muito amor e comprometimentos cuidamos do seu animal de estimação!</text>
            <button 
            onClick={() => nav("/agendar-consulta")}
            className="px-6 py-4 gap-4 bg-blue-700 rounded-sm flex justify-between items-center">
              <text className="text-white">Agendar consulta</text>
              <FiChevronRight size={20} color="#fff"/>
            </button>
          </animated.div>
        </div>


        <div className="flex xl:flex-nowrap flex-wrap items-center bg-slate-100 justify-center py-16 px-10">
          {mainJobs.map((job) => {
            return (
              <MainJobsCard job={job} />
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border-y-2 p-6">
          {
            depoimentos.map(dep => {
              return(
                <DepoimentoCard dep={dep} key={dep.id}/>
              )
            })
          }
        </div>



        <div className="flex items-center flex-col bg-slate-100 justify-center py-16 px-10">
          <text className="md:text-6xl text-4xl text-zinc-900 py-10">
            Estamos aqui!
          </text>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14672.58423521109!2d-46.87363456163939!3d-23.16486872105062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1682968359220!5m2!1spt-BR!2sbr" width="800" height="600" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl md:flex hidden"
          />
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14672.58423521109!2d-46.87363456163939!3d-23.16486872105062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1682968359220!5m2!1spt-BR!2sbr" width="250" height="180" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl md:hidden flex"
          />

          <text className="md:text-5xl text-3xl text-zinc-900 py-14 text-center">
            Av. fictícia, 000, Jundiaí, SP
          </text>
        </div>

        <Footer />

      </div>

    </>
  )
}

export default Home
