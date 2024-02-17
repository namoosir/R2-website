import { DevCard, DevCardProps } from "./DevCard";

export default function AboutUsSection() {
    const devCardProps: DevCardProps[] = [
        {
            name: "Nazmus Saqeeb",
            image: "https://media.licdn.com/dms/image/D4E03AQHXdodSoM1C1w/profile-displayphoto-shrink_800_800/0/1693589819307?e=1713398400&v=beta&t=m8XbTgjo2DUzBCUh2ow6LXvPvJFiEtm6Z7OSiI25Jh4",
            title: "Full-Stack Developer",
            github: "https://github.com/namoosir",
            profile: "https://www.nazmussaqeeb.com/",
        },
        {
            name: "Tamim Rahman",
            image: "https://media.licdn.com/dms/image/C4D03AQHYfeimwCYz2A/profile-displayphoto-shrink_800_800/0/1590866463631?e=1713398400&v=beta&t=f6a2ze-UJwBi4VVpI_tIqK50Q3kuJuZ7tSknmmlE6UE",
            title: "Full-Stack Developer",
            github: "https://github.com/t32rahman",
            profile: "https://www.tamimrahman.dev/",
        },
        {
            name: "Ashanth Ranjith",
            image: "",
            title: "Full-Stack Developer",
            github: "https://github.com/ashxnth",
            profile: "https://ashxnth.github.io/",
        }
    ];

    return (
        <div id='serviceSection' className="flex flex-col gap-4">
            <h1 className="text-5xl font-black">
                About Us
            </h1>
            <h1 className="text-lg font-semibold text-muted-foreground">
                R2 Studios is a design and development firm committed to bring customers needs to life.
            </h1>
            {
                devCardProps.map((props, index) => {
                    return <DevCard {...props} key={index} />
                })
            }
        </div>
    );
}