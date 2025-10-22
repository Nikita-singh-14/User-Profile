import React from 'react';
import { Facebook, Twitter, Youtube, Globe } from 'lucide-react';

// Define the custom colors used in the original design
const customColors = {
  main: '#6aa84f', // Main body of the footer
  dark: '#5c8b42', // Bottom copyright bar
};

// Data structure for the footer links (easily replaced by Mongoose/MongoDB data)
const footerData = {
  company: {
    title: 'Company Info',
    links: ['About Us', 'Contact Us', 'Cancellation Policy', 'Privacy Policy'],
  },
  tours: {
    title: 'Our Tours',
    links: ['South Goa bus tour', 'Scuba dive with water sports', 'North Goa City Tour', 'Adventure Boat Trip'],
  },
  office: {
    title: 'Goa Office',
    addressLines: [
      '157, Dream Adventure opp',
      'Candolim Panchayat, Candolim',
      'Beach Road, Goa - 403516',
    ],
  },
  support: {
    title: 'Support Info',
    availability: 'We are available 24*7.',
    phone1: '+91 9657052224',
    email: 'info@dreamadventure.in',
    phone2: '+919657052221',
  },
};

const SocialIcon = ({ Icon, label }) => (
  <a 
    href="#" 
    aria-label={label} 
    className="w-10 h-10 flex items-center justify-center bg-white text-xl rounded-full transition duration-300 shadow-md"
    style={{ color: customColors.main }}
  >
    <Icon size={20} />
  </a>
);


const Footer = () => {
  const { company, tours, office, support } = footerData;

  return (
    <footer className=" pad flex flex-col justify-center items-center font-sans shadow-2xl" style={{ backgroundColor: customColors.main }}>
      <div className="container mx-auto px-4 py-12 md:px-8 text-white flex flex-col gap-10">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4 flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">{company.title}</h3>
            <ul className="space-y-2 text-sm flex flex-col gap-4">
              {company.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Tours */}
          <div className="space-y-4 flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">{tours.title}</h3>
            <ul className="space-y-2 text-sm flex flex-col gap-4">
              {tours.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Goa Office */}
          <div className="space-y-4 flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">{office.title}</h3>
            <address className="text-sm not-italic space-y-1 flex flex-col gap-4">
              {office.addressLines.map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </address>
          </div>

          {/* Column 4: Support Info */}
          <div className="space-y-4 flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">{support.title}</h3>
            <p className="text-sm flex flex-col gap-4">
              <span className="block mb-2">{support.availability}</span>
              <span className="block font-medium">{support.phone1}</span>
              <a href={`mailto:${support.email}`} className="block hover:underline">{support.email}</a>
              <span className="block">{support.phone2}</span>
            </p>
          </div>

        </div>

       
        <div className="mt-10 pt-6 flex justify-center items-center w-full" >
          <div className="flex space-x-4 gap-8">
            <SocialIcon Icon={Facebook} label="Facebook" />
            <SocialIcon Icon={Twitter} label="Twitter" />
            <SocialIcon Icon={Globe} label="TripAdvisor" /> 
            <SocialIcon Icon={Youtube} label="YouTube" />
          </div>
        </div>
      </div>


       <div className='w-full h-[1px] bg-white'></div>

     


      <div className="py-4 justify-center items-center flex  h-[5rem] text-center text-lg text-white" >
        
        <p className="px-4">
          Online booking system by <span className="font-bold">Vacation Labs</span> | © 2025 <span className="font-bold">Dream Adventure</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;