

export default function ContactForm() {


    return (
        <div className="rounded-md shadow-2xl border-4 border-blue-400 p-4 flex flex-col gap-10">
            <text className="lg:text-5xl text-4xl text-slate-100 mt-10 text-center">Agende sua consulta</text>

            <div className="grid gap-8 my-6 lg:grid-cols-2">

                <div className="lg:col-span-2 flex flex-col">
                    <label htmlFor="name" className="font-semibold mb-2 text-lg text-slate-100">Nome</label>
                    <input
                        
                        type="text"
                        id="name"
                        className="text-zinc-900 rounded-md p-2 outline-none border-none" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="font-semibold mb-2 text-lg text-slate-100">Email</label>
                    <input 
                    
                    type="text" id="email" className="text-zinc-900 rounded-md p-2 outline-none border-none" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="tel" className="font-semibold mb-2 text-lg text-slate-100">Telefone</label>
                    <input 
                   
                    type="tel" 
                    id="tel" 
                    className="text-zinc-900 rounded-md p-2 outline-none border-none" />
                </div>

                <div className="lg:col-span-2 flex flex-col ">
                    <label htmlFor="first_name" className="font-semibold mb-2 text-lg text-slate-100">
                        Informe o motivo da sua consulta
                    </label>
                    <textarea
                   
                     id="first_name" className="text-zinc-900 rounded-md p-2 outline-none border-none max-h-96" />
                </div>
                <button className="lg:col-span-2 text-slate-100 bg-blue-700 border-2 border-blue-400 p-6 rounded-md text-xl">Enviar</button>
            </div>
        </div>

    )
}