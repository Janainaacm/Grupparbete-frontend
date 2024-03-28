import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import "./ShoppingCart.css"
import useGetAllRecipes from '../../api/getAllRecipes'
import { useCartStateInterface } from '../../state/Cart'


interface ShoppingCartProps {
    visibility: any,
    products: any,
    onProductRemove: any,
    onClose: any,
    onQuantityChange: any,
    onProductAdd: any
};

const ShoppingCart = ({
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
    onProductAdd
}: ShoppingCartProps) => {

    const { cart, ClearCart } = useCartStateInterface();

      const sum = cart.reduce((n, {price}) => n + price, 0)
      
      console.log("sum",cart.reduce((n, {price}) => n + price, 0));
    



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

                    {/* {cart.map((product, index) => {
                        // Filtrera cart arrayen för att hitta produkter med samma ID
                        const sameIdProducts = cart.filter((p) => p._id === product._id);

                        // Räkna antalet produkter med samma ID
                        const quantity = sameIdProducts.length;

                        // Om det är första förekomsten av produkten, visa produktens titel och antal
                        if (index === cart.findIndex((p) => p._id === product._id)) {
                            return (
                                <div key={product._id}>
                                    <img className='product-image' src={product.imageUrl} alt={product.title} />
                                    {product.title} {quantity > 1 && <span>({quantity})</span>}
                                    <RemoveFromCartButton recipe={product}></RemoveFromCartButton>
                                </div>
                            );
                        }

                        // Om det inte är första förekomsten av produkten, returnera null för att undvika att produkten dupliceras
                        return null;
                    })} */}

                    {products.map((product, index) => {

                        const sameIdProducts = products.filter((p) => p._id === product._id);

                        const quantity = sameIdProducts.length;


                        if (index === products.findIndex((p) => p._id === product._id)) {
                            return (
                                <div className='cart-product' key={index}>

                                    <div className='product-info'>

                                        <h3>{product.title}</h3>
                                        <img className='product-image' src={product.imageUrl} alt={product.title} />
                                        <h5>Ingredienter</h5>
                                        {product.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>

                                        ))}
                                        <br />


                                        <span className='product-price'>Pris: {product.price * quantity} Sek</span>

                                    </div>

                                    {/* <select
                                        className='count'
                                        value={quantity}
                                        onChange={(event) => {
                                            onQuantityChange(product._id, event.target.value);
                                        }}>
                                        {
                                            [...Array(100).keys()].map(number => {
                                                const num = number + 1;
                                                return <option value={num} key={num}>{num}</option>
                                            })
                                        }
                                    </select> */}
                                    <p>Antal: {quantity}</p>
                                    <button className='remove-button' onClick={() => onProductRemove(product._id)}>-</button>
                                    <button className='remove-button' onClick={() => onProductAdd(product)}>+</button>


                                    <br /><br />

                                </div>
                            );

                        } return null

                    })}

                    {/* {products.map((product, index) => (
                        <div className='cart-product' key={index}>

                            <div className='product-info'>

                                <h3>{product.title}</h3>
                                <img className='product-image' src={product.imageUrl} alt={product.title} />
                                <h5>Ingredienter</h5>
                                {product.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>

                                ))}


                                <span className='product-price'>Pris i Sek</span>

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
                            <button className='remove-button' onClick={() => onProductRemove(product._id)}><RiDeleteBin6Line size={20} /></button>

                            <br /><br />

                        </div>
                    ))} */}
                    {products.length > 0 && <div className='checkout-clear'>
                        <h3>Totalt pris: {sum}</h3>
                        <br />
                        <button className='check-out'>Köp knapp</button>
                        <button onClick={onClose}>Fortsätt handla</button>
                        <button onClick={ClearCart}>Töm varukorg</button></div>
                    }
                </div>







            </div>
        </div>
    )
}

export default ShoppingCart
