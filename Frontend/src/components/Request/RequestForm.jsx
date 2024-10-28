import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RequestForm.css" // Custom CSS file for styling
import Navbar from "../Navbar";
import Footer from "../Footer";
// Custom arrow component for the slider
const CustomArrow = ({ type, onClick }) => (
  <div
    className={`custom-arrow custom-arrow-${type}`}
    onClick={onClick}
  >
    {type === "prev" ? "<" : ">"}
  </div>
);

function RequestForm() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch existing comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get("http://localhost:4001/api/comments"); // Adjust the API route as needed
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  // Handle form submission to post a new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        const res = await axios.post("http://localhost:4001/api/comments", { text: comment });
        setComments([...comments, res.data]); // Add the new comment to the list
        setComment(""); // Clear input
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

 
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col">
     <Navbar/>

      {/* Comment/Request Form */}
      <div className="mt-[80px]">
        <h2 className="font-semibold text-xl pb-2">Submit Your Request/Comment</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder="Write your comment/request here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 mt-2 rounded-md"
          >
            Submit
          </button>
        </form>

        {/* Display all comments */}
        <div className="comments-list">
          <h3 className="text-xl font-semibold mb-3">All Comments:</h3>
          {comments.length > 0 ? (
            comments.map((item) => (
              <div key={item._id} className="bg-gray-100 p-3 mb-2 rounded-md">
                <p>{item.text}</p>
                <small className="text-gray-500">{new Date(item.createdAt).toLocaleString()}</small>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to submit!</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default RequestForm;
