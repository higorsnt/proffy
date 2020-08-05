import React from 'react';

import './styles.css';

import whastappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }: TeacherItemProps) => {
  function createNewConnection() {
    api.post('connections', { 
      user_id: teacher.id, 
    });
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>
            R$
            {teacher.cost}
          </strong>
        </p>
        <a 
          target="_blank" 
          onClick={createNewConnection} 
          href={`https://wa.me/${teacher.whatsapp}`} 
          type="button"
        >
          <img src={whastappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
