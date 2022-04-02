import { FC, useState } from "react";
import "./SearchBar.styles.scss";

import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import { getAllProducts } from "../../store/actions";
import { useDispatch } from "react-redux";

export const SearchBar: FC = () => {
    const [query, setQuery] = useState<string>("");

    const dispatch = useDispatch();

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    };

    return (
        <header className="search">
            <div className="search__layout">
                <img className="search__image" src={Logo} alt="logo" />
                <div className="search__input__container">
                    <input
                        className="search__input"
                        placeholder="Nunca dejes de buscar"
                        onChange={(e) => getInputValue(e)}
                    />
                    <div
                        className="search__icon-container"
                        onClick={() => dispatch(getAllProducts(query))}
                    >
                        <img className="search__icon" src={Search} alt="search-icon" />
                    </div>
                </div>
            </div>
        </header>
    );
};
