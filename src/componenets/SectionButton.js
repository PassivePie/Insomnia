const SectionButton = ({directName, className, href}) => {
    return (
        <a className="text-white font-bold" href={href}>
            {directName}
        </a>
    )
}

export default SectionButton
