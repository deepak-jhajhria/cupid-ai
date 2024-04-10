import ServiceSecCard from "./ServiceSecCard"
import { serviceCardItems } from "./common/Helper"


const ServiceSec = () => {
    return (
        <div id='service' className="bg-[url(./assets/images/servicebg.webp)] bg-BgSize bg-center bg-no-repeat">
            <div className='py-10 lg:pt-24 lg:pb-20 md:py-16 bg-bg_gradient'>
                <div className='max-w-[980px] px-3 lg:px-0 mx-auto '>
                    <h2 className='font-bold text-center text-white lg:text-4xl sm:text-3xl2 text-3xl1 font-inter md:leading-12'>Our Services</h2>
                    <p className=' font-medium text-gray sm:text-xxl text-xl  text-center mx-auto leading-7 lg:max-w-[500px] md:pt-3 pt-2 lg:pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                    <div className='flex flex-row flex-wrap justify-center w-full mt-1 lg:gap-4 sm:pt-5 lg:pt-12'>
                        {serviceCardItems.map((p) => <ServiceSecCard key={p.id} svg={p.svges} head={p.heading} para={p.paragraph} width={p.width} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSec