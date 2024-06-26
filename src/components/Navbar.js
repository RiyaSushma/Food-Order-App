import React, {useEffect} from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../context';


function Navbar() {
    const [{user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("user");
        console.log("User from localStorage:", userFromLocalStorage);
        const user = JSON.parse(userFromLocalStorage);
        console.log("user", user)
        // const user = JSON.parse(localStorage.getItem("user"));
        if(user) {
            dispatch({
                type: 'SET_USER',
                user: user
            })
        }
    }, [dispatch])

    function handleSubmit() {
        console.log("hello data", localStorage.getItem("authToken"))
        localStorage.removeItem("authToken");
        navigate('/');
        dispatch({
            type: 'SET_USER',
            user: null,
        })
    }

    return (
        <nav id="navbar">
            <a href="/"><img className="navbar-brand" src="/logo2.png" alt="logo.png"></img></a>
                    {/* <img className="home__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/120px-Home-icon.svg.png"></img> */}
                    <div className='home_button_data'><a href="/">Home</a></div>
                <div className="button-home">
                        {user===null && (
                            <>
                            <Link className="login_button" to="/login" style={{marginRight: "20px", color: "white", textDecoration: "none", fontSize: "18px", fontFamily: 'Verdana', fontWeight: "500"}} >Login
                            </Link>
                            <Link className="signup_button" to="/signup" style={{color: "white", textDecoration: "none", fontSize: "18px", fontFamily: 'Verdana', fontWeight: "500"}}>SignUp
                            </Link></>
                        )}
                        {user!==null && (
                            <>
                            <button className="logout_button"  style={{marginRight: "20px", color: "white", textDecoration: "none", fontSize: "18px", fontFamily: 'Verdana', fontWeight: "500"}} onClick={handleSubmit}>Logout
                            </button>
                                <Link to="/add_to_cart" href="https://www.google.com/search?sca_esv=c5f02fd2b2be415a&rlz=1C1UEAD_enIN999IN999&sxsrf=ACQVn09OQBUYe_ABgTfo14v0rTj8mhbU6A:1709614411495&q=cart&tbm=isch&source=lnms&sa=X&ved=2ahUKEwigucz9qdyEAxVEa2wGHcGUDlEQ0pQJegQIDRAB&biw=767&bih=728&dpr=1.25#imgrc=o2Kt2JR-ptE9FM" className="cart_button"
                                ><img src="/basket-cart-icon.png"  alt="basket.png" style={{marginTop: "2px", width: "25px", height: "23px"}} /><h5>Cart</h5></Link>
                            </>
                    )}
                </div>

        </nav>
    );
}

export default Navbar;
