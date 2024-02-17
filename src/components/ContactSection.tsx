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
        <div id='contactSection' className="flex flex-col gap-4">
            <h1 className="text-5xl font-black">
                Contact Us
            </h1>
            <Card className="flex flex-col justify-center items-center min-w-[320px] p-5">
                <div className="flex flex-row items-center">
                    <p className="text-sm text-medium">Email us at:</p>
                    <Button variant={"link"} onClick={onEmailClick}>
                        r2studios@dev.com
                    </Button>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-sm text-medium">Call us at:</p>
                    <Button variant={"link"} onClick={onPhoneClick}>
                        +1 (647) 542 1246
                    </Button>
                </div>
            </Card>
        </div>
    );
}