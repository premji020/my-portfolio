import about from "./about3.svg";
import "./About.css";
const About = () => {
  return (
    <div className="flex flex-col flex-wrap lg:flex-nowrap lg:flex-row ">
      <div className="p-8 my-1 lg:m-10 justify-center content-center object-cover">
        <img
          src={about}
          alt=""
          className="m-12  object-scale-down w-4/5 lg:w-11/12 h-auto"
        ></img>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-8 m-1 lg:p-8 lg:m-8 ">
        <h1 className="font-headings1 font-bold text-6xl md:text-5xl p-2 text-eternal-blue tracking-loose">
          ABOUT ME
        </h1>
        <p className="text-md md:text-base mb-4 font-semibold font-content">
          Results-driven software developer, seeking to use my programming
          skills to deliver coding excellence to the work I do. Have experience in the field of industrial automation 
          proven to self learn, easygoing person and responsible for completing various projects.
        </p>

        <p className="text-md md:text-base mb-4 font-semibold font-content">
          
          Seeking a role to apply my strong IT management and software development
          skills for the growth of the firm I aim to work and myself. Worked on various projects to improve my coding and anlytical skills, 
          to achieve this I have done courses and have certifiactions on Python and Full stack Development course
          on institutes like GUVI-IIT incubated company.
        </p>

        <button
          type="button"
          className="bg-black-lt hover:bg-black-dk text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <a href="https://drive.google.com/file/d/1EZyalD19qdd91cibUplbWrLh1VAZ4D6Q/view">
            See My Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;

//p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center

//w-full lg:h-full max-w-sm object-cover inline-block mt-24 md:mt-0 p-8 md:p-0
