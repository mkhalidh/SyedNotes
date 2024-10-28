import React, { useState, useEffect } from "react";
// import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import '../../../Course.css'


function FunctionalEnglish() {
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
        "https://drive.google.com/uc?export=download&id=15T3iF8pGI5pWoXXUWEcZCFXXM_iRzL-u",
        "https://drive.google.com/uc?export=download&id=1nI4OvMAAfY3LK6Sk-mbYt2af_eosyOiS",
        // Add more PDF URLs
      ],
      isDownload: true,
    },
    // Add other sections similarly
  ];

  return (
    <div>
      <Navbar />
      <main className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#692f95] mt-20">Student Material</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-[#692f95] border border-[#692f95] rounded-lg shadow-md p-4 transition-colors duration-300 ${activeSection === section.title ? 'border-[#37b350]' : ''}`}
              onClick={() => setActiveSection(section.title)}
            >
              <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.pdfs.map((pdfUrl, pdfIndex) => (
                  <div
                    key={pdfIndex}
                    className="bg-white p-4 rounded-lg shadow-md hover:bg-[#e0c6f0] transition-colors duration-300"
                  >
                    <a
                      href={pdfUrl}
                      download
                      className="block text-[#37b350] hover:underline"
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

export default FunctionalEnglish;
