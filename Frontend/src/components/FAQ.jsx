import React from "react";
import FaqItem from "./FaqItem"; // Adjust the import path if necessary
import './Faq.css'; // Ensure this path is correct

// FAQ list
const faqList = [
  {
    isActive: true,
    question: "Who is this website for?",
    answer: "This website is designed for students of all levels who are looking for study materials to enhance their learning and improve academic performance.",
  },
  {
    isActive: false,
    question: "What types of notes are available on this website?",
    answer: "We offer a variety of notes, including lecture summaries, study guides, past exam papers, and subject-specific resources for different academic levels.",
  },
  {
    isActive: false,
    question: "Can I contribute my own notes to the website?",
    answer: "Yes! We encourage students to share their notes and resources. You can submit your materials through our submission form, and help others in the community.",
  },
  {
    isActive: false,
    question: "Is there a cost to download the notes?",
    answer: "No, all the resources on our website are free to download. We believe in providing accessible education for all students.",
  },
];

// Main FAQ component
const FAQ = () => {
  return (
    <section className="ezy__FAQ py-14 md:py-24 bg-[#dcb3e38b] dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-16 md:px-8 lg:px-28">
        <div className="grid grid-cols-12 justify-between gap-6">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg opacity-70">
              Got questions? We’ve got answers! Here, you can find helpful information about our resources, how to access notes, and tips for successful studying.
            </p>
            {/* <button className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition mt-6 lg:mt-12 px-7 py-3 text-blue-600">
              View All FAQ's
            </button> */}
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            {faqList.map((faq, i) => (
              <FaqItem faq={faq} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
