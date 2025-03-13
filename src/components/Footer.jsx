import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black uppercase tracking-wider mb-6">FitFuture</h3>
            <p className="text-gray-400 mb-6">
              Join the elite. Train with the best. Transform your life with our world-class facilities and expert trainers.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="twitter" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6">Hours</h4>
            <p className="text-gray-400">
              Monday - Friday<br />
              <span className="text-white">6:00 AM - 10:00 PM</span>
            </p>
            <p className="text-gray-400 mt-4">
              Saturday - Sunday<br />
              <span className="text-white">8:00 AM - 8:00 PM</span>
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6">Contact</h4>
            <p className="text-white mt-4">
              +94 (71) 228-1369 - Costa<br />
              +94 (76) 697-8929 - Achintha<br />
              <a 
                href="mailto:himsaradecosta@gmail.com" 
                className="hover:text-red-600 transition duration-300 animated-link"
              >
                himsaradecosta@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitFuture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
  >
    <span className="sr-only">{icon}</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      {icon === 'facebook' && (
        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.1,3.3,9.1,5.47V7.46H5.27v4h3.83V21.5h5.4V11.46h4.33Z" />
      )}
      {icon === 'instagram' && (
        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.69,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.92,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
      )}
      {icon === 'twitter' && (
        <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.93,4.93,0,0,0,2.16-2.72,9.78,9.78,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.49A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.19,9.72,4.86,4.86,0,0,1,.62,9.11v.06A4.92,4.92,0,0,0,4.88,14a5,5,0,0,1-2.21.08,4.92,4.92,0,0,0,4.6,3.42,9.87,9.87,0,0,1-6.1,2.1A10.33,10.33,0,0,1,0,19.52a14,14,0,0,0,7.55,2.21,13.93,13.93,0,0,0,14-13.94c0-.21,0-.42,0-.63A10,10,0,0,0,23.95,4.57Z" />
      )}
    </svg>
  </a>
);

export default Footer;