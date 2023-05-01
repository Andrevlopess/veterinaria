export default function ContactForm() {
    return (
        <div className="grid gap-8 my-6 md:grid-cols-2 p-4 self-center bg-cyan-700 rounded-md shadow-2xl">
            <div className="col-span-2 flex flex-col">
                <label htmlFor="first_name" className="mb-2 text-lg text-slate-100">Nome</label>
                <input type="text" id="first_name" className="text-dark-green rounded-md p-2 outline-none border-none" />
            </div>
            <div className=" flex flex-col">
                <label htmlFor="first_name" className="mb-2 text-lg text-slate-100">Email</label>
                <input type="text" id="first_name" className="text-dark-green rounded-md p-2 outline-none border-none" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="first_name" className="mb-2 text-lg text-slate-100">Telefone</label>
                <input type="text" id="first_name" className="text-dark-green rounded-md p-2 outline-none border-none" />
            </div>
            <div className="col-span-2 flex flex-col ">
                <label htmlFor="first_name" className="mb-2 text-lg text-slate-100">Deixe sua mensagem</label>
                <textarea id="first_name" className="text-dark-green rounded-md p-2 outline-none border-none max-h-96" />
            </div>
            <button className=" col-span-2 text-slate-100 bg-cyan-950 p-6 rounded-md text-xl">Enviar</button>
        </div>
    )
}