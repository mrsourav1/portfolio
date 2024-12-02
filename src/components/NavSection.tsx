import { motion } from "motion/react";

interface Props {
  btn: string;
  selected?: boolean;
  onClick?: () => void;
}

const NavSection = ({ btn, selected, onClick }: Props) => {
  return (
    <motion.button
      className={`cursor-pointer w-auto text-center p-2 transition-all ${
        selected
          ? "bg-slate-300 rounded-full text-black"
          : "hover:bg-slate-100 hover:rounded-full hover:text-black"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {btn}
    </motion.button>
  );
};

export default NavSection;
