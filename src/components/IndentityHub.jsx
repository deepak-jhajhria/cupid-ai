import { CircleEllipseSvg, GradientLineSvg } from "./common/Icons"
const IdentityHub = () => {
    return (
        <div className="relative z-10 mt-12 sm:py-16 md:py-20 xl:py-40 overflow-x-clip md:mt-12 xl:mt-48">
            <div className="flex flex-col w-full justify-center items-center max-w-[691px] px-3 lg:px-0 pt-1 mx-auto relative z-10">
                <h2 className="font-semibold leading-10 text-center text-white sm:leading-12 text-3xl1 sm:text-6xl lg:text-7xl md:leading-13">Be part of the future of <span className="inline-block ">IdentityHub</span></h2>
                <span className="-mt-1"><GradientLineSvg /></span>
                <p className="mt-3 text-base font-normal text-center md:leading-8 sm:text-lg lg:text-xl text-gray-white-100 md:mt-4">Unleash the power of AI within cupid. Upgrade your productivity with cupid, the open AI chat app.</p>
                <button className=" text-white py-3 px-5 bg-gradientEllipsePrimary TrailBtn duration-300 hover:shadow-gradientRed font-medium from-15% rounded-xl mt-4 sm:mt-6 md:mt-8 leading-4">Start free trail</button>
            </div>
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2]"><CircleEllipseSvg /></span>
        </div>
    )
}

export default IdentityHub
