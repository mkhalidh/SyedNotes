import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 

function Teacher3() {
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
          url: "https://drive.google.com/uc?export=download&id=1yMse2-EJ4rvlrY7ucDKHjuh6QUIhE5zb",
          description: "CIS SE Communication Skills Software Fall 2022", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=13c7J7XyJgIH5-g26gkDu-ZtyqEW9hJ3-",
          description: "7 C’s of Communication", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1BVuFBbwWIc_7G27PFeGeFHrRVvJjbdH0",
          description: "Applications", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=10Lby0OPMw3d7_G-bVOjLCDeeNtqqtut6",
          description: "Barriers of Communication", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1M7orn4KOVePbWdbIB1RlN_PmM7Dy214h",
          description: "Circular Sample", // Description for the second PDF
        },
        
        {
          url: "https://drive.google.com/uc?export=download&id=1Z5suWqn2aFiikZcqYeKcdZnG1xuZkrWq",
          description: "Circular template", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1XIZ75VOO4mm3pEInHljSmOUhoYK-8p5O",
          description: "Circulars and Notices ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1_qbw-AFFZoGVGKHEfg8mGAEmFS9CTxf1",
          description: "COMM skills lecture 2", // Description for the second PDF
        },
        
        {
          url: "https://drive.google.com/uc?export=download&id=1LeJ16lJfWCqvKh6hr5zZEjyFawjxQ6Fx",
          description: "Communication Chapter 2", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1jKKvWFMR0qMr-JMwqlYPtzmQpLwb4MgK",
          description: "Communication Skills 1  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1bmbgCzO8VrlcFcyfF88tdLYlIwAU74rd",
          description: "Cover Letter", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1AfmhuCVQ7FR_KAjVxQTkRzCeQh2JfCgV",
          description: "CV Writing", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=12Pw0cVRy5cBxLbDvyo3idM4GFP_DljhY",
          description: "ELEMENTS OF COMMUNICATION  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1EAFhzQWFtAEXVNL7kEeXcfU73F59W087",
          description: "FIVE PLANNING STEPS OF COMMUNICATION", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1VLVtdQQBkiHkZjJsVNyKgKdZHEsWUwEN",
          description: "Functions of Organizational Comm.", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/file/d/1AR6rPM1391xzYeqmbxgSVq3JwnJ_xu5P",
          description: "Job Application Letter ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=14euqL5lCCafV9D2hqbAV-jpcYicWXNUU",
          description: "Lesson5-Functions of Organizational Communication", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1bhUrDgXgQPNUEKMHG3sODqpi8xFanXwC",
          description: "sson5-Functions of Organizational Communication", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1hRxvEs2fQvw5xpL-L60rnX8icaa63lrR",
          description: "Lesson6-Barriers of Communication  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/file/d/18JIHZ5Dirm0Ss8Kd96x4-JnW6nyy3rYO",
          description: "Letter Writing (Business or Official Letters", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=18puPuMcVZKK-tQEecClvSrG17UUgmTtz",
          description: "Letter Writing", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=17zjbsE9j__UFaFpvW4GdNwk9vfW8ra3O",
          description: "Meeting Minutes  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1uk1h6M5R8OEfyfhVcg_eS8dQOK-DOAyV",
          description: "Memorandum", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1b1U09Mj4EqojViH5K4hWIzjNy2wQrO1x",
          description: "Minutes of the Meeting", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=10IlBGanZSWmU9L72KimPf_pb58LUBA_B",
          description: "Notice Writing  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1quIn18_Va6h7Q2dhOINNXZd5cQ19DKgG",
          description: "Oral presentation", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=18f-9aLCnHsC7B1jW1wx-LHBUF2i4POok",
          description: "Presentation Skills", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=10GOqPhNpKatNGYfn4ycPoKYp_QUv1QNW",
          description: "Resume template  ", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/file/d/1bG2j0F4mLrd4ifkscRKQuMo7kNk5AvEU",
          description: "Steps in Preparing a Presentation", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1WWhAs0uzHA-cPQj2w7fkFYfI26rOyrXm",
          description: "Types of Presentations", // Description for the second PDF
        },
       
      ],
      isDownload: true,
    },
   
    {
      title: 'Object Oriented Programming Language (Theory)',
      pdfs: [
        
        {
          url: "https://drive.google.com/uc?export=download&id=1dtE-47VhRVTRBOpXGwkIcURC0KUfIYiV",
           description: "Computer Organization and Architecture 10th - William Stallings" 
          },
        {
          url: "https://drive.google.com/uc?export=download&id=1qi7nLE3PsHMUxnKOxJmwKA-rhucFIWG0",
          description: "CIS-SWE-212T CO&A-SE-Fall-2022", // Description for the first PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1ZPMPhvKzWXoUYLovsihrVIN2wRzPSJnB",
          description: "Week_01_CO&A_Part_01", // Description for the second PDF
        },
        {url:"https://drive.google.com/uc?export=download&id=1Pjt6qweRX0MEOrkkrwoduP5P3G9y0F2T",
          description:"Week_01_CO&A_Part_02"
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1LVFnVHNkQYNasIkU2bTa3558ennHWIpZ",
          description: "Week_02_CO&A", // Description for the second PDF
        },
        {
          url: "https://drive.google.com/uc?export=download&id=1arODg_vJ70CTV5JTqNa602c_0Rom-TF6",
           description: "Week_03_CO&A" 
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

export default Teacher3;
