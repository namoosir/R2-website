import { Card } from "./ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export type ProjectCardProps = {
    image: string,
    title: string,
    description: string,
    reverse?: boolean
};

export function ProjectCard(props: ProjectCardProps) {
    return (
        <>
        
            {
                props.reverse ? 
                    <Card className={`flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 before:translate-y-[90%] after:translate-y-[90%] lg:py-20 lg:px-12 lg:gap-8 before:lg:translate-y-0 after:lg:translate-y-0 before:lg:translate-x-[200%] after:lg:translate-x-[120%]`}>
                        <div className={`w-[210px] lg:w-1/2 lg:order-1 lg:flex-1`}>
                            <AspectRatio ratio={69/100}>
                                <img src={props.image} alt={props.description} />
                            </AspectRatio>
                        </div>
                        <div className={`flex flex-col justify-center gap-2 lg:order-2 lg:flex-1`}>
                            <h4 className={`text-xl font-semibold text-card-foreground lg:text-5xl lg:font-black lg:text-right`}>
                                {props.title}
                            </h4>
                            <h4 className={`text-xl text-muted-foreground lg:text-right`}>
                                {props.description}
                            </h4>
                        </div>
                    </Card>
                    : 
                    <Card className={`flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 before:translate-y-[90%] after:translate-y-[90%] lg:py-20 lg:px-12 lg:gap-8 before:lg:translate-y-0 after:lg:translate-y-0 before:lg:-translate-x-[250%] after:lg:-translate-x-[170%]`}>
                        <div className={`w-[210px] lg:w-1/2 lg:order-2 lg:flex-1`}>
                            <AspectRatio ratio={69/100}>
                                <img src={props.image} alt={props.description} />
                            </AspectRatio>
                        </div>
                        <div className={`flex flex-col justify-center gap-2 lg:order-1 lg:flex-1`}>
                            <h4 className={`text-xl font-semibold text-card-foreground lg:text-5xl lg:font-black lg:text-left`}>
                                {props.title}
                            </h4>
                            <h4 className={`text-xl text-muted-foreground lg:text-left`}>
                                {props.description}
                            </h4>
                        </div>
                    </Card>
            }
        </>
    );
}
