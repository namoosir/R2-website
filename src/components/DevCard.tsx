import { Card } from "./ui/card";
import Github from "./icons/Github";
import ExternalLink from "./icons/ExternalLink";
import profilePlaceholder from "../../public/PortraitPlaceholder.png";

export type DevCardProps = {
    image: string,
    name: string,
    title: string,
    github: string,
    profile: string
};

export function DevCard(props: DevCardProps) {

    return (
        <Card className="flex flex-row justify-around items-center min-w-[320px] p-5 gap-4">
            { props.image ? 
                <img src={props.image} className="w-20 h-20 rounded-full" /> : 
                <img src={profilePlaceholder} className="w-20 h-20 rounded-full" />
            }
            
            <div className="flex flex-col justify-center items-center gap-1">
                <h4 className="text-xl font-semibold text-card-foreground">
                    {props.name}
                </h4>
                <p className="text-muted-foreground">{props.title}</p>
                <div className="flex flex-row justify-center items-center gap-4">
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