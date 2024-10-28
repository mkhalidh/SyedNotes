import React from 'react';

const WhatsappCommunityBtn = () => {
  const communityLink = 'https://chat.whatsapp.com/KxTPeyRh36JIXn13bzx96R';
  
  // Function to detect if the user is on mobile
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleClick = () => {
    const whatsappURL = isMobile()
      ? communityLink  // Directly use the community link for mobile
      : communityLink; // Directly use the community link for desktop

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="btn mt-6 btn-secondary hover:bg-[#1c7138] bg-[#25D366] border-none"
      >
        Join Our WhatsApp Community
      </button>
      {/* <p className="mt-2 text-sm text-gray-600">
        * This will take you directly to our WhatsApp community.
      </p> */}
    </div>
  );
};

export default WhatsappCommunityBtn;
