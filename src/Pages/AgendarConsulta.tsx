import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import CatBanner from "../assets/CatBanner.svg"

export default function AgendarConsulta() {

    return (
        <div className="bg-blue-500 font-display">
            <Header />
            <div className="bg-blue-500 flex justify-evenly w-full flex-wrap items-end">
                <div className="p-12 w-full md:w-1/2 justify-center">
                    <ContactForm />

                </div>

                <img src={CatBanner} alt="Cat banner" className="drop-shadow-2xl" />

            </div>
            <Footer />
        </div>
    )
}