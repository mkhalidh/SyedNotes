import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Student2() {
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
      title: 'Applied Physics',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1lQyFKcKOopxuGFyHhgsnTmBWpQj9HbiK",
          description: "derivation batch 2023f section F", // Description for the first PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1lLBjwMojX273aXNTyzPgTZ0nwxiW1aRA",
          description: "Magnetic Materials", // Description for the first PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1SyCapU-djRQ63vbkK9bug7JtLO_neyYu",
          description: "Physics All 3 Assignment", 
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1ujo72MwUqSl3ZT4-hpvipAGAPBY3QRhY",
          description: "2nd Semester Applied Physics Complete", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1LPRaIssmEDJ9q34Hs33MTNmmipvb8ihl",
          description: "applied Physics numericals batch 2023f section F", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1tPaZFu7My0K4dCvIfenVhUSV8bdM37lV",
          description: "Student Notes(Physics)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1DdfdABJ_Zi7OKquHolqF5nDt7Sri556x",
          description: "Numericals_SHM", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1wMRCMTt6Mcurwz-1zODsdt48rQ7am__X",
          description: "surface tension numerical", // Description for the second PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=162fDjUQXrG53EzXt4Ov8yzcQ1H3HVUIg",
          desscription: "Physics numerical final"
        },
        {
          url:"https://drive.google.com/uc?export=download&id=12UIvfTJm_P9wPZ3ti79jbQ0bh7saMsMq",
          description: "Topics For Mids", // Description for the second PDF
        },
        {
          url:"https://drive.google.com/uc?export=download&id=1RZ1380dMej5CVUpAPOVhrzVh6KCi7z61",
          description: "Topics For Final", // Description for the second PDF
        }
      ],
      isDownload: true,
    },
   
    {
      title: 'Object Oriented Programming Language (Theory)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=11dcB29WbjwLlzoTTCLWFZLsInaAJidvm",
           description: "Java_Notes-2020F (Complete Notes)" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1CYf_Jjwp0wC_5iwKdh3I_bdcAvtFU0Q3",
           description: "LearnJava - Book1" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=14Od29_42jJgOFob2vyQ2xlW7WtBtKfNO",
          description: "Java Text - Liang - Book2", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1YgNqwOmTd12j4tXv-Ckhn8Aom6JR3fyE",
          description: "[G] java-wrox-Beginning Java 5 0 2005  updated - Book3", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1OM_HEh19iyq-sbGKFvhr6Pxp0pjOxru9",
          description: "LectureNotes_Ch4 (Loops)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1QA7MNAgaugoGa_7sihye4FjnTR5XkxQz",
           description: "LectureNotes_Ch10 - Inheritance & Polymorphism" 
          },
          

      ],
      isDownload: true,
    },
    
    {
      title: 'Introduction to Software Engineering',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1YPRmnrdarvDjdYzd87ybp32ul7c3iIaH",
           description: "ITSE NUMERICALS(All)" 
          },
       

      ],
      isDownload: true,
    },

   
    {
      title: 'Introduction To Software Engineering (ITSE - Lab)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1cEFO31_ealqM6ICjY4_8dCED3pAVRx26",
           description: "All labs (Solved)" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1-X-CzQPfZiIlB6ziQTZF7KHsFRlqSkxf",
           description: "ITSE LAB INDEX.xls (excelsheet)" 
          },
        
        {
          url: "https://drive.google.com/uc?export=download&id=1GXFkMBmiyoUwCko916lJahkIZK8djrsY",
          description: "itse rubrics", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1mIvaPOCvY1b_7YoKnJm_56Wq8S3kbJrR",
          description: "title page", // Description for the second PDF
        },
        
            
          
      ],
      isDownload: true,
    },


    {
      title: 'Fondational Maths(2)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1FLH2Nn53_Y46cWqL8OYXG61FaK5Nuagq",
          description: "Complex Numbers" // Description for the first PDF
        },
        {
          url: "https://drive.google.com/file/d/1A5CXE_AxD_Gb68HemAp-JOZDPJnmfTiv/view?usp=sharing",
          description: "Foudational Maths 2nd Semester ''before'' Mid Term", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1jeRzwgaNOf_vqqjQj6uX51zxNPlqButJ",
          description: "Foudational Maths 2nd-Semester ''after'' Mid Term", // Description for the second PDF
        },
      ],
      isDownload: true,
    },
    {
      title: 'Object Oriented Programming Language (Lab)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=12A9oaxBU3yOw1Pfk9KakkjFtA7d4wBQb",
           description: "Lab 1.14 of OOP(solution set)" 
          },
          {
            url: "https://drive.google.com/uc?export=download&id=1PXc8rzAE9SHvNoZGZ5JLNoS_eNSb6N_e",
             description: "JavaLabs(Solved).rar" 
            },
        {
          url: "https://drive.google.com/uc?export=download&id=1qCYrcgfWyrfYctj3AhZYh_X_lcmlZMX7",
           description: "oops project list " 
          },
      
      ],
      isDownload: true,
    },
    {
      title: 'Calculas and analytical Geometry',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=15x-H7p0DDcldb5loqB043cUmSsnLh-Fu",
          description: "(Assignment 2) calculus exercise 12.2 to 12.4", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1-s8vNMI4MCLguC-Ee6M3a-viFWPc6UhJ",
          description: "(Assignment 3) exercise 4.4 calculus", // Description for the first PDF
        },

        {
          url: "https://drive.google.com/uc?export=download&id=1FiLfkh3D6zOs5CNzxQ8FmyR4AWsxqMCO",
          description: "EXERCISE 1.1 CALCULUS SECTION F Batch 2023", // Description for the first PDF
        },
      
        
        {
          url: "https://drive.google.com/uc?export=download&id=1Zuykub3q-ZZwkoKdj2lGjEeF2UmZSoop",
          description: "EXERCISE 1.2 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },

        {
          url: "https://drive.google.com/uc?export=download&id=1h-TNJ3mkJzlDK9SlwqBlK0Lf6IsdgABj",
          description: "exercise 2.2 calculus section F Batch 2023F", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1jCrkeOoIVVvX8fWTm2Xewymp9hkdXJko",
          description: "EXERCISE 2.4 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1LIfJHz16wbZ4AhhpqXPYJ-n8neP5vehQ",
          description: "EXERCISE 2.5 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1tKGOcQiAWk_m05SObm9breLzi-B22BhJ",
          description: "EXERCISE 3.2 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1fl7d6GL6xMBFvskUf6joVMSEYK8mDGms",
          description: "EXERCISE 3.3 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=169xF6eSJKb7_3l0xc758IRbpE3Br8OW-",
          description: "EXERCISE 3.4 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1mAEXwLSoVVNJeWQR3gU_A8JI-17vBiQe",
          description: "EXERCISE 3.5 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1jjm2omfVMfsTiu2WUkZQRn-V4-6pJ5WY",
          description: "EXERCISE 3.6 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1mXX60wNJyNfpRJaoQL24tmowftKP9OjI",
          description: "EXERCISE 3.7 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1z78zyGr4MhZ1r9sftiuIlpufiC-tK2EL",
          description: "EXERCISE 3.8 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=18yoH2pnSjkAfNwBqGbFtpMaxoVYcZoFV",
          description: "EXERCISE 10.8 CALCULUS SECTION F BATCH 2023 ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1-s8vNMI4MCLguC-Ee6M3a-viFWPc6UhJ",
          description: "After Mid (Local Minima/Maxima - Integration(all)) ", // Description for the second PDF
        }

      ],
      isDownload: true,
    },
    {
      title: 'Pakistan Studies and Aligarh Movement',
      pdfs: [
       {
        url:"https://drive.google.com/uc?export=download&id=1oyLzEdkB6HXvA8cglE0tvHwYPXD4D8Qz",
        description:"History Of Pakistan"
       },
       {
        url:"https://drive.google.com/uc?export=download&id=1jmSppH7QD-IzTvguZnK64_wErYx-nqk1",
        description:"(POST MID NOTES OF PAK STUDIES"
       },
      {
        url:"https://drive.google.com/uc?export=download&id=1MCXGLS8SBr-0tgYw1AWUTzC7tLcPqQ3w",
        description:"PST NOTES FINAL TERM(Recommended)"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1zsDevjZUWiQtOa17okMRLIaMKcerPcaO",
        description:"Quizes(2) Video"
      }

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

export default Student2;
