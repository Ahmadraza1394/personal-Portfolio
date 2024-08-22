import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ken7Ken",
    company: "United States",
    review:
      "Ahmadraza exceeded my expectations. His coding skills are excellent and he always finds a solution to problems. He was quick to respond and had great communication skills. Another job well done. Thank you.",
  },
  {
    name: "emperorabdulahi",
    company: "United States",
    review:
      "Very satisfied with his work. Works quickly and to the standards that were set during the discussion. I would highly recommend it to those who need help with new web development. He worked very fast as well considering the time that I have given him.",
  },
  {
    name: "anastassiya102",
    company: "United States",
    review:
      "Ahmadraza's work on website maintenance was nothing short of stellar! 🌟 His coding expertise and exceptional documentation went beyond my expectations. Working with him was a breeze due to his proactive communication and deep understanding of the project needs. Highly recommend! 👍",
  },
  {
    name: "angelmarshal423",
    company: "Grenada",
    review:
      "I needed a website for my business, and Mr.Ahamadraza absolutely exceeded my expectations. His politeness and eagerness to satisfy my website needs based on all the requirements I outlined for my website were astonishing. I have never experienced such professionalism and attention to detail in all my years of being alive. ",
  },
  {
    name: "Oggy",
    company: "France",
    review:
      "Outstanding job. He delivered quality work on time and was great to work with. Highly recommend!",
  },
  {
    name: "Queenhg",
    company: "Israel",
    review:
      "He was a good listener and understood what we needed.It was amazing working with you.",
  },
  {
    name: "ken7ken",
    company: "United States",
    review:
      "Ahmadraza did an excellent job getting the code to work properly on my project. He was quick to respond to my request and delivered fast results. Thank you.",
  },
  {
    name: "Arbuzz4",
    company: "United States",
    review:
      "went above and beyond, even took initiative to improve some things that i didn't think to ask about. quick response, on time delivery, highly recommend!",
  },
  {
    name: "sally_ed",
    company: "Spain",
    review:
      "Ahmadraza was like lightning! He finished my project in the blink of an eye, and that's something I really appreciate! Plus, he was super helpful and pleasant throughout the entire process. ",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center h-[290px] sm:h-[330px] md:h-[340px]">
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              <div className="overflow-y-auto flex-grow mb-4">
                <p className="text-gray-300 text-sm sm:text-base italic text-center">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>
              <div className="mt-auto">
                <h3 className="text-green-500 font-bold text-lg sm:text-xl">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
