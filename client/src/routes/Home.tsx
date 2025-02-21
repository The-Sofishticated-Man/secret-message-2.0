import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
  return (
    <header className="bg-light h-screen flex flex-col">
      <NavBar />
      <div id="hero" className="">
        <div id="container" className="flex flex-col items-center">
          <h1 className="text-7xl w-4xl m-3 mt-40 font-primary text-center ">
            Recieve Anonymous Messages from Strangers
          </h1>
          <h2 className="text-2xl w-130 m-4 font-secondary text-center  ">
            Find out what your friends and family think about you without
            revealing their identity 🤫
          </h2>
          <Button>
            Get Started Now <FaArrowRight/>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Home;
