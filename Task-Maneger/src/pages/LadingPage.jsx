import React, { useState, useEffect } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Button from '../component/Button';
import Footer from './Footer';
import Navbar from './Navbar';

// Mock data structure to represent what the API would return
const mockApiData = {
    goaPackages: [
        { id: 1, title: 'Goa Monsoon Package', price: 9999, nights: 2, days: 3, imageUrl: 'https://placehold.co/600x400/8099A5/333?text=Monsoon+Tour' },
        { id: 2, title: 'Goa Honeymoon Package', price: 15999, nights: 3, days: 4, imageUrl: 'https://placehold.co/600x400/998097/333?text=Honeymoon+Tour' },
        { id: 3, title: 'Goa Family Package', price: 17499, nights: 3, days: 4, imageUrl: 'https://placehold.co/600x400/809799/333?text=Family+Tour' }
    ],
    popularActivities: [
        { id: 101, title: 'Grande Island with Water Sports Combo', price: 2500, rating: 4.8, saved: 200, isRequest: true, imageUrl: 'https://placehold.co/600x400/409C85/fff?text=Water+Sports' },
        { id: 102, title: 'Snorkeling with Island Tour', price: 1200, rating: 4.5, saved: 200, isRequest: true, imageUrl: 'https://placehold.co/600x400/6A82FB/fff?text=Snorkeling' },
        { id: 103, title: 'Scuba Dive at Grande Island', price: 1200, rating: 4.9, saved: 200, isRequest: true, imageUrl: 'https://placehold.co/600x400/F97316/fff?text=Scuba+Dive' },
        { id: 104, title: 'Dinner Boat Cruise', price: 1500, rating: 4.6, saved: 100, isRequest: false, dates: '21 Oct, 22 Oct, 23 Oct, and more', imageUrl: 'https://placehold.co/600x400/FBBF24/333?text=Dinner+Cruise' },
        { id: 105, title: 'Flyboarding in Goa', price: 2300, rating: 4.4, saved: 200, isRequest: true, imageUrl: 'https://placehold.co/600x400/9CA3AF/fff?text=Flyboarding' },
    ]
};



const HeroSection = () => (
    <section className="h-[80vh] flex items-center justify-center relative bg-cover bg-center" 
             style={{ backgroundImage: "url('image1.png')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white p-4 flex gap-5 flex-col">
            <p className="text-lg font-light tracking-widest uppercase mb-2">Featured Selection</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 uppercase">Activities</h1>
            <p className="text-xl md:text-3xl mb-8">Tour <span className="text-yellow-400 font-bold">18+</span></p>
            <p className="text-xl md:text-3xl mb-8">Starting From <span className="text-yellow-400 font-bold">₹350</span></p>
            <Button className="px-8 py-3 bg-green-500 hover:bg-green-600 transition duration-300 text-white font-semibold rounded-lg shadow-lg uppercase tracking-wider">
                View Collection
            </Button>
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition">
             <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition">
             <ChevronRight className="h-6 w-6 text-white" />
        </button>
    </section>
);

const PackageCard = ({ title, price, nights, days, imageUrl }) => (
    <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 bg-white group">
        <img className="w-full aspect-[16/10] object-cover transition duration-300 group-hover:scale-105" 
             src={imageUrl} alt={title} 
             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Package+Image'; }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 p-4 w-full text-white">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <div className="flex justify-between items-end">
                 <p className="text-sm font-medium">{nights} Nights / {days} Days Packages</p>
                 <p className="text-2xl font-bold text-yellow-400">₹{price.toLocaleString('en-IN')}</p>
            </div>
        </div>
        <div className="absolute top-4 right-4 text-white hover:text-red-500 transition cursor-pointer">
            <Heart size={20} fill="white" />
        </div>
    </div>
);

const ActivityCard = ({ title, price, imageUrl, rating, saved, isRequest, dates }) => (
    <div className="min-w-[300px] flex-shrink-0 relative rounded-xl overflow-hidden border border-gray-100 shadow-lg bg-white group">
        {saved && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                SAVE ₹{saved.toLocaleString('en-IN')}
            </div>
        )}
        <img className="w-full aspect-[4/3] object-cover transition duration-300 group-hover:scale-105" 
             src={imageUrl} alt={title} 
             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Activity+Image'; }} 
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{title}</h3>
            <div className="flex items-center space-x-1 text-yellow-500 mb-2 text-sm">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
                <span className="text-gray-600 ml-1 text-xs">({rating} / 5)</span>
            </div>
            
            {dates && <p className="text-xs text-gray-500 mb-2">{dates}</p>}

            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-2xl font-bold text-gray-800">₹{price.toLocaleString('en-IN')}</span>
                <button className={`text-sm font-medium transition ${isRequest ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800'}`}>
                    {isRequest ? 'Available on Request' : 'Book Now'}
                </button>
            </div>
        </div>
    </div>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">{children}</h2>
);

const Navigation = () => (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-3xl font-bold text-white tracking-widest">
                Dream<span className="text-yellow-400">Adv</span>
            </a>
            {/* Desktop Menu (hidden on mobile) */}
            <nav className="hidden md:flex space-x-6 text-white text-lg font-medium">
                <a href="#" className="hover:text-yellow-400 transition">Packages</a>
                <a href="#" className="hover:text-yellow-400 transition">Activities</a>
                <a href="#" className="hover:text-yellow-400 transition">Contact</a>
            </nav>
            {/* Mobile Menu Icon */}
            <button className="md:hidden p-2 text-white">
                <Menu size={24} />
            </button>
        </div>
    </header>
);

const LadingPage = () => {
    const [packages, setPackages] = useState([]);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mocking the data fetch from MERN API endpoints
    useEffect(() => {
        // In a real MERN app, you would fetch data here:
        // fetch('/api/packages')
        // fetch('/api/activities')
        
        // Simulating API latency and successful fetch
        const fetchData = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500)); 
            setPackages(mockApiData.goaPackages);
            setActivities(mockApiData.popularActivities);
            setLoading(false);
        };
        fetchData();
    }, []);

    const renderLoader = () => (
        <div className="text-center py-10">
            <svg className="animate-spin h-8 w-8 text-blue-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600 mt-2">Loading data from mock API...</p>
        </div>
    );
    
    return (
        <div className="font-sans antialiased flex flex-col">
            <Navbar/>
            <div className='flex flex-col gap-20'>
                <HeroSection />

            <main className='flex flex-col gap-10 justify-center items-center'>
                {/* Goa Tours Packages Section */}
                <section className="container mx-auto px-4 py-16 flex flex-col justify-center items-center gap-10">
                    <SectionTitle className="gap">Goa Tours Packages</SectionTitle>
                    <div className='hr'></div>
                    {loading ? renderLoader() : (
         
                            <div className="grid md:grid-cols-3 gap-8 px-4">
                            {packages.map(pkg => (
                                
                                <PackageCard key={pkg.id} {...pkg} />
                            ))}
                            </div>

                        
                    )}
                </section>

                {/* Popular Tours Section (Activities) */}
                <section className="bg-white py-16 flex flex-col gap-10 justify-center items-center">
                    <SectionTitle>Popular Tours</SectionTitle>
                    <div className='hr'></div>
                    <div className="container mx-auto px-4 relative">
                        {loading ? renderLoader() : (
                            <div className="flex gap-10 space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                                {activities.slice(0, 3).map(activity => (
                                    <div key={activity.id} className="snap-start">
                                        <ActivityCard {...activity} />
                                    </div>
                                ))}
                            </div>
                        )}
                        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition hidden md:block">
                             <ChevronLeft className="h-6 w-6 text-gray-600" />
                        </button>
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition hidden md:block">
                             <ChevronRight className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="container mx-auto px-4 py-16 text-center flex flex-col gap-15 justify-center items-center">
                    <SectionTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">About Dream Adventure</SectionTitle>
                    <div className='hr'></div>
                    <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
                        Dream Adventure is a leading water sports and travel agency in Goa. We arrange various sightseeing and water sports activities in Goa. Dream Adventure has a certified experience in servicing clients with varied requirements such as water sports, rental services, personalized packages, holiday tour packages, flight tickets, LTC travel, Honeymoon packages, Goa tour packages at great prices!
                    </p>
                    <p className="text-xl font-medium mt-6 text-gray-700">
                        Travel with joy and get rejuvenated!
                    </p>
                    <div className="mt-10 overflow-hidden rounded-xl shadow-2xl">
                        <img className="w-[80rem] h-[15rem]" src="image2.png" alt="Promotional Banner" />
                    </div>
                </section>

                {/* Second Popular Tours Section */}
                <section className="bg-gray-50 py-16 flex flex-col gap-10 justify-center items-center">
                    <SectionTitle>Popular Tours</SectionTitle>
                    <div className='hr'></div>
                    <div className="container mx-auto px-4 relative flex gap-10">
                        {loading ? renderLoader() : (
                            <div className="flex gap-10 space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                                {activities.slice(3).map(activity => (
                                    <div key={activity.id} className="snap-start">
                                        <ActivityCard {...activity} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                 {/* Things You Can Do Section */}
                <section className="container mx-auto px-4 py-16 flex flex-col gap-10 justify-center items-center">
                    <SectionTitle>Things you can do with us</SectionTitle>
                    <div className='hr'></div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Mock static cards */}
                        {['Monsoon Packages', 'Scuba Diving', 'Water Sports Activities'].map((title, index) => (
                            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
                                <img className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" 
                                     src={`https://placehold.co/600x400/292524/${index % 2 === 0 ? 'fff' : 'aaa'}?text=${title.replace(' ', '+')}`} alt={title} />
                                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                                    <p className="text-lg font-light">Starting From <span className="text-3xl font-semibold">₹1,200</span></p>
                                    <a href="#" className="mt-2 text-yellow-400 font-semibold hover:text-yellow-300 transition text-sm">VIEW OFFERS &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                 {/* Testimonials & Social Section (Simplified) */}
                <section className="bg-white py-16 flex flex-col gap-10">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
                                Read What Our Customer Say About Us!!!
                            </h2>
                            <a href="#" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">Read More Reviews &rarr;</a>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl max-w-lg mx-auto md:max-w-full">
                            <img src="https://placehold.co/800x600/F5F5F5/333333?text=Mock+Review+Widget" alt="Review Mock" className="w-full h-auto" />
                        </div>
                    </div>
                    
                    <div className="container mx-auto px-4 text-center mt-16 flex flex-col gap-10 justify-center items-center">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
                            See What We've Been Doing
                        </h2>
                        <div className='hr'></div>
                        {/* Mock Social Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100"><img src="https://placehold.co/600x400/81C784/333?text=Post+1" alt="Social Post 1" className="w-full aspect-[4/3] object-cover" /></div>
                            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100"><img src="https://placehold.co/600x400/64B5F6/333?text=Post+2" alt="Social Post 2" className="w-full aspect-[4/3] object-cover" /></div>
                            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100"><img src="https://placehold.co/600x400/FFB74D/333?text=Post+3" alt="Social Post 3" className="w-full aspect-[4/3] object-cover" /></div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
            </div>
            
            
            
            
        </div>
    );
};

export default LadingPage;
