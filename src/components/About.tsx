import React from 'react';
import { Trophy, Users, Globe, Layout, CheckCircle, Zap, BookOpen, Briefcase, MapPin, Code, Award, Target, Heart, Shield, Clock, Wrench } from 'lucide-react';

// --- DATA INTEGRATION ---
const companyInfo = {
    brief: "Cold Frost was founded with a mission to deliver precision temperature control solutions. Our expertise spans commercial kitchens, food storage, pharmaceutical and industrial applications.",
    fullStory: "Cold Frost was founded in 2013 and has since become India's leading provider of cold chain and refrigeration services. With nearly three decades of industry experience, we excel in providing comprehensive solutions tailored to diverse needs. Our persistent commitment to utilizing cutting-edge technology and adhering to strict industry standards ensures that each project is executed with unparalleled expertise and precision.",
    mission: [
        "Deliver exceptional design and installation services utilizing specialized expertise while upholding industry benchmarks.",
        "Nurture a proficient workforce dedicated to excellence, development, and client contentment, reinforced by a comprehensive training initiative.",
        "Lead in harmony with the environment by adhering to sustainable practices and energy-efficient solutions to lower our carbon footprint.",
    ]
};

const statsData = [
    { icon: Trophy, title: 'Projects Successfully Delivered', value: 250, suffix: '+' },
    { icon: Users, title: 'Team of Professionals Working Pan India', value: 20, suffix: '+' },
    { icon: Layout, title: 'Strong Vendor Network', value: 30, suffix: '+' },
    { icon: Globe, title: 'Years of Experience and Excellence', value: 18, suffix: '+' },
];

const clientLogos = [
    { name: "Client A", src: "/client1.png" },
    { name: "Client B", src: "/client2.png" },
    { name: "Client C", src: "/client3.png" },
];

// Updated Leadership Data
const leaderProfile = {
    name: "Mr. Shaik Mastan",
    title: "Managing Director",
    experience: "18+ Years of Global Experience in HVAC & Cold Storage",
    qualifications: [
        "6 Years Gulf Experience (Saudi Arabia, Dubai, Qatar, Africa)",
        "12 Years Indian Experience in HVAC and Cold Storage",
        "Previously worked with Dubai Cool Concept Company",
        "Former experience with Almajal in Saudi Arabia"
    ],
    bio: "Mr. Shaik Mastan brings extensive international expertise to Cold Frost, with 18+ years of specialized experience in HVAC and cold storage solutions across multiple continents. His Gulf experience spans 6 years across Saudi Arabia, Dubai, Qatar, and Africa, followed by 12 years of dedicated service in the Indian market. His global perspective and technical excellence drive Cold Frost's innovative approach to temperature control solutions."
}

const valuesData = [
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "Rigorous quality checks at every stage ensuring reliability and durability"
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "Continuous adoption of cutting-edge technology and sustainable practices"
    },
    {
        icon: Heart,
        title: "Customer First",
        description: "Tailored solutions with exceptional after-sales support and service"
    },
    {
        icon: Target,
        title: "Precision",
        description: "Meticulous attention to detail in design, installation, and maintenance"
    }
];

const Counter: React.FC<{ to: number; duration?: number }> = ({ to, duration = 2000 }) => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const isIntersecting = React.useRef(false);

    React.useEffect(() => {
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
                observer.unobserve(ref.current);
            }
        };
    }, [to, duration]);

    return <span ref={ref}>{count}</span>;
};

// 1. Hero Section
const AboutHero = () => (
    <header className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-teal-900 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            <img 
                src="/installation.jpg" // Placeholder image 
                alt="Industrial view" 
                className="w-full h-full object-cover object-center filter blur-sm"
                onError={(e) => { e.currentTarget.src = '/imagee.jpg'; }}
            />
        </div>
        <div className="absolute inset-0 bg-teal-900/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
            <h1 className="text-5xl font-extrabold text-white mb-4">About Us</h1>
            <p className="text-xl text-teal-100 max-w-3xl">
                Established in 2013, Cold Frost is a leader in delivering high-quality refrigeration and cold chain solutions across India.
            </p>
        </div>
    </header>
);


// 2. Enhanced About Story Section
const AboutStory = () => (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full translate-y-48 -translate-x-48 opacity-70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text Content with enhanced styling */}
                <div className="space-y-8">
                    <div>
                        <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Three Decades of <span className="text-teal-600">Innovation</span> & Trust
                        </h2>
                    </div>
                    
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                            {companyInfo.fullStory.split('. ').slice(0, 2).join('. ') + '.'}
                        </p>
                        
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <p className="text-gray-800 italic text-lg font-medium">
                                "At the heart of our success is a team of seasoned engineers and industry specialists, 
                                whose extensive expertise and unshakable passion propel our endeavours forward."
                            </p>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                            {companyInfo.fullStory.split('. ').slice(2).join('. ') + '.'}
                        </p>
                    </div>
                </div>

                {/* Right Side: Enhanced Image Gallery */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src="/vegetable-cold-storage-03-777x1024.jpg"
                                    alt="Cold Room Installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src="/EPACK-PREFAB-YOUR-TRUSTED-COLD-STORAGE-MANUFACTURER.webp"
                                    alt="Professional Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src="/image.png"
                                    alt="Industrial Equipment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src="/Cold-Room-for-Fish-Supermarkets.jpg"
                                    alt="Cold Storage Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Experience badge */}
                    <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-2xl shadow-2xl">
                        <div className="text-center">
                            <div className="text-3xl font-bold">18+</div>
                            <div className="text-sm">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// 3. Enhanced Leadership Profile
const LeadershipProfile = () => (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <span className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Leadership
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">Meet Our Visionary Leader</h2>
                <p className="text-teal-200 text-lg">Driving excellence with global expertise and local commitment</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Left Side: Enhanced Photo Section */}
                <div className="relative">
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="/leader0.jpeg"
                            alt={leaderProfile.name}
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Experience tags */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                            🌍 6 Years Gulf Experience
                        </span>
                        <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                            🇮🇳 12 Years India Experience
                        </span>
                    </div>
                </div>

                {/* Right Side: Enhanced Text Content */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{leaderProfile.name}</h3>
                        <p className="text-xl text-teal-300 font-semibold mb-3">{leaderProfile.title}</p>
                        <p className="text-teal-200 italic border-l-4 border-teal-400 pl-4 py-1">
                            {leaderProfile.experience}
                        </p>
                    </div>

                    {/* Qualifications with icons */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white">Professional Journey</h4>
                        <ul className="space-y-2">
                            {leaderProfile.qualifications.map((q, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <Award className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                                    <span className="text-teal-100 text-sm">{q}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bio */}
                    <div className="pt-4 border-t border-white/20">
                        <p className="text-teal-100 leading-relaxed">
                            {leaderProfile.bio}
                        </p>
                    </div>

                    {/* Specializations */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center p-3 bg-white/10 rounded-lg">
                            <div className="text-2xl font-bold text-teal-300">18+</div>
                            <div className="text-xs text-teal-200">Total Years Experience</div>
                        </div>
                        <div className="text-center p-3 bg-white/10 rounded-lg">
                            <div className="text-2xl font-bold text-teal-300">4+</div>
                            <div className="text-xs text-teal-200">Countries Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- DATA INTEGRATION for Team Member ---
const ajayRevelli = {
    name: "Ajay Revelli",
    title: "Refrigeration Engineer | MEP Project Manager",
    experienceSummary: "2+ years of dynamic experience across HVAC&R, Sales, Marketing.",
    location: "Hyderabad, Telangana, India",
    skills: [
        "HVAC & R, Production, Design, Construction",
        "MEP Project Management, Estimating, Consulting",
    ],
    motto: "I believe in smart work and trust my confidence level. I keep learning, motivating myself, and embrace new experiences.",
};

// --- CORE TEAM MEMBER SECTION ---

export const TeamMemberProfile: React.FC = () => (
    <section className="py-16 bg-slate-900 text-white relative">
        <div className="absolute inset-0 opacity-10">
            {/* Subtle background texture for contrast against the main Leadership section */}
            <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: `url('/subtle-pattern.png')` }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
                <span className="inline-block bg-teal-600/50 text-white px-4 py-1 rounded-full text-xs font-semibold mb-3">
                    Core Team
                </span>
                <h2 className="text-3xl font-bold text-white/90">Our Key Professionals</h2>
            </div>

            {/* Content Container: Right Image, Left Content */}
            <div className="grid lg:grid-cols-2 gap-10 items-start bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg">
                
                {/* Left Side: Text Content */}
                <div className="space-y-6 order-2 lg:order-1">
                    
                    {/* Basic Info */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1">{ajayRevelli.name}</h3>
                        <p className="text-lg text-teal-300 font-semibold mb-3">{ajayRevelli.title}</p>
                        <p className="text-teal-200 italic border-l-4 border-teal-500 pl-3 py-1 text-sm">
                            <Clock className="w-4 h-4 inline-block mr-1" /> {ajayRevelli.experienceSummary}
                        </p>
                    </div>

                    {/* Bio/Motto (Short & Professional) */}
                    <div className="pt-2 border-t border-white/10">
                        <p className="text-teal-100 leading-relaxed italic">
                            "{ajayRevelli.motto}"
                        </p>
                    </div>

                    {/* Core Competencies/Skills */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white/90 flex items-center space-x-2">
                            <Briefcase className="w-5 h-5 text-teal-400" />
                            <span>Core Competencies</span>
                        </h4>
                        <ul className="text-teal-200 text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {ajayRevelli.skills.map((skill, i) => (
                                <li key={i} className="flex items-center space-x-2 p-2 bg-white/5 rounded-md">
                                    {skill.includes('HVAC') || skill.includes('Design') ? <Wrench className="w-4 h-4 text-teal-400" /> : <Code className="w-4 h-4 text-teal-400" />}
                                    <span>{skill.split('·')[0].trim()}...</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side: Image Section (Less Dominant than Visionary Leader) */}
                <div className="relative order-1 lg:order-2 self-center">
                    <div className="relative h-80 w-full lg:w-4/5 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-teal-500/50 transform hover:scale-[1.02] transition-transform duration-300">
                        <img 
                            src="/team-member.jpeg" // Placeholder for team member photo
                            alt={ajayRevelli.name}
                            className="w-full h-full object-cover object-top"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = '/leader.jpg'; }}
                        />
                        {/* Reduced opacity gradient for less visual weight */}
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
);


// 4. Values Section (New)
const ValuesSection = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Our Values
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">The Principles That Guide Us</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Our commitment to excellence is built on a foundation of core values that drive every project we undertake.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {valuesData.map((value, index) => (
                    <div key={index} className="group text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                            <value.icon className="w-8 h-8 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);



// 5. Enhanced Mission Section
const MissionSection = () => (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Mission
            </span>
            <h2 className="text-4xl font-bold text-teal-900 mb-6">Driving Excellence in Every Project</h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our mission is to provide "Quality Design, Installation & Services" to patrons with our expertise 
                and to fulfill our mission we are committed to adhere below mentioned objectives.
            </p>

            <div className="space-y-6">
                {companyInfo.mission.map((item, index) => (
                    <div key={index} className="flex items-start space-x-6 group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                            <CheckCircle className="w-6 h-6 text-teal-600" />
                        </div>
                        <p className="text-lg text-gray-800 text-left flex-1 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 6. Enhanced Metrics Section
const MetricsSection = () => (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 animate-pulse" style={{
                backgroundImage: `linear-gradient(45deg, transparent 49%, teal 49%, teal 51%, transparent 51%)`,
                backgroundSize: '10px 10px'
            }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                By The Numbers
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-teal-200 text-lg max-w-3xl mx-auto mb-12">
                Cold Frost: At the Forefront of Cold Chain and Refrigeration Services. 
                Consistently delivering large-scale projects with precision and excellence since 2013.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statsData.map((stat, index) => (
                    <div 
                        key={index} 
                        className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-teal-400/50 transition-all duration-500 transform hover:scale-105 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <stat.icon className="w-12 h-12 text-teal-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-5xl font-bold mb-2 text-white">
                            <Counter to={stat.value} />
                            <span className="text-2xl ml-1 text-teal-300">{stat.suffix}</span>
                        </div>
                        <p className="text-teal-100 text-sm uppercase tracking-wider leading-snug font-medium">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// Main Component
const About = () => {
    return (
        <div id="new-about-us-page" className="overflow-hidden">
            <AboutHero />
            <AboutStory />
            <ValuesSection />
            <LeadershipProfile />
            <TeamMemberProfile />
            <MissionSection />
            <MetricsSection />
            
        </div>
    );
};

export default About;