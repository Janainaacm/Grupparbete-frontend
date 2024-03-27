import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import "./ShoppingCart.css"
import useGetAllRecipes from '../../api/getAllRecipes'

interface ShoppingCartProps {
    visibility: any,
    products: any,
    onProductRemove: any,
    onClose: any,
    onQuantityChange: any
};

const ShoppingCart = ({
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}: ShoppingCartProps) => {

    

    return (
        <div id='modal' style={{ display: visibility ? "block" : "none", }}>

            <div className='shoppingCart'>

                <div className='header'>

                    <h2>Shopping Cart</h2>

                    <button className='close-button' onClick={onClose}><AiFillCloseCircle size={30} /></button>

                </div>
                <div className='cart-products'>
                    {products.length === 0 && (
                        <span className='empty-text'>Your basket is empty
                        </span>
                    )}
                    {products.map((product, index) => (
                        <div className='cart-product' key={index}>
                            
                            <div className='product-info'>
                                
                                <h3>{product.title}</h3>
                                <img className='product-image' src={product.imageUrl} alt={product.title} />
                                <h5>Ingredienter</h5>
                                {product.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                                    
                                ))}
                                

                                <span className='product-price'>Pris i Sek</span>
{/*                             <button key={index} className='remove-button' onClick={() => onProductRemove(product._id)}><RiDeleteBin6Line size={20} /></button>
 */}                                
                            </div>
                            
                            <select
                                className='count'
                                value={product.count}
                                onChange={(event) => {
                                    onQuantityChange(product._id, event.target.value);
                                }}>
                                {
                                    [...Array(10).keys()].map(number => {
                                        const num = number + 1;
                                        return <option value={num} key={num}>{num}</option>
                                    })
                                }
                            </select>
                            <button key={index} className='remove-button' onClick={() => onProductRemove(product._id)}><RiDeleteBin6Line size={20} /></button>

                            <br /><br />

                        </div>
                    ))}
                    {products.length > 0 && <div className='checkout-clear'><button className='check-out'>Köp knapp</button>
                    <button>Fortsätt handla</button> 
                    <button>Töm varukorg</button></div>
                    }
                </div>







            </div>
        </div>
    )
}

export default ShoppingCart
