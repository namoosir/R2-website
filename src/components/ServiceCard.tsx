import { Card } from "./ui/card";

export type ServiceCardProps = {
    icon: JSX.Element,
    title: string
};

export function ServiceCard(props: ServiceCardProps) {

    return (
        <Card className="flex flex-row justify-center items-center min-w-[320px] p-5 gap-4">
            { props.icon }
            <h4 className="text-xl font-semibold text-card-foreground">
                { props.title }
            </h4>
        </Card>
    );
}