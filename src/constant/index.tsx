import image1 from "../../public/availability-sync.png"
import image2 from "../../public/instant-confirmation.png"
import image3 from "../../public/flexible-schedule.png"
import image4 from "../../public/24-7-support.jpg"
import { Service } from "../types";

export const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/meeting-rooms' },
  { name: 'About', path: '/about-us' },
  { name: 'Contact', path: '/contact-us' },
  { name: 'Login', path: '/login' },
 
];

export const serviceInfo: Service[] = [
  {id: 1, title: "Availability Sync", description: "Get up-to-date availability in real-time for seamless scheduling."
    , image: image1
  },
  {id: 2, title: "Instant Confirmation", description: "Receive immediate booking confirmation as soon as you finalize your reservation.", image: image2},
  {id: 3, title: "Flexible Slots", description: "Choose from a wide range of scheduling options to fit your needs.", image: image3},
  {id: 4, title: "24/7 Assistance", description: "Our support team is available around the clock to help with any inquiries.", image: image4},
]