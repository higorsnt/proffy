import React from 'react';

import './styles.css';

import whastappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/40602956?s=460&u=079b6f0f87e03d57e31081bba7c7809c7c9c14b8&v=4" alt="Higor" />
        <div>
          <strong>Higor Santos</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já
        passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
