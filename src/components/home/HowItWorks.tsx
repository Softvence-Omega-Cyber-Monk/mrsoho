import dfjvgfrgvlabar from "../../assets/dfjvgfrgvlabar.jpg";
import dfjvgfrgvsale from "../../assets/dfjvgfrgvsale.jpg";
import dfjvgfrgvcar3 from "../../assets/dfjvgfrgvcar3.jpg";
const HowItWorks = () => {
  return (
    <section className="py-16 px-4 pb-64">
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          How It Works
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Whether you're pouring a small pad, a foundation, or a large industrial slab, we'll help you find the right mix, in cost and performance.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-10">
        {/* Card 1 */}
        <div className="flex flex-col justify-start md:translate-y-0">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img
              alt="Construction Worker"
              className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
              src={dfjvgfrgvlabar}
            />
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-green-600 mb-2">
                Tell Us About Your Project
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
              Provide details of the project including the dimension and volume required, the concrete mix, and any special input.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center md:translate-y-18">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="w-full h-56 sm:h-64 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <div className="text-center">
                <div className="text-6xl mb-2">
                  <img
              alt="Construction Worker"
              className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
              src={dfjvgfrgvsale}
            />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-green-600 mb-2">
                Get Your Quote & Cost
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
              Our Concrete Calculator allows us to get the exact cost of the concrete you need, delivered to your site.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-end md:translate-y-36">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img
              alt="Concrete Mixer Truck"
              className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
              src={dfjvgfrgvcar3}
            />
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-green-600 mb-2">
                Get Concrete Mixed On-Site
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               Your concrete will be ready to order. Our team will mix and prepare it for delivery for YOU our valued customer!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
