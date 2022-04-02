import { FC } from 'react'
import './ProductDetails.styles.scss'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

export const ProductDetails: FC = () => {

    const { itemId } = useParams();
    const { productsData } = useSelector((state: RootState) => state.products);

    console.log(productsData?.items.find((e: any) => e.id === itemId));

    return (
        <div className='product-details'>
            <div className='product-details__price-container'>
                <img className='product-details__image' alt='product-image'/>
                <div className='product-details__text-container'>
                    <span className='product-details__sold'>Nuevo - 234 vendidos</span>
                    <h2 className='product-details__title'>Deco Reverse Sombrero Oxford</h2>
                    <span className='product-details__price'>$ 1.980</span>
                    <button className='product-details__button'>Comprar</button>
                </div>
            </div>
            <div className='product-details__description-container'>
                <p className='product-details__subtitle'>Descripcion del producto</p>
                <span className='product-details__description'></span>
            </div>
        </div>
    )
}
