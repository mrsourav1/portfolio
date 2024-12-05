import { motion } from "motion/react";
import astroImage from "../../assets/pngegg.png"
import Navbar from "../../components/Navbar";
type Props = {}

const Home = () => {
  return (
    <section id="home" className="home_custom h-screen">
      <header>
        <Navbar />
      </header>
      <div className="flex justify-around items-center h-4/5">
        <div className="bg-slate-500 bg-opacity-35 text-white rounded-lg h-auto p-4 py-6 w-5/12">
          <span className="bg-red-400 font-extrabold text-white p-2 text-2xl w-auto rounded-lg">Welcome To My Portfolio</span>
          <h1 className="text-8xl my-4">Hi!!! I'm Sourav</h1>
          <p className="text-3xl underline">Full Stack Software Developer</p>
          <p className="text-xl mt-4">
            Passionate about building dynamic, user-friendly, and efficient web applications.
            I specialize in crafting seamless front-end experiences and robust back-end systems,
            ensuring high performance and scalability. Always eager to learn and adopt
            the latest technologies to solve challenging problems and deliver impactful solutions.
          </p>
        </div>
        <motion.div
          className="w-1/5"
          animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={astroImage} alt="This is someone who loves to travel in space" />
        </motion.div>
      </div>
    </section>
  )
}

export default Home