import MainJobsCard from "../Components/Cards/MainJobsCard";
import "../Styles/index.css"
import { useNavigate } from 'react-router-dom'
import DogBanner from '../assets/DogBanner.svg'
import { mainJobs } from "../Utils/MainJobs";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { useInView, animated } from '@react-spring/web'
import { FiChevronRight } from 'react-icons/fi'
import { depoimentos } from "../Utils/Depoimentos";
import DepoimentoCard from "../Components/Cards/DepoimentoCard";
import Dogs from '../assets/Dogs.svg'
import { Features } from "../Utils/Features";
import FeaturesCard from "../Components/Cards/FeaturesCard";
import { faqs } from "../Utils/FAQs";
import FAQAccordion from "../Components/FAQAccordion";
import FAB from "../Components/FAB";

function Home() {

  const [refText, inViewText] = useInView();
  const nav = useNavigate()

  return (
    <>
      <div className='bg-blue-500 font-display'>
        <Header />
        <FAB/>
        <div className="pt-8 flex flex-wrap-reverse justify-around items-center">
          <img src={DogBanner} alt="React Logo" />
          <animated.div

            style={{
              opacity: inViewText ? 1 : 0,
              y: inViewText ? -10 : 0,
              transition: "0.5s ease-in-out"
            }}
            ref={refText}
            className="flex flex-col p-10 gap-4 sm:w-1/2 w-full items-start ">
            <text className="text-4xl sm:text-6xl text-white font-bold">Centro médico veterinário André's Vet</text>
            <text className="text-2xl sx:text-4xl text-white">Onde seu animal de estimação é nosso maior cuidado e responsabilidade, com muito amor e comprometimentos cuidamos do seu animal de estimação!</text>
            <button
              onClick={() => nav("/agendar-consulta")}
              className=" w-full lg:w-auto px-12 py-8 gap-10 bg-blue-700 rounded-sm flex justify-between items-center shadow-md">
              <text className="text-white">Agendar consulta</text>
              <FiChevronRight size={20} color="#fff" />
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

        <div className="flex flex-col bg-light-blue items-center px-6 pt-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center gap-4">
            {Features.map(feature => {
              return (
                <FeaturesCard feature={feature} />
              )
            })}
          </div>
          <img src={Dogs} alt="Image of dogs" className="" />
        </div>



        <div className="bg-blue-500 flex flex-col p-4 md:p-20 my-12 gap-12">
          <div className="flex flex-col gap-4 items-center justify-center">
            <text className="text-md font-bold text-slate-300">FAQ's</text>
            <text className="text-5xl font-bold text-slate-100 text-center">Perguntas frequentes</text>
          </div>
          <div className="flex flex-col md:p-16">
            {faqs.map(faq => {
              return (
                <FAQAccordion faq={faq} />
              )
            })}
          </div>

          <div className="bg-slate-100 rounded-md flex justify-between p-16 md:p-20 flex-wrap gap-4">
            <div className="flex flex-col gap-4">
              <text className="text-5xl font-bold text-zinc-900">Agende sua consulta já</text>
              <text className="text-2xl font-bold text-zinc-800">Traga seu bichinho de estimação para nós!</text>
            </div>
            <button
              onClick={() => nav("/agendar-consulta")}
              className=" w-full lg:w-auto px-10 py-4 gap-4 bg-blue-500 rounded-sm flex justify-between items-center shadow-lg hover:shadow-5xl transition ">
              <text className="text-white text-2xl">Agendar consulta</text>
              <FiChevronRight size={20} color="#fff" />
            </button>
          </div>

          <div className="flex items-center py-10 flex-wrap sm:flex-nowrap justify-center">
            <div className="flex flex-col">
              <text className="text-4xl sm:text-9xl text-white mx-10 font-bold italic">DE</text>
              <text className="text-4xl sm:text-9xl text-white mx-10 font-bold italic">POI</text>
              <text className="text-4xl sm:text-9xl text-white mx-10 font-bold italic">MEN</text>
              <text className="text-4xl sm:text-9xl text-white mx-10 font-bold italic">TOS</text>

            </div>
            <div className="grid lg:grid-cols-2 gap-10 p-6">
              {
                depoimentos.map(dep => {
                  return (
                    <DepoimentoCard dep={dep} key={dep.id} />
                  )
                })
              }
            </div>
          </div>

        </div>






        <div className="flex items-center flex-col bg-slate-100 justify-center py-16 px-10 gap-10">
          <div className="flex flex-col items-center justify-center">
            <text className="md:text-lg text-md text-zinc-500 font-bold">
              Endereço
            </text>
            <text className="md:text-6xl text-4xl text-zinc-900  font-bold">
              Estamos aqui!
            </text>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14672.58423521109!2d-46.87363456163939!3d-23.16486872105062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1682968359220!5m2!1spt-BR!2sbr" width="800" height="600" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl md:flex hidden"
          />
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14672.58423521109!2d-46.87363456163939!3d-23.16486872105062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1682968359220!5m2!1spt-BR!2sbr" width="350" height="280" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl md:hidden flex"
          />

          <text className="md:text-5xl text-3xl text-zinc-900 py-14 text-center font-semibold">
            Av. fictícia, 000, Jundiaí, SP
          </text>
        </div>

        <Footer />

      </div>

    </>
  )
}

export default Home
