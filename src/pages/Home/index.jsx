import React, { useState } from 'react'
import './styles.css'
import { Card } from "../../components/Card"
import {FiSearch} from 'react-icons/fi';

export function Home() {
  const [characterCardName, setCharacterCardName] = useState("");
  let [characterCard, setCharacterCard] = useState({});

  async function searchForCharacter() {
    if(characterCardName === ''){
      alert("Preencha algum nome!");
      return;
    }
    try{
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await response.json();
      for (let i in data) {
        if(data[i].name.toLowerCase().includes(characterCardName) || 
        data[i].house.toLowerCase().includes((characterCardName))) {
          setCharacterCard(data[i]);
        }
      }
    }
    catch{
      alert("Erro ao buscar.");
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
        <h1>Search about your favorite character!</h1>
        <section className='inputButton'>
          <input
            type="text"
            id='input'
            placeholder="Type here..."
            onChange={e => setCharacterCardName(e.target.value)}
           />
           <button type='button' onClick={searchForCharacter} id='button'>
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