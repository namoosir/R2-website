import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export type ProjectCardProps = {
    image: string,
    title: string,
    description: string,
    reverse?: boolean
};

export function ProjectCard(props: ProjectCardProps) {
    const [isReverse, setIsReverse] = useState(false);
    const [imageClass, setImageClass] = useState("order-2");
    const [descriptionClass, setDescriptionClass] = useState("order-1");
    const [textClass, setTextClass] = useState("text-left");

    useEffect(() => {
        if (props.reverse && props.reverse === true) {
            setIsReverse(true);
        }
    }, [])

    useEffect(() => {
        if (isReverse) {
            setImageClass("order-1");
            setDescriptionClass("order-2");
            setTextClass("text-right");
        }
    }, [isReverse])

    return (
        <Card className="flex flex-col lg:flex-row justify-center items-center min-w-[320px] p-5 gap-4 lg:py-20 lg:px-12 lg:gap-8">
            {/* { props.reverse && props.reverse === true ? 
                <></> : 
                <></> 
            } */}
            <div className={`w-3/4 lg:w-1/2 lg:${imageClass} lg:flex-1`}>
                <AspectRatio ratio={69/100}>
                    <img src={props.image} alt={props.description} />
                </AspectRatio>
            </div>
            <div className={`flex flex-col justify-center gap-2 lg:${descriptionClass} lg:flex-1`}>
                <h4 className={`text-xl font-semibold text-card-foreground lg:text-5xl lg:font-black lg:${textClass}`}>
                    {props.title}
                </h4>
                <h4 className={`text-xl text-muted-foreground lg:${textClass}`}>
                    {props.description}
                </h4>
            </div>
        </Card>
    );
}
