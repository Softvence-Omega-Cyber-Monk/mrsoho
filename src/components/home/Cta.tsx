import { FaCalculator } from 'react-icons/fa';

const Cta = () => {
  return (
    <div className="relative w-full bg-gray-100 flex items-center justify-center min-h-[500px] p-4">

      {/* Background Image: This simulates the background image seen in the screenshot. 
        In a real app, you'd replace 'url(/path/to/your/truck-image.jpg)' with the actual path.
        For this example, I'll use a placeholder background color/gradient. 
        To truly match the image, you'd use a large background image here.
    */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Replace with the actual image URL in a real project
          backgroundImage: 'url("https://i.imgur.com/k2H8jP7.png")', // A placeholder image that resembles the screenshot
          backgroundColor: '#3b82f6' // A fallback blue color
        }}
        aria-hidden="true" // Decorative element
      >
        {/* Dark Overlay/Gradient on the image to make the text pop, similar to the original design */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Card - Positioned in the center of the viewport/container */}
      <div className="relative z-10 p-6 md:p-10 max-w-xl text-white bg-black bg-opacity-40 rounded-lg backdrop-blur-sm">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-yellow-400">
          How Much Concrete Do You Need?
        </h1>

        {/* Body Text */}
        <p className="text-lg md:text-xl font-medium mb-8">
          The easy-to-use **Concrete Calculator** tells you the type and volume of concrete you need for your project, and how much it will cost.
        </p>

        {/* Button */}
        <button
          onClick={() => console.log('Try the Concrete Calculator clicked')}
          className="flex items-center space-x-2 px-6 py-3 text-lg font-bold rounded-full 
                   bg-yellow-400 text-gray-900 
                   hover:bg-yellow-500 transition duration-300 ease-in-out
                   shadow-xl shadow-yellow-500/50"
        >
          {/* Calculator Icon */}
          <FaCalculator className="w-5 h-5" />
          <span>Try the Concrete Calculator</span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
