import React, { useEffect, useState, useRef } from 'react';
import { Thermometer, Zap, Wrench, Package, ArrowRight, Warehouse, Snowflake, DoorOpen, Wind, SlidersHorizontal, Dot } from 'lucide-react';

// Interface definitions for equipment data
interface EquipmentDetails {
  brief: string;
  benefits: string[];
  specs: string[];
  applications: string[];
}

interface EquipmentItem {
  title: string;
  image: string;
  description: string;
  features: string[];
  details: EquipmentDetails;
}

const equipment: EquipmentItem[] = [
 {
 title: 'Cold Room',
 image: '/coldroom.webp',
 description: 'Modular cold rooms for storage of perishable goods with precise temperature and humidity control.',
 features: [
  'Customizable sizes',
  'Temperature range: -40°C to +10°C',
  'PUF insulated panels',
  'Energy efficient',
 ],
 details: {
  brief: 'Cold rooms are insulated modular storage units designed to maintain low temperatures for preserving perishable items like food, medicine, and chemicals with precise humidity and temperature control.',
  benefits: [
   'Customizable sizing for various capacities',
   'High energy efficiency with low running costs',
   'PUF insulated panels for superior insulation',
   'Reliable temperature consistency from -40°C to +10°C',
  ],
  specs: [
   'Temperature Range: -40°C to +10°C',
   'Insulation: Polyurethane Foam (PUF)',
   'Panel Thickness: 60mm–150mm',
   'Types: Modular walk-in or custom-built',
  ],
  applications: [
   'Food processing & storage industries',
   'Pharmaceutical warehouses',
   'Floral storage',
   'Research labs',
  ],
 },
 },
 {
 title: 'Glass Door Chiller',
 image: '/glassdoor.webp',
 description: 'Display chillers with glass doors for beverages, dairy, and retail products.',
 features: [
  'Double/triple glass doors',
  'LED lighting',
  'Temperature range: 0°C to +8°C',
  'Attractive display',
 ],
 details: {
  brief: 'Glass door chillers are refrigeration units with transparent doors used for showcasing chilled products in commercial environments, maintaining visual appeal and freshness.',
  benefits: [
   'Enhanced product visibility for customers',
   'Energy-saving LED lighting',
   'Reduced cooling loss with triple glass doors',
   'Elegant and modern retail appearance',
  ],
  specs: [
   'Temperature Range: 0°C to +8°C',
   'Lighting: Internal LED',
   'Glass: Double/Triple-glazed insulated',
   'Door Types: Swing or sliding',
  ],
  applications: [
   'Supermarkets & retail stores',
   'Beverage & dairy product display',
   'Convenience stores',
   'Cafeterias',
  ],
 },
 },
 {
 title: 'Cold Room Doors',
 image: '/coldroomdoor.jpg',
 description: 'Durable and insulated doors for cold rooms, available in sliding and hinged types.',
 features: [
  'PUF insulated',
  'Heated frames (optional)',
  'Custom sizes',
  'Easy operation',
 ],
 details: {
  brief: 'Cold room doors are specially engineered, insulated doors available in sliding or hinged styles, designed to maintain thermal efficiency and prevent air leakage.',
  benefits: [
   'Enhanced insulation with PUF-filled doors',
   'Optional heating to prevent freezing',
   'Custom sizing for any cold room',
   'Smooth and easy operation',
  ],
  specs: [
   'Door Types: Sliding / Hinged',
   'Insulation: PUF Core',
   'Heating Option: Yes (frame heaters)',
   'Finishing: Galvanized / Stainless Steel',
  ],
  applications: [
   'Industrial cold storage',
   'Food and pharma manufacturing units',
   'Warehousing & logistics centers',
   'Retail cold chambers',
  ],
 },
 },
 {
 title: 'Condensing Units (Air & Water Cooled)',
 image: '/watercooled.avif',
 description: 'Efficient air-cooled and water-cooled condensing units for various refrigeration needs.',
 features: [
  'High efficiency fans',
  'Low noise operation',
  'Weatherproof/Corrosion resistant',
  'Easy installation & maintenance',
  'Available in air-cooled and water-cooled options',
 ],
 details: {
  brief: 'Condensing units serve as the heart of the refrigeration system, responsible for compressing refrigerant and maintaining the cold room temperature. They come in air-cooled and water-cooled variants.',
  benefits: [
   'High-efficiency operation with low energy consumption',
   'Weatherproof and corrosion-resistant',
   'Quiet and low-vibration systems',
   'Compatible with multiple refrigerants',
  ],
  specs: [
   'Types: Air-cooled / Water-cooled',
   'Cooling Capacity: Customized as per requirement',
   'Compressor Types: Scroll, Reciprocating, Screw',
   'Coating: Anti-corrosive',
  ],
  applications: [
   'Cold rooms and chillers',
   'Food and beverage industries',
   'Dairy and fisheries',
   'Pharmaceuticals',
  ],
 },
 },
 {
 title: 'Control Panel for Cold Room',
 image: '/controlpannel.webp',
 description: 'Advanced control panels for cold room automation and safety.',
 features: [
  'Digital temperature controller',
  'Alarm systems',
  'User-friendly interface',
  'Customizable settings',
 ],
 details: {
  brief: 'Cold room control panels provide automated control, monitoring, and safety for refrigeration systems through digital interfaces and alarms.',
  benefits: [
   'Easy monitoring and temperature control',
   'Safety alarms for critical events',
   'Intuitive and user-friendly operation',
   'Fully customizable settings',
  ],
  specs: [
   'Controller: Digital with display',
   'Alarms: High/Low Temp, Power Failure, Door Open',
   'Inputs: Temperature sensors, door switch',
   'Output: Compressor, light, heater control',
  ],
  applications: [
   'All types of cold storage systems',
   'Commercial refrigeration plants',
   'Food & pharma cold chains',
   'HVAC and industrial cooling',
  ],
 },
 },
 {
 title: 'Evaporator Unit',
 image: '/evaporator.webp',
 description: 'High performance evaporator units for cold storage and refrigeration.',
 features: [
  'Efficient heat exchange',
  'Anti-corrosive coating',
  'Low maintenance',
  'Multiple capacities',
 ],
 details: {
  brief: 'Evaporator units are installed inside cold rooms to remove heat from the storage area, ensuring the desired temperature is maintained efficiently.',
  benefits: [
   'Optimal heat exchange and fast cooling',
   'Anti-corrosive materials for durability',
   'Easy to clean and maintain',
   'Wide range of capacities for all cold room sizes',
  ],
  specs: [
   'Fin Spacing: 4mm–8mm',
   'Coil Material: Aluminum/Copper',
   'Fan Diameter: 300mm–500mm',
   'Temperature Application: Medium & Low Temp',
  ],
  applications: [
   'Walk-in freezers and chillers',
   'Meat and seafood storage',
   'Vegetable and fruit preservation',
   'Industrial refrigeration systems',
  ],
 },
 },
 {
 title: 'Ripening Chamber',
 image: '/reipeningchamber.webp',
 description: 'Specialized chambers for controlled ripening of fruits like bananas and mangoes, ensuring uniform color and quality.',
 features: [
  'Precise temperature & humidity control',
  'Ethylene gas injection system',
  'Energy efficient operation',
  'Uniform ripening',
  'Customizable sizes',
 ],
 details: {
  brief: 'Fruit ripening chambers are controlled atmospheric systems designed to artificially ripen fruits like bananas, mangoes, and papayas in a safe and uniform manner using regulated temperature, humidity, and ethylene gas.',
  benefits: [
   'Uniform and natural-looking ripening',
   'Reduced spoilage and increased shelf life',
   'Automated temperature and humidity control',
   'Safe use of ethylene gas (non-toxic and residue-free)',
   'Energy-efficient operation with minimal manual intervention',
  ],
  specs: [
   'Temperature Range: 15°C to 30°C',
   'Humidity Control: 85% to 95% RH',
   'Gas Control: Ethylene dosing system (100-150 ppm)',
   'Insulation: PUF Panels with 60mm–100mm thickness',
   'Chamber Capacity: Customizable from 1MT to 30MT and above',
  ],
  applications: [
   'Banana ripening',
   'Mango ripening',
   'Papaya and other climacteric fruits',
   'Agricultural produce storage facilities',
   'Fruit exporters and processing units',
  ],
 },
 },
 {
 title: 'Bitzer Compressor Rack System',
 image: '/bitzer.png',
 description: 'High-performance compressor rack systems designed for industrial refrigeration applications.',
 features: [
  'Energy-efficient operation',
  'Modular design for easy maintenance',
  'Advanced control systems',
  'Suitable for large-scale refrigeration',
 ],
 details: {
  brief: 'Bitzer Compressor Rack Systems are engineered for industrial refrigeration, offering high efficiency, reliability, and scalability for large-scale cooling applications.',
  benefits: [
   'Energy-efficient operation with low power consumption',
   'Modular design for easy maintenance and scalability',
   'Advanced control systems for precise temperature management',
   'Durable and reliable for industrial use',
  ],
  specs: [
   'Compressor Type: Screw and Scroll',
   'Cooling Capacity: Customizable as per requirement',
   'Control System: Advanced digital control',
   'Installation: Modular rack system',
  ],
  applications: [
   'Industrial refrigeration plants',
   'Food processing and storage',
   'Cold storage warehouses',
   'HVAC systems',
  ],
 },
 },
 {
 title: 'Bock Compressor',
 image: '/bock.jpg',
 description: 'Reliable and efficient compressors for various refrigeration and air conditioning applications.',
 features: [
  'High efficiency and reliability',
  'Low noise operation',
  'Wide range of capacities',
  'Easy installation and maintenance',
 ],
 details: {
  brief: 'Bock Compressors are known for their high efficiency, reliability, and low noise operation, making them ideal for various refrigeration and air conditioning applications.',
  benefits: [
   'High efficiency with low energy consumption',
   'Low noise and vibration levels',
   'Wide range of capacities for different applications',
   'Easy installation and maintenance',
  ],
  specs: [
   'Compressor Type: Reciprocating and Scroll',
   'Cooling Capacity: Customizable as per requirement',
   'Noise Level: Low',
   'Installation: Easy and flexible',
  ],
  applications: [
   'Refrigeration systems',
   'Air conditioning units',
   'Heat pumps',
   'Industrial cooling applications',
  ],
 },
 },

];





// Reusable hook for scroll animation visibility
const useAnimateOnScroll = (threshold: number = 0.1): [React.MutableRefObject<(HTMLElement | null)[]>, { [key: string]: boolean }] => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [(entry.target as HTMLElement).dataset.index!]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return [refs, visibleItems];
};

// Hero Banner Component
const ProductsHero: React.FC = () => (
    <header className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-teal-900 to-teal-700 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-40">
            <img
                src="/installation.jpg"
                alt="Industrial Ducting"
                className="w-full h-full object-cover object-center filter blur-sm"
                onError={(e) => { e.currentTarget.src = '/imagee.jpg'; }}
            />
        </div>
        <div className="absolute inset-0 bg-teal-900/40"></div>

        {/* Content Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 w-full">
            {/* Responsive text change: text-4xl on mobile, sm:text-5xl for larger screens */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Products</h1>
            {/* Responsive text change: text-lg on mobile, sm:text-xl for larger screens */}
            <p className="text-lg sm:text-xl text-teal-100 max-w-3xl">
                Our services encompass everything from initial design to installation and maintenance, ensuring reliability and safety for all our clients.
            </p>
        </div>
    </header>
);

// Product Grid Component (Updated to 3 columns and new card style)
const ProductGrid: React.FC = () => {
    const [refs, visibleItems] = useAnimateOnScroll(0.3);
    const [selectedProduct, setSelectedProduct] = useState<EquipmentItem | null>(null);

    const closeModal = () => setSelectedProduct(null);

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProduct]);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Heading Area */}
                {/* Responsive text change: text-4xl on mobile, sm:text-5xl for larger screens */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">Our Equipment & Solutions</h1>
                {/* Responsive text change: text-lg on mobile, sm:text-xl for larger screens */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                    Explore our range of high-performance cold chain equipment designed for efficiency and long-term reliability.
                </p>

                {/* Grid Layout: Changed to 3 columns, reduced gap-y */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipment.map((item, index) => (
                        <div
                            key={index}
                            data-index={index}
                            ref={(el) => (refs.current[index] = el)}
                            className={`flex flex-col rounded-lg shadow-lg bg-white overflow-hidden
        transition-all duration-700 transform hover:shadow-xl hover:-translate-y-1 ${
            visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Product Image Area: Decreased Height */}
                            <div
                                className="relative h-48 w-full group cursor-pointer"
                                onClick={() => setSelectedProduct(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => { e.currentTarget.src = '/imagee.jpg'; }}
                                />
                                {/* Teal Overlay on Hover */}
                                <div className="absolute inset-0 bg-teal-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Text Content Area: Adjusted to pin button to bottom */}
                            <div className="text-left p-5 flex flex-col flex-grow border-t-4 border-teal-600">
                                {/* Responsive text change: text-xl on mobile for consistency */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                {/* Responsive text change: text-base on mobile, sm:text-sm for card fit */}
                                <p className="text-base sm:text-sm text-gray-600 mb-4 min-h-10">{item.description}</p>
                                
                                {/* Key Features Mini-List */}
                                {/* Responsive text change: text-xl on mobile for consistency */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Key Features: </h3>

                                {/* Responsive text change: text-sm on mobile, sm:text-sm for card fit */}
                                <ul className="space-y-1 mb-4 text-sm text-gray-700"> 
                                    <li className="flex items-center">   
                                        <Dot className="w-8 h-8 mr-2 text-teal-500" />      
                                        <p className="text-gray-600 text-sm ">{item.features[0] || ''}</p>
                                    </li>
                                    <li className="flex items-center">
                                        <Dot className="w-8 h-8 mr-2 text-teal-500" />      
                                        <p className="text-gray-600 text-sm ">{item.features[1] || ''}</p>
                                    </li>
                                    <li className="flex items-center">
                                        <Dot className="w-8 h-8 mr-2 text-teal-500" />      
                                        <p className="text-gray-600 text-sm ">{item.features[2] || ''}</p>
                                    </li>
                                    <li className="flex items-center">
                                        <Dot className="w-8 h-8 mr-2 text-teal-500" />      
                                        <p className="text-gray-600 text-sm ">{item.features[3] || ''}</p>
                                    </li>
                                </ul>

                                {/* Button pinned to bottom */}
                                <button
                                    onClick={() => setSelectedProduct(item)}
                                    className="w-full inline-flex items-center justify-center space-x-2 text-base font-semibold text-white bg-teal-600 px-4 py-2 rounded-md hover:bg-teal-700 transition-all shadow-md mt-auto"
                                >
                                    <span>DETAILS</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Detailed View (Responsive text changes applied here as well) */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeModal}>
                    <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="p-8">
                            {/* Responsive text change: text-2xl on mobile, sm:text-3xl */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selectedProduct.title}</h2>
                            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-64 object-cover object-center rounded-lg mb-6" />
                            {/* Responsive text change: text-base on mobile, sm:text-lg */}
                            <p className="text-base sm:text-lg text-gray-700 mb-6 border-b pb-4">{selectedProduct.details.brief}</p>
                            <div className="grid sm:grid-cols-1 gap-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        {/* Responsive text change: text-lg on mobile, sm:text-xl */}
                                        <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-3 flex items-center">
                                            <Wrench className="w-5 h-5 mr-2" /> Key Features
                                        </h3>
                                        {/* Responsive text change: text-sm on mobile for consistency */}
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm pl-4">
                                            {selectedProduct.features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        {/* Responsive text change: text-lg on mobile, sm:text-xl */}
                                        <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-3 flex items-center">
                                            <Package className="w-5 h-5 mr-2" /> Applications
                                        </h3>
                                        {/* Responsive text change: text-sm on mobile for consistency */}
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm pl-4">
                                            {selectedProduct.details.applications.map((a, i) => (
                                                <li key={i}>{a}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        {/* Responsive text change: text-lg on mobile, sm:text-xl */}
                                        <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-3 flex items-center">
                                            <Snowflake className="w-5 h-5 mr-2" /> Specs
                                        </h3>
                                        {/* Responsive text change: text-sm on mobile for consistency */}
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm pl-4">
                                            {selectedProduct.details.specs.map((a, i) => (
                                                <li key={i}>{a}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        {/* Responsive text change: text-lg on mobile, sm:text-xl */}
                                        <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-3 flex items-center">
                                            <Wind className="w-5 h-5 mr-2" /> Benefits
                                        </h3>
                                        {/* Responsive text change: text-sm on mobile for consistency */}
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm pl-4">
                                            {selectedProduct.details.benefits.map((a, i) => (
                                                <li key={i}>{a}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// Main Products Page Component
const Products: React.FC = () => {
  return (
    <div id="new-products-page">
      <ProductsHero />
      <ProductGrid />
    </div>
  );
};

export default Products;