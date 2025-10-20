import { FaCalculator } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[600px] p-4 overflow-hidden bg-gray-100">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.imgur.com/k2H8jP7.png")',
          backgroundColor: "#3b82f6",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-2xl text-center bg-black/40 backdrop-blur-sm p-6 sm:p-10 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-4">
          How Much Concrete Do You Need?
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium mb-8">
          The easy-to-use <strong>Concrete Calculator</strong> tells you the type
          and volume of concrete your project requires and how much it will cost.
        </p>

        <button
          onClick={() => console.log("Try the Concrete Calculator clicked")}
          className="inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-bold rounded-full
                     bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition duration-300
                     shadow-lg shadow-yellow-500/40"
        >
          <FaCalculator className="w-5 h-5" />
          <span>Try the Concrete Calculator</span>
        </button>
      </div>
    </section>
  );
};

export default Cta;
