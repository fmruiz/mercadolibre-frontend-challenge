import { FC } from "react";
import "./NotResultsFound.styles.scss";
import {
  NOT_FOUND_TITLE,
  NOT_FOUND_LIST_ONE,
  NOT_FOUND_LIST_TWO,
} from "./constants";

export const NotResultsFound: FC = () => {
  return (
    <div className="not-result">
      <h4 className="not-result__title">{NOT_FOUND_TITLE}</h4>
      <ul className="not-result__list">
        <li>{NOT_FOUND_LIST_ONE}</li>
        <li>{NOT_FOUND_LIST_TWO}</li>
      </ul>
    </div>
  );
};
