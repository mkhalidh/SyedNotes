import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Pastpaper2() {
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
      title: ' Past Paper ',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1Ck_aGzqznjgL9B6AkOdCKqobOLYVz_HR",
          description: "Final Term 2022f", // Description for the first PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=17BVLAEndt29VMByJSoH5bWAPeo-uXfGY",
          description: "Mid Term 2023f", // Description for the first PDF
        },
       

      ],
      isDownload: true,
    },
    // Add other sections similarly, including their PDFs and descriptions
  ];

  return (
    <div>
      <Navbar />
      <main className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center m-[80px] text-[#692f95] dark:text-white">Past Paper</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-[#692f95] border border-[#692f95] rounded-lg shadow-md p-4 transition-colors duration-300 ${activeSection === section.title ? 'border-[#37b350]' : ''}`}
              onClick={() => setActiveSection(section.title)}
            >
              <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.pdfs.map((pdf, pdfIndex) => (
                  <div
                    key={pdfIndex}
                    className="bg-white p-4 rounded-lg shadow-md hover:bg-[#e0c6f0] transition-colors duration-300"
                  >
                    <a
                      href={pdf.url}
                      download
                      className="block text-[#37b350] hover:underline hover:font-bold "
                    >
                      {pdf.description} - PDF {pdfIndex + 1} {/* Description with index */}
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

export default Pastpaper2;
