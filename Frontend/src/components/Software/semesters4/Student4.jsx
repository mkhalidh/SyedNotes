import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Student4() {
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
      title: 'Operating System (OS)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=11E27g-r7_4TQ7-cJz3JdeqRPfSny-OMb",
           description: "Operating system Notes (Before Mid)" 
          },
       
            {
              url:"https://drive.google.com/uc?export=download&id=1D5nFa9TNj_jKc5SQ4Ps7NZErUY7oTmB4",
              description: "OS notes finals"
            }
      ],
      isDownload: true,
    },

   
    {
      title: 'Probability & Statistics',
      pdfs: [
        {
          url: "hhttps://drive.google.com/uc?export=download&id=1PTz2OXzOK46SbRb6dH9aZ1_sbAADXJFg",
           description: "Probability & Statistics ( Mid Term Notes)" 
          },
        
          {
            url:"https://drive.google.com/uc?export=download&id=1hzE2M3fUtLyE_WfV596Q_xhdco6hwHeB",
            description: "Probability & Statistics ( Final Term Notes)"
          }
      ],
      isDownload: true,
    },

    {
      title: 'Softwarer Development Architecture',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=11_9tIv8e5vj5Lh2G6zTVf5Qyt4PwwRhv",
           description: "SDA Notes (mids+finals)" 
          },
        
      ],
      isDownload: true,
    },

    {
      title: 'Technical Writing',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1RwKmR_5BPbMgs8i-_zRvJ4w1rlL2_N-I",
          description: "Quiz 1 (Solve)" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1Jk3DgXiCU7c-O7yrGFWmCoXydZtIRODe",
          description: "Quiz 2", // Description for the second PDF
        },
        
      ],
      isDownload: true,
    },
    {
      title: 'Introduction to database system (DBMS)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1U4-zSjSu4hX5p0pTYtTbhvOOc87zdrQo",
          description: "DBMS Notes (Final Term)", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1duHSnFCBVwiyzT-YalXsgtrVClr85wSl",
          description: "DBMS Notes (Mid Term + Final Term)", // Description for the first PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1clV0EHpoPYgnWlZ1FZ8EWj82g_34bM5G",
          description: "Handouts (Chapter 1)", // Description for the second PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1VZe_8IjDIkh676COCHSzZ-NMBcPTdtTP",
          description: "Handouts (Chapter 2)", // Description for the second PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1O27viQwcORhQzeHRhM_FjizYTFirt2zo",
          description: "Handouts (Chapter 4)/EER Lecture", // Description for the second PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=16S4CTqnmbaUYxSBUm41Na8SHoT0Fv0_4",
          description: "Final version ER model", // Description for the second PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1hBpm6dtk1J4F3jE5rQsbD0s1kQztI1fS",
          description: "Initial Concepts design etc (Pictures)", // Description for the second PDF
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

export default Student4;
