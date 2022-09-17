import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import Card from '../../UI/Card'
import {plans}  from '../../data'
import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
      Choose your Pricing Plan. Please note that a One Time Fee will be applicable for both respective plans
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id,name,desc,price,features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`₹${price}`}</h1><h2>/year</h2>
              {/* <h6>with a one time fee {fee}</h6> */}
              <h4>Features</h4>
              {
                features.map(({feature,available},index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans