# Dine Craft - Restaurant Management Website 🍽️

## Live Site

[Visit Dine Craft](https://fast-art-409718.web.app/)

---

## Project Overview

Dine Craft is a full-stack Restaurant Management website designed to enhance the restaurant's online presence, streamline internal management processes, and improve customer interaction. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the website features responsive design, secure authentication, and user-friendly functionalities.

---

## Key Features

### Public Pages

1. **Home Page**
   - **Banner Section**: Displays a meaningful section with a heading, description, and button linking to the All Foods page.
   - **Top Foods Section**: Highlights the 6 best-selling food items.
   - **Extra Sections**: Includes two relevant and attractive sections.

2. **All Foods Page**
   - Showcases all food items stored in the database.
   - Includes a search functionality to filter foods by name.

3. **Single Food Page**
   - Provides detailed information about a specific food item.
   - Displays purchase count and includes a purchase button.

4. **Gallery Page**
   - Features at least 10 static images in a lightbox-enabled gallery.

### Private Pages

1. **Food Purchase Page**
   - Displays a purchase form pre-filled with logged-in user's details.
   - Validates food quantity availability before purchase.

2. **My Foods Page**
   - Lists all food items added by the logged-in user.
   - Allows users to update their added items.

3. **Add Food Page**
   - Provides a form for users to add new food items.

4. **My Orders Page**
   - Displays all orders made by the logged-in user with purchase details and delete functionality.

### Authentication

- Email/password-based authentication.
- Google login.
- Secure JWT authentication for private routes.

### Additional Features

- Theme toggling between light and dark modes.
- Profile dropdown with quick access to **My Foods**, **Add Food**, and **My Orders**.
- Pagination for All Foods page.
- Infinite scrolling in the Gallery section.
- Toast notifications for success and error messages.
- Animations for enhanced user experience.

---

## Packages Used

### Client-Side

- **Core Libraries**
  - `react`: ^18.2.0
  - `react-dom`: ^18.2.0
  - `react-router-dom`: ^6.23.0

- **UI and Styling**
  - `@emotion/react`: ^11.14.0
  - `@emotion/styled`: ^11.14.0
  - `@mui/icons-material`: ^6.3.0
  - `@mui/material`: ^6.3.0
  - `@material-tailwind/react`: ^2.1.10
  - `tailwindcss`: ^3.4.17
  - `daisyui`: ^4.12.22

- **Animations**
  - `gsap`: ^3.12.5
  - `framer-motion`: (optional implementation suggested in guidelines)

- **Lightbox and Gallery**
  - `fslightbox-react`: ^1.7.6
  - `yet-another-react-lightbox`: ^3.21.7

- **Forms and Validation**
  - `react-hook-form`: ^7.54.2
  - `react-datepicker`: ^6.9.0

- **State Management and Notifications**
  - `react-hot-toast`: ^2.4.1
  - `react-toastify`: ^11.0.2

- **Other Utilities**
  - `swiper`: ^11.1.1
  - `react-scroll`: ^1.9.0
  - `@lottiefiles/dotlottie-react`: ^0.12.0
  - `@lottiefiles/react-lottie-player`: ^3.5.4

### Server-Side and Security

- **Backend Framework**
  - `express`: (add specific version used)

- **Database**
  - `mongodb`: (add specific version used)

- **Authentication**
  - `jsonwebtoken`: (for JWT implementation)
  - `firebase`: ^11.1.0

- **Environment Management**
  - `dotenv`: (add specific version used)

### Development Tools

- **Bundling and Build Tools**
  - `vite`: ^5.2.0
  - `@vitejs/plugin-react`: ^4.2.1

- **Linting and Code Quality**
  - `eslint`: ^8.57.0
  - `eslint-plugin-react`: ^7.34.1
  - `eslint-plugin-react-hooks`: ^4.6.0

- **CSS Utilities**
  - `autoprefixer`: ^10.4.20
  - `postcss`: ^8.4.49

---

## Deployment

- **Frontend**: Deployed on Firebase ([Live Link](https://fast-art-409718.web.app/)).
- **Backend**: Ensure the server is deployed and working without CORS/404/504 errors.

---

## Notes

- Secure Firebase and MongoDB credentials using environment variables.
- Ensure JWT tokens are implemented and verified for all private routes.
- Handle edge cases such as unavailable food quantities during purchase.
- Test all features thoroughly to ensure seamless user experience.
