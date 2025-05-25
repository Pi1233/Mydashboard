import "@/responsivestyle/responsive.css";
import data from "../data/headings.json";

export default async function Home() {
  return (
    <div className="min-w-[200px] ">
      <main>
        <nav>
          <ul className="navbar flex flex-wrap flex-row ">
            <li>
              <a href="#profile">{data.pro}</a>
            </li>
            <li>
              <a href="#academics">{data.aca}</a>
            </li>
            <li>
              <a href="#skills">{data.skills}</a>
            </li>
            <li>
              <a href="#hobbies">{data.hob}</a>
            </li>
            <li>
              <a href="#certifications">{data.cert}</a>
            </li>
          </ul>
        </nav>
        <section id="profile" className="profile-sec scroll-mt-20">
          <span className="imgcon">
            <img
              src="photo.jpg"
              alt="image"
              className="myimage mt-4 mb-4"
            ></img>
          </span>

          <span className="tophead ml-10 mt-6 grid sm:grid-rows-[40px_50px_90px] grid-rows-[auto_auto_auto] ">
            <span className="Name ">
              <h1 className="">Sourabh Mahajan</h1>
            </span>

            <span className="Btech font-medium text-2xl inline-flex">
              B.Tech(Graduate) in Electronics and Communication
              <img src="photo.jpg" alt="image" className="photo hidden"></img>
            </span>

            <span className="bio">
              I am a hard working, honest individual and always willing to learn
              new skills. I am friendly, helpful and polite. I’m passionate
              about doing quality work and making a positive impact. A quick
              learner with a positive attitude. I believe in teamwork, clear
              communication, and always giving my best effort. I like working in
              environments where I can grow and learn new things. I am always
              open to feedback and look for ways to improve my skills.
            </span>
          </span>
        </section>

        <div className="midline bg-cyan-200 pt-2 pb-2 rounded-md contact mb-9">
          <span className="bg-rose-200 rounded-2xl pl-2 pr-2 mr-2 ml-2">
            <span>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span className="phone truncate">7018328835</span>
          </span>
          <span className="bg-rose-200 rounded-2xl pr-2 pl-2 mr-2 ml-2 emailspan">
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className="email">Sourabhmahajanq@gmail.com</span>
          </span>
          <span className="bg-rose-200 rounded-2xl pr-2 pl-2 mr-2 ml-2">
            <span>
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <span className="location">Sunder Nagar, Himachal Pradesh</span>
          </span>
          <span className="bg-rose-200 rounded-2xl pr-2 pl-2 mr-2 ml-2">
            <span>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span className="location">
              https://www.linkedin.com/in/sourabh-mahajan-6498331a0/
            </span>
          </span>
        </div>

        <div className="ace ml-20 mb-10 mx-auto grid grid-cols-2 gap-20 ">
          <div className="acaski">
            <section className="academic-sec mb-10" id="academics">
              <div className="headings">
                <h1 className="">Academics</h1>
              </div>
              <div className="Edu">
                <div className="text-xl">
                  B-Tech In Electronics & Communication
                </div>
                <span className="college">
                  Jawaharlal Nehru Govt. Engg. College
                </span>
                <span className="loc text-[12px] ml-2 mr-5 pt-2">
                  Sunder Nagar, Himachal Pradesh
                </span>
                <span className="years text-[12px] border-2 opacity-70 p-2 ml-5 mr-5 border-amber-200 bg-fuchsia-200">
                  2019-2023
                </span>

                <span className="cgpa text-[12px] border-2 p-2 opacity-70 border-amber-200 bg-fuchsia-200">
                  CGPA-7.49
                </span>
              </div>
            </section>

            <section className="projects-sec mb-10" id="projects">
              <div className="headings">
                <h1>Personal Projects</h1>
              </div>
              <ul className="certlist">
                <li>Todo List (fullstack)</li>
                <li>Randomizing Colors (React)</li>
                <li>eSignature (React)</li>
                <li>Bootstrap Project</li>
              </ul>
            </section>

            <section className="hobbies-sec mb-10" id="hobbies">
              <div className="headings">
                <h1 className="">Hobbies</h1>
              </div>

              <ul className="hoblist" id="hobbies">
                <li>Music</li>
                <li>Reading</li>
                <li>Movies</li>
                <li>Learning</li>
                <li>Shopping</li>
                <li>Home improvement</li>
              </ul>
            </section>
          </div>

          <div className="certhob ">
            <section className="cert-sec mb-10" id="certifications">
              <div className="headings">
                <h1 className="">Certifications</h1>
              </div>
              <ul className="certlist">
                <li>HTML Certification</li>
                <li>Javascript Certification</li>
                <li>Basics of Python</li>
                <li>Programming fundamentals using python part 1 </li>
                <li>programming fundamentals using python part 2 </li>
              </ul>
            </section>

            <section className="skills-sec " id="skills">
              <div className="headings">
                <h1 className="">Skills</h1>
              </div>
              <div className="skillslist">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>Python</span>
                <span>React</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>Bootstrap</span>
                <span>NodeJs</span>
                <span>Communication skills</span>
                <span>Quick Learning</span>
              </div>
            </section>
          </div>
        </div>
      </main>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
