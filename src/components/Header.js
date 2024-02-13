import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className='header'>
            <Link to='/'>
                <div>
                    Cheese App
                </div>
            </Link>
        </div>
    )
}

export default Header