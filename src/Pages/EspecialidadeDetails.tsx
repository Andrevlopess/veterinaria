import { useLocation } from 'react-router-dom'
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';


export default function EspecialidadesDetails() {

    const location = useLocation();
    const data = location.state;


    return (
       <div className='font-display bg-blue-500'>
        <Header/>
         <div className='flex justify-evenly items-center my-40 flex-wrap'>
            <div className='flex flex-col max-w-2xl mx-12'>
                <text className='text-6xl text-white pb-10'>{data.title}</text>
                <text className='text-3xl text-white'>{data.description}</text>
            </div>
            <img src={data.img} alt={`${data.title} image`}/>
         </div>
         <Footer/>
       </div>
    )
}