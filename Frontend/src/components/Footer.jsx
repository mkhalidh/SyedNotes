import React from "react";

function Footer() {
  const contributorLinkedIn = "https://www.linkedin.com/in/hammad-kashmiri-b24810291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Replace with actual LinkedIn profile URL
  const developerLinkedIn = "https://www.linkedin.com/in/muhammad-khalid-hussain-384752202/"; // Replace with actual LinkedIn profile URL

  return (
    <div>
      <hr />
      <footer className="footer bg-[#692f95] text-white footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover hover:text-green-600" href="/about">About us</a>
          <a className="link link-hover  hover:text-green-600" href="/contact">Contact us</a>
          {/* <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href={contributorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-linkedin w-6 h-6 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zM4.943 12.304V6.169H3.269v6.135h1.674zm.843-7.393a1.004 1.004 0 1 0 0-2.008 1.004 1.004 0 0 0 0 2.008zm4.913 7.393V8.594c0-.936-.336-1.575-1.177-1.575-.641 0-1.024.433-1.191.853-.061.147-.077.352-.077.559v3.873h1.675V8.944c0-.29.021-.579.098-.8.216-.56.709-.857 1.206-.857.854 0 1.195.644 1.195 1.587v3.43h1.674zm-5.756 0V6.169h-1.67v6.135h1.67z" />
              </svg>
              Contributor LinkedIn
            </a>
            <a
              href={developerLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-linkedin w-6 h-6 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zM4.943 12.304V6.169H3.269v6.135h1.674zm.843-7.393a1.004 1.004 0 1 0 0-2.008 1.004 1.004 0 0 0 0 2.008zm4.913 7.393V8.594c0-.936-.336-1.575-1.177-1.575-.641 0-1.024.433-1.191.853-.061.147-.077.352-.077.559v3.873h1.675V8.944c0-.29.021-.579.098-.8.216-.56.709-.857 1.206-.857.854 0 1.195.644 1.195 1.587v3.43h1.674zm-5.756 0V6.169h-1.67v6.135h1.67z" />
              </svg>
              Developer Linkedin
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All rights reserved by Khalid</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
