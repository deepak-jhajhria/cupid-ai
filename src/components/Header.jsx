import { HeroBg, Logo } from "./common/Icons";
import dashboardimg from '../assets/images/dashboardimage.webp'
import { Twirl as Hamburger } from 'hamburger-react';
import { CommonBtn, navLinkData } from "./common/Helper";
import { useOverflowHidden } from "./common/Hooks";

const Header = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <>
            <div id="home" className="relative overflow-hidden min-h-[620px] md:min-h-[781px] 2xl:min-h-[810px]">
                <div className="container max-w-[1320px]">
                    <span className="absolute bottom-0 left-0 z-0 w-full h-full"><HeroBg /></span>
                    <div className="relative gradientNavBorder after:!rounded-full">
                        <nav className=" bg-black-primary-100 rounded-4xl sm:rounded-full  p-2 lg:p-2.5 mt-4 sm:mt-8 md:mt-10">
                            <div className="relative z-10 flex items-center justify-between">
                                <a className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl" href="#"><span> <Logo /> </span> CupidAI</a>
                                <ul className={`${isOpen ? "right-0" : "-right-full"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full !max-lg:z-50 max-lg:duration-300 max-lg:flex-col gap-7 items-center justify-center`}>
                                    {
                                        navLinkData.map((item, index) => (
                                            <li key={index}>
                                                <a className="text-base font-normal leading-6 tracking-wide text-white duration-300 sm:text-lg md:text-xl navLinks" href={item.path} onClick={() => setOpen(false)}>{item.link}</a>
                                            </li>
                                        ))
                                    }
                                    <li className="lg:hidden"><a href="#" className="font-normal text-xl leading-4 duration-300 text-white hover:text-[#B302B1]"> Log in</a></li>
                                    <li className="lg:hidden"><CommonBtn name="Sing up" /></li>
                                </ul>
                                <div className="items-center hidden gap-5 lg:flex">
                                    <a href="#" className="font-normal text-xl leading-4 duration-300 text-white hover:text-[#B302B1]"> Log in</a>
                                    <CommonBtn name="Sing up" />
                                </div>
                                <div className={`relative z-[110] mx-2 sm:mx-3 lg:hidden`}>
                                    <Hamburger toggled={isOpen} toggle={setOpen} size={26} rounded distance="sm" direction='right' duration={0.5} color='#FFF' />
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center max-w-[623px] px-3 md:px-0 mx-auto mt-16 pt-2 relative z-[2]">
                        <h2 className="font-bold leading-10 text-center text-white text-3xl1 sm:text-5xl md:text-6xl lg:text-7xl sm:leading-12 lg:leading-13">Unleash <span className="text-transparent bg-headertextGradient bg-clip-text">Creativity</span>, Effortlessly</h2>
                        <p className="mt-2 text-base font-normal text-center text-white md:leading-6 sm:text-lg md:text-xl">Elevate your agency's output with state-of-the-art AI, engineered to innovate at the speed of thought.</p>
                        <CommonBtn className="mt-5" name="Try Now" />
                    </div>
                </div>
            </div>
            <img src={dashboardimg} alt="dashboardimg" className="mx-auto max-w-[960px] w-full -translate-y-[48%] sm:-translate-y-[34%] md:-translate-y-[44%] pl-4 sm:pl-5 md:pl-8 lg:pl-12 lg:min-h-[687px]" />
        </>
    );
};

export default Header;