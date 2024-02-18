import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


export default function ContactSection() {
    const onEmailClick = () => {
        window.location.href = "mailto:r2studios@dev.com";
    };

    const onPhoneClick = () => {
        window.location.href = "tel:+16475421246";
    };

    return (
        <div id='contactSection' className="flex flex-col gap-4 w-full max-w-[1120px] lg:gap-8">
            <h1 className="text-5xl font-black">
                Contact Us
            </h1>
            <Card className="flex flex-col justify-center items-center min-w-[320px] p-5 lg:py-20 lg:px-12">
                <div className="flex flex-row items-center">
                    <p className="text-sm lg:text-xl">Email us at:</p>
                    <Button className="lg:px-5 lg:py-3 lg:h-auto" variant={"link"} onClick={onEmailClick}>
                        <p className="text-sm lg:text-xl">r2studios@dev.com</p>
                    </Button>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-sm lg:text-xl">Call us at:</p>
                    <Button className="lg:px-5 lg:py-3 lg:h-auto" variant={"link"} onClick={onPhoneClick}>
                        <p className="text-sm lg:text-xl">+1 (647) 542 1246</p>
                    </Button>
                </div>
            </Card>
        </div>
    );
}