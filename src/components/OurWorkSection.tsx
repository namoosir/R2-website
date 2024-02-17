import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import AggregatorMobile from "../../public/AggregatorMobile.png";
import AlgoVisualizer from "../../public/AlgorithmVisualizer.webp";

export default function OurWorkSection() {
    const devCardProps: ProjectCardProps[] = [
        {
            image: AggregatorMobile,
            title: "Aggregator",
            description: "A social media usage tracker"
        },
        {
            image: AlgoVisualizer,
            title: "Algorithm Visualizer",
            description: "An algorithm visualizer made for Computer Science students"
        }
    ];

    return (
        <div id='serviceSection' className="flex flex-col gap-4">
            <h1 className="text-5xl font-black">
                Our Work
            </h1>
            <h1 className="text-lg font-semibold text-muted-foreground">
                Examples of our past work.
            </h1>
            {
                devCardProps.map((props, index) => {
                    return <ProjectCard {...props} key={index} />
                })
            }
        </div>
    );
}