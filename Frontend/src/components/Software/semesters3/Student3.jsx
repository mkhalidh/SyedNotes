import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Student3() {
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
      title: 'Computer Organization',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1B8Q_-1G3w2r-aApZh_VSdZF8jBaDQQQw",
          description: "CO&A_Notes", // Description for the first PDF
        },
      
      ],
      isDownload: true,
    },
   
   
    
    {
      title: 'Software Requirements Engineering (SRE)',
      pdfs: [
        {
          url: "https://drive.google.com/file/d/1XKox11LjehrPy31OtUsdwlHh4DxWj3d4",
           description: "SRE Notes" 
          },
       

      ],
      isDownload: true,
    },

   
    {
      title: 'Data Structure and Algorithm (DSA - Theory)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1SX9pulItXBdcxmqSYiabbGrqG_FMjA3D",
           description: "Data Strutures and Algorithm Notes (Mid + Final)" 
          },
        
          
      ],
      isDownload: true,
    },

    {
      title: 'Communication Skills',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1NKmlYseJ-UuoBlQLWT5-xEUOFxmWLJzq",
           description: "2nd Meeting Minutes" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=13vLZVXNYb7BXFrX8Ig3KMC_CYdArwCmi",
           description: "Business Meetings" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=16EEk1z7tRL4MlVuMEurafXC0ArFQSYLG",
          description: "Communication Skills Notes pdf post mid", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1kPN9p0LQ7qEtRX8c72SsblsJqJCmgISx",
          description: "CV & Resume- Differences & Types", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=14YVtZABvEJzIn-FXk8i5jBiee8eDQjPV",
          description: "Difference of circular & notice", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=12hSJHLXYAqm-Yq0szKhw_6ud8PYbvQPl",
           description: "Notes" 
          },
          

      ],
      isDownload: true,
    },

    {
      title: 'Discrete Mathematics (DM)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1enNwmsDl259ih25_GdSJO3qxcXzvJFl-",
          description: "Discrete Mathematics(DM) Notes Part-l" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1T7MpvQcYfyfUH4o_qtUrwxJk0r9q3yZx",
          description: "Discrete Mathematics(DM) Notes Part-ll", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1CnSQaytQDjyOEgs68K5xBJQ3paZVlts4",
          description: "Discrete Mathematics Notes Part-lll", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1yAHyugdq5n4qLL-EHNssBlaqTbBpfmGR",
          description: "Discrete Mathematics 1 (DM-1) Notes Part l" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1YGqv4WoH1Ba1ft7l7mqdL-vm5sHlP0G2",
          description: "Discrete Mathematics 1 (DM-1) Notes Part ll", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1nKvTzIY_ozrVN3svYQKPcunUuJDI-Jsb",
          description: "Discrete Mathematics 2 (DM-2) Notes Part l", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1atA3KN8EnyuqiDaDjjpvTZ_oDAeZRFqn",
          description: "Discrete Mathematics 2 (DM-2) Notes Part ll" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1kKacI3AXI1r1mD3pNRcAp1KFPvdirbY2",
          description: "Discrete Mathematics 3 (DM-3) Notes Part l", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1GRcB0sMrI3wSTmGNbzTTdYfHm6CcUO0l",
          description: "Discrete Mathematics 4 (DM-4) Notes Part l", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1QfZtDbDjwP4FSzX3DoADwpQWBCXRLP3m",
          description: "Discrete Mathematics 4 (DM-4) Notes Part ll" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1xaDRtqJ23j2J3-ROQbBBcGbWO26sNhpj",
          description: "Discrete Mathematics 5 (DM-5) Notes Part l", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1EI1NdLM8dc-DKG3KldZiM6pOTeoVVpRu",
          description: "Discrete Mathematics 5 (DM-5) Notes Part ll", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1daNkBtkojWPUzqrYja4od_t9GpW8FuVh",
          description: "Discrete Mathematics 6 (DM-6) Notes Part l" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1otKsRgtaTof5SZECAn6mtskwh94jRbAu",
          description: "Discrete Mathematics 6 (DM-6) Notes Part ll", // Description for the second PDF
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
        <h1 className="text-3xl font-bold text-center m-[80px] text-[#692f95] dark:text-white">Student Material</h1>
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

export default Student3;
