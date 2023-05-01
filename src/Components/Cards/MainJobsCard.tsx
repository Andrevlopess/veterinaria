import { IMainJobs } from "../../Types/MainJobs";

type Props = {
    job: IMainJobs;
}

export default function MainJobsCard({ job }: Props) {
    return (
        <div className="flex flex-col m-5 shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition ">
            <img src={job.img} alt={`${job.title} image`}/>
            <div className="p-4 flex flex-col">
                <text className="text-3xl text-dark-green py-10">{job.title}</text>
                <text className="text-lg text-dark-green">{job.description}</text>
            </div>
            <button className="p-4 rounded-sm bg-cyan-500 text-slate-100">
                Saiba mais
            </button>
        </div>
    )
}