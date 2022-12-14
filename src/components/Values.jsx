import Image from '../images/showroom.jpg'
import Image2 from '../images/showroom.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Values Image" />
                    <img src={Image2} alt="value part 2" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                <p>
                   We never stop pushing boundaries of what our solutions can do for people and for the world. We are always improving and adapting to stay ahead.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id,icon,title,desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values