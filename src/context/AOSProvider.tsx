import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000, // ms
            once: true, // run only once
            easing: "ease-in-out",
        });
    }, []);

    return <>{children}</>;
}