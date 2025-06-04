import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
      <div className="textContainer">
      <div className="wrapper">
        <h1 className='title'>
          Find Real Estate & Get Your Dream Place 
        </h1>
        <p>Discover your dream property with ease. Whether you're looking to buy, sell, or rent, our platform connects you with the best real estate options in prime locations. 
          From luxurious apartments and spacious villas to commercial spaces and plots, 
          we offer a wide range of properties tailored to meet your needs and budget.
        </p>

      <SearchBar/>  
      <div className="boxes">
        <div className="box">
          <h1>17+</h1>
          <h2>Years of Experiences</h2>
        </div>

        <div className="box">
          <h1>11+</h1>
          <h2>Awards Gained</h2>
        </div>

        <div className="box">
          <h1>10+</h1>
          <h2>Property Ready</h2>
        </div>


      </div>
      </div>
      </div>



      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage