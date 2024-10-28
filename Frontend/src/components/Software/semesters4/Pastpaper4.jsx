import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function PastPaper4() {
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
      title: 'Communications Skills',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1tNcyhtPRLQTZFgy2VXvXFua-0wAjY2rb",
          description: "2021 - Past Paper", // Description for the first PDF
        },
       
      ],
      isDownload: true,
    },
   
    


    {
      title: 'Computer Organization and Architecture',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1D4vvw6B315BcU8f8TkWhhYRzWbfHghQa",
          description: "SE-212T Mid Term Paper-Solution Fall 2022 (Solved)" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1YpJjIhUQmrJK6C1pEfREmt2jJ8XcEsBn",
          description: "SE-212T Mid Term Paper Fall 2022 (Unsolved)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1PDDv0V8S8vzwUw0RKlRAy-b0lkCUXwv_",
          description: "COA Final Past Paper Fall 2021 SE (Unsolved)", // Description for the second PDF
        },

        {
          url: "https://drive.google.com/uc?export=download&id=166BxoK_MhgWRpQj-lvOrERwgv8hyT86a",
          description: "COA Final Past Paper Fall 2021 SE (Solved)", // Description for the second PDF
        },
      ],
      isDownload: true,
    },
    {
      title: 'Data Structure and algorithm',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1Ojx9mO8QXu7WNruJ6uJd-IvUeVX6Iyuk",
           description: "Data Strutures and Algorithm Past Paper (Mid + Final)" 
          },
          {
            url: "https://drive.google.com/uc?export=download&id=1RHv0ephgPwhjJm4tahyV8YtTYZ98J0p1",
             description: "CS212T-Data Structures and Algorithms_2022F" 
            },
       
      
      ],
      isDownload: true,
    },
    {
      title: 'Discrete Mathematics',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1GPzyqJ4vgWt7rleFocx5yYtxvma1Hccs",
          description: "Discrete Mathematics Mid Term Paper Solution", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=14xUOizqJ3PCyXVwWYLE3HeyYHMH-FUtz",
          description: "Discrete Mathematics Final Term Past Paper", // Description for the first PDF
        },

       
      ],
      isDownload: true,
    },
    {
      title: 'Software Requirements Engineering',
      pdfs: [
       {
        url:"https://drive.google.com/uc?export=download&id=1vqY3_kK-UkTKvZM1G698mxRTEkfOVcEr",
        description:"SRE Past Paper Solve Mid Term Fall 2021"
       },
       {
        url:"https://drive.google.com/uc?export=download&id=1w4s5yoaNfbvCSAHqMnH0xrmyYxPa2WqR",
        description:"SRE SE Past Paper Final Exam Fall 2021"
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
        <h1 className="text-3xl font-bold text-center m-[80px] text-[#692f95] dark:text-white">Past Papers</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}Term
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

export default PastPaper4;
