import { IMainJobs } from "../../Types/MainJobs";
import { useInView, animated } from "@react-spring/web";

type Props = {
    job: IMainJobs;
}

export default function MainJobsCard({ job }: Props) {

    const [ref, inView] = useInView();

    return (
        <animated.div ref={ref} style={{
            opacity: inView ? 1 : 0,
            y: inView ? -10 : 0,
            transition: "0.5s ease-in"
        }}>
            <div className="flex flex-col m-5 shadow-xl rounded-sm hover:shadow-5xl hover:scale-105 transition ease-out">
                <img src={job.img} alt={`${job.title} image`} />
                <div className="p-4 flex flex-col">
                    <text className="text-4xl text-zinc-900 py-10 font-semibold">{job.title}</text>
                    <text className="text-lg text-zinc-900">{job.description}</text>
                </div>
                <button className="p-4 rounded-sm bg-blue-500 text-slate-100">
                    Saiba mais
                </button>
            </div>
        </animated.div>

    )
}