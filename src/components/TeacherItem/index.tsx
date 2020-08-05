import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars2.githubusercontent.com/u/66440354?s=460&u=dd9281e86dd834e7d2aa60b8775e33f76dc66c80&v=4'
          alt='Arthur Luis'
        />
        <div>
          <strong>Arthur Luis</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        quaerat voluptatem? Vitae, perspiciatis dignissimos libero ipsam quo
        maiores distinctio facilis veniam. Sint vitae obcaecati rem repellat
        iure ipsam, libero debitis.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong> R$ 80,0</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
