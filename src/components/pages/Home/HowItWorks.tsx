import { howItWorks } from "../../../constant"
import HowCard from "./HowCard"

const HowItWorks = () => {
  return (
    <div className="bg-white pb-32 px-5 md:px-20">
       <h1 className="text-customOrange text-3xl md:text-6xl font-bold  uppercase  text-center leading-tight md:leading-snug py-20">
       How It Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {howItWorks.map((how, index) => (
          <HowCard key={how.id} how={how} index={index} />
        ))}
        </div>
     </div>
  )
}

export default HowItWorks