import blotshift from "../../assets/images/boltshift.webp";
import lighbox from "../../assets/images/lightbox.webp";
import featherdev from "../../assets/images/featherdev.webp";
import spherule from "../../assets/images/spherule.webp";
import globalbank from "../../assets/images/globalbank.webp";
import { GridlineBox } from "./Icons";

export const navLinkData = [
    { path: "#home", link: "Home" },
    { path: "#whyus", link: "Why us" },
    { path: "#service", link: "Services" },
    { path: "#faq", link: "FAQ" },
];
export const CommonBtn = (props) => {
    return (
        <button className={`py-2.5 sm:py-3.5 px-[25px] rounded-full text-white hover:shadow-gradientRed transition-all duration-300 ease-linear bg-btngradient font-medium text-xl leading-6 flex ${props.className}`}>{props.name}</button>
    )
}

// section 2

export const crmData = [
    {
        icon: <GridlineBox />,
        title: "Hyper Realistic AI Content",
        para: "Advanced generation techniques helps us generate the best AI generation within the industry",
    },
    {
        icon: <GridlineBox />,
        title: "Streamlined Workflow",
        para: "Enjoy a seamless and swift workflow pipeline with CUPID AI, simplifying your content creation and management processes.",
    },
    {
        icon: <GridlineBox />,
        title: "Universal verification",
        para: "Verify your model anywhere, anytime with our AI content generation methods.",
    },
];

export const companiesData = [
    { companyLogo: blotshift, alt: "blotshift" },
    { companyLogo: lighbox, alt: "lighbox" },
    { companyLogo: featherdev, alt: "featherdev" },
    { companyLogo: spherule, alt: "spherule" },
    { companyLogo: globalbank, alt: "globalbank" },
    { companyLogo: blotshift, alt: "blotshift", none: "slg:hidden" },
    { companyLogo: lighbox, alt: "lighbox", none: "slg:hidden" },
    { companyLogo: featherdev, alt: "featherdev", none: "slg:hidden" },
    { companyLogo: spherule, alt: "spherule", none: "slg:hidden" },
    { companyLogo: globalbank, alt: "globalbank", none: "slg:hidden" },
    { companyLogo: lighbox, alt: "lighbox", none: "slg:hidden" },
    { companyLogo: featherdev, alt: "featherdev", none: "slg:hidden" },
    { companyLogo: spherule, alt: "spherule", none: "slg:hidden" },
    { companyLogo: globalbank, alt: "globalbank", none: "slg:hidden" },
];
