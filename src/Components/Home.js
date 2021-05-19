import image from "./image.jpg";
import './Home.css'

const Home = () => {
  return (
    <div className="flex flex-col flex-wrap lg:grid lg:grid-cols-2 ">
      <div className="flex flex-col lg:mt-32 xl:pl-32">
        <p className="font1 text-black-coffee font-bold text-4xl sm:text-5xl pt-12 mt-6 text-center">
          Hi, I am </p>
         <p className="font3 text-transparent bg-clip-text bg-gradient-to-r from-eternal-blue to-eternal-gray text-7xl sm:text-9xl uppercase font-bold text-center pb-2">
            Prem
          </p>
        
        <p className="font2 text-6xl sm:text-7xl bg-gradient-to-r from-black-lt to-black-dk text-yellow-200 mx-20 px-20 md:mx-16 md:px-16 lg:mx-8 lg:px-8 mb-6 text-center ">
          Full-Stack Developer
        </p>
<p className = "text-center m-1 font-headings3">
        <a href="about" class="bg-eternal-blue hover:bg-eternal-gray mt-4 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">More Info</a>
        </p>     
      </div>
      <div className="flex flex-col flex-wrap xl:text-left content-center xl:content-left mt-10 lg:mt-32">
        <img
          src={image}
          alt=""
          className="rounded-lg w-full h-3/4 lg:h-full max-w-sm object-cover "
        ></img>
      </div>
    </div>
  );
};

export default Home;

/*
        <section className="flex flex-wrap mb-20 mx-auto p-24 h-full ">
            <div className="w-full flex flex-col md:w-2/5 justify-center items-start ">
              <p className="text-black-coffee font-bold mb-3 text-5xl tracking-loose w-full">
                Hi, I am </p>
               <p className="text-transparent bg-clip-text bg-gradient-to-r from-black-lt to-black-dk mb-8 text-9xl uppercase font-bold leading-tight">
                  Prem
                </p>
              
              <span className="text-7xl bg-gradient-to-r from-eternal-blue to-eternal-gray text-yellow-200 truncate">
                Full-Stack Developer
              </span>
            </div>
            <div className="flex items-center justify-end box-border h-1/6 w-full lg:w-2/5  md:w-3/5 pl-20 ml-20 text-center">
              <img
                src=""
                alt=""
                className="rounded-none lg:rounded-lg shadow-2xl lg:block w-full"
              ></img>
            </div>
          </section>
*/

/*----------------------------------------------------------------
 <p className="text-center">
        <button type="button" className ="bg-eternal-blue hover:bg-eternal-gray m-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-w-lg max-h-40">
    <a href="about">More Info</a>
    </button>
    </p>
*/