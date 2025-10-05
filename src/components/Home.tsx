import React, { useEffect, useState, useRef } from 'react';
import { Thermometer, Shield, Clock, ArrowRight, Zap, Trophy, Users, Globe, CheckCircle, Car, Factory, Layout, Phone, Mail, MapPin, Tag, Star, ChevronLeft,FileText,  Package, Wrench,  ChevronRight, MessageSquare } from 'lucide-react';



// --- DATA INTEGRATION ---
// Data from original Hero component (Input 1)
const heroFeatures = [
    { icon: Thermometer, title: "Precise Control", subtitle: "±0.5°C accuracy" },
    { icon: Shield, title: "Reliable Uptime", subtitle: "99.9% guarantee" },
    { icon: Clock, title: "24/7 Support", subtitle: "Pan-India service" }
];

// Data from original About component (Input 6) - Shortened for Home Page
const aboutText = {
    brief: "At Cold Frost, we specialize in the sales, installation, and servicing of cold rooms tailored to meet the refrigeration needs of businesses across India. We provide reliable and energy-efficient cold room solutions designed for long-term performance.",
    full: "Cold Frost was founded with a mission to deliver precision temperature control solutions. Our expertise spans commercial kitchens, food storage, pharmaceutical and industrial applications. Our persistent commitment to cutting-edge technology and strict standards ensures every project is executed with unparalleled expertise and precision."
};

// Data from new HTML 'Services' section - Re-themed for Cold Frost
const homePageServices = [
    { number: '01', title: "Cold Room EPC Projects", image: "/coldroom.webp", description: "Delivering comprehensive refrigeration EPC projects with precision engineering and optimal efficiency." },
    { number: '02', title: "Installation & Commissioning", image: "/installation.jpg", description: "Executing top-tier installation with advanced solutions and meticulous attention to detail." },
    { number: '03', title: "24/7 After Sales Service", image: "/sales.png", description: "Ensuring safety and efficiency with expertly designed and implemented long-term support plans." },
    { number: '04', title: "Custom Design & Estimation", image: "/design.jpg", description: "Providing customized cold chain solutions from initial design through accurate cost estimation." },
];

// Data from original About/Stats section (Input 6)
const statsData = [
    { icon: Trophy, title: 'Projects Successfully Delivered', value: 250, suffix: '+' },
    { icon: Users, title: 'Team of Professionals Working Pan India', value: 20, suffix: '+' },
    { icon: Layout, title: 'Strong Vendor Network', value: 30, suffix: '+' },
    { icon: Globe, title: 'Years of Experience and Excellence', value: 18, suffix: '+' },
];

// Data from new HTML 'Reasons to choose' section
const differentiators = [
    { icon: CheckCircle, title: "Quality Material", description: "We use only the finest quality materials in all our projects, ensuring the durability and longevity of your systems." },
    { icon: Users, title: "Experienced Team", description: "Our team consists of highly trained and certified technicians who deliver exceptional cold storage services." },
    { icon: Zap, title: "Expert Craftsmanship", description: "Our commitment to quality is unwavering. Every installation meets the highest industry standards." },
    { icon: Phone, title: "Exceptional Customer Service", description: "From first contact to project completion, we are dedicated to meeting your needs swiftly and efficiently." },
    { icon: Trophy, title: "Certified Excellence", description: "Adhering to the highest industry standards, guaranteeing dependable service quality and reliability you can trust." },
    { icon: Tag, title: "Value-Driven Pricing", description: "We provide competitive pricing while upholding the highest quality of service, delivering exceptional value for your investment." },
];

// Data from new HTML 'Industries' section - Mapped to Cold Chain relevance
const industries = [
    { title: "Dairy Products", image: "/1.jpg", },
    { title: "Pharmaceuticals & Healthcare", image: "/2.jpg" },
    { title: "Cold Chain Industry", image: "/3.jpg" }, // Replaced 'Refinery, Oil & Gas'
    { title: "Supermarkets & Retail", image: "/4.jpg" }, // Added a relevant category
    { title: "Agriculture", image: "/5.jpg"}, // Replaced 'Data Center Cooling'
    {
    title: "Seafood & Fish",
    image: "/6.jpg",

  }, // Replaced 'Hospital & Healthcare' for broader fit
];

// Utility component for counting animation
const Counter: React.FC<{ to: number; duration?: number }> = ({ to, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isIntersecting = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isIntersecting.current) {
                    isIntersecting.current = true;
                    let start = 0;
                    const end = to;
                    const increment = (end / duration) * 10;
                    
                    const timer = setInterval(() => {
                        start += increment;
                        if (start < end) {
                            setCount(Math.ceil(start));
                        } else {
                            setCount(end);
                            clearInterval(timer);
                        }
                    }, 10);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.7 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line
                observer.unobserve(ref.current);
            }
        };
    }, [to, duration]);

    return <span ref={ref}>{count}</span>;
};


// --- LAYOUT SECTIONS ---

// 1. Hero Section 
const HeroSection = () => (
    <header className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-teal-900 to-teal-700 text-white overflow-hidden">
        {/* Background Overlay (using a static image for visual reference) */}
        <div className="absolute inset-0 opacity-40">
            <img 
                src="/heroo.jpeg" // Using the image from your original component or a relevant placeholder
                alt="Cold Storage Banner" 
                className="w-full h-full object-cover object-center filter blur-[1px]"
            />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 w-full">
            <div className="max-w-3xl">
                {/* Responsive text change: text-2xl on mobile, md:text-xl for larger screens */}
                <p className="text-2xl md:text-xl text-teal-300 mb-2">COLD FROST: Leading Cold Chain Solutions Since 2013</p>
                {/* Responsive text change: text-5xl on mobile, md:text-7xl for larger screens */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
                    <span className="text-white">THE COLD ROOM</span> <span className="text-teal-400">SOLUTIONS</span>
                </h1>
                {/* Responsive text change: text-xl on mobile, md:text-xl for larger screens */}
                <p className="text-xl md:text-xl text-gray-300 max-w-xl mb-10">
                    We deliver high-quality refrigeration, cold room construction, and servicing across India, renowned for expert engineering and exceptional client satisfaction.
                </p>

                {/* CTA based on Hero component design */}
                <a 
                    href="https://wa.me/9133431786" 
                    className="group inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold text-lg shadow-xl transform hover:-translate-y-1 space-x-2"
                >
                    <span>Get Quote Today</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </div>
    </header>
);


// --- UPDATED DATA INTEGRATION ---
interface ServiceProcessItem {
    title: string;
    description: string;
    link: string;
    image: string; // Added image property for the card design
}

const servicesProcess: ServiceProcessItem[] = [
    { 
        title: 'Estimation', 
        description: 'Accurate cost and time estimates for your projects, ensuring transparency and no hidden costs.', 
        link: '/services',
        image: '/h1.jpg' // Placeholder image
    },
    { 
        title: 'Designing', 
        description: 'Custom designs tailored to your specific cold chain requirements using advanced 3D modeling and planning tools.', 
        link: '/services',
        image: '/h2.jpg' // Placeholder image
    },
    { 
        title: 'Supply & Logistics', 
        description: 'High-quality, certified refrigeration equipment and products delivered directly to your site on time.', 
        link: '/services',
        image: '/h3.avif' // Placeholder image
    },
    { 
        title: 'Installation & Setup', 
        description: 'Professional installation services for seamless setup and integration by our experienced technical team.', 
        link: '/services',
        image: '/h4.webp' // Placeholder image
    },
    { 
        title: 'Commissioning', 
        description: 'Thorough testing and commissioning to ensure optimal thermal performance and energy efficiency.', 
        link: '/services',
        image: '/h5.jpg' // Placeholder image
    },
    { 
        title: 'After Sales Services', 
        description: 'Ongoing support, scheduled maintenance, and 24/7 emergency repair services (T&C apply).', 
        link: '/services',
        image: '/h6.jpg' // Placeholder image
    },
];

// --- SERVICES SECTION COMPONENT ---

export const ServicesSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Comprehensive Services</h2> {/* Updated Heading */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                From initial planning to long-term maintenance, we provide end-to-end cold chain solutions.
            </p>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-12"></div>
            
            {/* Grid for 8 services: 2 cols on tablet, 4 cols on desktop */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesProcess.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-xl shadow-lg border-b-4 border-white hover:border-teal-600 transition-all duration-300 group overflow-hidden flex flex-col"
                    >
                        {/* Number and Image Header */}
                        <div className="relative h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover object-center opacity-80"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = '/imagee.jpg'; }} // Fallback image
                            />
                            {/* Number Overlay - using index + 1 for sequential numbering */}
                            <div className="absolute top-0 left-0 p-4 bg-teal-600 text-white font-extrabold text-2xl rounded-br-lg">
                                {index + 1} 
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-6 text-left flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                                {service.title}
                            </h3>
                            <div className="w-12 h-0.5 bg-gray-300 mb-4 group-hover:bg-teal-500 transition-colors"></div>
                            <p className="text-base sm:text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>
                            
                            {/* "MORE" Button/Link */}
                            <a 
                                href={service.link} 
                                className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-all mt-auto"
                            >
                                <span>LEARN MORE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// 3. About Section (Screenshot 3.jpg)
const AboutSection = () => (
    <section className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-700 text-white overflow-hidden">
        {/* Background Image/Overlay (Darkened) */}
        <div className="absolute inset-0 opacity-40">
            <img 
                src="/heroo.jpeg" // Reusing an industrial image 
                alt="Industrial setting" 
                className="w-full h-full object-cover object-center filter blur-sm"
            />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Responsive text change: text-4xl on mobile, md:text-5xl for larger screens */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4">About Cold Frost</h2>
            <div className="w-16 h-1 bg-teal-400 mx-auto mb-10"></div>

            {/* Responsive text change: text-lg on mobile, md:text-lg for consistency */}
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200">
                <p>{aboutText.brief}</p>
                <p>{aboutText.full}</p>
            </div>
        </div>
    </section>
);

// 4. Metrics Section (Screenshot 4.jpg)
const MetricsSection = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="text-left">
                    {/* Responsive text change: text-3xl on mobile, md:text-4xl for larger screens */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Metrics at a Glance</h2>
                    <div className="w-16 h-1 bg-teal-600 mb-6"></div>
                </div>
                {/* Responsive text change: text-base on mobile, md:text-lg for larger screens */}
                <p className="text-base md:text-lg text-gray-600">
                    Cold Frost: At the Forefront of Cold Chain and Refrigeration Services. Consistently delivering large-scale projects with precision and excellence since 2013.
                </p>
            </div>
            
            {/* Stats Grid - Dark Blue Boxes Re-themed to Slate-900/Teal */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <div 
                        key={index} 
                        className="text-center p-8 bg-gradient-to-br from-teal-900 to-teal-700 text-white rounded-lg shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-slate-800"
                    >
                        <stat.icon className="w-10 h-10 text-teal-400 mx-auto mb-4" />
                        {/* Stats Number: Retaining large text for impact */}
                        <div className="text-6xl font-extrabold mb-3">
                            <Counter to={stat.value} />
                            <span className="text-3xl ml-1 text-teal-300">{stat.suffix}</span>
                        </div>
                        <p className="text-gray-300 text-sm uppercase leading-snug">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 5. Reasons to Choose Section (Screenshot 5.jpg)
const DifferentiatorsSection = () => (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Bar Banner - Inspired by the new design's gradient header style */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-teal-900 to-teal-700 shadow-xl flex items-center justify-center ">
                 {/* Responsive text change: text-2xl on mobile, md:text-3xl for larger screens */}
                 <h2 className="text-2xl md:text-3xl font-bold text-white ">Reasons to Choose Cold Frost</h2>
            </div>
            
            <div className="pt-24 text-center">
                {/* Responsive text change: text-lg on mobile, md:text-xl for larger screens */}
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-16">
                    Choose Cold Frost for our unparalleled expertise in Cold Chain and Refrigeration services, backed by a proven track record of timely completion and unwavering commitment to customer satisfaction.
                </p>
                
                <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
                    {differentiators.map((item, index) => (
                        <div 
                            key={index} 
                            className="text-center group"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <item.icon className="w-12 h-12 text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
                            </div>
                            
                            {/* Responsive text change: text-xl on mobile for consistency */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700">{item.title}</h3>
                            {/* Responsive text change: text-base on mobile, sm:text-sm for better card fit */}
                            <p className="text-base sm:text-sm text-gray-600 max-w-xs mx-auto">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// 6. Industries Section (Screenshot 6.jpg)
const IndustriesSection = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Top Bar Banner - Inspired by the new design's gradient header style */}
            <div className="w-full bg-gradient-to-br from-teal-900 to-teal-700 shadow-xl py-6 mb-12 rounded-lg">
                {/* Responsive text change: text-2xl on mobile, md:text-3xl for larger screens */}
                <h2 className="text-2xl md:text-3xl font-bold text-white">Industries We Have Worked With</h2>
            </div>
            
            {/* Responsive text change: text-lg on mobile, md:text-xl for larger screens */}
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-16">
                Our collaboration with diverse industries leverages innovative solutions to enhance efficiency and achieve sustainable growth. We integrate cutting-edge technology and expert insights across various sectors.
            </p>

            {/* Industry Grid - Dark Blue Boxes Re-themed to Slate-900/Teal */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                    <div 
             key={index}
             data-index={index}
             className={`service-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group transform hover:-translate-y-3 hover:rotate-1 cursor-pointer
             `}
             style={{ 
               transitionDelay: `${index * 100}ms`,
               background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
             }}
             
            >
              <div className="relative h-32 mb-4 flex items-center justify-center">
                <img src={industry.image} alt={industry.title} className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" />
                
              </div>
              {/* Responsive text change: text-xl on mobile for consistency */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                {industry.title}
              </h3>
            </div>
                ))}
            </div>
            
            
        </div>
    </section>
);


// --- DATA INTEGRATION (Reusing client logos data) ---
interface Client { name: string; src: string; industry: string; }

const clientLogos: Client[] = [
    { name: "Voltas", src: "/Voltas.avif", industry: "Electricals" },
    { name: "BigBasket", src: "/BigBasket.png", industry: "Agriculture" },
    { name: "Licious", src: "/licious.png", industry: "Dairy Processing" },
    { name: "synthite", src: "/synthite.png", industry: "Cold Chain Logistics" },
    { name: "vijaya", src: "/vijaydairy.png", industry: "Dairy Processing" },
    { name: "jkseeds", src: "/jkseeds.jpeg", industry: "Dairy Processing" },

    
];

/**
 * Renders a simple section with a heading and a grid of client logos.
 */
export const ClientsLogoSection: React.FC = () => (
    <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Heading */}
                <h2 className="text-4xl font-bold text-teal-700 mb-12">Our Trusted Clients</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                    {clientLogos.map((client, index) => (
                        <div 
                            key={index} 
                            className="p-3 h-20 flex items-center justify-center border-b-2 border-gray-200 transition-all duration-300 hover:border-teal-400 group"
                        >
                            <img 
                                src={client.src} 
                                alt={client.name} 
                                className="max-w-full max-h-full object-contain"
                                // Optional: Error handler for broken images
                                // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = '/imagee.png'; }}
                            />
                        </div>
                    ))}
                </div>
                
                <p className="text-sm text-gray-500 mt-8">
                    Partnering with leaders across Food, Pharma, and Cold Chain Logistics.
                </p>
            </div>
        </section>
);


// Dummy data for the review carousel
const dummyReviews = [
    {
        name: "Abhijith Nair",
        rating: 5,
        text: "The installation team was professional and the new cold room maintains flawless temperature control. Excellent service!",
        source: "Google Reviews"
    },
    {
        name: "Suresh Reddy",
        rating: 5,
        text: "Cold Frost delivered our custom ripening chamber ahead of schedule. The precision control is exactly what our produce needs.",
        source: "Direct Feedback"
    },
    {
        name: "Priya Sharma",
        rating: 4.5,
        text: "Great value for money. Their compressor units are reliable and the maintenance support is quick to respond.",
        source: "Google Reviews"
    }
];

// --- CLIENT REVIEWS SECTION ---

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="flex space-x-1 text-teal-500">
            {[...Array(fullStars)].map((_, i) => (<Star key={`full-${i}`} size={16} fill="currentColor" strokeWidth={0} />))}
            {hasHalfStar && (<Star key="half" size={16} fill="url(#half-teal-new)" stroke="currentColor" strokeWidth={0} />)}
            {[...Array(emptyStars)].map((_, i) => (<Star key={`empty-${i}`} size={16} stroke="currentColor" fill="none" strokeWidth={1.5} />))}
            <svg width="0" height="0" className="hidden">
                <linearGradient id="half-teal-new" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" style={{ stopColor: "currentColor" }} />
                    <stop offset="50%" style={{ stopColor: "transparent" }} />
                </linearGradient>
            </svg>
        </div>
    );
};

const ReviewSlider: React.FC = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const nextReview = () => { setCurrentReview((prev) => (prev + 1) % dummyReviews.length); };
    const prevReview = () => { setCurrentReview((prev) => (prev - 1 + dummyReviews.length) % dummyReviews.length); };
    const review = dummyReviews[currentReview];

    return (
        <div className="relative p-6 border-2 border-teal-200 rounded-lg bg-white shadow-xl flex flex-col min-h-[220px]">
            <div className="space-y-3 flex-grow"><StarRating rating={review.rating} />
                <p className="text-gray-700 italic text-lg leading-relaxed">"{review.text}"</p>
            </div>
            <div className="mt-4 pt-3 flex justify-between items-center border-t border-gray-100">
                <div className="text-left">
                    <p className="font-bold text-teal-700">{review.name}</p>
                    <p className="text-sm text-gray-500 flex items-center space-x-1">
                        <MessageSquare size={14} /><span>{review.source}</span>
                    </p>
                </div>
            </div>
            <button onClick={prevReview} className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-300 shadow-xl" aria-label="Previous review"><ChevronLeft size={20} /></button>
            <button onClick={nextReview} className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-300 shadow-xl" aria-label="Next review"><ChevronRight size={20} /></button>
        </div>
    );
};

export const ClientReviewsSection: React.FC = () => (
    <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase text-teal-600 mb-1">TESTIMONIAL</p>
                <h2 className="text-4xl font-bold text-gray-900">Client Feedback & Reviews.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col justify-between space-y-6">
                    <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg shadow-md flex items-center space-x-6 h-full">
                        <div className="text-left flex-grow">
                            <p className="text-6xl font-extrabold text-teal-700">4.8+</p>
                            <p className="text-sm text-gray-600">111 Google reviews</p>
                            <p className="text-sm font-bold text-teal-800 bg-teal-200 px-3 py-1 rounded-full uppercase inline-block mt-3">Excellent Score</p>
                            <a href="https://share.google/WFeRGbGFH00EENZEe" className="mt-4 text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center space-x-1">
                                <span>READ ALL REVIEWS</span>
                                
                                <ArrowRight size={16} />
                             
                            </a>
                        </div>
                    </div>
                    <p className="text-md text-gray-600 text-left">We pride ourselves on the positive relationships built through reliable service and cutting-edge solutions.</p>
                </div>
                <div className="flex items-center h-full">
                    <ReviewSlider />
                </div>
            </div>
        </div>
    </section>
);

// Main Component Assembly
const Home = () => {
    return (
        <div id="new-home-page-complete">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <MetricsSection />
            <DifferentiatorsSection />
            <ClientsLogoSection /> 
            <IndustriesSection />
            <ClientReviewsSection />
            {/* The contact section is a separate page now, linked from the CTAs */}
        </div>
    );
};

export default Home;