# EcoBangla Adventure 

<!-- **Live Demo:** [Your Live URL Here] -->

## Project Overview
**EcoBangla Adventure** is a modern, responsive blog website showcasing eco-friendly travel adventures. The application provides users with detailed information on various eco-adventures like Hill Trek, Eco-Park, Mangrove Forest, and more. Users can browse adventures, view detailed information, consult experts, and manage their profile through authentication.  

The platform is built to promote sustainable travel experiences while offering a smooth and engaging user interface.

---

## Features

### ✅ Core Features
- **Responsive Layout**: Optimized for mobile, tablet, and desktop.
- **Single-Column Layout**: Easy-to-navigate structure with Navbar, Main Section, and Footer.
- **Dynamic Adventure Cards**: Display adventure details from JSON data including:
  - Adventure Title
  - Image
  - Eco-Friendly Features
  - Explore Now button (redirects to Adventure Details)
- **Banner Slider**: Highlights  adventures with beautiful images using Swiper/Daisy UI.
- **Authentication**:
  - Login & Registration with email/password
  - Social Login (Google)
  - Password validation (Uppercase, Lowercase, min 6 characters)
  - Forgot Password functionality
- **Private Routes**: Adventure Details and My Profile pages accessible only to logged-in users.
- **User Profile**:
  - View user information
  - Update Name and Profile Photo
- **Consultation Feature**: "Talk with Expert" button opens Google Meet during consultation hours (10:00 AM – 5:00 PM) or shows available time in a modal.
- **Error Handling**: 404 page for invalid routes with navigation back to home.
- **Dynamic Page Titles**: Titles update based on current route using `useLocation`.
- **Extra Home Sections**: Additional sections to enhance the homepage (designed creatively).

### ✅ JSON Data for Adventures
The app uses structured JSON data for adventures including:
- Adventure Title
- Image
- ID
- Category Name
- Short Description
- Adventure Cost
- Booking Availability
- Location
- Duration
- Adventure Level
- Included Items (Array)
- Eco-Friendly Features (Array)
- Max Group Size
- Special Instructions (Array)

---

<!-- ## Screenshots -->



## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Daisy UI
- **Authentication & Database**: Firebase Auth, Firebase Firestore
- **Routing**: React Router
- **Animation**: framer-motion/ Animate.css
- **Hosting**:  Firebase Hosting
- **Version Control**: GitHub

## Live Link:
https://eco-bangla-adventure.web.app/



