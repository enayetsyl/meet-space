import ContactForm from "../../components/pages/ContactUs/ContactForm"
import ContactInfo from "../../components/pages/ContactUs/ContactInfo"
import Design from "../../components/pages/ContactUs/Design"
import GoogleMap from "../../components/pages/ContactUs/GoogleMap"

const ContactUs = () => {
  return (
    <div>
     <Design />
     <div className="flex flex-col md:flex-row gap-10 bg-white py-32 px-5 md:px-20">
      <ContactInfo />
      <ContactForm />
     </div>
    <GoogleMap/>
    </div>
  )
}

export default ContactUs