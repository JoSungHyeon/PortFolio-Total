import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export function port() {
    gsap.registerPlugin(ScrollTrigger);

    const horSection = gsap.utils.toArray(".port_item");

    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 60px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });
}