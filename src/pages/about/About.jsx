import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
      Shree Sava is today, Gujarat's leading accounting Software product with more than 5000 very well satisfied users.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
            C-Point started operations in the year of 1994. And that is quite before Information Technology revolution started its contibution in India.
            </p>
            <p>The source of our ideas is people's day to day requirements, and we work to ease their needs. At C-Point we believe in quality products and quality services. We know the needs of common people and that we can serve better ideas to fulfill thier requirements and grow their business.</p>
            <p>Shree Sava is very popular among all type of business enterprises for their day to day billing, stock and accounting requirements. It has very powerful flexible user defined entry system which can satisfy any type of customized billing.</p>

          </div>
        </div>
      </section>


      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
            With a vision of providing the best solutions in business transactions, with the help of Information Technology. 
            </p>
            <p>And now We are at the height of customer satisfaction.</p>

          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our Focus is to develop such product which can give real solutions with simplicity as well as traditional style of reporting for accounting
            </p>
            <p></p>
            <p></p>

          </div>
        </div>
      </section>

    </>
  )
}

export default About