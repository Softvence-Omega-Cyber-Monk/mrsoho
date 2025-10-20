const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          How It Works
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Whether you're pouring a small pad, a foundation, or a large industrial slab,
          we'll help you find the right mix, save cost, and get the performance you need.
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
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x300/a855f7/ffffff?text=Project+Setup";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tell Us About Your Project
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provide details of the project including dimensions, required
                volume, and special mix instructions.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center md:translate-y-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="w-full h-56 sm:h-64 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <div className="text-center">
                <div className="text-6xl mb-2">📋</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Quote
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get Your Quote & Cost
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Concrete Calculator helps determine the exact cost for your
                required mix and delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-end md:translate-y-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img
              alt="Concrete Mixer Truck"
              className="w-full h-56 sm:h-64 object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=600"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x300/10b981/ffffff?text=Delivery+Truck";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get Concrete Mixed On-Site
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once ready, our team mixes on-site and delivers directly for
                stronger, fresher results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
