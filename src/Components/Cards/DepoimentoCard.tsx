import { IDepoi } from "../../Types/Depoimentos";
import { animated, useInView } from '@react-spring/web'

type Props = {
    dep: IDepoi;
}

export default function DepoimentoCard({ dep }: Props) {


    const [ref, inView] = useInView();

    return (
        <animated.div ref={ref} style={{
            opacity: inView ? 1 : 0,
            y: inView ? -10 : 0,
            transition: "0.5s ease-in",
            display: "flex"
        }}>
            <div className="flex flex-col p-4 border-l-2 border-blue-300 rounded-sm gap-4 justify-between">
                <text className="text-white italic text-lg md:text-xl">{`"${dep.depoiment}"`}</text>
                <div>
                    <img className="h-10 w-10 rounded-full mb-4" src={dep.authorImage} />
                    <text className="text-white text-md md:text-lg ">{`${dep.authorName}`}</text>

                </div>
            </div>
        </animated.div>




    )
}