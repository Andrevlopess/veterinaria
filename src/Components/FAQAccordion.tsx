import { Ifaq } from "../Types/Types"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useState } from 'react'

type Props = {
    faq: Ifaq
}

export default function FAQAccordion({ faq }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
           <button

            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-8 border-b-2 border-white py-4 ease-in-out">
            <div className="flex justify-between gap-10 items-center w-full">
                <text className=" text-xl md:text-2xl text-slate-100 font-bold">
                    {faq.question}
                </text>
                {isOpen ?
                    <BsChevronUp color="#fff" size={20} />
                    :
                    <BsChevronDown color="#fff" size={20} />
                }
            </div>

            {
                isOpen &&
                <text className=" text-md md:text-lg text-slate-100 text-start">
                    {faq.response}
                </text>
            }
        </button> 
    )
}