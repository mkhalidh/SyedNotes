import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Teacher1() {
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
      title: 'Linear Algebra',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1R07q5WWUg6NLBkcwEeIgeAZnfzEn4h45",
          description: "(provided Book/Outside From Book) Questions ", // Description for the first PDF
        },
      
        {
          url: "https://drive.google.com/uc?export=download&id=19EovcL0WEW_vC6PZWmYbfDrca60mYcUd",
           description: "CIS LA ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1CaIzaAs6wAMEWl1DVnwQIKFc4F1GANeT",
           description: "All Sections (all)Quizes (Questions & Answers) ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1fC6-jrTU5EuNHe9G0hXG4jk9_uDmcNuL",
           description: "Assignment 1  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1jK-rcyuftgrfXvaiaVMjw5FTeX9AGegm",
           description: "Assignment 2", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=14mu_yYgwwHmZdsUn91xrMEWjoCGwr1gv",
           description: "Assignment 3", // Description for the second PDF
        },

      ],
      isDownload: true,
    },
    {
      title: 'Programming Fundamental (LABS)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1NNbuzr69rWTq9DyRPzNTbu8vlTzT291l",
          description: "All Lab manual (1 - 14)", // Description for the first PDF
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


    {
      title: 'Introduction To Computing (Theory)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1v-Nc0ex8IyCGU6phJWi8qoWJoLFm-nE4",
           description: "Final CIS ITC_2023" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=12xUP2JXiNZzm2_pmRSkMFsGg5ZuyJG5D",
           description: "All sections  (all)quizes " 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=16rTv-4GiHTiYm0dYq6898WLMWSUbCRp9",
          description: "All Assignment  ", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1-fv4WnL-U-Pbw3KOuFWcwmm8tByx6S9h",
          description: "Chap1-(Introduction)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1ftMghnaaPfJduh1n0rac0M9x4tkZ08sd",
          description: "Chap2-(IO HW)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1wdVNX45jGY-MLG153nyXrAsn8SYy8J_J",
           description: "Chap3-(Processing HW)" 
          },
          {
            url:"https://drive.google.com/uc?export=download&id=1RsI2NQQeDvNysRqH3pTI5O2Xeex0Zfil",
            description:"Chap4-(Numbering System)"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=1xp68xOkcwZOvgNus4sbrmQcMSHwAukDc",
            description:"Chap5-(Logic Gates & Boolean Algebra)"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=1atRw50ugQRqfawssKxGHYtv0B281KndI",
            description:"Chap6A-(Introduction to Software)"
          },{
            url:"https://drive.google.com/uc?export=download&id=1odXSoXRkopcwXoByj-NwNq1-dn5dvFpX",
            description:"Chap7-(SoftwarProg&Lang)"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=1LNW_tafWM_nCBhm8ct--SC7tLd9PmQWr",
            description:"Chap8-(Databases)"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=13RMor3H0mwlgiQpZDvAkwrNyCQfSw9UP",
            description:"Chap9-(Communications & Networks)"
          },
          {
            url:"https://drive.google.com/uc?export=download&id=1eNNQA4GdyukI5gc0Zs5fCCm2qGdiyclu",
            description:"Chapter_11"
          },
            

      ],
      isDownload: true,
    },

    {
      title: 'Islamic Study ',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1m138LNb_n9qRvCvUrmQDEjZg4dJEM5wM",
          description: "Islamiat CIS", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1WMxUA5IrP7KD_gPcq6e8HOwo5dXGz8LN",
          description: "(Islamiat) Important - Sir Rashid", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1nPp8h6Kt2Q97XlaLDVgK073LaQwRYQn-",
          description: "Things Muslim must know (5 Pillars of Islam - 6 Pillars of Iman - Names of 25 Prophet mention in the Quran - Islamic Months) ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=11z71AreMyCnlUctpFUqXvooE9r5LBxC3",
          description: "All prophets name mention in quran ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1yYbjKbQjI7kRoI4wc10lcUrPxJJyGJeo",
          description: "Post Midterm handouts 2023, HS-101  Islamic Studies", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1XIV7zjF1wDy-gve-agbW5exM9B2seejB",
          description: "MID TERM HANDOUTS HS-101 ISLAMIC STUDIES", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=120yBASjFAOY55UxAyShPCmMOkvAqZ6Yh",
          description: "LIFE OF THE HOLY PROPHET.pdf", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1bUapI6E3_R3op7NGFwc3woYq6rlqmweZ",
          description: "Islamiat POST MID", // Description for the second PDF
        },
      ],
      isDownload: true,
    },

    {
      title: 'Foundational Mathematics',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1vIgZPbJsUsEx62oQNBIsWn9RxwzmCAFx",
           description: "(Foundation Maths) Assignment." 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1sjNe-7_KOFcu10z01Mpln-Vc-Vw51UTp",
           description: "All Questions " 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1NxSwQFmM1UBLSbLDyKJ8JT8a2uFbZ3Bv",
          description: "Topic for mid term", // Description for the first PDF
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
      title: 'Programming Fundamental',
      pdfs: [
        {
          url:"https://drive.google.com/uc?export=download&id=1jIBYmsPNuhtx7GI1G1Ig06S1vjYTrm6k",
          description:"Python Book - Python Crash Course_ A Hands-On, Project-Based Introduction to Programming ( PDFDrive )"
        }
        ,
       {
        url:"https://drive.google.com/uc?export=download&id=10kFgQjoCZ5w-HCNSOkkwIUSQxLoODzT6",
        description:"Week 1 "
       },
       {
        url:"https://docs.google.com/presentation/d/1d0PQcD_qUFopfmmeCp8e7hc8F0mvR-t9",
        description:"Variable & Operators"
       },
      {
        url:"https://drive.google.com/uc?export=download&id=1sVTeF1Ewfmn4NRTpp-PUYWN8_ZHZsGuI",
        description:"Formatted Input/Output"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1l49btG6umCAiMZGNfBJ767VOlrpiGBCK",
        description:"Selections"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=18TQ65PjUMw3EiHuiyxnNho-kYIVnlZSx",
        description:"Loops"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1M05I7Y0yP7goDyzL_524d4ERY0qrZYM3",
        description:"Nested Control Structure"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1Azqev01oRu9QDbyxP3nEQS0gqUZ-wWUf",
        description:"Functions"
      },
      {
        url:"https://docs.google.com/presentation/d/1yez0QQjhXtwUn8hUF0vTjoq7RMQ3qg_o",
        description:"List"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=19DePnBkcQbtEuX0WHXlMMyocZykOs0Ys",
        description:"Searching & Sortings"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1_dMglTKKsD4aoylFcYOYrWOGRFQxP3eW",
        description:"Tuple & Dictionary"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1JCPI_KSfaraO-gL4oe-Zjp-ofPDlpDcz",
        description:"Module & Packages"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1zvaDHF13lRIZsT3xaVV1Mn971asjzJZx",
        description:"Strings"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1l49btG6umCAiMZGNfBJ767VOlrpiGBCK",
        description:"Selections"
      },
      {
        url:"https://drive.google.com/uc?export=download&id=1l49btG6umCAiMZGNfBJ767VOlrpiGBCK",
        description:"Selections"
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
        <h1 className="text-3xl font-bold text-center m-[80px] text-[#692f95] dark:text-white">Teacher Material</h1>
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

export default Teacher1;
