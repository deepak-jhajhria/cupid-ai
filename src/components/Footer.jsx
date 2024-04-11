import { footerlinkData, icons } from "./common/Helper"
import { FooterGradientMixup, FooterLogo } from "./common/Icons"

const Footer = () => {
    return (
        <div className="relative mt-10 overflow-x-clip xl:mt-32">
            <div className="container relative z-10 max-w-[1320px] xl:max-w-[1300px]">
                <nav>
                    <div className="flex flex-col items-center justify-between py-6 lg:flex-row">
                        <a className="flex items-center gap-2 text-3xl font-bold leading-9 text-white" href="#home"><span><FooterLogo /></span>CupidAI</a>
                        <ul className="flex flex-wrap items-center justify-center gap-3 mt-3 md:gap-10 lg:gap-16 xl:gap-24 sm:mt-5 lg:mt-0 lg:mr-12">
                            {
                                footerlinkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-xs font-semibold leading-5 tracking-wide text-gray-white-100 navLinks" href={item.path}>{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
                <div className="flex flex-col-reverse items-center justify-between w-full py-3 border-t border-white sm:flex-row sm:py-5 md:py-6 border-opacity-20">
                    <p className="mt-4 text-sm font-normal font-inter text-gray-white-100 sm:mt-0">©{(new Date().getFullYear())}. All rights reserved </p>
                    <div className="flex items-center gap-4 sm:gap-5 md:gap-8">
                        {
                            icons.map((items, index) => (
                                <a key={index} href={items.link} target="_blank" rel="noopener noreferrer"><span className="flex items-center justify-center duration-300 rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-dark-black group hover:bg-white hover:-translate-y-2">{items.logo}</span></a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <span className="absolute bottom-0 z-0 animate-movelinner"><FooterGradientMixup /></span>
        </div>
    )
}

export default Footer
