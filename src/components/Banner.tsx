import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import CommonWrapper from "@/common/CommonWrapper";

interface BannerProps {
  title: string;
  secondTitle?: string;
  secondTitleClassName?: string;
  subtitle?: string;
  imageUrl: string;
  btnText?: string;
  showButton?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  title,
  secondTitle,
  secondTitleClassName,
  subtitle,
  imageUrl,
  btnText = "Learn More",
  showButton = false,
}) => {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <CommonWrapper className="relative z-10 max-w-[1440px]">
        <div className="relative w-full flex items-center justify-start 
                        h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[740px]">
          {/* Left-aligned blurred text box */}
          <div className="relative z-10 max-w-3xl p-4 sm:p-6 md:p-8 lg:p-10 bg-black/40 rounded-lg text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEDA42] mb-2 sm:mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {secondTitle && (
              <p className={
                `text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-2 sm:mt-3 ${
                  secondTitleClassName ? secondTitleClassName : ""
                }`
              }>
                {secondTitle}
              </p>
            )}
            {showButton && btnText && (
              <div className="mt-4 sm:mt-6 max-w-xs">
                <PrimaryBtn btnText={btnText} />
              </div>
            )}
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Banner;
