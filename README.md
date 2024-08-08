# Apple Website Clone

This project is a minimal setup template for React applications using Vite, a modern frontend tool that focuses on the developer experience.

This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.

## Features

- **Beautiful Subtle Smooth Animations using GSAP**: Enhanced user experience with seamless and captivating animations powered by GSAP.

- **3D Model Rendering with Different Colors and Sizes**: Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.

- **Custom Video Carousel (made with GSAP)**: Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience.

- **Completely Responsive**: Consistent access and optimal viewing on any device with a fully responsive design that adapts to different screen sizes.

## Getting Started

To start with this project, you can follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/sandiindika/project-apple-clone.git
    cd project-apple-clone
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```
   
## Project Structure

The project is structured as a Vite-based web application, as evidenced by the presence of `vite.config.js` and the `public` directory.
The main directories are `public`, `models`, and `src`. The `public` directory contains static assets, `models` contains 3D model files, and `src` contains the source code for the application.

### Key Directories and Files

1. `public`: This directory contains static assets like SVGs, images, and videos. The `assets` directory contains subdirectories for SVGs, images, and videos.

2. `models`: This directory contains 3D model files in the `.glb` format.

3. `src`: This is the main source code directory for the web application. It contains the following subdirectories and files:
    
   - `App.jsx`: The main entry point of the application.

   - `index.css`: The main CSS file for the application.

   - `main.jsx`: The main JavaScript file for the application.

   - `components`: This directory contains reusable UI components.

   - `constants`: This directory contains constants and variables used throughout the application.

   - `utils`: THis directory contains utility functions and helpers.

## Important Scripts

- `dev`: Runs the development server using Vite.

- `build`: Builds the project for production using Vite.

- `lint`: Runs ESLint to check for code quality and style issues.

- `preview`: Runs a preview server using Vite.

## Dependencies

- `@react-three/drei`
- `@react-three/fiber`
- `react`
- `react-dom`
- `three`
- Other notable dependencies include `@eslint/object-schema`, `@gsap/react`, and `gsap`.
