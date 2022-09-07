import Header from '../../components/Header'
import { products } from '../../data'
import Card from '../../UI/Card'
import HeaderImage from '../../images/header_bg_1.jpg'
import './products.css'

const Products = () => {
  return (
    <>
    <Header title="Our Products" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, minima.
    </Header>
    <section className="products">
        <div className="container products__container">
            <div className="products__wrapper">
                {
                    products.map(({id,name,image,desc}) => {
                        return <Card key={id} className="products__product">
                            <div className='product__block'>
                                <img src={image} alt="productImage" />
                                <div>
                                    <h4>{name}</h4>
                                    {
                                        desc.map(({point},index) => {
                                        return <p key={index} className='point'>{point}</p>
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