import image from "./image.svg";
import star from "./star.svg";
import pc from "./pc.svg";
import bag from "./bag.svg";
import image2 from "./image2.png";
import W from "./W.png";

function Card() {
  const services = [
    {
      icon: `${image}`,
      title: "Web Design",
      description:
        "From concept to launch, we create stunning user-centric websites.",
    },
    {
      icon: `${star}`,
      title: "UI/UX Design",
      description: "We focus on visual appeal and seamless user experience.",
    },
    {
      icon: `${pc}`,
      title: "Responsive Design",
      description: "Designs that work beautifully across all screen sizes.",
    },
    {
      image: `${image2}`,
      icon: `${bag}`,
      title: "E-commerce Solutions",
      description:
        "Full-fledged e-commerce solutions for growing your business.",
    },
    {
      image: `${W}`,
      icon: `${bag}`,
      title: "Webflow",
      description: "Powerful websites using the Webflow platform.",
    },
    {
      icon: `${bag}`,
      title: "Custom Development",
      description: "Bespoke development solutions tailored to your needs.",
    },
  ];

  return (
    <div className="mt-20 lg:w-[1250px] mx-auto">
      <div
        style={{ width: "354px" }}
        className="mt-4 font-raleway   lg:ms-11 text-3xl dark:text-white lg:text-[50.33px] font-bold leading-[56.33px] lg:text-start"
      >
        <h1>What We do</h1>
      </div>

      <div className="">
        <div className="grid   lg:mx-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              className={`bg-white dark:bg-dark-gradient 
                    ${index === 3 ? "lg:h-[580px] h-[280px]   " : "h-[280px]"}
               ${index === 4 ? "lg:w-[588px] w-[280px]" : "w-[280px]"}
                ${index === 4 ? "lg:col-span-2 col-span-1" : "col-span-1"}
                ${index === 3 ? "lg:row-span-2 row-span-1" : "row-span-1"}
              `}
              key={index}
              style={{
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <div className={`${index === 4 ? "flex" : ""}       `}>
                <div className="flex space-y-3 mt-9 flex-col items-start">
                  <div
                    style={{ backgroundColor: "rgba(245, 248, 255, 1)" }}
                    className="flex rounded-lg items-center w-[44px] h-[44px]"
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-5 h-6 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl dark:text-[#F5F5F5] font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-[#898A71] dark:text-[#F5F5F5] mt-2 text-left">
                    {service.description}
                  </p>
                </div>

                {/* Hide the image on small screens */}
                {service.image && (
                  <img
                    className="mt-4 hidden sm:block lg:block" // Hidden on small, visible on large screens
                    src={service.image}
                    alt={service.title}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
