const Footer = () => {
    return (
      <footer className="border-t border-white/10 bg-gray-900/50 backdrop-blur-lg w-full">
        <div className="content-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and CTA Section */}
            <div className="space-y-4">
              <h2 className="text-gradient">QUAAV</h2>
              <button className="btn-primary">Signup in 5 Seconds</button>
            </div>
  
            {/* First Link Column */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <a href="/faq" className="text-white/60 hover:text-white">FAQ</a>
                <a href="/pricing" className="text-white/60 hover:text-white">Pricing</a>
                <a href="/earn" className="text-white/60 hover:text-white">Earn with me</a>
              </div>
            </div>
  
            {/* Second Link Column */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <a href="/help" className="text-white/60 hover:text-white">Get Help Fast</a>
                <a href="/privacy" className="text-white/60 hover:text-white">Privacy Policy</a>
                <a href="/terms" className="text-white/60 hover:text-white">Terms of Service</a>
              </div>
            </div>
  
            {/* Contact and Payment Icons */}
            <div className="space-y-4">
              <div className="text-white/60">Contact</div>
              <a href="mailto:info@quaav.com" className="text-white hover:text-indigo-400">
                info@quaav.com
              </a>
              
              {/* Payment Icons */}
              {/* Payment Icons */}
{/* Payment Icons */}
<div className="flex gap-4 mt-6">
 <div className="h-8 w-12 bg-gray-900/50 border border-white/20 rounded-md flex items-center justify-center text-xs text-white/60">VISA</div>
 <div className="h-8 w-12 bg-gray-900/50 border border-white/20 rounded-md flex items-center justify-center text-xs text-white/60">MC</div>
 <div className="h-8 w-12 bg-gray-900/50 border border-white/20 rounded-md flex items-center justify-center text-xs text-white/60">AMEX</div>
</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;