import React, { useState } from 'react';
import { Factory, Truck, Thermometer, Zap } from 'lucide-react';

// --- DATA INTEGRATION ---

type StableGallerySectionProps = {

title: string;

icon: React.ComponentType<{ className?: string }>;

assets: { title: string; image: string }[];

};

 type ImageCardProps = {

asset: { title: string; image: string };

index: number;

};

// Data for the Commitment Section
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

// Data for the Gallery Section
const galleryAssets = {
    Machinery: [
        { title: 'Condensing Units', image: '/watercooled.avif' },
        { title: 'Evaporator Units', image: '/evaporator.webp' },
        { title: 'Compressor Racks', image: '/bitzer.png' },
        { title: 'Bock Compressor', image: '/bock.jpg' },
        { title: 'Control Panels', image: '/controlpannel.webp' }, 
    ],
    Infrastructure: [
        { title: 'Cold Room Chambers', image: '/coldroom.webp' },
        { title: 'Ripening Chambers', image: '/reipeningchamber.webp' },
        { title: 'Insulated Doors', image: '/coldroomdoor.jpg' },
        { title: 'Glass Door Chillers', image: '/glassdoor.webp' },
    ],
    Applications: [
        { title: "Meat & Seafood Storage", image: "/seafood.webp" },
        { title: "Pharmaceutical Cold Storage", image: "/pharma.jpg" },
        { title: "Dairy Products Storage", image: "/dairy.jpg" },
        { title: "Produce & Veggies", image: "/vegies.jpg" },
        { title: "Frozen Food Distribution", image: "/icecream.webp" },
    ],
};

// --- COMPONENTS ---

// 1. Hero Banner
const GalleryHero = () => (
    <header className="relative min-h-[30vh] flex items-center bg-gradient-to-br from-teal-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-teal-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 w-full">
            {/* TEXT RESPONSIVENESS: Scaled from text-3xl up to 5xl */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">Visual Gallery</h1>
            {/* TEXT RESPONSIVENESS: Scaled from text-lg up to xl */}
            <p className="text-lg sm:text-xl text-teal-100 max-w-3xl">
                A creative showcase of our technology, infrastructure, and application environments.
            </p>
        </div>
    </header>
);

// 2. Stable 3-Column Image Gallery Section
const StableGallerySection = ({ title, icon: Icon, assets }: StableGallerySectionProps) => {

    const Header = () => (
        <div className="text-center mb-16">
            <Icon className="w-10 h-10 text-teal-600 mx-auto mb-2" />
            {/* TEXT RESPONSIVENESS: Scaled from text-3xl up to 4xl */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{title}</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>
    );

    const ImageCard = ({ asset, index }: ImageCardProps) => (
        <div 
            key={index}
            className="relative h-64 overflow-hidden rounded-lg shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-b-4 hover:border-teal-600"
        >
            <img 
                src={asset.image} 
                alt={asset.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0f766e/ffffff?text=Image'; }}
            />
            {/* Text Overlay for Context */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-teal-800/60 transition-colors duration-500 flex items-end p-4">
                {/* TEXT RESPONSIVENESS: Scaled from text-lg up to xl */}
                <p className="text-lg sm:text-xl text-white font-bold border-b-2 border-white/50 group-hover:border-white transition-colors duration-300">
                    {asset.title}
                </p>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {assets.map((asset, index) => <ImageCard key={index} asset={asset} index={index} />)}
                </div>
            </div>
        </section>
    );
};


// 3. Commitment Section (Updated for Image/Title/Description grouping and text responsiveness)
const CommitmentSection = () => (
    <section className="py-20 bg-gray-50">
        {/* Teal Header Bar */}
        <div className="w-full bg-gradient-to-r from-teal-800 to-teal-600 shadow-xl py-6 mb-16 text-center">
            {/* TEXT RESPONSIVENESS: Scaled from text-xl up to 3xl */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Our Commitment to Excellence</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main grid container for the grouped content (Image + Text) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {commitments.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        
                        {/* 1. Image Block (always at the top) */}
                        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-xl mb-6">
                            <img 
                                src={item.imageSrc} 
                                alt={item.altText} 
                                className="w-full h-full object-cover object-center transition duration-500 ease-in-out hover:scale-105" 
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0f766e/ffffff?text=Image'; }} 
                            />
                        </div>

                        {/* 2. Title */}
                        {/* TEXT RESPONSIVENESS: Scaled from text-xl up to 3xl */}
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-teal-700">
                            {item.title}
                        </h3>
                        
                        {/* 3. Description (text-base is perfectly responsive) */}
                        <p className="text-base text-gray-600 max-w-sm mx-auto">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// 4. Main App Component
const App = () => {
    return (
        <div id="creative-gallery-page" className="font-sans antialiased">
            <GalleryHero />
            
            <StableGallerySection 
                title="Refrigeration Machinery"
                icon={Zap}
                assets={galleryAssets.Machinery}
            />

            <StableGallerySection 
                title="Cold Storage Infrastructure"
                icon={Factory}
                assets={galleryAssets.Infrastructure}
            />
            
            <StableGallerySection 
                title="Core Applications"
                icon={Thermometer}
                assets={galleryAssets.Applications}
            />

            <CommitmentSection />
        </div>
    );
};

export default App;
