import { FC } from "react";
import './NotResultsFound.styles.scss'

export const NotResultsFound: FC = () => {
  return (
    <div className="not-result">
        <h4 className="not-result__title">No hay publicaciones que coincidan con tu busqueda.</h4>
        <ul className="not-result__list">
          <li>Revisá la ortografía de la palabra.</li>
          <li>Utilizá palabras más genéricas o menos palabras.</li>
        </ul>
    </div>
  );
};
