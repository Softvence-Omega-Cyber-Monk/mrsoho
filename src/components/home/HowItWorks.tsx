import dfjvgfrgvlabar from "../../assets/dfjvgfrgvlabar.jpg";
import dfjvgfrgvsale from "../../assets/dfjvgfrgvsale.jpg";
import dfjvgfrgvcar3 from "../../assets/dfjvgfrgvcar3.jpg";
import CommonWrapper from "@/common/CommonWrapper";
const HowItWorks = () => {
  return (
    <CommonWrapper className="max-w-[1440px] mt-[600px] md:mt-[180px] mb-2 px-4 sm:px-7 lg:mt-[-100px]   ">
      <section className="">
        <div className=" ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 pb-4 sm:pb-9 md:pb-8">
            How It Works
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-[500px] w-full pb-8 sm:pb-16 md:pb-30">
            Whether you're pouring a small pad, a foundation, or a large industrial slab,
            we'll help you find the right mix, in cost and performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[48px] mb-50">
          <div className="flex flex-col translate-y-0 cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col h-full">
              <img
                alt="Construction Worker"
                className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
                src={dfjvgfrgvlabar}
              />
              <div className="p-6 flex-grow">
                <h3 className="text-3xl font-semibold text-green-600 mb-2">
                  Tell Us About Your Project
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Provide details of the project including the dimension and volume required, the concrete mix, and any special input.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col translate-y-15 cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col h-full">
              <img
                alt="Magnifying glass over sale sign"
                className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
                src={dfjvgfrgvsale}
              />
              <div className="p-6 flex-grow">
                <h3 className="text-3xl font-semibold text-green-600 mb-2">
                  Get Your Quote & Cost
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our Concrete Calculator allows us to get the exact cost of the concrete you need, delivered to your site.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col translate-y-30 cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col h-full">
              <img
                alt="Concrete Mixer Truck"
                className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
                src={dfjvgfrgvcar3}
              />
              <div className="p-6 flex-grow">
                <h3 className="text-3xl font-semibold text-green-600 mb-2">
                  Get Concrete Mixed On-Site
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your concrete will be ready to order. Our team will mix and prepare  it for delivery for YOU our valued customer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};
export default HowItWorks;
