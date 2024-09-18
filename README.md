# MeetSpace

## Introduction

MeetSpace is a web-based application that allows users to efficiently and easily book meeting rooms for any occasion. The platform provides real-time availability, instant booking confirmation, and a seamless user experience.

## Project Description

MeetSpace simplifies the process of booking meeting rooms by offering a user-friendly interface, powerful search filters, and real-time availability updates. Whether for corporate meetings or casual meet-ups, MeetSpace caters to all types of meeting room needs. Users can select a room based on size, capacity, amenities, and price per time slot. Admins can also manage rooms, slots, and bookings directly through the dashboard.

The platform's goal is to streamline the room booking process and provide users with a reliable and hassle-free experience, complete with features like secure payment options and customer support.

## Features

- Real-time room availability and instant booking confirmation.
- Advanced room search and filtering options (by room name, capacity, and price).
- Seamless booking process with date and time selection.
- Admin dashboard for managing rooms, slots, and bookings.
- Secure payment integration with Stripe.
-User-friendly interface with micro-animations for enhanced user experience.
-Customer testimonials and carousel for social proof.
-User account creation and authentication.
-Custom error pages and navigation for non-existent routes.

## Technology Stack

### Frontend:
- React: UI library for building the interface.
- Redux Toolkit: State management.
- React Router DOM: For routing.
- React Slick: For the carousel of testimonials.
- TailwindCSS: For styling.
- React Datepicker: For date and time selection.
- Stripe: For secure payments.

### Backend:

- Express.js: Server framework.
- MongoDB: Database for storing rooms, users, and bookings.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.
- JSON Web Tokens (JWT): For authentication.
- Zod: For schema validation.
- Stripe: Payment processing integration

## Installation Guideline

### Prerequisites:
- Node.js and npm installed on your machine.
- MongoDB instance running for database connectivity.
- Stripe API keys for payment integration.

### Frontend Installation:
1. Clone the frontend repository
```javascript
git clone https://github.com/enayetsyl/meet-space.git
cd meet-space
```
2. Install dependencies

```javascript
npm install
```
3. Create a .env file in the root directory with the following content:
   ```javascript
   VITE_API_BASE_URL=put your base url here
   ```
4. Run the development server
```javascript
npm run dev
```

### Backend Installation:

1. Clone the backend repository
```javascript
git clone https://github.com/enayetsyl/level-2-assignment-3.git
cd level-2-assignment-3
```
2. Install dependencies
```javascript
npm install
```
3. Create a .env file and populate it with the following variables

```javascript
PORT=5000
database_url=
BCRYPT_SALT_ROUNDS=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
NODE_ENV='development'
```
4. Run the backend development server
```javascript
npm run start:dev
```

### Usage

1. After starting both frontend and backend servers, navigate to the MeetSpace frontend.
2. Users can search for rooms, filter by capacity or price, view room details, and book rooms for their preferred date and time.
3. The admin dashboard allows administrators to manage room listings, slots, and bookings, as well as approve or reject bookings.
4. Payment for bookings can be securely processed via Stripe.

### Live Links

- [Frontend:](https://meet-space-theta.vercel.app)

### GitHub Repositories

[Frontend Repository](https://github.com/enayetsyl/meet-space)

[Backend Repository](https://github.com/enayetsyl/level-2-assignment-3)

### Contact Information
- LinkedIn: [Md Enayetur Rahman](https://www.linkedin.com/in/enayetur-rahman-8880b6270/)
- Facebook: [Enayetur Rahman](https://www.facebook.com/profile.php?id=100094416483981)
- X (Twitter): [Enayetur Rahman](https://x.com/enayetu_syl)
- YouTube: [Md Enayetur Rahman](https://www.youtube.com/@MdEnayeturRahman)
- Email: enayetflweb@gmail.com

### Conclusion

MeetSpace offers a comprehensive and user-friendly meeting room booking solution that leverages modern technology to deliver a seamless experience. Whether for businesses or casual meetings, this platform provides flexibility, real-time updates, and a secure transaction process that enhances the user’s journey. Future plans include adding more advanced filtering options and expanding payment integrations for greater flexibility.