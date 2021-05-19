import "./Contact.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";


const Contact = () => {
  return (
    <div className="m-4 md:m-2">
        <div className = " rounded overflow-hidden shadow-lg bg-ivory bg-opacity-30   lg:mx-24 lg:m-2">
          <h1 className="text-center font-headings1 font-bold text-5xl p-2 m-4 text-eternal-blue tracking-loose">
            CONTACT
          </h1>
          <div className = "rounded overflow-hidden shadow-lg bg-ivory h-64 sm:h-96 mx-12">
          <iframe
            title="contact"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2216169790413!2d80.2540104152705!3d13.085136515916151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e0ee00ce25%3A0xd299525785d55067!2s28%2C%2068%2C%20Ponappa%20St%2C%20Purasaiwakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600084!5e0!3m2!1sen!2sin!4v1618938584161!5m2!1sen!2sin"
           loading="lazy"
           className=" w-full h-full"
          ></iframe>
        </div>
         
            <h1 className = "font-bold text-lg xl:text-xl m-2 px-12 text-left font-headings3 tracking-wider text-gray-800">Address</h1>
            <p className = "flex flex-col text-md md:text-base mb-4 px-14 font-semibold font-content">
            28/68 Ponappa st, Purasawalkam, Chennai - 600084
          </p>
          
            <h1 className = "font-bold text-lg xl:text-xl m-2 px-12 text-left font-headings3 tracking-wider text-gray-800">E-Mail</h1>
            <p className = "flex flex-col text-md md:text-base mb-4 px-14 font-semibold font-content">
            premji020@gmail.com, <br></br>
            premji020@outlook.com
          </p>
          
            <h1 className = "font-bold text-lg xl:text-xl m-2 px-12 text-left font-headings3 tracking-wider text-gray-800">Phone</h1>
            <p className = "flex flex-col text-md md:text-base mb-4 px-14 font-semibold font-content">
            +917358428964
          </p>
         
          <div className = "flex flex-row justify-left p-2 px-8">
            
            <a href="https://github.com/premji020" className="  mx-5 text-3xl md:text-5xl" alt="Github link">
              <FaGithub size="" style={{fill:'#09203F'}}/>
            </a>
            <a href="https://www.linkedin.com/in/j-prem-j-045a1983/ " className=" mx-5 text-3xl md:text-5xl">
              <FaLinkedinIn size="" style={{fill:'#09203F '}} />
            </a>
            <a href="https://www.facebook.com/prem.ji.3950/" className=" mx-5 text-3xl md:text-5xl">
              <FaFacebookSquare size="" style={{fill:'#09203F '}} />
            </a>
            <a href="https://www.instagram.com/presniper7/?hl=en" className=" mx-5 text-3xl md:text-5xl">
              <FaInstagram size="" style={{fill:'#09203F '}}/>
            </a>
          </div>
        </div>
        </div>
    
  );
};

export default Contact;
