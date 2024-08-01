import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <section
      className={` bg-[url('/img/footer.png')] bg-cover bg-center  w-full  h-[35rem] overflow-hidden  text-white space-y-8 `}
    >
      <div className="flex items-center justify-center flex-col gap-4 ">
        <h2 className="">Join the Community</h2>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white placeholder-gray-500 border border-gray-300 rounded-[100px] px-4 py-4 w-[300px] flex-grow text-black outline-1 outline-[#00A24D]"
          />
          <button className="bg-[#E6BD02]  p-4 px-8 rounded-[100px] ml-2 text-black font-medium">
            SEND
          </button>
        </div>
        <p>
          Receive updates and news from Healthshare Nigeria directly in your
          email
        </p>
      </div>
      <div className="bg-white bg-opacity-20 rounded-3xl shadow-lg backdrop-blur-md p-4 h-64 flex items-center flex-col justify-around w-[100%] ">
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-blue-400"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-blue-400"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-pink-400"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-blue-700"
            />
          </a>
        </div>
        <hr className=" w-full opacity-50" />

        <div className="flex justify-between w-full px-8">
          <div className="flex flex-grow items-center gap-10 text-white px-4 2xl:gap-16  ">
            <Link to="/" className="nav">
              HOME
            </Link>
            <Link to="/# " className="nav ">
              ABOUT US
            </Link>
            <Link to="/#" className="nav ">
              PRODUCTS & SERVICES
            </Link>
            <Link to="/# " className="nav ">
              RESOURCES
            </Link>
            <Link to="/#" className="nav ">
              NEWS & BLOG
            </Link>
          </div>

          <div className="">
            <p>© 2024 All Right Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
