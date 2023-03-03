const Bottom = ({NumButtom, iconButtom, buttomPulsated, selectorPanel})=>{
    return(
        <button className={`section ${buttomPulsated[NumButtom] ? `sectionActive` : ``}`} onClick={()=>{selectorPanel(NumButtom)}}>
            <img src={iconButtom} alt="person" className={`icon icon_section ${buttomPulsated[NumButtom] ? `iconActive` : ``}`} />
            <div className={`indicator indicator--1 ${buttomPulsated[NumButtom] ? `active` : ``}`}></div>
        </button>
    )
}

export default Bottom;