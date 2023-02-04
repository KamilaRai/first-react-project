import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isAuth, setIsAuth] = useState(false)

        const handleClick = () => {
            localStorage.removeItem("token")
            if(!token) setIsAuth(true)
        }

    return (
        !isAuth ? 
        (<div>
            <Link to="/login">Log in</Link>
            <Link to="/register">Sign up </Link>
        </div>) : (
            <div onClick={handleClick}>Log out</div>
        )
    )
}

export default Header