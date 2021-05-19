
import {FaBootstrap, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact, FaNodeJs, FaAws, FaNode} from "react-icons/fa";
import { SiTailwindcss,SiTypescript ,SiMysql ,SiMongodb} from "react-icons/si";
import './Skills.css'

const Skills = () => {
  return (
    <div className = "my-auto">
      <h1 className ="text-center font-headings1 font-bold text-6xl md:text-5xl p-2 m-8 text-eternal-blue tracking-loose">SKILLS</h1>
    <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-11">
      
      
        <div className = "rounded overflow-hidden shadow-lg bg-ivory bg-opacity-70">
        <div className="font-bold text-xl xl:text-2xl m-2 p-2 text-center font-headings3 tracking-wider text-gray-800">Programming Languages</div>
        <hr className ="border-gray-400"></hr>
        <div className="grid grid-cols-3 gap-6 p-8 place-items-center text-md md:text-base mb-4 font-semibold font-content ">
        <div className = "text-center"> <FaHtml5 size = "75" style={{ fill: '#EE3F18' }} /> HTML5 </div>
        <div className = "text-center"> <FaCss3Alt size = "75" style={{ fill: '#2E86C1'}}/> CSS3 </div>
        <div className = "text-center"> <FaJsSquare size = "75" style={{ fill: '#EBEE18'}}/>JavaScript </div>
        <div className = "text-center"> <FaPython size = "75" style={{ fill: '#34495E'}}/> Python</div>
        <div className = "text-center"> <FaNode size = "75" style={{ fill: '#1E8449'}}/>NodeJs </div> 
        <div className = "text-center"> <SiTypescript size = "75" style={{ fill:'#2874A6'}}  />TypeScript </div> 
        </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-ivory bg-opacity-70">
        <div className="font-bold text-xl xl:text-2xl m-2 p-2 text-center font-headings3 tracking-wider text-gray-800">Libraries/Frameworks</div> 
        <hr className ="border-gray-400"></hr>
        <div className="grid grid-cols-3 gap-6 p-8 place-items-center text-md md:text-base mb-4 font-semibold font-content">
        <div className = "text-center"><FaReact size = "75" style={{ fill: '#5DADE2'}}/>ReactJs</div>
        <div className = "text-center"><FaNodeJs size = "75" style={{ fill: '#E74C3C '}}/>ExpressJS</div> 
        <div className = "text-center"><FaBootstrap size = "75" style={{ fill: '#9B59B6 '}}/>Bootstrap</div>
        <div className = "text-center"><SiTailwindcss size = "75" style={{ fill: '#42DBED'}}/>TailwindCss</div>
        </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-ivory bg-opacity-70">
        <div className="font-bold text-xl xl:text-2xl m-2 p-2 text-center font-headings3 tracking-wider text-gray-800"> Databases &  Cloud Services</div>
        <hr className ="border-gray-400"></hr>
        <div className="grid grid-cols-3 gap-6 p-8 place-items-center text-md md:text-base mb-4 font-semibold font-content">
        <div className = "text-center"><SiMysql size = "75" style = {{fill: "#00758F"}}/>MySQL</div>
        <div className = "text-center"><SiMongodb size = "75" style = {{fill: "#229954"}}/>MongoDB</div>
        <div className = "text-center"><FaAws size = "75" style={{fill: "#2C3E50 "}}/>AWS </div>
        </div>
        </div>
       

      </div>
      </div>
  
  );
};

export default Skills;
