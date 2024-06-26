import React, {useEffect, useState} from "react";
import "./Card.css";
import { useStateValue } from "../context";


function Card(props) {
    const options = props.options;
    const priceOption = Object.entries(options);
    const [selectedCount, setSelectedCount] = useState(1);
    const [selectedOption, setSelectedOption] = useState(parseInt(priceOption[0][1]));
    const [total_Price, setTotal_Price] = useState(parseInt(selectedCount*selectedOption))
    const [{cart}, dispatch] = useStateValue();
    const user = JSON.parse(localStorage.getItem("user"));
    const new_cart = {
        ...props, 
        totalPrice: total_Price,
        option: selectedOption,
        count: selectedCount
    }
    async function add_to_cart() {
        await dispatch({
            type: 'ADD_TO_CART',
            item: new_cart
        })
        // console.log("cart", updated_cart)
        console.log("user", user.emailId);
        const response = await fetch("http://localhost:5000/api/cartuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"emailId": user.emailId, "cart": cart})
        })
        const json = await response.json();
        if(!json.success) {
            alert("Enter Valid Data")
        }
        console.log("www", cart)


    }

    function handleCount(e) {
        setSelectedCount(parseInt(e.target.value));
        console.log(selectedCount);
    }

    function handleOption(e) {
        setSelectedOption(parseInt(e.target.value));
        console.log(selectedOption)
    }

    // useEffect(() => {
    //     const cards = document.querySelectorAll('.Item_container')
    //     let max_height = 0;
    //     cards.forEach(card => {
    //         max_height = Math.max(max_height, card.offsetHeight)
    //     });

    //     cards.forEach(card => {
    //         card.style.height = `${max_height}px`
    //     });
    // }, [])
    useEffect(() => {
        console.log("Ting Ting" + props.foodItemsList)
        console.log("hello", priceOption[0][1])
        // console.log("log", total_Price)
        console.log("count", selectedCount)
    }, [])

    useEffect(() => {
        // const total_Price = selectedOption*selectedCount;
        setTotal_Price(parseInt(selectedCount*selectedOption))
    }, [selectedCount, selectedOption])
    return (
        <div className="Item_container">
                    <img src={props.foodItemsList.img} className="Item_img" alt="..." />
                    <div className="Item_body">
                        <div className="Item_header">
                            <h5 className="Item_name">{props.foodItemsList.name}</h5>
                            <p className="Item_text">{props.foodItemsList.description}</p>
                        </div> 
                        <div className="Item_info_container">
                            <div className="Item_info">
                                <select className="Item_count" onChange={handleCount}>
                                    {/* here e is the element at current index and i is the index of current element */}
                                    {(Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key= {i+1} value={i+1} > {i+1}</option>
                                            // This is because array starts from index 0, therefore in order to access all elements i+1 is done
                                        )
                                    }))}
                                </select>
                                <select className="Item_quantity" onChange={handleOption}>
                                    {priceOption.map(([keys, values]) => {
                                        return <option key={keys} value={values}>{keys} : {values}</option>
                                    })}
                                </select>
                                <div className="Item_Price"><h3>Price: ₹{total_Price}</h3>
                                </div>
                            </div>
                            <button className="Item_add_button" onClick={add_to_cart}><img src="/basket-cart-icon.png" />Add to Cart</button>
                        </div>
                    </div>
                </div>
    )
}

export default Card;