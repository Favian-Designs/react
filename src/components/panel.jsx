import '../css/panel.css';
import '../css/responsive.css'
import iconDisplace from '../assets/images/desplazar.png';
import { useState } from 'react';

const Cppanel = ({section})=>{
    let text1Section1 = 'Favian Designs';
    let text2Section1 = 'Yo soy un desarrollador web';
    const outText = (text,textProperty)=>{
        let descomprimir = text.split("");
        let salida = [];
        for (let i in descomprimir) {
            salida[i] = 
            <span key={i}
            className={`${textProperty}`} 
            style={{animationDelay: `${i/4}s`}}>
                {descomprimir[i]}
            </span>
        }
        return salida
    }
    let section0 = (
        <div className={`panels1`}>
            <div className='panel panel-0'>
            <div className='contanier_contacts'>
                <p className='tittle_contacts'>Estas listo para contactarme?</p>
                <div className='box_qr'>
                    <div className='qr'></div>
                </div>
                <div className='targets_contact'>
                    
                    <a href='https://www.instagram.com/favian.designs/' className='contact_target contact--1'>
                        <p className='text_contact'>Instagram: <br /> @favian.designs</p>
                    </a>
                    <a href='https://wa.me/message/LD4LNROJC7TVJ1' className='contact_target contact--2'>
                        <p className='text_contact'>WhatsApp: <br /> 0412-7234710</p>
                    </a>
                    <a href='https://mail.google.com/mail/u/3/?ogbl#inbox?compose=GTvVlcSBpgRPVGnSStKQGWlSfkZMGfkrMBLVblpHTnvCRpDTgLtffwZvCdQwtWcPWwSlgWRRlsnNs' className='contact_target contact--3'>
                        <p className='text_contact'>Gmail: <br /> faviandesigns<br />@gmail.com</p>
                    </a>
                </div>
            </div>    
            </div>
        </div>
    )
    let section1 = (
        <div className={`panels2`}>
            <div className={`panel panel-0`}>
                <div className='logoBox'>
                    <div className='logo' alt="Favian Designs" />
                </div>
                <h1 className='textPanel tittleName'>
                    {outText(text1Section1,'tittle')}
                </h1>
                <h2 className='textPanel Subtittle'>{outText(text2Section1,'subtittleLetra')}</h2>
                <p className='textPanelP'>Estas buscando quien te ayude a conseguir una pagina web que te represente? Acabas de llegar al lugar correcto!!</p>
                <a href="#panel2" className='iconDisplaceBox'>
                    <img className='iconDisplace' src={iconDisplace} alt="displace" />
                </a>
            </div>
            <div className={`panel panel-1`} id="panel2">
                <div className='contentPanel1'>
                    <div className='fotoBox'>
                        <div className='itemsPanel'>
                            <p className='textpanel2'>Mi nombre es Favian Rodriguez, estudio el desarrollo de webs desde hace 2 años desde que me gradue en una escuela tecnica especializandome en el area de la informatica, y segui aprendiendo sobre las diferentes areas de la programacion, actualmente me encuentro en proceso de crear mi propia marca, dedicada al desarrollo de todo tipo de proyectos que usted tenga en mente, estoy a su servicio!</p>
                            <div className='elements front'>
                                <div className='iconSection1'>
                                    <div className="animationIcons animationIcons--1"></div>
                                    <div className='iconLenguaje iconLenguaje--1'></div>
                                </div>
                                <div className='iconSection1'>
                                    <div className='animationIcons animationIcons--2'></div>
                                    <div className='iconLenguaje iconLenguaje--2'></div>
                                </div>
                                <div className='iconSection1'>
                                    <div className='animationIcons animationIcons--3'></div>
                                    <div className='iconLenguaje iconLenguaje--3'></div>
                                </div>
                                <div className='iconSection1'>
                                    <div className='animationIcons animationIcons--4'></div>
                                    <div className='iconLenguaje iconLenguaje--4'></div>
                                </div>
                            </div>
                            <div className='elements back'>
                                <div className='iconSection1'>
                                    <div className='animationIcons animationIcons--5'></div>
                                    <div className='iconLenguaje iconLenguaje--5'></div>
                                </div>
                                <div className='iconSection1'>
                                    <div className='animationIcons animationIcons--6'></div>
                                    <div className='iconLenguaje iconLenguaje--6'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    // --------------------------------------------------
    
    let tittle = ['Mis Trabajos Realizados','Mis Proyectos Realizados'];
    let textP = ['Estas son algunas Paginas Webs que e realizado','Estos son algunos Proyectos que e realizado']
    let contentS2 = [['','','',''],['','','','']];

    let pages = {
    tittlePage: [
        'Pagina1',
        'Pagina2',
        'Pagina3',
        'Pagina4'
    ],
    descriptionPage: 'Haga click aqui',
    linkPage:[
        '#linkPage0',
        '#linkPage1',
        '#linkPage2',
        '#linkPage3'
    ]};
    let proyects = {
    tittleProyect: [
        'Proyect1',
        'Proyect2',
        'Proyect3',
        'Proyect4'
    ],
    descriptionProyect: 'Haga click aqui',
    linkProyect:[
        '#linkProyect1',
        '#linkProyect2',
        '#linkProyect3',
        '#linkProyect4'
    ]};

    for(let i in contentS2[0]){
        contentS2[0][i] = 
        <a key={`link-${i}`} href={pages.linkPage[i]} className='view' style={{animationDelay: `${i/8}s`}}>
						<div className='viewBack'></div>
            <div className='viewContent'>
                <h3 className='tlttleView'>{pages.tittlePage[i]}</h3>
                <p className='descriptionView'>{pages.descriptionPage}</p>
            </div>
        </a>
        contentS2[1][i] = 
        <a key={`link-${i}`} href={proyects.linkProyect[i]} className='view' style={{animationDelay: `${i/8}s`}}>
						<div className='viewBack'></div>
            <div className='viewContent'>
                <h3 className='tlttleView'>{proyects.tittleProyect[i]}</h3>
                <p className='descriptionView'>{proyects.descriptionProyect}</p>
            </div>
        </a>
    }

    const [tittleS2,setTittleS2]=useState(tittle[0])
    const [textPS2,setTextPS2]=useState(textP[0])
    const [pagesContentS2,setpagesContentS2]=useState(contentS2[0])
    
    const sectionBottom = (cambiar)=>{
        setTittleS2(tittle[cambiar]);
        setTextPS2(textP[cambiar]);
        setpagesContentS2(contentS2[cambiar])
    }

    let section2 = (
        <div className={`panel panel-0 section2p1`}>
            <div className='bottoms_section2'>
                <button className='buttom_section2' onClick={()=>sectionBottom(0)}>Trabajos</button>
                <button className='buttom_section2' onClick={()=>sectionBottom(1)}>Proyectos</button>
            </div>
            <h2 className='textPanel'>{tittleS2}</h2>
            <p className='textPanelP'>{textPS2}</p>
            <div className='links_view'>
                {pagesContentS2}
            </div>
        </div>
    )

// ----------------------------------------------------
    
    let section3 = (
        <div className={`panel panel-0 section3p1`}>
            <h2 className='textPanel'>Conocimientos</h2>
            <p className='textPanelP'>Estos son algunos de los conocimientos que tengo como desarrollador web.</p>
            <p className='textPanelP'>Haz click sobre las tarjetas para ver su contenido</p>
            <div className="targets">
                <div className='target'>
                    <div className="targetMove target--1"><h3>HTML</h3></div>
                    <h3 className='targetTittle'>HTML</h3>
                    <p className='targetDescription'>Conozco el lenguaje de maquetado HTML, siempre cuido el SEO de la pagina web para que tenga un posicionamiento muy alto en los buscadores como Google</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--2"><h3>CSS</h3></div>
                    <h3 className='targetTittle'>CSS</h3>
                    <p className='targetDescription'>Utilizo el lenguaje de Hojas de estilo a la perfeccion, puedo hacer diseños muy atraccivos para que su pagina web sea totalmente representativa para usted, tambien realizo diseños responsive para que su pagina se pueda visualizar en cualquier dispositivo</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--3"><h3>JavaScript</h3></div>
                    <h3 className='targetTittle'>JavaScript</h3>
                    <p className='targetDescription'>Utilizo a la perfeccion el lenguaje de programacion JavaScript, haciendo de su pagina muy interactiva, y que todas las funciones que usted necesite esten presente en la pagina web</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--4"><h3>React</h3></div>
                    <h3 className='targetTittle'>React</h3>
                    <p className='targetDescription'>Utilizo el framework React para diseñar paginas muy avanzadas para el cliente, utilizando diferentes librerias y apis para que pueda tener su pagina web en el menor tiempo posible</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--5"><h3>Python</h3></div>
                    <h3 className='targetTittle'>Python</h3>
                    <p className='targetDescription'>Utilizo el lenguaje de programacion python para el desarrollo interno de las paginas webs desde el lado del servidor, enlazando las bases de datos de su empresa con su pagina web para que tenga una pagina web muy completa</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--6"><h3>MySQL</h3></div>
                    <h3 className='targetTittle'>MySQL</h3>
                    <p className='targetDescription'>Desarrollo la base de datos de su pagina web, siempre dandole seguridad a su pagina web y verificando si tiene alguna falla de seguridad, corregirla de inmediato para que su web sea mucho mas segura y sus datos esten bien guardados</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--7"><h3>GitHub</h3></div>
                    <h3 className='targetTittle'>GitHub</h3>
                    <p className='targetDescription'>Trabajo utilizando repositorios en GitHub para trabajar en conjunto con otros desarrolladores</p>
                </div>
                <div className='target'>
                    <div className="targetMove target--8"><h3>PhotoShop</h3></div>
                    <h3 className='targetTittle'>Photoshop</h3>
                    <p className='targetDescription'>La imagenes que necesito editar o diseñar desde cero normalmente las trabajo en Photoshop</p>
                </div>
            </div>
        </div>
    )
    let menuSections = [section0,section1,section2,section3];
    return(
        <main className={`main`}>
            {menuSections[section]}
        </main>
    )
}

export default Cppanel;