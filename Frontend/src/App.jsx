import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Course from "./components/Course";

import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

import Semester1 from "./components/Software/semesters1/Semester1";

import Teacher1 from "./components/Software/semesters1/Teacher1";
import PastPaper1 from "./components/Software/semesters1/Pastpaper1";

import Semester2 from "./components/Software/semesters2/Semester2";
import Student2 from "./components/Software/semesters2/Student2";
import Teacher2 from "./components/Software/semesters2/Teacher2";
import PastPaper2 from "./components/Software/semesters2/Pastpaper2";

import Semester3 from "./components/Software/semesters3/Semester3";
import Student3 from "./components/Software/semesters3/Student3";
import Teacher3 from "./components/Software/semesters3/Teacher3";
import PastPaper3 from "./components/Software/semesters3/Pastpaper3";

import Semester4 from "./components/Software/semesters4/Semester4";
import Student4 from "./components/Software/semesters4/Student4";
import Teacher4 from "./components/Software/semesters4/Teacher4";
import PastPaper4 from "./components/Software/semesters4/Pastpaper4";

import Semester5 from "./components/Software/semesters5/Semester5";
import Student5 from "./components/Software/semesters5/Student5";
import Teacher5 from "./components/Software/semesters5/Teacher5";
import PastPaper5 from "./components/Software/semesters5/Pastpaper5";

import Semester6 from "./components/Software/semesters6/Semester6";
import Student6 from "./components/Software/semesters6/Student6";
import Teacher6 from "./components/Software/semesters6/Teacher6";
import PastPaper6 from "./components/Software/semesters6/Pastpaper6";

import Semester7 from "./components/Software/semesters7/Semester7";
import Student7 from "./components/Software/semesters7/Student7";
import Teacher7 from "./components/Software/semesters7/Teacher7";
import PastPaper7 from "./components/Software/semesters7/Pastpaper7";

import Semester8 from "./components/Software/semesters8/Semester8";
import Student8 from "./components/Software/semesters8/Student8";
import PastPaper8 from "./components/Software/semesters8/Pastpaper8";
import Teacher8 from "./components/Software/semesters8/Teacher8";
import About from "./components/About";
import SponsorUs from "./components/SponserUs";
// import Upload1 from "./components/Software/semesters1/Upload1";
// import Video from "./components/Software/semesters1/Video1";
import Video1 from "./components/Software/Video1";
import V1 from "./components/Software/semesters1/V1";
import Contact from "./components/Contact";
import RequestForm from "./components/Request/RequestForm";
import AboutThisWeb from "./components/AboutThisWeb";
import Student1 from "./components/Software/semesters1/Student1";
import V2 from "./components/Software/semesters2/V2";
// import FoundationalMath from "./components/Software/semesters1/student/FoundationalMath";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/about" element={<About />} /> 
          <Route path="/aboutthisweb" element={<AboutThisWeb/>} />
          {/* Correctly defined About route */}
          <Route path="/contact" element={<Contact/>}/>
          {/* <Route path = "/request" element={<RequestForm/>} /> */}
          <Route path="/sponserus" element={<SponsorUs/>}/>
          <Route path="/semester1" element={<Semester1 />} />
          <Route path="/semester1/student1" element={<Student1/>} />
          {/* <Route path="/semester1/subjectstudent/student1" element={<FoundationalMath/>} /> */}
          <Route path="/semester1/student2" element={<Teacher1 />} />
          <Route path="/semester1/student3" element={<PastPaper1 />} />
          {/* <Route path="/semester1/student4" element={<Upload1/>}/> */}
          <Route path="/semester1/student4" element={<V1/>}/>



          <Route path="/semester2" element={<Semester2 />} />
          <Route path="/semester2/student1" element={<Student2 />} />
          <Route path="/semester2/student2" element={<Teacher2 />} />
          <Route path="/semester2/student3" element={<PastPaper2 />} />
          <Route path="/semester2/student4" element={<V2/>} />



          <Route path="/semester3" element={<Semester3 />} />
          <Route path="/semester3/student1" element={<Student3 />} />
          {/* <Route path="/semester3/student2" element={<Teacher3 />} /> */}
          <Route path="/semester3/student2" element={<PastPaper3 />} />

          <Route path="/semester4" element={<Semester4 />} />
          <Route path="/semester4/student1" element={<Student4 />} />
          {/* <Route path="/semester4/student2" element={<Teacher4 />} /> */}
          <Route path="/semester4/student2" element={<PastPaper4 />} />

          <Route path="/semester5" element={<Semester5 />} />
          <Route path="/semester5/student1" element={<Student5 />} />
          <Route path="/semester5/student2" element={<Teacher5 />} />
          <Route path="/semester5/student3" element={<PastPaper5 />} />

          <Route path="/semester6" element={<Semester6 />} />
          <Route path="/semester6/student1" element={<Student6 />} />
          <Route path="/semester6/student2" element={<Teacher6 />} />
          <Route path="/semester6/student3" element={<PastPaper6 />} />

          <Route path="/semester7" element={<Semester7 />} />
          <Route path="/semester7/student1" element={<Student7 />} />
          <Route path="/semester7/student2" element={<Teacher7 />} />
          <Route path="/semester7/student3" element={<PastPaper7 />} />

          <Route path="/semester8" element={<Semester8 />} />
          <Route path="/semester8/student1" element={<Student8 />} />
          <Route path="/semester8/student2" element={<Teacher8 />} />
          <Route path="/semester8/student3" element={<PastPaper8 />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
