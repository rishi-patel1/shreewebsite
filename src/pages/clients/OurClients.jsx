import Header from "../../components/Header"
import HeaderImage from '../../images/client_banner.jpg'
import { clients } from "../../data"
import {BsArrowRightShort} from 'react-icons/bs'
import Card from "../../UI/Card"
import './ourClients.css'


const OurClients = () => {
  return (
    <>
    <Header title="Our Clients" image={HeaderImage}>
        Over 5000 satisfied customers. Since 1994, we are providing best solutions for IT issues. We deal with many companies for their IT related services. 
    </Header>
    <section className="clients">
      <div className="container clients__container">
        {
          clients.map(({id,name, Industry}) => {
            return <Card key={id} className='industry'>
              <h3>{name}</h3>
              {
                Industry.map(({client_name},index) => {
                  return <p key={index} className="client__names"><BsArrowRightShort/> {client_name}</p>
                })
              }
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default OurClients