import React from 'react'

export default function Project({projet}) {
  return (
    <div>
      <div className="projet-content">
        <h1>{projet.title}</h1>
        <div className="projet-languages">
          <img src={projet.languages1} alt="logo languages" className='max-h-12 max-h-12 object-contain'/>
          <img src={projet.languages2} alt="logo languages" className='max-h-12 max-h-12 object-contain'/>
          <img src={projet.languages3} alt="logo languages" className='max-h-12 max-h-12 object-contain'/>
        </div>
        <p>{projet.infos}</p>
        <p className="date">{projet.date}</p>
        <div className="button-link">
          <a href={projet.github}>Voir le code</a>
          <a href={projet.website}>Voir le projet</a>
        </div>
      </div>
      <div className="projet-img">
        <img src={projet.img} alt={projet.title} />
      </div>
    </div>
  )
}
