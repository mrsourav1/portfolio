import { motion } from "motion/react";
import astroImage from "../../assets/pngegg.png"
type Props = {}

const Home = (props: Props) => {
  return (
    <section id="home" className="home_custom h-screen">
      <div className="flex justify-around items-center h-4/5">
        <div className="bg-slate-500 text-white rounded-lg h-auto p-4 py-6">
            <span className="bg-red-400 font-extrabold text-white p-2 text-2xl w-auto rounded-lg">Welcome To My Portfolio</span>
            <h1 className="text-8xl my-4">Hi!!! I'm Sourav</h1>
            <p>Full Stack Software Developer</p>
        </div>
        <motion.div 
          className="w-1/5"
          animate={{ y: [0, -20, 0],rotate: [0, 3, -3, 0] }}
          transition={{
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={astroImage} alt=""  />
        </motion.div>
      </div>
    </section>
  )
}

export default Home