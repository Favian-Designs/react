import './App.css';
import './css/header.css'
import './css/responsive.css'

// Iconos de los botones
import iconContact from './assets/icon/contact.svg';
import iconPerson from './assets/icon/person.svg';
import iconWork from './assets/icon/business.svg';
import iconKnowledge from './assets/icon/idea.svg';

import Cppanel from './components/panel.jsx';
import ButtomSection from './components/buttomSection.jsx';

import { useState } from "react";

let activeIndicator = [];

function App() {
  // Hooks de Paneles {Verificar si se puede simplificar mas}
  const [section0,setSection0] = useState(false);
  const [section1,setSection1] = useState(true)
  const [section2,setSection2] = useState(false)
  const [section3,setSection3] = useState(false)
  let sectionP = [section0,section1,section2,section3]
  let setSectionP = [setSection0,setSection1,setSection2,setSection3]

  // Determinar que panel se a pulsado, y deseleccionar los demas
  const selectPanel = (numPanel)=>{
    for(let i in setSectionP){
      setSectionP[i](false);
    }
    setSectionP[numPanel](true);
  }

  // Seleccionar Panel
  const setPanel = (buttomSelect)=>{
    for (let i in buttomSelect) {
      if (buttomSelect[i] == true) {
        return i;
      }
    }
  }

  return (
    <div className="App">
      <header className='header'>
        <button className={`item_header section-contacts`} onClick={()=>{selectPanel(0)}}>
          <img src={iconContact} alt="contact" className="icon" />
        </button>
        <div className="item_header section-menu">
          <ButtomSection 
            NumButtom = {1}
            iconButtom = {iconPerson}
            buttomPulsated = {sectionP}
            selectorPanel = {selectPanel}
          />
          <ButtomSection 
            NumButtom = {2}
            iconButtom = {iconWork}
            buttomPulsated = {sectionP}
            selectorPanel = {selectPanel}
          />
          <ButtomSection 
            NumButtom = {3}
            iconButtom = {iconKnowledge}
            buttomPulsated = {sectionP}
            selectorPanel = {selectPanel}
          />
        </div>
      </header>
      <Cppanel section={setPanel(sectionP)} />
    </div>
  );
}

export default App;
