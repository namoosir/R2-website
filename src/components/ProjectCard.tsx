import { Card } from "./ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export type ProjectCardProps = {
    image: string,
    title: string,
    description: string
};

export function ProjectCard(props: ProjectCardProps) {

    return (
        <Card className="flex flex-col justify-center items-center min-w-[320px] p-5 gap-4">
            <AspectRatio ratio={69 / 100}>
                <img src={props.image} />
            </AspectRatio>
            <div className="flex flex-col justify-center gap-2">
                <h4 className="text-xl font-semibold text-card-foreground">
                    {props.title}
                </h4>
                <h4 className="text-xl text-muted-foreground">
                    {props.description}
                </h4>
            </div>

        </Card>
    );
}
