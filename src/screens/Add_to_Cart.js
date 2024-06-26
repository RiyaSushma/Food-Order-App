import './Add_to_Cart.css';
import React from 'react';
import { useStateValue } from '../context';
import { useNavigate } from 'react-router-dom';

function Add_to_Cart() {
    const [{cart}, dispatch] = useStateValue();
    const userdata = JSON.parse(localStorage.getItem("user"));
    console.log("userdata", userdata)
    async function empty_cart() {
        await dispatch({
            type : 'EMPTY_CART',
            cart: []
        })
        const response = await fetch("http://localhost:5000/api/cartuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"emailId": userdata.emailId, "cart": cart})
        })
        const json = await response.json();
        if(!json.success) {
            alert("Enter Valid Data")
        }
    }

    async function remove_from_cart(e) {
        await dispatch({
            type: 'REMOVE_FROM_CART',
            cart: e.target.value
        })
        if (!cart || !cart.foodItemsList || !cart.foodItemsList.CategoryName) {
            console.error("Cart or foodItemsList or CategoryName is undefined");
            return;
        }
        const response = await fetch("http://localhost:5000/api/cartuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"emailId": userdata.emailId, "cart": cart})
        })
        const json = await response.json();
        if(!json.success) {
            alert("Enter Valid Data")
        }
    }
    const navigate = useNavigate();

    const handleEmptyCartFill = () => {
        navigate('/');
    }

    return (
        <div className='container'>
            <nav id="navbar">
                <a href="/"><img className="navbar-brand" src="/logo_app.png" alt="logo.png"></img></a>
                {/* <img className="home__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/120px-Home-icon.svg.png"></img> */}
                <div className='home_button_data'><a href="/">Home</a></div>
            </nav>
            {cart && cart.length > 0 && cart.map((item, index) => ( 
                <div className="Item_container_cart" key={index}>
                    {console.log(item.foodItemsList.img)}
                    <img src={item.foodItemsList.img} className="Item_img_cart" alt="..." />
                    <div className="Item_body_cart">
                        <div className="Item_header_cart">
                            <h5 className="Item_name_cart">{item.foodItemsList.name}</h5>
                            <p className="Item_text_cart">{item.foodItemsList.description}</p>
                        </div> 
                        <div className="Item_info_container_cart">
                            <div className="Item_info_cart">
                                <div className='Item_count'></div>
                                <div className="Item_Price_cart"><h3>Price: ₹{item.totalPrice}</h3>
                                </div>
                            </div>
                        </div>
                        <button className="Item_add_button_cart remove_cart" onClick={remove_from_cart}><img src="/basket-cart-icon.png" />Remove from Cart</button>
                    </div>
                </div>
        ))}
        {
            (cart.length === 0) ? (
                <>
                    <div className='empty_cart div_empty'>Cart is Empty!!!</div>
                    <button className="Item_add_button_cart empty_cart" onClick={handleEmptyCartFill}><img src="/basket-cart-icon.png" />Add To Cart</button>
                </>
            ):  <button className="Item_add_button_cart empty_cart" onClick={empty_cart}><img src="/basket-cart-icon.png" />Empty Cart</button>
        }
        </div>
    )
}

export default Add_to_Cart;