import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import {useLocation} from 'react-router-dom';
// import Carousel from '../components/Carousel';
import Card from '../components/Card';

function Home() {
    const [search, setSearch] = useState('')
    const [foodItem, setFoodItem] = useState([])
    const [foodCategory, setFoodCategory] = useState([])
    // const location = useLocation();

    const loadData = async() => {
        let response = await fetch("http://localhost:5000/api/fooddata", {
            method: "POST",
            headers : {
                'Content-type' : 'application/json'
            },
        })
        response = await response.json()
        setFoodItem(response[0])
        setFoodCategory(response[1])
        // console.log(response[0], response[1])
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <div className='carousel_container_width'>
                <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
                <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
                    <div className="carousel__snapper">
                        <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
                        <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
                    </div>
                </li>
                <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
                    <div className="carousel__snapper">
                        <a href="#carousel__slide1" className="carousel__prev">Go to last slide</a>
                        <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
                    </div>
                </li>
                <li id="carousel__slide3" tapIndex="0" className="carousel__slide">
                    <div className="carousel__snapper">
                    <a href="#carousel__slide2" className="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
                    </div>
                </li>
                <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
                    <div className="carousel__snapper">
                    <a href="#carousel__slide3" className="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide1" className="carousel__next">Go to next slide</a>
                    </div>
                </li>
            </ol>
            <aside className="carousel__navigation">
                <ol className="carousel__navigation-list">
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
                    </li>
                </ol>
            </aside>
            <div className="carousel__search">
                <input type="text" placeholder="Search" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                <button type="submit">Search</button>
            </div>
        </section>
            </div>
            <div className="card_container">
                {
                    (foodCategory.length !== 0) ? foodCategory.map((data) => {
                        // console.log(data)
                        return (<> 
                        <hr/>
                        <div className='Category_header' key={data._id}>{data.CategoryName}</div>
                        {(foodItem.length !== 0) ? (foodItem.filter(((item) => ((item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))))).map((filter_item) => {
                            return <>
                            <div className='Category_item'key={filter_item._id}><Card foodItemsList={filter_item} options={filter_item.options[0]}/>
                            {console.log("hey" + filter_item)}
                            </div>
                            </>
                        })) : <div>No Such Data Found</div>}
                        <hr />
                        </>)
                    }): ""
                }
            </div>
            <Footer></Footer>
        </>   
    );
}

export default Home;