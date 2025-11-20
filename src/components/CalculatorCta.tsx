import nobgslish from '@/assets/nobgslish.png';
import CommonWrapper from '@/common/CommonWrapper';

const CalculatorCta = () => {

  return (
    <CommonWrapper>
      <div className="relative bg-gray-100 py-16 overflow-hidden md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 flex items-center justify-start">
              How Much Concrete Do You Need?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 mb-8">
              The easy-to-use Concrete Calculator tells you the type and volume
              of concrete you need for your project, and how much it will cost.
            </p>
            {/* <div className="relative inline-flex items-center">
              <button className="flex items-center px-8 py-4 bg-yellow-400 text-black font-extrabold rounded-lg text-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1">
                Try the Concrete Calculator
              </button>
            </div> */}
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end opacity-20 md:opacity-100 z-0">
            <img
              src={nobgslish}
              alt="Concrete Truck"
              className="max-w-full h-auto"
              style={{ filter: 'blur(1px) grayscale(80%)' }}
            />
          </div>

        </div>
      </div>
    </CommonWrapper>
  );
};

export default CalculatorCta;
