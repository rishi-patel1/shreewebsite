import { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'
import { links } from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
    const [isNavShowing,setIsNavShowing] = useState(false);
    let prev =isNavShowing;

  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className="logo" onClick={()=> setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name,path},index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=> isActive? 'active-nav' : ''} onClick={()=> setIsNavShowing(prev = !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className={`nav__toggle-btn ${isNavShowing? 'showing__button' : 'notShowing__button'}`} onClick={()=> setIsNavShowing (prev = !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/>  : <GoThreeBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar