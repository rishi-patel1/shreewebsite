import Header from '../../components/Header'
import { products } from '../../data'
import Card from '../../UI/Card'
import HeaderImage from '../../images/header_bg_1.jpg'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import './products.css'

const Products = () => {
  return (
    <>
    <Header title="Our Products" image={HeaderImage} className='product__header'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, minima.
    </Header>
    <section className="products">
        <div className="container products__container">
            <div className="products__wrapper">
                {
                    products.map(({id,name,image,desc}) => {
                        return <Card key={id} className="products__product">
                            <h4>{name}</h4>
                            <div className='product__block'>
                                
                                <div className="product__left">
                                    <img src={image} alt="productImage" />
                                </div>
                                <div className='product__right'>
                                    {
                                        desc.map(({point},index) => {
                                        return <p key={index} className='point'><AiOutlineDoubleRight/> {point}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Products