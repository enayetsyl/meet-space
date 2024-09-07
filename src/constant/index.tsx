import image1 from "../../public/availability-sync.png"
import image2 from "../../public/instant-confirmation.png"
import image3 from "../../public/flexible-schedule.png"
import image4 from "../../public/24-7-support.jpg"
import { Service } from "../types";
import meeting1 from "../../public/meeting-1.jpg"
import meeting2 from "../../public/meeting-2.jpg"
import meeting3 from "../../public/meeting-3.jpg"
import meeting4 from "../../public/meeting-4.jpg"
import meeting5 from "../../public/meeting-5.jpg"
import meeting6 from "../../public/meeting-6.jpg"
import meeting7 from "../../public/meeting-7.jpg"
import meeting8 from "../../public/meeting-8.jpg"
import meeting9 from "../../public/meeting-9.png"
import meeting10 from "../../public/meeting-10.jpg"

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

export const meetingImages = [
  {id: 1, image: meeting1},
  {id: 2, image: meeting2},
  {id: 3, image: meeting3},
  {id: 4, image: meeting4},
  {id: 5, image: meeting5},
  {id: 6, image: meeting6},
  {id: 7, image: meeting7},
  {id: 8, image: meeting8},
  {id: 9, image: meeting9},
  {id: 10, image: meeting10},
]