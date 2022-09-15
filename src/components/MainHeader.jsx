import { Link } from "react-router-dom"
import Image from "../images/vfpbox.jpg"

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
        <div className="main__header-right">
          <h1>Shree Sava - Accounting Software</h1>
          <h3>Complete Accounting Software</h3>
          <p>
            Usefull for  all types of Industries, Accountants, Traders, Wholesalers, Restaurants, Hotels, Agencies, Manufacturing Units, Excisable Units, etc.
          </p> 
          <Link to="/plans" className=""btn lg>Get Started</Link>
        </div>
        
      </div>
    </header>
  )
}

export default MainHeader