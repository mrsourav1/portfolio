type Props = {
    name:string
    image:string
    customCss:string
}

const SkillCard = ({image,name,customCss}: Props) => {
    return (
        <div className="w-fit text-center relative group">
            <div className={`${customCss}`}>
                <img src={image} alt="react_icon" className="p-2" />
            </div>
            <span className={`text-white font-extrabold text-xl absolute -top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300x`}>
                {name}
            </span>
        </div>
    )
}

export default SkillCard