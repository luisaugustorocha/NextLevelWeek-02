import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/42579774?s=60&v=4" alt="Foto do perfil"/>
        <div>
          <strong>Luís Augusto</strong>
          <span>Analista de Sistemas</span>
        </div>
      </header>

      <p>
        Entusiasta em tecnologia e apaixonado por futebol.
        <br/><br/>
        Empolgado com todo o projeto a ser desenvolvido.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>  
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;