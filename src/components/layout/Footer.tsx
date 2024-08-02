import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section
      className={` bg-[url('/img/footer.png')] bg-cover bg-center  w-full  lg:h-[35rem] overflow-hidden  text-white space-y-8  `}
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
      <div className="bg-white bg-opacity-20 rounded-3xl shadow-lg backdrop-blur-md p-4  lg:h-64  space-y-4 flex items-center flex-col justify-around w-[100%] ">
        <div className="flex space-x-4">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-blue-400"
            />
          </Link>
          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-blue-400"
            />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-pink-400"
            />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={35}
              className="border border-white rounded-full p-2 transition-transform transform hover:scale-110 hover:text-blue-700"
            />
          </Link>
        </div>
        <hr className=" w-full opacity-50" />

        <div className="flex flex-col lg:flex-row justify-between w-full px-8 items-center gap-8">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-5  lg:w-[75%] text-white  ">
            <Link to="/" className="nav ">
              HOME
            </Link>
            <Link to="/# " className="nav ">
              ABOUT US
            </Link>
            <Link to="/#" className="nav ">
              PRODUCTS & SERVICES
            </Link>
            <Link to="/# " className="nav lg:ml-8">
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
