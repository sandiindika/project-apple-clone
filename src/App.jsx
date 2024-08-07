// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Hero = lazy(() => import('./components/Hero.jsx'));
const Highlights = lazy(() => import('./components/Highlights.jsx'));
const Model = lazy(() => import('./components/Model.jsx'));
const Features = lazy(() => import('./components/Features.jsx'));
const HowItWorks = lazy(() => import('./components/HowItWorks.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

const App = () => {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <Highlights />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Model />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Features />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <HowItWorks />
            </Suspense>
            <Footer />
        </main>
    )
}

export default App
