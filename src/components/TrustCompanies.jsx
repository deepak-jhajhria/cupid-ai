import { companiesData } from "./common/Helper";

const TrustCompanies = () => {
  return (
    <div id="features" className="-mt-24 overflow-hidden xl:pb-10 sm:-mt-40 md:-mt-64 bg-black-primary">
      <div id="howtouse" className="max-w-[1112px] mx-auto px-3 sm:pt-10 mt-8 pb-5 sm:pb-10 mb-8">
        <p className="  font-normal lg:text-xl sm:text-lg text-base leading-[30px] text-center text-gray-white-200">
          Trusted by 4,000+ companies
        </p>
        <div className="flex items-center justify-center px-3 mt-8 gap-7 xl:gap-12 max-slg:animate-moveX max-sm:animate-moveSmX">
          {companiesData.map((obj, i) => (
            <a key={i} href={`http://${obj.companyLink}.com`} target="_blank" rel="noopener noreferrer" className={`group ${obj.ClassName}`}><span className={` opacity-40 duration-300 group-hover:opacity-100`}>{obj.companyLogo}</span></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustCompanies;