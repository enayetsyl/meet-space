import Slider from "react-slick";
import { testimonials } from "../../../constant";




const Testimonials = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-[#f5f5f5] pb-32 px-5 md:px-20">
      <h2 className="text-customOrange text-3xl md:text-6xl font-bold  uppercase  text-center leading-tight md:leading-snug py-20">
        Customer Testimonials
      </h2>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col items-center justify-center py-10 px-5 bg-white shadow-lg text-center">
            <div className="flex justify-center items-center pb-5">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-40 h-40 rounded-full mb-4 object-cover"
            />
            </div>
            <h3 className=" text-2xl font-bold mb-2">{testimonial.name}</h3>
            <p className=" text-customGreen italic mb-4">{testimonial.role}</p>
            <p className="text-gray-600  ">{testimonial.testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
