import React from 'react'
import { Link } from 'react-router-dom'

//Ejemplo de cómo crear un componente dentro de otro y No exportarlo sino usarlo internamente
const CharactersByHero = ({ alter_ego, characters }) => {
  return (alter_ego === characters) ? <></> : <p>{characters}</p>
}

export const HeroCard = (
  {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }
) => {

  return (
    <div className='col'>
      <div className='card'>
        <div className="row no-gutters">
          <div className='col-4'>
            <img src={`/assets/heroes/${id}.jpg`} className='card-img' alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                {superhero}
              </h5>
              <p className='card-text'>{alter_ego}</p>

              {/* {
                (alter_ego !== characters) && (<p>{characters}</p>)
              } */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className='card-text'>{first_appearance}</p>
              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
