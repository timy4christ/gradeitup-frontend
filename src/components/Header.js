import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../cssfiles/Header.css'

function Header({ isLogged, setisLogged }) {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        setisLogged(false);
        navigate("/login");
    }

    useEffect(() => {
        if (sessionStorage.getItem("id")) {
            setisLogged(true);
        }
    }, [])

    return (
        <div>
            <div className="header">
                <div className="logo">GradeItUp</div>
                <div className="nav-items">
                    <div className="left">
                        {
                            !isLogged ? (
                                <>
                                    <div>
                                        <Link className="anchor" to={"/"}>Home</Link>
                                    </div>
                                    <div>
                                        <Link className="anchor" to={"/about"}>About Us</Link>
                                    </div>
                                    <div>
                                        <Link className="anchor" to={"/contactus"}>Contact Us</Link>
                                    </div>
                                </>) : <></>
                        }
                    </div>
                    <div className="right">
                        {
                            isLogged ? (
                                <div>
                                    <div className="anchor" onClick={handleLogout}>Logout</div>
                                </div>) : <><div>
                                    <Link className="anchor" to={'/login'}>Login</Link>
                                </div></>
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header