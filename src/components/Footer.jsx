const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-yellow-400">Hammer</span>-Hire
            </h3>
            <p className="text-gray-400">
              Providing quality construction services and equipment in Garissa, Kenya.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/equipment" className="hover:text-yellow-400 transition">Equipment Hire</a></li>
              <li><a href="/contractors" className="hover:text-yellow-400 transition">Contractor Registration</a></li>
              <li><a href="/training" className="hover:text-yellow-400 transition">Training Programs</a></li>
              <li><a href="/license" className="hover:text-yellow-400 transition">License Verification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              <p>Garissa, Kenya</p>
              <p>Email: info@hammerhire.co.ke</p>
              <p>Phone: +254 726981100</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hammer-Hire Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;