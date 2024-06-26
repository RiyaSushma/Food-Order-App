import React from 'react';
import './Carousel.css';

function Carousel() {
    return (
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
                <input type="text" placeholder="Search" name="search"></input>
                <button type="submit">Search</button>
            </div>
        </section>
    )
}

export default Carousel;

