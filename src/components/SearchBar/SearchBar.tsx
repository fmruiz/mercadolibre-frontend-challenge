import { FC } from 'react'
import './SearchBar.styles.scss'

import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'

export const SearchBar: FC = () => {
    return (
        <div className='search'>
            <div className='search__layout'>
                <img className='search__image' src={Logo} />
                <div className='search__input__container'>
                    <input className='search__input' placeholder='Nunca dejes de buscar' />
                    <div className='search__icon__container'>
                        <img className='search__icon' src={Search} />
                    </div>
                </div>
            </div>
        </div>
    )
}
