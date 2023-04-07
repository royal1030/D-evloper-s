import React from "react"
import Logo from "./image/mix.jpg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav class="navbar">
                <div class="logo">ARG~COLLAB</div>
                <ul class="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div class="menu">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </div>

                </ul>

            </nav>

        </>
    )
}

