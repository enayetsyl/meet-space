import { serviceInfo } from "../../../constant"
import ServiceCard from "./ServiceCard"

const Service = () => {
  return (
    <div className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#fafafa] py-32">
    {serviceInfo.map((service, index) => (
        <div
          key={service.id}
          className={`
            ${index === 3 ? 'md:col-span-3 lg:col-span-1 lg:col-start-2' : ''} 
            flex justify-center
          `}
        >
          <ServiceCard service={service} />
        </div>
      ))}
      
    </div>
  )
}

export default Service