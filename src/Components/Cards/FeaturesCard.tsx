import { useInView, animated } from "@react-spring/web";
import { IFeatures } from "../../Types/Types";
type Props = {
    feature: IFeatures,
}

export default function FeaturesCard({ feature }: Props) {
    const [ref, inView] = useInView();

    return (
        <animated.div ref={ref}
            className="flex"
            style={{
                opacity: inView ? 1 : 0,
                y: inView ? -10 : 0,
                transition: "0.5s ease-in"
            }}>
            <div className="hover:scale-105 transition-transform ease-out flex flex-col justify-center items-center gap-4 border-b-2 border-black py-4">
                <text className="text-2xl">{feature.title}</text>
                <text className="text-lg text-center">{feature.description}</text>
            </div>
        </animated.div>

    )
}