import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Teacher4() {
  // Initialize state with localStorage data or default value
  const [activeSection, setActiveSection] = useState(() => {
    const savedSection = sessionStorage.getItem('activeSection');
    return savedSection ? JSON.parse(savedSection) : null;
  });

  useEffect(() => {
    // Save active section to sessionStorage when it changes
    if (activeSection !== null) {
      sessionStorage.setItem('activeSection', JSON.stringify(activeSection));
    }
  }, [activeSection]);

  const sections = [
    {
      title: 'ITC',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-1&export=download",
        "https://drive.google.com/uc?id=your-file-id-2&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    {
      title: 'PF',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-3&export=download",
        "https://drive.google.com/uc?id=your-file-id-4&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    {
      title: 'LA',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-5&export=download",
        "https://drive.google.com/uc?id=your-file-id-6&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    {
      title: 'FE',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-7&export=download",
        "https://drive.google.com/uc?id=your-file-id-8&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    {
      title: 'ISL',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-9&export=download",
        "https://drive.google.com/uc?id=your-file-id-10&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    {
      title: 'ITC Lab',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-11&export=download",
        "https://drive.google.com/uc?id=your-file-id-12&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    {
      title: 'PF Lab',
      pdfs: [
        "https://drive.google.com/uc?id=your-file-id-13&export=download",
        "https://drive.google.com/uc?id=your-file-id-14&export=download",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    // Add other sections similarly
  ];

  return (
    <div>
      <Navbar />
      <main className="px-4 py-8 max-w-7xl mx-auto mt-[40px]">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#692f95]">Teacher's Material</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-[#692f95] border border-[#692f95] rounded-lg shadow-md p-4 hover:border-[#37b350] transition-colors duration-300 ${activeSection === section.title ? 'bg-gray-100' : ''}`}
              onClick={() => setActiveSection(section.title)}
            >
              <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.pdfs.map((pdfUrl, pdfIndex) => (
                  <div
                    key={pdfIndex}
                    className="bg-gray-100 p-4 rounded-lg shadow-md  hover:bg-[#e0c6f0] transition-colors duration-300"
                  >
                    <a
                      href={pdfUrl}
                      download
                      className="block text-blue-600 hover:underline"
                    >
                      Download PDF {pdfIndex + 1}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Teacher4;
