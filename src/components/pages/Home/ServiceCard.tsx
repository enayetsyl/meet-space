import { Link } from 'react-router-dom'
import { Service } from '../../../types'

const ServiceCard = ({service}: {service: Service}) => {
  return (
    <div className='bg-white hover:bg-customGreen py-16 px-10 rounded-md shadow-lg flex flex-col justify-center items-center group'>
      <img src={service.image} alt={service.title} className='w-32 h-32 object-cover' />
      <h3 className='text-2xl text-black  font-bold mt-4 group-hover:text-white'>{service.title}</h3>
      <p className='text-gray-600 mt-2 group-hover:text-white text-center'>{service.description}</p>
      <Link to="/about-us" className='bg-customOrange text-white px-4 py-2  mt-4 hover:text-black hover:bg-white '>Learn More</Link>
    </div>
  )
}

export default ServiceCard