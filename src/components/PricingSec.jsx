import { useState } from 'react'
import { WhiteArrow } from './common/Icons'
import { PricedataMonth, PricedataYear } from './common/Helper'

const PricingSec = () => {
    const [toggle, setToggle] = useState(1)
    return (
        <div id='pricing' className='relative xl:mt-20 overflow-x-clip'>
            <div  className="xl:max-w-[1240px] xl:pt-24 md:pt-16 pt-10 container max-w-[1320px] relative z-20">
                <h2 className='font-bold tracking-tighter text-center text-white lg:text-4xl sm:text-3xl2 text-3xl1 leading-16'>Pricing</h2>
                <p className='pt-4 font-medium text-center text-dark-gray text-lg sm:text-xl md:text-xxl sm:pt-5 max-w-[476px] mx-auto md:leading-16'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                <div className='bg-gray-white-500 rounded-4xl p-1 max-w-[192px] mx-auto w-full flex justify-between lg:mt-[44.5px] mt-6'>
                    <button onClick={() => setToggle(1)} className={`py-[6px] px-[18px] rounded-5xl text-base  duration-300 font-medium text-white opacity-80 ${toggle === 1 ? "bg-gray-white-500 opacity-100" : ""}`}>Yearly</button>
                    <button onClick={() => setToggle(2)} className={`py-[6px] px-[18px] rounded-5xl text-base font-medium text-white duration-300 opacity-80 ${toggle === 2 ? "bg-gray-white-500 opacity-100" : ""}`}>Monthly</button>
                </div>
                <div className='flex items-center flex-wrap justify-center w-full lg:mt-12 xl:mt-16 mt-2 min-h-[780px]'>
                    {toggle === 2 && <>
                        {
                            PricedataMonth.map((item, index) => (
                                <div key={index} className='flex items-center justify-center w-full mt-5 sm:mt-8 lg:w-4/12 md:w-6/12 lg:mt-0 md:mt-10'>
                                    <div className='max-w-[410px] relative z-10 duration-300 cursor-pointer blur_box_border hover:z-20 group lg:min-h-[723px] sm:min-h-[700px] min-h-[600px] h-full lg:hover:min-h-[774px] group w-full'>
                                        <div className='sm:p-8 p-5 bg- rounded-3xl flex justify-between flex-col lg:min-h-[723px] sm:min-h-[774px] min-h-[600px] h-full duration-300 lg:group-hover:min-h-[774px] w-full'>
                                            <div className='duration-300'>
                                                <h3 className='inline-block text-lg font-medium text-white transition-all duration-300 group-hover:text-2xl sm:group-hover:text-3xl1 leading-18 group-hover:bg-clip-text group-hover:bg-textGradient group-hover:text-transparent pricingHeading'>{item.heading}</h3>
                                                <p className='my-4 text-sm font-medium text-white duration-300 sm:my-6 sm:text-base sm:leading-15 opacity-60'>{item.para}</p>
                                                <div className='flex items-center gap-2'>
                                                    <h3 className='font-semibold text-white sm:text-4xl2 text-3xl1 lg:text-5xl leading-14'>{item.price}</h3>
                                                    <div className='flex flex-col h-full'>
                                                        <p className='text-xs font-medium text-white sm:text-2sm leading-17 opacity-60'>/ month</p>
                                                        <p className='text-xs font-medium text-white sm:text-2sm leading-17 opacity-60'>{item.user}</p>
                                                    </div>
                                                    {item.disbtn}
                                                </div>
                                                {item.billed}
                                                <p className='mb-4 text-xs font-medium text-white sm:text-2sm leading-17'>What’s included</p>
                                                {item.includedata}
                                            </div>
                                            <button className='py-2.5 px-3 border border-solid border-gray-black-200 after:bg-btnGradient group-hover:border-none transition-all  bg-transparent duration-300 text-white text-base font-medium text-nowrap rounded-xl w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:duration-300 after after:rounded-xl after:opacity-0 group-hover:after:opacity-100 relative'><p className='relative z-10 text-base font-medium text-white text-nowrap'>Select Plan</p></button>
                                        </div>
                                    </div>
                                </div >
                            ))
                        }
                    </>}
                    {toggle === 1 && <>
                        {
                            PricedataYear.map((item, index) => (
                                <div key={index} className='flex items-center justify-center w-full mt-5 sm:mt-8 lg:w-4/12 md:w-6/12 sm:w-10/12 lg:mt-0 md:mt-10'>
                                    <div className='max-w-[410px] relative z-10 duration-300 cursor-pointer blur_box_border lg:hover:min-h-[774px] group hover:z-20 group lg:min-h-[723px] sm:min-h-[700px] min-h-[600px] h-full w-full'>
                                        <div className='sm:p-8 p-5 rounded-3xl flex justify-between flex-col lg:min-h-[723px] sm:min-h-[774px] min-h-[600px] h-full duration-300 lg:group-hover:min-h-[774px] w-full'>
                                            <div>
                                                <h3 className='inline-block text-lg font-medium text-white transition-all duration-300 group-hover:text-2xl sm:group-hover:text-3xl1 leading-18 group-hover:bg-clip-text group-hover:bg-textGradient group-hover:text-transparent pricingHeading'>{item.heading}</h3>
                                                <p className='my-4 text-sm font-medium text-white duration-300 sm:my-6 sm:text-base sm:leading-15 opacity-60'>{item.para}</p>
                                                <div className='flex items-center gap-2'>
                                                    <h3 className='font-semibold text-white sm:text-4xl2 text-3xl1 lg:text-5xl leading-14'>{item.price}</h3>
                                                    <div className='flex flex-col h-full'>
                                                        <p className='text-xs font-medium text-white sm:text-2sm leading-17 opacity-60'>/ month</p>
                                                        <p className='text-xs font-medium text-white sm:text-2sm leading-17 opacity-60'>{item.user}</p>
                                                    </div>
                                                    {item.disbtn}
                                                </div>
                                                {item.billed}
                                                <p className='mb-4 text-xs font-medium text-white sm:text-2sm leading-17'>What’s included</p>
                                                {item.includedata}
                                            </div>
                                            <button className='py-2.5 px-3 border border-solid border-gray-black-200 after:bg-btnGradient group-hover:border-none transition-all  bg-transparent duration-300 text-white text-base font-medium text-nowrap rounded-xl w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:duration-300 after after:rounded-xl after:opacity-0 group-hover:after:opacity-100 relative'><p className='relative z-10 text-base font-medium text-white text-nowrap'>Select Plan</p></button>
                                        </div>
                                    </div>
                                </div >
                            ))
                        }
                    </>}
                </div>
                <div className='flex items-center justify-center'>
                    <a href='#' className='inline-flex flex-col items-center justify-center gap-1 px-8 py-[9px] mt-8 sm:mt-10 md:mt-12 text-white bg-gray-white-500 sm:flex-row sm:px-4 sm:rounded-4xl rounded-3xl sm:gap-2 group'><span className='font-medium text-2sm leading-17 opacity-60 tracking-midtighter'>Want enterprise features?</span><span className='flex items-center gap-1 font-bold text-2sm tracking-midtighter leading-17'>Tell us more<WhiteArrow /></span></a>
                </div>
            </div>
            <div className='bg-[#2980D6] lg:w-[778px] h-[778px] w-[400px] blur-[1000px] absolute top-[25%] left-[-50%]'></div>
        </div>
    )
}

export default PricingSec