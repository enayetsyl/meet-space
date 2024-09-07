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
import why1 from "../../public/why-1.jpg"
import why2 from "../../public/why-2.jpg"
import why3 from "../../public/why-3.jpg"
import why4 from "../../public/why-4.png"
import why5 from "../../public/why-5.png"
import why6 from "../../public/why-6.png"
import why7 from "../../public/why-7.jpg"
import why8 from "../../public/why-8.jpg"
import why9 from "../../public/why-9.jpg"
import why10 from "../../public/why-10.jpg"

import how1 from "../../public/step1.jpg"
import how2 from "../../public/step2.jpg"
import how3 from "../../public/step3.jpg"

import user1 from "../../public/user1.jpg"
import user2 from "../../public/user2.jpg"
import user3 from "../../public/user3.jpg"
import user4 from "../../public/user4.jpg"
import user5 from "../../public/user5.jpg"
import user6 from "../../public/user6.jpg"
import user7 from "../../public/user7.jpg"




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

export const whyUsData = [
  {id: 1, title: "Convenient Location", description: "Our meeting rooms are conveniently located in the heart of the city, making them easily accessible for your team.", image: why1},
  {id: 2, title: "Equip & Amenities", description: "We provide top-of-the-line equipment and amenities to enhance your meeting experience.", image: why2},
  {id: 3, title: "Professional Support", description: "Our friendly and knowledgeable staff is here to assist you with any requirements or inquiries you may have.", image: why3},
  {id: 4, title: "Secure & Safe", description: "Your privacy and security are our top priorities. We take measures to ensure a safe and secure environment for your meetings.", image: why4},
  {id: 5, title: "Flexible Booking", description: "Book your meeting room in advance or on the same day, depending on your needs.", image: why5},
  {id: 6, title: "Affordable Pricing", description: "We offer competitive pricing for our meeting rooms, ensuring you get the best value for your investment.", image: why6},
  {id: 7, title: "Customizable Rooms", description: "Choose from a variety of room sizes and configurations to suit your specific requirements.",   image: why7},
  {id: 8, title: "Event Plan Help", description: "Our team can assist you in planning and organizing your events, from catering to audiovisual equipment.", image: why8},
  {id: 9, title: "Feedback & Reviews", description: "Read what our satisfied clients have to say about their experiences with our meeting rooms.", image: why9},
  {id: 10, title: "Superfast Wi-Fi", description: "Enjoy lightning-fast internet connectivity for smooth and efficient collaboration.",  image: why10},
]

export const howItWorks = [
  {id: 1, title: "Step 1: Select a Room", image: how1},
  {id: 2, title: "Step 2: Choose Date & Time", image: how2},
  {id: 3, title: "Step 3: Confirm Booking", image: how3},
]

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Company A",
    testimonial: "This service is fantastic! It has made our booking process so seamless.",
    image: user1,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Manager, Company B",
    testimonial: "I highly recommend this platform. The real-time availability feature is a game-changer!",
    image: user2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Event Planner, Company C",
    testimonial: "Their support team is amazing. They made sure our event went smoothly!",
    image: user3,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Operations Manager, Company D",
    testimonial: "The platform is easy to use, and the instant booking confirmation helps us plan quickly.",
    image: user4,
  },
  {
    id: 5,
    name: "David Brown",
    role: "CTO, Startup E",
    testimonial: "Flexible scheduling and top-notch support. This service has made managing our meetings a breeze!",
    image: user5,
  },
  {
    id: 6,
    name: "Olivia Wilson",
    role: "HR Manager, Company F",
    testimonial: "The 24/7 assistance provided is amazing. We felt supported throughout our entire experience.",
    image: user6,
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Freelancer, Self-Employed",
    testimonial: "As a freelancer, booking meeting spaces has never been easier. Highly recommended!",
    image: user7,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: user1,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Chief Marketing Officer",
    image: user2,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Head of Operations",
    image: user3,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Customer Support Manager",
    image: user4,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 5,
    name: "David Brown",
    role: "Chief Technology Officer",
    image: user5,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 6,
    name: "Olivia Wilson",
    role: "HR Manager",
    image: user6,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Finance Manager",
    image: user7,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
  {
    id: 8,
    name: "Daniel Harris",
    role: "Product Manager",
    image: user1,
    facebook: "https://www.facebook.com/profile.php?id=100094416483981",
    github: "https://github.com/enayetsyl",
    twitter: "https://x.com/enayetu_syl",
  },
];
