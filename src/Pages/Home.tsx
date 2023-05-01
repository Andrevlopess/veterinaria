import MainJobsCard from "../Components/Cards/MainJobsCard";
import "../Styles/index.css"
import DogBanner from '../assets/DogBanner.svg'
import { mainJobs } from "../Utils/MainJobs";
import CatBanner from '../assets/CatBanner.svg';
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

function Home() {

  // const navigate = useNavigate()

  return (
    <>
      <div className='bg-cyan-500 font-display'>
        <Header />

        <div className="pt-5 flex">
          <img src={DogBanner} alt="React Logo" />
        </div>

        <div className="flex items-center bg-slate-100 justify-center py-16 px-10">
          {mainJobs.map((job) => {
            return (
              <MainJobsCard job={job} />
            )
          })}
        </div>

        <div className="bg-cyan-500 flex justify-between items-center ">
          <div className="ml-16 pt-12">
            <text className="text-6xl text-slate-100 py-10">Fale com a nossa equipe</text>
            <ContactForm />

          </div>
          <img src={CatBanner} alt="Cat banner" />
        </div>

        <div className="flex items-center flex-col bg-slate-100 justify-center py-16 px-10">
          <text className="text-6xl text-dark-green py-10">
            Estamos aqui!
          </text>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14672.58423521109!2d-46.87363456163939!3d-23.16486872105062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1682968359220!5m2!1spt-BR!2sbr" width="800" height="600" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl"
          />

          <text className="text-3xl text-dark-green py-14">
            Av. fictícia, 000, Jundiaí, SP
          </text>
        </div>

        <Footer />

      </div>

    </>
  )
}

export default Home
