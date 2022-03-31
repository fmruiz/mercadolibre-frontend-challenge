import { FC } from 'react'
import './ProductListItem.styles.scss'

import Shipping from '../../assets/shipping.png'

export const ProductListItem: FC = () => {
    return (
        <div className='product-list-item'>
            <div className='product-list-item__container'>
                <img className='product-list-item__image' alt='product-list-image'/>
                <div className='product-list-item__description'>
                    <div className='product-list-item__container-price'>
                        <div className='product-list-item__shipping'>
                            <span className='product-list-item__price'>$ 1.980</span>
                            <img src={Shipping} />
                        </div>
                        <span className='product-list-item__location'>Capital Federal</span>
                    </div>
                    <p className='product-list-item__title'>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico</p>
                </div>
            </div>
        </div>
    )
}
