import React, { useState } from 'react'
import './styles.css'
import { Card } from "../../components/Card"
import {FiSearch} from 'react-icons/fi';

export function Home() {
  const [characterCardName, setCharacterCardName] = useState("");
  let [characterCard, setCharacterCard] = useState({});

  async function serchForCharacter() {
    if(characterCardName === ''){
      alert("Preencha algum nome!")
      return;
    }
    try{
      const response = await fetch('http://hp-api.herokuapp.com/api/characters')
      const data = await response.json()
      for (let i in data) {
        /* if(characterCardName != data[i].name){
          alert("Nome escrito errado!")
          return;
        } */
        if(data[i].name == characterCardName){
          setCharacterCard(data[i]);
        }
      }
    }
    catch{
      alert("Erro ao buscar.")
      setCharacterCardName(""); 
    } 
  }

  return (
    <div className="container">
      <header>
        <img src="/assets/img/harry-potter-logo-2.png" alt="logo" />
        <div className='line'></div>
      </header>
      <main>
        <h1>Search about your favorite character!!!!!</h1>
        <section className='inputButton'>
          <input
            type="text"
            placeholder="Type here..."
            onChange={e => setCharacterCardName(e.target.value)}
           />
           <button type='button' onClick={serchForCharacter}>
            <FiSearch size={25} color="#000"/>
           </button>
        </section>
         {Object.keys(characterCard).length > 0 && (
            <Card
              name={characterCard.name}
              image={characterCard.image}
              house={characterCard.house}
            />
         )}
      </main>
    </div>
  )
}


{/* {Object.keys(cep).length > 0 && ()} */}