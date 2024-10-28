import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Teacher2() {
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
          url: "https://drive.google.com/uc?export=download&id=1_le5KOyflSJ0QAqvaj_6iEU5bRzWMVVZ",
          description: "Assignment_1(Physics)", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1NslAapihbzaUHIQJ3_NrgSrFVAYacgSy",
          description: "Assignment_2(Physics)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1h5IpEWXrFKODkIq8cy5itRulomU97f1V",
          description: "Assignment_3(Physics)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1Q9jaE9vZ8AvjVuaGvzoz914A-K2cmCGi",
          description: "Fluid Dynamics", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1_TyLJ-S20GyCBHJJd17qPxwaIgZY90WN",
          description: "Polarization", // Description for the second PDF
        },
        
      ],
      isDownload: true,
    },
   
    {
      title: 'Object Oriented Programming Language (Theory)',
      pdfs: [
        
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
        {url:"https://drive.google.com/uc?export=download&id=10BkWqyiIhDZHd1eOX8SOoo2vav4vBcZM",
          description:"Lecture 7-1: Arrays"
        },
        {
          url: "https://drive.google.com/uc?export=download&id=12uUz_FDo5222i7Hfud9M4VTPC5uKFhKi",
          description: "Exception Handling", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/file/d/1lf6lwn2BsbFD-q3Ezf1OYpygAoirgfHU",
           description: "CondStatements" 
          },
          

      ],
      isDownload: true,
    },
    
    {
      title: 'Introduction to Software Engineering',
      pdfs: [
        {
          url:"https://drive.google.com/uc?export=download&id=1QKj0_atT6meuIDL7Ddlx2MlYR2CMN8_O",
          description:"Comparison of all Software Development Life Cycle Models"
        },
        {
          url: "https://drive.google.com/uc?export=download&id=119tH-oAKRnXIjViCRspmmfojsivDFCvg",
           description: "Chapter 1 ◼ Software & Software Engineering" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1xpMUFSZ4cpxL26iyQBNz0XCyg60XHemj",
          description: "Chapter 2 ◼ Process Models", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1Lugm89I4QRte9X7uVNAIPS1me7sOfEbk",
          description: "Chapter 3 ◼ Agile Development", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1MsbkjNX6tpWvcvI4UiL8KgQ5xVy-n7cF",
          description: "Chapter 4 ◼ Principles that Guide Practice", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1hOHl6AORbdr7qGbYAMsrySzxu-Gauq2C",
           description: "Chapter 5 ◼  Understanding Requirements" 
          },
          {
            url: "https://drive.google.com/uc?export=download&id=1lHXbh4O1RU6DMGeBuzVai72qdFgeJ8Xo",
             description: "Chapter 17 ◼ Software Testing Strategies" 
            },
            {
              url: "https://drive.google.com/uc?export=download&id=1lHXbh4O1RU6DMGeBuzVai72qdFgeJ8Xo",
               description: "Chapter 17 ◼ Software Testing Strategies" 
              },
              {
                url: "https://drive.google.com/uc?export=download&id=1r7b_OQyREeVrpxk0ndSZz3JNSm_ElYgl",
                 description: "Chapter 17 ◼ Software Testing Strategies" 
                },
                {
                  url: "https://drive.google.com/uc?export=download&id=1lHXbh4O1RU6DMGeBuzVai72qdFgeJ8Xo",
                   description: "Chapter 18 ◼ Testing Conventional Applications" 
                  },
                  {
                    url: "https://drive.google.com/uc?export=download&id=1eBXgqztSDieigv0p-7GL7RZShYjPW4Sj",
                     description: "Chapter 22 ◼ Software Configuration Management" 
                    },
                    {
                      url:"https://drive.google.com/uc?export=download&id=1wSnSkVBZfAeE-kR6TglIpH157OHOqZh3",
                      description:"Chapter 24 ◼ Project Management Concepts"
                    }
      ],
      isDownload: true,
    },

   
    {
      title: 'Introduction To Software Engineering (ITSE - Lab)',
      pdfs: [
        {
          url: "https://drive.google.com/uc?export=download&id=1YKXhDM540LjG1D1AGDu0lrbBLWeX8ZUP",
           description: "All labs (Manual + Rubrics)" 
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
          url: "https://drive.google.com/uc?export=download&id=1x0Cc2virUZIIKyTx1ejQPYpbXrxzZSkg",
          description: "(Derivatives of Trigonometric Functions, The Chain Rule, Implicit Differentiation", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1QvgW4qCcoK5oSxuRcjRoRHYLVTc1GnEo",
          description: "(Even and Odd functions, Composite and Shifting of graphs)", // Description for the first PDF
        },

        {
          url: "https://drive.google.com/uc?export=download&id=1pngHyo25over9PX1nqzSIEjHXCwoLV6B",
          description: "(continuity of the Function)", // Description for the first PDF
        },
      
        
        {
          url: "https://drive.google.com/uc?export=download&id=1gSmbnus7p1Ngm8mHP5QH5HYPXL_hhRdy",
          description: "(Differentiation Rules ) ", // Description for the second PDF
        },

        {
          url: "https://drive.google.com/uc?export=download&id=1GEJaft3bKJbSDl1gEg1l6fmCbAZ9HSML",
          description: "functions and graph (1)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1u7qrgtwTx4vpagSccBt3_Mu1mxxzBOvu",
          description: "L hopital rule (1)", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1OYmVccgonYbW876cKfvAcsdwPqxzn3jA",
          description: "(INTEGRATION) ", // Description for the second PDF
        },
        
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

export default Teacher2;
