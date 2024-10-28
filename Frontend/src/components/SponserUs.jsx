import React from "react";
import logo from  "../../public/easypaisa.png"
function SponsorUs() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-12">
      {/* Background Images */}
      <div className="absolute inset-0 flex justify-between -z-10">
        <img
          src="https://via.placeholder.com/400x600.png?text=Your+Image+1"
          alt="Background Image 1"
          className="absolute top-0 left-0 w-1/4 h-full object-cover opacity-30"
        />
        <img
          src="https://via.placeholder.com/400x600.png?text=Your+Image+2"
          alt="Background Image 2"
          className="absolute top-0 right-0 w-1/4 h-full object-cover opacity-30"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-screen-md mx-auto px-6 py-8 bg-white shadow-2xl rounded-lg text-center">
        {/* EasyPaisa Logo */}
        <img
          src={logo}
          alt="EasyPaisa"
          className="mx-auto w-32 mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6 text-[#037d43]">Sponsor Us</h1>

        {/* Introduction Text */}
        <p className="text-base mb-6">
          Your support helps us continue our mission. Contribute via EasyPaisa for a quick and secure donation.
        </p>

        {/* How to Sponsor */}
        <div className="text-left mx-auto max-w-sm mb-6">
          <p className="text-base mb-4">How to sponsor us:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Open EasyPaisa app.</li>
            <li>Select "Send Money" or "Donate".</li>
            <li>Enter our account details:</li>
            <li><strong>Account Name:</strong> Shahid Hussain</li>
            <li><strong>Account Number:</strong> 03332256867</li>
            <li>Enter amount and complete the transaction.</li>
            <li><strong>Note:</strong> Include your name and "Sponsorship".</li>
          </ol>
        </div>

        {/* Thank You Message */}
        <p className="text-base mb-6">
          Thank you for your generosity. Your support is invaluable to us.
        </p>

        {/* Return Button */}
        <a
          href="/"
          className="inline-block bg-[#037d43] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#026a3b] transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </section>
  );
}

export default SponsorUs;
