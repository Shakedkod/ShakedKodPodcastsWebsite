import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

gsap.registerPlugin(ScrollToPlugin);

export const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (!(bannerOne && bannerTwo && bannerThree && bannerFour)) return null;
    
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 100,
        stagger: 0.2,
    });
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (!(bannerOne && bannerTwo && bannerThree && bannerFour)) return null;
    
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
            router.push(href);
        }
    });
};

export const animateMoveToSection = (href: string, router: AppRouterInstance) => {
    const tl = gsap.timeline();

    console.log(href.replace("/", ""));

    // move down across the page
    tl.to(window, {
        duration: 1,
        scrollTo: href.replace("/", ""),
        onComplete: () => {
            router.push(href);
        }
    });
};