import { whyUsData } from "../../../constant";

const WhyUs = () => {
  return (
    <div className="bg-[#f5f5f5] px-5 md:px-20 pb-32">
      <h1 className="text-customOrange text-3xl md:text-6xl font-bold  uppercase  text-center leading-tight md:leading-snug py-20">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5">
      {
        whyUsData.map((why) => {
          return (
            <div key={why.id} className="flex flex-col items-center justify-center border border-gray-300 py-10 px-5 md:px-2">
              <img src={why.image} alt={why.title} className="w-28 h-28 object-cover  mb-4" />
              <h3 className="text-xl  mb-2 text-center">{why.title}</h3>
            
            </div>
          );
        })
      }
      </div>
    </div>
  );
};

export default WhyUs;
