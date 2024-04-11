import clupiAiImage from "../assets/images/clupiai.webp";
import { aiVerificationData } from "./common/Helper";
import { YellowMan } from "./common/Icons";
const AiVerification = () => {
    return (
        <div id="whyus" className=" bg-black-primary xl:pt-11 mt-[-2px] ">
            <div className="container max-w-[1320px]">
                <h2 className="font-bold lg:text-6xl sm:text-4xl text-3xl1 text-white sm:leading-[56px] leading-[42px]  tracking-[-1.2px]"> A CRM created <br /> to be your own.</h2>
                <p className="font-medium text-gray md:text-xxl text-lg sm:text-xl mt-[22px] tracking-[0.2px]">Tweak anything and everything to ensure fits<br />your business, not the other way around.</p>
                <div className=" overflow-hidden my-10 md:mb-20 md:mt-16 lg:mt-[92px]  pt-9 px-3 sm:px-6 lg:px-10 border-[#3C3C3C] border  rounded-[20px] bg-[#0A0A0A] ">
                    <div className="flex flex-row justify-between mb-5 max-xl:overflow-x-scroll snap-mandatory snap-x scrolbar flex-nowrap sm:mb-11 md:mb-16">
                        {aiVerificationData.map((obj, i) => (
                            <div key={i} className="group duration-200 snap-start mb-4 min-w-[324px]  sm:min-w-[401px]  sm:pe-4 h-full ">
                                <div className="flex items-center gap-[10px]">
                                    <span>{obj.icon}</span>
                                    <h2 className=" group-hover:text-gray-dark-200 duration-200  font-semibold text-lg leading-[21px] text-gray-light-300">
                                        {obj.title}
                                    </h2>
                                </div>
                                <p className=" group-hover:text-gray-dark-200 duration-200 pt-[10px] font-normal text-base leading-6 tracking-[-0.2px] text-gray-light-300">
                                    {obj.para}
                                </p>
                            </div>
                        ))}
                    </div>
                    <img src={clupiAiImage} alt="crmai" height={387} className="object-cover h-full lg:h-96 w-full rounded-t-[20px]" />
                </div>
                <div className="flex justify-center ">
                    <YellowMan />
                </div>
                <p className="font-normal mt-6 md:text-xxl text-lg sm:text-xl leading-16 tracking-[0.5px] text-center max-w-[638px] mx-auto text-gray-light-300">
                    “My team loves cupid reporting system because it’s so dynamic. We can
                    splice our data in so many different ways and combinations.”
                </p>
                <p className=" pt-4 sm:pt-5 md:pt-7 pb-10 md:pb-12 text-gray font-medium text-sm md:leading-5 tracking-[-0.1px] text-center">Davio White <br /> Chief of Staff, Pallet</p>
            </div>
        </div>
    );
};

export default AiVerification;
