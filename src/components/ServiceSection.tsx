import PencilSketch from "./icons/PencilSketch";
import Database from "./icons/Database";
import Phone from "./icons/Phone";
import Shop from "./icons/Shop";
import WebDev from "./icons/WebDev";

import { ServiceCard, ServiceCardProps } from "./ServiceCard";


export default function ServiceSection() {
    const cardProps: ServiceCardProps[] = [
        {
            title: "UI/UX Design",
            icon: <PencilSketch />
        },
        {
            title: "Web Development",
            icon: <WebDev />
        },
        {
            title: "Hosting & Deployment",
            icon: <Database />
        },
        {
            title: "SEO",
            icon: <Shop />
        },
        {
            title: "IOS/Android Apps",
            icon: <Phone />
        }
    ];

    return (
        <div id='serviceSection' className="flex flex-col gap-4">
            <h1 className="text-5xl font-black">
                Services
            </h1>
            <h1 className="text-lg font-semibold text-muted-foreground">
                We are experts in:
            </h1>
            {
                cardProps.map((props, index) => {
                    return <ServiceCard {...props} key={index}/>
                })
            }
        </div>
    );
}