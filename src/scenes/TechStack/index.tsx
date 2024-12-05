import { motion } from "framer-motion";
import SkillCard from "../../components/SkillCard";
import reactLogo from "../../assets/react.png";
import NodeLogo from "../../assets/node.png";
import jsLogo from "../../assets/js.png";
import dockerLogo from "../../assets/docker.png";
import cicdLogo from "../../assets/ci-cd.png"
import githubLogo from "../../assets/github.png"
import mongoDBLogo from "../../assets/mongoDB.png"
import mysqlLogo from "../../assets/mysql.png"
import nextJsLogo from "../../assets/nextjs-icon.png"
import postgresLogo from "../../assets/postgres.png"
import redisLogo from "../../assets/redis.png"
import reduxLogo from "../../assets/redux.png"

const TechStack = () => {
    return (
        <div className="my-4 mt-10 techstack_custom relative">
            <h1 className="text-white text-center font-extrabold text-6xl underline mb-10">
                My Skill Constellation
            </h1>
            <div className="w-full flex justify-center items-center">
                <motion.div
                    className="w-3/4 mx-4 h-[500px] relative flex justify-center items-center"
                // animate={{ rotate: 360 }}
                // transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <motion.div
                        className="absolute top-[2%] left-[34%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"React"} customCss={"custom_color_planet_react w-24"} image={reactLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute top-[4%] left-[7%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Node"} customCss={"custom_color_planet_node w-24"} image={NodeLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute top-[13%] left-[54%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Javascript"} customCss={"custom_color_planet_JS w-24"} image={jsLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute top-[40%] left-[41%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Docker"} customCss={"custom_color_planet_docker w-24"} image={dockerLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute top-[12%] right-[4%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"CI-CD"} customCss={"custom_color_planet_docker w-24"} image={cicdLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[4%] right-[19%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Github"} customCss={"custom_color_planet_github w-24"} image={githubLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[50%] right-[20%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"MongoDB"} customCss={"custom_color_planet_mongodb w-24"} image={mongoDBLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute left-[0%] bottom-[2%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"MySql"} customCss={"custom_color_planet_mysql w-24"} image={mysqlLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute right-[0%] bottom-[20%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"NextJs"} customCss={"custom_color_planet_nextjs w-24"} image={nextJsLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute top-[65%] left-[25%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Postgres"} customCss={"custom_color_planet_postgres w-24"} image={postgresLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute top-[39%] left-[6%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Redis"} customCss={"custom_color_planet_redis w-24"} image={redisLogo} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[0%]"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <SkillCard name={"Redux"} customCss={"custom_color_planet_redux w-24"} image={reduxLogo} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
