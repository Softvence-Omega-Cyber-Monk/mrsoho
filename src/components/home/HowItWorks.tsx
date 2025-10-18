const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">How It Works</h2>
        <p className="text-gray-600 text-sm max-w-3xl">
          Whether you're pouring a small pad, a foundation, or a large industrial slab, we'll help you find the right mix, in cost, and get performance.
        </p>
      </div>

      {/* Three Position Card Layout */}
      <div className="w-full max-w-6xl mx-auto px-4 pb-12">
        {/* Grid with staggering applied on desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 min-h-[550px]">

          {/* Card 1: TOP Position */}
          <div className="flex flex-col justify-start">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {/* Image container */}
              <img
                alt="Construction Worker"
                className="w-full h-56 object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/600x300/a855f7/ffffff?text=Project+Setup';
                }}
              />

              <div className="py-6 px-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Tell Us About Your Project</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Provide details of the project including the dimensions and volume required, the concrete mix, and any special input.</p>
              </div>
            </div>
          </div>

          {/* Card 2: MIDDLE Position */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {/* Placeholder area */}
              <div className="w-full h-56 bg-gray-100 flex items-center justify-center rounded-t-xl">
                <div className="text-center">
                  <div className="text-7xl mb-2">📋</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Quote</div>
                </div>
              </div>

              <div className="py-6 px-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Get Your Quote & Cost</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Our Concrete Calculator allows us to get the exact cost of the concrete you need, delivered to your site.</p>
              </div>
            </div>
          </div>

          {/* Card 3: BOTTOM Position */}
          <div className="flex flex-col justify-end">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {/* Image container */}
              <img
                alt="Concrete Mixer Truck"
                className="w-full h-56 object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=600"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/600x300/10b981/ffffff?text=Delivery+Truck';
                }}
              />

              <div className="py-6 px-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Get Concrete Mixed On-Site</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Your concrete will be ready to order. Our team will mix and prepare it for delivery for YOU our valued customer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
