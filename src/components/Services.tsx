import React from 'react';
import { Briefcase, Settings, Wrench, Package, Send, DollarSign, Zap, ArrowRight, Clock, FileText, Layout } from 'lucide-react';

// --- DATA INTEGRATION (Keeping data from previous step) ---

// 1. Data from original Services component (Input 2) - focuses on process/steps
const servicesProcess = [
    { 
        title: 'Estimation', 
        description: 'Accurate cost and time estimates for your projects, ensuring transparency and no hidden costs.', 
        link: 'https://wa.me/9133431786' 
    },
    { 
        title: 'Designing', 
        description: 'Custom designs tailored to your specific cold chain requirements using advanced 3D modeling and planning tools.', 
        link: 'https://wa.me/9133431786' 
    },
    { 
        title: 'Supply & Logistics', 
        description: 'High-quality, certified refrigeration equipment and products delivered directly to your site on time.', 
        link: 'https://wa.me/9133431786' 
    },
    { 
        title: 'Installation & Setup', 
        description: 'Professional installation services for seamless setup and integration by our experienced technical team.', 
        link: 'https://wa.me/9133431786' 
    },
    { 
        title: 'Commissioning', 
        description: 'Thorough testing and commissioning to ensure optimal thermal performance and energy efficiency.', 
        link: 'https://wa.me/9133431786' 
    },
    { 
        title: 'After Sales Services', 
        description: 'Ongoing support, scheduled maintenance, and 24/7 emergency repair services (T&C apply).', 
        link: 'https://wa.me/9133431786' 
    },
];

// 2. Commitment Data (Dummy/Placeholder content based on Screenshot 11.jpg)
const commitments = [
  {
    title: "Precision Engineering",
    description: "We use state-of-the-art technology to ensure pinpoint accuracy and reliability in every system we design and install.",
    imageSrc: "/controlpannel.webp",
    altText: "Precise temperature control panel"
  },
  {
    title: "Dedicated Service",
    description: "Our certified technicians provide 24/7 support and maintenance, ensuring your operations never miss a beat.",
    imageSrc: "/watercooled.avif",
    altText: "Technician working on a water-cooled unit"
  },
  {
    title: "Sustainable Solutions",
    description: "We are committed to eco-friendly practices, delivering energy-efficient systems that reduce your carbon footprint.",
    imageSrc: "/commison.jpg",
    altText: "Installation process on a building rooftop"
  }
];

// 3. Industry Data (Reused from Home Page/Screenshots 12 & 13.jpg)
// const industries = [
//     { title: "Food Processing", image: "/foodprocessing.jpg" },
//     { title: "Pharmaceuticals & Healthcare", image: "/pharma.jpg" },
//     { title: "Cold Chain Logistics", image: "/truck.jpg" }, // Replaced 'Refinery, Oil & Gas'
//     { title: "Supermarkets & Retail", image: "/retail.jpg" }, // Added a relevant category
//     { title: "Restaurents", image: "/vegies.jpg" }, // Replaced 'Data Center Cooling'
//     { title: "Hospitality & Hotels", image: "/hospitality.jpg" }, // Replaced 'Hospital & Healthcare' for broader fit
// ];

const industries = [
  {
    title: "Fruits & Vegetables",
    image: "/8.jpg",
   
  },
  {
    title: "Pharmaceuticals",
    image: "/9.jpg",
    
  },
  
  {
    title: "Dairy Products",
    image: "/10.jpg",
    
  },
  {
    title: "Ice Cream",
    image: "/11.jpg",
    
  },
  {
    title: "Seafood & Fish",
    image: "/7.jpg",

  },
  {
    title: "Meat & Poultry",
    image: "/15.jpg",
   
  },
  {
    title: "Grains & Pulses",
    image: "/13.jpg",
   
  },
  {
    title: "Ripening Chambers",
    image: "/14.jpg",
   
  }
];
// --- LAYOUT SECTIONS ---

// 1. Hero Banner 
const ServicesHero = () => (
    <header className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-teal-900 to-teal-700 text-white overflow-hidden">
        {/* Background Overlay (Darkened Teal) */}
        <div className="absolute inset-0 opacity-60">
            {/* Placeholder image for industrial background */}
            <img 
                src="/installation.jpg" 
                alt="Construction workers setting up cold storage" 
                className="w-full h-full object-cover object-center filter blur-sm"
                onError={(e) => { e.currentTarget.src = '/imagee.jpg'; }}
            />
        </div>
        <div className="absolute inset-0 bg-teal-900/40"></div>
        
        {/* Content Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 w-full">
            {/* Responsive text change: text-4xl on mobile, sm:text-5xl for larger screens */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our Services</h1>
            {/* Responsive text change: text-lg on mobile, sm:text-xl for larger screens */}
            <p className="text-lg sm:text-xl text-teal-100 max-w-3xl">
                Our services encompass everything from initial design and expert consultation to flawless installation, commissioning, and long-term maintenance, ensuring reliability and safety for all our clients.
            </p>
        </div>
    </header>
);

// 2. Main Service Grid 
const MainServiceGrid = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Responsive text change: text-lg on mobile, sm:text-xl for larger screens */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-16">
                Cold Frost customizes products according to client requirements and provides the following services:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {servicesProcess.map((service, index) => (
                    <div 
                        key={index} 
                        className="p-8 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-teal-300/50 transition-all duration-300 transform hover:-translate-y-1 group bg-white"
                    >
                        {/* Responsive text change: text-2xl on mobile, sm:text-3xl for larger screens */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-700">{service.title}</h3>
                        <div className="w-12 h-1 bg-teal-500 mx-auto mb-6"></div>
                        
                        {/* Responsive text change: text-base on mobile, sm:text-lg for larger screens */}
                        <p className="text-base sm:text-lg text-gray-600 mb-8 min-h-20">{service.description}</p>
                        
                        {/* ENQUIRY Button - text-base on mobile, sm:text-lg */}
                        <a 
                            href={service.link}
                            className="inline-flex items-center justify-center space-x-3 text-base sm:text-lg font-semibold text-white bg-teal-700 px-8 py-3 rounded-md hover:bg-teal-800 transition-all shadow-lg"
                        >
                            <span>ENQUIRY</span>
                            <span className="text-xl leading-none">&gt;</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 2. Services Section (Screenshot 2.jpg)


// --- DATA INTEGRATION (Using your provided servicesProcess data) ---
interface ServiceProcessItem {
    title: string;
    description: string;
    link: string;
}

// const servicesProcess: ServiceProcessItem[] = [
//     { 
//         title: 'Estimation', 
//         description: 'Accurate cost and time estimates for your projects, ensuring transparency and no hidden costs.', 
//         link: '#contact' 
//     },
//     { 
//         title: 'Designing', 
//         description: 'Custom designs tailored to your specific cold chain requirements using advanced 3D modeling and planning tools.', 
//         link: '#contact' 
//     },
//     { 
//         title: 'Supply & Logistics', 
//         description: 'High-quality, certified refrigeration equipment and products delivered directly to your site on time.', 
//         link: '#contact' 
//     },
//     { 
//         title: 'Installation & Setup', 
//         description: 'Professional installation services for seamless setup and integration by our experienced technical team.', 
//         link: '#contact' 
//     },
//     { 
//         title: 'Commissioning', 
//         description: 'Thorough testing and commissioning to ensure optimal thermal performance and energy efficiency.', 
//         link: '#contact' 
//     },
//     { 
//         title: 'After Sales Services', 
//         description: 'Ongoing support, scheduled maintenance, and 24/7 emergency repair services (T&C apply).', 
//         link: '#contact' 
//     },
// ];

// Helper to map services to appropriate icons
const getIconForStep = (title: string) => {
    if (title.includes('Estimation')) return FileText;
    if (title.includes('Designing')) return Layout;
    if (title.includes('Supply')) return Package;
    if (title.includes('Installation')) return Wrench;
    if (title.includes('Commissioning')) return Zap;
    if (title.includes('Services')) return Clock;
    return ArrowRight;
};

// --- REDESIGNED COMPONENT ---

export const ServicesProcessSection: React.FC = () => (
    <section className="py-20 bg-gray-50"> {/* Changed to gray-50 for subtle contrast */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our 6-Step Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                We deliver end-to-end cold chain solutions through a streamlined, transparent workflow.
            </p>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-16"></div>
            
            {/* Process Grid: 3 columns, 2 rows for the 6 items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {servicesProcess.map((service, index) => {
                    const Icon = getIconForStep(service.title);
                    
                    // Logic to determine the flow line color/visibility
                    const isLastStep = index === servicesProcess.length - 1;
                    const isEndOfRow = (index + 1) % 3 === 0;

                    return (
                        <div 
                            key={index} 
                            className="relative text-left flex flex-col items-start px-4 group"
                        >
                            {/* Step Number Circle */}
                            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white text-xl font-bold z-10 shadow-lg">
                                {index + 1}
                            </div>
                            
                            {/* Horizontal Line for Flow (Connects columns on large screens) */}
                            {/* Hide line on the last step in a row */}
                            {index < servicesProcess.length - 1 && !isEndOfRow && (
                                <div className="hidden lg:block absolute h-0.5 bg-teal-200 w-[calc(100%+40px)] top-6 left-12 transform -translate-y-1/2"></div>
                            )}

                            {/* Card Content */}
                            <div className="bg-white p-6 pt-16 rounded-xl shadow-xl border-t-4 border-teal-600 w-full flex flex-col flex-grow transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                                <Icon className="w-8 h-8 text-teal-700 mb-3" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-teal-800 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-base mb-6 flex-grow">{service.description}</p>
                                
                                <a 
                                    href={service.link} 
                                    className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-all mt-auto"
                                >
                                    <span>START THIS STEP</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);



const CommitmentSection = () => (
    <section className="py-20 bg-gray-50">
        {/* Teal Header Bar */}
        <div className="w-full bg-gradient-to-r from-teal-800 to-teal-600 shadow-xl py-6 mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Commitment to Excellence</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* This is the new main grid container.
              - grid-cols-1: On mobile, everything stacks vertically (Image, Title, Description).
              - md:grid-cols-3: On medium screens and up, it creates three columns for the layout.
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {commitments.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        
                        {/* 1. Image Block */}
                        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-xl mb-6">
                            <img 
                                src={item.imageSrc} 
                                alt={item.altText} 
                                className="w-full h-full object-cover object-center transition duration-500 ease-in-out hover:scale-105" 
                                onError={(e) => { e.currentTarget.src = '/imagee.jpg'; }} 
                            />
                        </div>

                        {/* 2. Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-teal-700">
                            {item.title}
                        </h3>
                        
                        {/* 3. Description */}
                        <p className="text-base text-gray-600 max-w-sm mx-auto">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 4. Industry Focus Section (Updated for 2-column split card design)
const IndustryFocusSection = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             {/* Teal Header Bar */}
            <div className="w-full bg-gradient-to-r from-teal-800 to-teal-600 shadow-xl py-6 mb-12 rounded-lg">
                {/* Responsive text change: text-2xl on mobile, sm:text-3xl for larger screens */}
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Industries We Have Worked With</h2>
            </div>
            
            {/* Responsive text change: text-lg on mobile, sm:text-xl for larger screens */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-16">
                We provide specialist solutions for controlled temperature environments across diverse sectors, ensuring optimal conditions for perishable and sensitive goods.
            </p>

            {/* Industry Grid - TWO COLUMNS (Updated per user request) */}
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

// Main Component Assembly
const Services = () => {
    return (
        <div id="new-services-page">
            <ServicesHero />
            <MainServiceGrid />
            <ServicesProcessSection />
            <CommitmentSection />
            <IndustryFocusSection />
        </div>
    );
};

export default Services;


