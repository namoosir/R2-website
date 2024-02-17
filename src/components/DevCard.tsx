import { Card } from "./ui/card";
import Github from "./icons/Github";
import ExternalLink from "./icons/ExternalLink";
import profilePlaceholder from "/PortraitPlaceholder.png";
import { AspectRatio } from "./ui/aspect-ratio";

export type DevCardProps = {
    image: string,
    name: string,
    title: string,
    github: string,
    profile: string
};

export function DevCard(props: DevCardProps) {

    return (
        <Card className="flex flex-row justify-around items-center min-w-[320px] max-w-[360px] p-5 gap-4 lg:flex-col lg:p-12 lg:w-[360px] lg:gap-8">
            <div className="w-20 filter lg:w-48">
                {props.image ?
                    //TODO: FILTER
                    <AspectRatio>
                        <img src={props.image} className="rounded-full" />
                    </AspectRatio>
                    :
                    <AspectRatio>
                        <img src={profilePlaceholder} className="rounded-full" />
                    </AspectRatio>
                }
            </div>

            <div className="flex flex-col justify-center items-center gap-1 lg:gap-3">
                <h4 className="text-xl font-semibold text-card-foreground lg:text-2xl">
                    {props.name}
                </h4>
                <p className="text-muted-foreground">{props.title}</p>
                <div className="flex flex-row justify-center items-center gap-4 lg:hidden">
                    <a href={props.github} target="_blank">
                        <Github />
                    </a>
                    <a href={props.profile} target="_blank">
                        <ExternalLink />
                    </a>
                </div>
            </div>
        </Card>
    );
}