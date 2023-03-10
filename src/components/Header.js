import React from 'react'
import { Link } from 'react-router-dom'
import '../cssfiles/Header.css'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="logo">GradeItUp</div>
                <div className="nav-items">
                    <div className="left">
                        <div>
                            <Link className="anchor" to={"/"}>Home</Link>
                        </div>
                        <div>
                            <Link className="anchor" to={"/about"}>About Us</Link>
                        </div>
                        <div>
                            <Link className="anchor" to={"/contactus"}>Contact Us</Link>
                        </div>
                    </div>
                    <div className="right">
                        {/* <div>
                            <span className="anchor" onClick={""}>Admin</span>
                        </div> */}
                        {/* <div>
                            <Link className="anchor" to={'/signup'}>SignUp</Link>
                        </div> */}
                        <div>
                            <Link className="anchor" to={'/login'}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header