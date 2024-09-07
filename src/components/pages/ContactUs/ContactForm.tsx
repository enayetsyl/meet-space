
const ContactForm = () => {
  return (
    <div className="bg-white w-full">
      <form>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="text" placeholder="Subject" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <textarea placeholder="Message" className="w-full p-2 mb-2 border border-gray-300 rounded" rows={6}></textarea>
        <button type="submit" className="bg-customOrange text-white px-4 py-2 ">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm