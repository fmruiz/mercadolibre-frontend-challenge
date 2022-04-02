import { FC } from "react";
import "./BreadCrumb.styles.scss";

export const BreadCrumb: FC = () => {
  return (
    <p className="breadcrumb">
      Electronica, Audio y Video {">"} Ipod {">"} Reproducciones
    </p>
  );
};
