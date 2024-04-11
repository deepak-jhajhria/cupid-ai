import ServiceSecCard from "./ServiceSecCard"
import { serviceCardItems } from "./common/Helper"


const ServiceSec = () => {
    return (
        <div id='service' className="bg-[url(./assets/images/servicebg.webp)] bg-BgSizeFull bg-center bg-no-repeat">
            <div className='py-10 sm:py-12 lg:py-16 xl:py-[101px] bg-gradientEllipseSecond'>
                <div className='xl:max-w-[980px] container max-w-[1320px]'>
                    <h2 className='font-bold text-center text-white lg:text-4xl sm:text-3xl2 text-3xl1 font-inter md:leading-12'>Our Services</h2>
                    <p className=' font-medium text-gray md:text-xxl text-lg sm:text-xl  text-center mx-auto leading-16 max-w-[480px] md:pt-3 pt-2 lg:pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                    <div className='flex flex-row flex-wrap justify-center w-full mt-1 lg:gap-6 sm:pt-5 lg:pt-12'>
                        {serviceCardItems.map((p) => <ServiceSecCard key={p.id} svg={p.svgIcons} head={p.heading} para={p.paragraph} width={p.width} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSec