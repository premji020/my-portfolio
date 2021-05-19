import "./Projects.css";
import blog from "./img/blog.PNG";
import calc from "./img/calc.PNG";
import count from "./img/count.PNG";
import rec from "./img/recipe.PNG";
import rest from "./img/rest.PNG";
import todo from "./img/todo.PNG";
import form from "./img/form.PNG";

const Project = () => {
  return (
    <div className="p-3">
      <div className="text-center my-10">
        <h1 className="font-headings1 font-bold text-center text-6xl md:text-5xl p-2 text-eternal-blue tracking-loose">
          MY WORK
        </h1>
        <div className=" text-xl xl:text-2xl m-2 p-2 text-center font-headings3 tracking-wider text-gray-800">
          A selection of my range of work
        </div>
        <div className=" text-lg xl:text-xl m-2 p-2 text-left font-headings3 tracking-wider text-gray-700">
          <a className="text-center mx-5" href="work">
            All
          </a>
          <a className="text-center mx-5" href="dev">
            FrontEnd
          </a>
          <a className="text-center mx-5" href="dev">
            FullStack
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8 m-5 max-w-8xl l lg:m-auto">
        <div className="bg-gray-100 bg-opacity-90 rounded overflow-hidden shadow-lg">
          <img src={blog} alt="" className="w-full h-48 sm:h-56 object-cover" />

          <div className="px-10 py-6 mb-10 text-center ">
            <div className="text-2xl font-bold text-indigo-700 mb-4">
              SIMPLE BLOG
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #BOOTSTRAP
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://zen-perlman-f3ffdb.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/html-css/tree/blog">GITHUB LINK</a>
          </button>
        </div>

        <div className="bg-gray-100 bg-opacity-90 rounded overflow-hidden shadow-lg">
          <img src={form} alt="" className="w-full h-48 sm:h-56 object-cover" />

          <div className="px-10 py-6 mb-10 text-center ">
            <div className="text-2xl font-bold text-indigo-700 mb-4">
              BASIC FORMS 
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #BOOTSTRAP
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://hungry-minsky-fbbc6d.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/html-css/tree/forms">GITHUB LINK</a>
          </button>
        </div>

        <div className="bg-gray-100 bg-opacity-90">
          <img src={calc} alt="" className="w-full h-48 sm:h-56 object-cover" />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-4">
              BASIC CALCULATOR
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #JAVASCRIPT
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://stoic-varahamihira-fcb93c.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/html-css/tree/calculator">GITHUB LINK</a>
          </button>
        </div>

        <div className="bg-gray-100 bg-opacity-90">
          <img src={rest} alt="" className="w-full h-48 sm:h-56 object-cover" />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-4">REST COUNTRIES API DATA</div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #JAVASCRIPT
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://unruffled-mirzakhani-a6e916.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/html-css/tree/async-await">GITHUB LINK</a>
          </button>
        </div>
        <div class="bg-white">
          <img src={rec} alt="" class="w-full h-48 sm:h-56 object-cover" />

          <div class="px-10 py-6 mb-10 text-center">
            <div class="text-2xl font-bold text-indigo-700 mb-4">FOOD RECIPE SEARCH APP</div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #BOOTSTRAP
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #JAVASCRIPT
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://gallant-sammet-1c399e.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/html-css/tree/recipe">GITHUB LINK</a>
          </button>
        </div>
        <div class="bg-gray-100 bg-opacity-90">
          <img src={count} alt="" class="w-full h-48 sm:h-56 object-cover" />

          <div class="px-10 py-6 mb-10 text-center">
            <div class="text-2xl font-bold text-indigo-700 mb-4">SIMPLE COUNTER</div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #REACT
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #REACT-JSX
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://suspicious-ritchie-091333.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/React/tree/state">GITHUB LINK</a>
          </button>
        </div>
        <div class="bg-gray-100 bg-opacity-90">
          <img src={todo} alt="" class="w-full h-48 sm:h-56 object-cover" />

          <div class="px-10 py-6 mb-10 text-center">
            <div class="text-2xl font-bold text-indigo-700 mb-4">SIMPLE TODO APP</div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #REACT
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #REACT-JSX
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #BOOTSTRAP
              </span>
            </div>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500 mt-1">
            <a href="https://dazzling-brattain-7fcbac.netlify.app/">DEMO</a>
          </button>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-gray-500 mt-1">
            <a href="https://github.com/premji020/React/tree/todo">GITHUB LINK</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

/*
<div classNameNameNameName = "h-full flex flex-row">
               <section classNameNameName="my-work" id="work">
            <h2 classNameNameNameName="section__title section__title--work">My work</h2>
            <p classNameNameNameName="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div>
                
                <a href="https://github.com/">
                    <img src={img2} alt="" />
                </a>

                <a href="https://github.com/">
                    <img src={img2} alt="" />
                </a>

                <a href="https://github.com/">
                    <img src="" alt="" />
                </a>

                <a href="https://github.com/">
                    <img src="" alt="" />
                </a>

                <a href="https://github.com/">
                    <img src="" alt="" />
                </a>
                
               
            </div>
        </section>
        </div>

        <h1 classNameName="font-headings1 font-bold text-center text-6xl md:text-5xl p-2 text-eternal-blue tracking-loose">MY WORK</h1>
       <div classNameName="font-bold text-xl xl:text-2xl m-2 p-2 text-center font-headings3 tracking-wider text-gray-800"> A selection of my range of work</div>
       <div classNameName="font-bold text-lg xl:text-xl m-2 p-2 text-left font-headings3 tracking-wider text-gray-700"> 
       <a classNameName="text-center mx-5" href="0">All</a>
       <a classNameName="text-center mx-5" href="0">FrontEnd</a>
       <a classNameName="text-center mx-5" href="0">FullStack</a>

*/
