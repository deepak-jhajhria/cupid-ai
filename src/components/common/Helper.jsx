import { BoltShiftLogo, FacebookIcon, FatherDevLogo, GlobalBankLogo, GridlineBox, InstaIcon, LightBoxLogo, ServiceSvg, ServiceSvg2, ServiceSvg3, ServiceSvg4, SpheruleLogo, TelegramIcon, TwiterIcon } from "./Icons";
import { RedStar, WhiteTick } from "./Icons"
export const navLinkData = [
    { path: "#home", link: "Home" },
    { path: "#whyus", link: "Why us" },
    { path: "#service", link: "Services" },
    { path: "#faq", link: "FAQs" },
];
export const footerlinkData = [
    { path: "#features", link: "FEATURES" },
    { path: "#service", link: "SERVICE" },
    { path: "#pricing", link: "PRICING" },
    { path: "#howtouse", link: "HOW TO USE" },
]
export const CommonBtn = (props) => {
    return (
        <button className={`py-2.5 sm:py-3.5 px-[25px] rounded-full text-white hover:shadow-gradientRed duration-300 ease-linear bg-btngradient font-medium text-xl leading-6 flex ${props.className}`}>{props.name}</button>
    )
}

export const aiVerificationData = [
    { icon: <GridlineBox />, title: "Hyper Realistic AI Content", para: "Advanced generation techniques helps us generate the best AI generation within the industry",},
    { icon: <GridlineBox />, title: "Streamlined Workflow", para: "Enjoy a seamless and swift workflow pipeline with CUPID AI, simplifying your content creation and management processes.",},
    { icon: <GridlineBox />, title: "Universal verification", para: "Verify your model anywhere, anytime with our AI content generation methods.",},
];

export const companiesData = [
    { companyLogo: (<BoltShiftLogo />), companyLink: "blotshift" },
    { companyLogo: (<LightBoxLogo />), companyLink: "lighbox" },
    { companyLogo: (<FatherDevLogo />), companyLink: "featherdev" },
    { companyLogo: (<SpheruleLogo />), companyLink: "spherule" },
    { companyLogo: (<GlobalBankLogo />), companyLink: "globalbank" },
    { companyLogo: (<BoltShiftLogo />), companyLink: "blotshift", ClassName: "slg:hidden" },
    { companyLogo: (<LightBoxLogo />), companyLink: "lighbox", ClassName: "slg:hidden" },
    { companyLogo: (<FatherDevLogo />), companyLink: "featherdev", ClassName: "slg:hidden" },
    { companyLogo: (<SpheruleLogo />), companyLink: "spherule", ClassName: "slg:hidden" },
    { companyLogo: (<GlobalBankLogo />), companyLink: "globalbank", ClassName: "slg:hidden" },
    { companyLogo: (<LightBoxLogo />), companyLink: "lighbox", ClassName: "slg:hidden" },
    { companyLogo: (<FatherDevLogo />), companyLink: "featherdev", ClassName: "slg:hidden" },
    { companyLogo: (<SpheruleLogo />), companyLink: "spherule", ClassName: "slg:hidden" },
    { companyLogo: (<GlobalBankLogo />), companyLink: "globalbank", ClassName: "slg:hidden" },
];

export const serviceCardItems = [
    { id: 1, svgIcons: <ServiceSvg />, heading: "Content Deepfakes", paragraph: "Seize control and elevate your business with our hyper-realistic AI description creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.", width: "sm:w-7/12 md:max-w-[526px]",},
    { id: 2, svgIcons: <ServiceSvg2 />, heading: "AI Verifications", paragraph: "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.", width: "sm:w-5/12 md:max-w-[416px] ",},
    { id: 3, svgIcons: <ServiceSvg3 />, heading: "Content Utilities", paragraph: "Consolidate your resources with our comprehensive   description utilities. Access everything you need from a single dashboard.", width: "sm:w-5/12 md:max-w-[416px]",},
    { id: 4, svgIcons: <ServiceSvg4 />, heading: "Image Generation", paragraph: "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.", width: "sm:w-7/12 md:max-w-[526px]",},
]
// pricing data

export const Includedata = [
    { description: "Calculator, Quicklinks, Snippets, Window Management, and many more core features", },
    { description: "More than 1000 Extensions", },
    { description: "Custom Extensions", },
    { description: "Developer Tools", },
]

export const Enterpreneurdata = [
    { description: "Everything in Free" },
    { description: "Raycast AI" },
    { description: "Cloud Sync" },
    { description: "Custom Themes" },
    { description: "Unlimited Clipboard History" },
]

export const Business = [
    { description: "Everything in Pro" },
    { description: "Unlimited Shared Commands" },
    { description: "Unlimited Shared Quicklinks" },
    { description: "Unlimited Shared Snippets" },
    { description: "Unlimited Team Members" },
];
export const IndividualData = () => {
    return (
        (<div className='flex flex-col gap-4'>
            {Includedata.map((line, index) => {
                return (
                    <div key={index} className='flex gap-3 '>
                        <span><WhiteTick /></span>
                        <p className='text-xs font-medium sm:text-2sm text-dark-gray leading-2xl'>{line.description}</p>
                    </div>
                )
            })}
        </div>)
    )
}
export const Entrepreneurcontent = () => {
    return (<div className='flex flex-col gap-4'>
        {Enterpreneurdata.map((line, index) => {
            return (
                <div key={index} className='flex gap-3'>
                    <span><WhiteTick /></span>
                    <p className='text-xs font-medium sm:text-2sm text-dark-gray leading-2xl'>{line.description}</p>
                </div>
            )
        })}
        <div className='flex gap-3'>
            <div><RedStar /></div>
            <p className='text-xs font-medium sm:text-2sm text-dark-gray leading-2xl'>More Coming Soon</p>
        </div>
    </div>)
}

export const BusinessData = () => {
    return (<div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
            {Business.map((line, index) => {
                return (
                    <div key={index} className='flex gap-3 '>
                        <span><WhiteTick /></span>
                        <p className='text-xs font-medium sm:text-2sm text-dark-gray leading-2xl'>{line.description}</p>
                    </div>
                )
            })}
        </div>
        <div className='flex gap-3'>
            <div><RedStar /></div>
            <p className='text-xs font-medium sm:text-2sm text-dark-gray leading-2xl'>More Coming Soon</p>
        </div>
    </div>)
}

export const GradientLine = () => {
    return (<div className='bg-whitegradient w-full h-[1px] sm:my-12 my-8'></div>)
}

export const GradientLineBtn = () => {
    return (<div className='relative flex items-center justify-center md:mt-8 md:mb-9 my-7'>
        <button className='text-2sm font-medium text-white leading-2xl text-center mx-auto py-1 px-3 bg-gray-white-500 rounded-[10px] relative z-10'>£408 billed annually</button>
        <div className='bg-whitegradient absolute w-full h-[1px] left-0 right-0 z-[1]'></div>
    </div>)
}

export const DiscountBtn = () => {
    return (<button className='py-[4px] px-[8px] bg-light-red text-dark-black-300 font-semibold text-xs rounded-3xl' >-20%</button>)
}
// pricing Month and Yearly plan
export const PricedataMonth = [
    { id: 1, heading: "Indivisual", para: "Everything you need to supercharge your productivity.", includedata: (<IndividualData />), price: "£24", user: "", disbtn: "", billed: (<GradientLine />), },
    { id: 2, heading: "Entrepreneur", para: "Unlock a new level of your personal productivity.", includedata: (<Entrepreneurcontent />), price: "£34", user: "", disbtn: (<DiscountBtn />), billed: (<GradientLineBtn />), },
    { id: 3, heading: "Business", para: "Supercharge your team and maximize productivity.", includedata: (<BusinessData />), price: "£120", user: "/ user", disbtn: (<DiscountBtn />), billed: (<GradientLineBtn />) }
]

export const PricedataYear = [
    { id: 1, heading: "Indivisual", para: "Everything you need to supercharge your productivity.", includedata: (<IndividualData />), price: "£240", user: "", disbtn: "", billed: (<GradientLine />), },
    { id: 2, heading: "Entrepreneur", para: "Unlock a new level of your personal productivity.", includedata: (<Entrepreneurcontent />), price: "£360", user: "", disbtn: (<DiscountBtn />), billed: (<GradientLineBtn />), },
    { id: 3, heading: "Business", para: "Supercharge your team and maximize productivity.", includedata: (<BusinessData />), price: "£1200", user: "/ user", disbtn: (<DiscountBtn />), billed: (<GradientLineBtn />) }
]

// faq
export const accordionData = [
    { id: 1, title: "How do you handle my data?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 2, title: "What's the difference between the Pro and Team plan?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 3, title: "Can I use my own OpenAI API key?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 4, title: "Which model do you use for Raycast AI?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 5, title: "Can I upgrade my Teams subscription to use GPT-4?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 6, title: "Does Raycast have a Student Program?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
];

// footer 
export const icons = [
    { link: "http://www.twitter.com", logo: (<TwiterIcon />) },
    { link: "http://www.instagram.com", logo: (<InstaIcon />) },
    { link: "http://www.telegram.com", logo: (<TelegramIcon />) },
    { link: "http://www.facebook.com", logo: (<FacebookIcon />) },
]