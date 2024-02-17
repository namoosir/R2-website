import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import AggregatorMobile from "/AggregatorMobile.png";
import AlgoVisualizer from "/AlgorithmVisualizer.webp";

export default function OurWorkSection() {
    const devCardProps: ProjectCardProps[] = [
        {
            image: AggregatorMobile,
            title: "Aggregator",
            description: "Social Media usage tracker that enables you to see your most consumed content" 
        },
        {
            image: AlgoVisualizer,
            title: "Algorithm Visualizer",
            description: "An algorithm visualizer made for Computer Science students",
            reverse: true
        }
    ];

    return (
        <div id='ourWorkSection' className="flex flex-col gap-4 lg:gap-8 lg:w-[1120px]">
            <h1 className="text-5xl font-black">
                Our Work
            </h1>
            <h1 className="text-lg font-semibold text-muted-foreground lg:text-xl">
                Examples of our past work.
            </h1>
            <div className="flex flex-col gap-4">
                {
                    devCardProps.map((props, index) => {
                        return <ProjectCard {...props} key={index} />
                    })
                }
            </div>
        </div>
    );
}