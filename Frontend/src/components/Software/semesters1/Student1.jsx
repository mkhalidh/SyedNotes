import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Student1() {
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
      title: 'Foundational Maths',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1QRVJJEwlz1ZfNeg-G338okEzsUNRDwxf",
          description: "F.MATHEMATICS", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1mM-3apssQ_YY3T5FHyFxlPwE6gGuG2F3",
          description: "Foundation Maths copy work", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1adV5d7kIBGIjFFOPCs9j5SCS1nGjW4Lo",
          description: "FOUNDATION MATHS", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1adV5d7kIBGIjFFOPCs9j5SCS1nGjW4Lo",
          description: "FOUNDATION MATHS", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1rdhQuVfLPkdfG-8h43clOiFHchNbxc8R",
          description: "Antiderivatives Solve Questions", // Description for the second PDF
        },
        
      ],
      isDownload: true,
    },
    {
      title: 'PF - Theory',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1OX3IQHBPUQtq0iUoYAidPSlekxUyIhwW",
          description: "Small(Key Notes)/Lectures<1 - 8>", // Description for the first PDF
        },
      
        
        {
          url: " https://drive.google.com/uc?export=download&id=1reYXh18qOR5VI3VEOOlGV15FFpmS8Dgj",
          description: "All Quizes #2 ", // Description for the second PDF
        }
      ],
      isDownload: true,
    },
    {
      title: 'Programming Fundamental (LABS)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1qL74QAx5pvDTGCT5RJpiUrdbW25ku2tR",
          description: "Solved Labs 1-14  (PF)", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1zmFXaMxyfz2LS-AJFLV5nymuvWstPzfr",
          description: "Solved Labs 1-14  (PF) (2)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1wRiKOj0m-lKugCuZul6Y_uVrOxVkM4UG",
          description: "Selected Project For Exhibition(8)", // Description for the second PDF
        },
      ],
      isDownload: true,
    },
    {
      title: 'Islamic Study',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1nPp8h6Kt2Q97XlaLDVgK073LaQwRYQn-",
           description: "Things Muslims Must know (Video /Not PDF)" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1j7-YrSrgzhwWbEIm6qmSkz_GOscDNdke",
          description: "Respect-Of-Holy-Prophet/ShortArticles(Surah-e-Furqan 63/67)/ LIFE OF THE HOLY PROPHET (S.W.A)/(Reasons/CharterOfMedina)/ FourSources Of Islamic JURISPRUDENCE)", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=120yBASjFAOY55UxAyShPCmMOkvAqZ6Yh",
          description: "LIFE OF THE HOLY PROPHET/CHARTER OF MEDINA/TREATY OF AL HUDAYBIA/LAST SERMON OF THE HOLY PROPHET", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1KCkHzAyjIGJf2SiPhuK6MKQk7PxFz40e",
          description: "Islamiat Assignment Presentation - EXPANSION OF THE UNIVERSE. SURAH: ADHDHARIYAT. AYAT (51:47)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1ABh8wfRl8x5yFp-13w4Ni6PP5Hfy2NEx",
           description: "All Islamiat - Hadith & Quranic Verses (Proper Notes)" 
          },
          {
            url: "https://drive.google.com/uc?export=download&id=1WMxUA5IrP7KD_gPcq6e8HOwo5dXGz8LN",
             description: "Islamiat Important - (Final)" 
            },

      ],
      isDownload: true,
    },

   
    {
      title: 'Introduction To Computing Lab (ITC - Lab)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1U5oy03MN36LRKYxAF1e6XUk2_I4vtVts",
           description: "Worksheet Movie.xlsx (excelsheet)" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1km9ASpc0HDZjjQShCG0cySHB-O1jxmn_",
           description: "Worksheet For CricketPlayers.xlsx (excelsheet)" 
          },
        
        {
          url: "https://drive.google.com/uc?export=download&id=1rBS-btWRpLfnyBXFkv5vzN1amDGsgLUM",
          description: "Super Store Work Sheet.xlsx (excelsheet)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=10zHoRn4wFuvZi6HQzcCEqOw7zgRuyvEv",
          description: "Sales Data Report.xlsx (excelsheet)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1apR6vYGeXFDr4PjM_6AoFAnOFolTRyUb",
           description: "Movie Worksheet.xlsx (excelsheet)" 
          },
          {
            url: "https://drive.google.com/uc?export=download&id=197gc_JPL3gXdIfbsh3EyCK6BdZ_n2iSD",
             description: "Modern Day Cricket Players.xlsx (excelsheet)" 
            },

            {
              url:"https://drive.google.com/uc?export=download&id=14wwMCg7wPY2gRCUtCETezhqorc3liox5",

                description: "Lab#1.pdf" 
              },
              
            {
              url:"https://drive.google.com/uc?export=download&id=1o-6xnVNxOHVm9kP74BSXiq99ebjQ187C",

                description: "Lab#12.ppt (powerpoint)" 
              },
              {
                url:"https://drive.google.com/uc?export=download&id=1mMWwxFx92h84-TX8YzwZnWxEfy1Nje3Y",
  
                  description: "Lab#11.ppt (powerpoint)" 
                },
                {
                  url:"https://drive.google.com/uc?export=download&id=1qBDyy3LVUngIRVFqPNlsWn_XQMJoZjhW",
    
                    description: "Lab#10.ppt (powerpoint)" 
                  },
                  {
                    url:"https://drive.google.com/uc?export=download&id=1hyi3xUlO0S69dKpc0VJ1ntb9k-7Lr6Du",
      
                      description: "Lab#09.ppt (powerpoint)" 
                    },
                    {
                      url:"https://drive.google.com/uc?export=download&id=1FxPam5NkI8wHaCb5oOksgil1YoPLEXfo",
        
                        description: "Garden Supermarket sheet.xlsx (excelsheet)" 
                      },
                      {
                        url:"https://drive.google.com/uc?export=download&id=13vurK16X3OwuLgne0MPvT6vbMRhbfTZp",
          
                          description: "Cricket Players Worksheet.xlsx (excelsheet)" 
                        },
                        {
                          url:"https://drive.google.com/uc?export=download&id=1icpPTYuwKBujSi9dWuVK8JvYSEkUky1C",
            
                            description: "CINEMA BUSINESS WORKSHEET.xlsx (excelsheet)" 
                          },
                          
            
          
      ],
      isDownload: true,
    },


    {
      title: 'Introduction To Computing (Theory)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1laqopiIGoZAiC84KkhDTfPv2W4HbG6cd",
           description: "Assignment 1" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1qHF6-wc7xkzoQSxLiYJEg_jilBurTCDV",
           description: "ITC FINAL TERM NOTES.docx (wordsheet)" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1RBBzuA2lq5Cq4sTq5HYKQyvE37JNRQ5B",
          description: "ITC Notes", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=15xqdkS-iB2F6OqobkP_ME0cghCW5AUQl",
          description: "ITC_QUIZES_Solved.docx (All sections quizes)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1QwrOP7N-kfjgIA9h29TCbMIxfoJcWO7i",
          description: "itc-23-sec-d-test-1.pdf", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1I3UmDvvt4Xqn1EKCnoZ3NxhBD1-4ieJ7",
           description: "itc-23-sec-d-test-2.pdf" 
          },
          {
            url:"https://drive.google.com/uc?export=download&id=1rXb44IqApE2ZRoWQBNNW-AFRBgXaKwbw",
            description:"itc-23-sec-e-test-1.pdf"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=16vAYIDrsWITbtokIWGJoR-O7bvQR4EGB",
            description:"itc-23-sec-e-test-2.pdf"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=15FCmKSQMAlnDBn2RD6MY6dO1vrQfOyet",
            description:"itc-23-sec-f-test-1.pdf"
          },{
            url:"https://drive.google.com/uc?export=download&id=1exCoIm0LMLp45mhHFO3xKInYaN2Y8VHO",
            description:"itc-23-sec-f-test-2.pdf"
          },
            

      ],
      isDownload: true,
    },

    {
      title: 'Linear Algebra',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1CTu3TSP3k4BTAGfNheIG9qrePI4df35l",
           description: "Formula Sheet L.A" 
          },
          {
            url: "https://drive.google.com/uc?export=download&id=1LCnw7RqVwX3i6XAKM_zvmahyq3V8wPXq",
             description: "10 Axiom" 
            },
        {
          url: "https://drive.google.com/uc?export=download&id=1vVZE83ZpRUiipV88ELH8WU6BxzfUnDHn",
           description: "Linear(solved)" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1wE3MGHiYUOWHsdMz8UL8t61WEV_ycNxh",
          description: "linear algebra (Mid - Final)", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1S3zWvACz_reFsvvfh-KcfjQ5PI8_OxSr",
          description: "Vector Space - Linear Combination", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1NUn80sqrgyyuXe6q_vbIOhNcLS-qf7T6",
          description: "Eigen values & Eigen vectors", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1DH-cMIQK8pDV1-NvNW4oyXsuO1d13C6E",
           description: "Spanning Vectors" 
          },
         
            

      ],
      isDownload: true,
    },

    {
      title: 'Functional English',
      pdfs: [
       {
        url:"https://drive.google.com/uc?export=download&id=1mOQfpS_MmS-P-K5o84MMSgbu1CZ8ESQ7",
        description:"English After Mid.zip"
       },
       {
        url:"https://drive.google.com/uc?export=download&id=1zeA_fY0D2kPyCvoF2sP9SkWfUxoOOHNt",
        description:"(presentation slides)   Changing-Industrialization-in-Pakistan-Building-a-Stable-and-Powerful-Economy2 Presentation.pptx"
       },
      {
        url:"https://drive.google.com/uc?export=download&id=1cEeX6uVQBKg04DaKfnlckf4bc4v1P-ue",
        description:"Quizes Video"
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

export default Student1;
