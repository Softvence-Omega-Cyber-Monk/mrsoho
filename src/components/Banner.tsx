import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import CommonWrapper from "@/common/CommonWrapper";

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  btnText?: string;
  showButton?: boolean; // 👈 controls button visibility
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  imageUrl,
  btnText = "Learn More",
  showButton = false,
}) => {
  return (
    <CommonWrapper>
      <section
        className="relative w-full h-[371px] overflow-hidden flex items-center"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Left-aligned blurred text box */}
        <div className="relative z-10 max-w-3xl ml-10 p-6 bg-black/40  rounded-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFCE00] mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg leading-relaxed">{subtitle}</p>
          )}

          {/* Conditional Button */}
          {showButton && btnText && (
            <div className="mt-6 max-w-xs">
              <PrimaryBtn btnText={btnText} />
            </div>
          )}
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Banner;
