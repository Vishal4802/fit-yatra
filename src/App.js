import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialFormData = {
    age: '',
    activityLevel: 'no_movement',
    height: '',
    weight: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showResult, setShowResult] = useState(false);
  const [bmi, setBMI] = useState('');
  const [calorieIntake, setCalorieIntake] = useState('');
  const [Protein, setProtein] = useState('');
  const [Fat, setFat] = useState('');
  const [Carbohydrate, setCarbohydrate] = useState('');
  const [calorieQuote, setCalorieQuote] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculate BMI and calorie intake here
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100;
    const bmiResult = (weight / (height * height)).toFixed(2);
    const activityLevel = formData.activityLevel;
    let calorieIntakeResult = '';
    let calorieQuoteResult = '';

    // Calculate calorie intake based on activity level
    if (bmiResult >= 28) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '1500 calories';
        calorieQuoteResult = 'Tip: Just a little bit walk :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '1750 calories';
        calorieQuoteResult = 'Tip: Just a little bit quicker :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '1800 calories';
        calorieQuoteResult = 'Tip: Just a little bit of exercising :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Keep it up and eat healthy :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2200 calories';
        calorieQuoteResult = 'Tip: You are on fire, Just maintain :)';
      }
    } else if (bmiResult >= 24 && bmiResult < 28) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '1600 calories';
        calorieQuoteResult = 'Tip: Just a little bit walk :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '1800 calories';
        calorieQuoteResult = 'Tip: Just a little bit quicker :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Just a little bit of exercising :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2200 calories';
        calorieQuoteResult = 'Tip: Keep it up and eat healthy :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2500 calories';
        calorieQuoteResult = 'Tip: You are on fire, Just maintain :)';
      }
    } else if (bmiResult >= 19 && bmiResult < 24) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '1800 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '2300 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2500 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2700 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      }
    } else if (bmiResult < 19) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '2200 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '2350 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2500 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2800 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      }
    }

    const calorieIntakeValue = parseFloat(calorieIntakeResult);
    const ProteinResult = (calorieIntakeValue * 0.35 * 0.25).toFixed(0);
    const FatResult = (calorieIntakeValue * 0.034).toFixed(0);
    const CarbohydrateResult = (calorieIntakeValue * 0.35 * 0.25).toFixed(0);

    setBMI(bmiResult);
    setCalorieIntake(calorieIntakeResult);
    setProtein(ProteinResult);
    setFat(FatResult);
    setCarbohydrate(CarbohydrateResult);
    setCalorieQuote(calorieQuoteResult);
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setFormData(initialFormData);
  };

  const products = [
    { id: 1, name: 'Whey Protein', price: 1900, image: 'images/protein-powder.jpg', type: 'Whey Protein' },
    { id: 2, name: 'Peanut Butter', price: 450, image: 'images/peanut-butter.png', type: 'Peanut Butter' },
    { id: 3, name: 'Oats', price: 500, image: 'images/oats.jpg', type: 'Oats' },
    { id: 4, name: 'Creatine', price: 900, image: 'images/creatine.png', type: 'Creatine' },
    { id: 5, name: 'Shaker', price: 250, image: 'images/shaker.png', type: 'Shaker' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [typeOrder, setTypeOrder] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleTypeOrderChange = (event) => {
    setTypeOrder(event.target.value);
  };

  const filterProducts = () => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        (minPrice === '' || product.price >= parseInt(minPrice)) &&
        (maxPrice === '' || product.price <= parseInt(maxPrice));
      return matchesSearch && matchesPrice;
    });
  };

  const sortProducts = (filteredProducts) => {
    if (sortOrder === 'price_low_high') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price_high_low') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  };

  const typeProducts = (filteredProducts) => {
    if (typeOrder === '') {
      return filteredProducts;
    } else {
      return filteredProducts.filter(
        (product) => product.type.toLowerCase() === typeOrder.toLowerCase()
      );
    }
  };

  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (productId) => {
    if (bookmarks.includes(productId)) {
      setBookmarks((prevBookmarks) => prevBookmarks.filter((id) => id !== productId));
    } else {
      setBookmarks((prevBookmarks) => [...prevBookmarks, productId]);
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h3 className="head-text">FITYATRA</h3>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/report">Report</a>
          </li>
          <li>
            <a href="/guide">Products</a>
          </li>
          <li>
            <button disabled style={{ cursor: 'not-allowed' }}>
              Subscribe
            </button>
          </li>
        </ul>
      </nav>
      <div className="content">
        {window.location.pathname === '/' && (
          <div className="hero-align">
            <div>
              <img src={require('./images/hero.jpg')} alt="Hero" className="hero-image" />
            </div>
            <div className="home-hero-text">
              <h2 className="hero-text">“Do not pray for an easy life, pray for the strength to endure a difficult one.”</h2>
              <p className="hero-text-by">~By Bruce Lee</p>
              <a href="/report" className="btn-link">
                Get Your Report
              </a>
            </div>
          </div>
        )}

        {window.location.pathname === '/report' && (
          <div className="report-div">
            <h1>Calculate and Chill</h1>
            <p className="hero-text">It Takes Time, Just Trust The Process</p>
            {!showResult ? (
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="activityLevel">Activity Level:</label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleInputChange}
                  >
                    <option value="no_movement">No Movement</option>
                    <option value="light_movement">Light Movement</option>
                    <option value="normal">Normal</option>
                    <option value="daily_workout">Daily Workout</option>
                    <option value="extreme_workout">Extreme Workout</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height (cm):</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight (kg):</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            ) : (
              <div className="result-div">
                <p>
                  <b>BMI</b>: {bmi}
                </p>

                <div className="result-card">
                  <p>
                    <b>Calorie Needed</b>
                  </p>
                  <p>
                    <b>Protein:</b> {Protein}g
                  </p>
                  <p>
                    <b>Fat:</b> {Fat}g
                  </p>
                  <p>
                    <b>Carbohydrate:</b> {Carbohydrate}g
                  </p>
                  <p>
                    <b>Total:</b> {calorieIntake}
                  </p>
                </div>

                <p>{calorieQuote}</p>
                <button onClick={handleReset} className="btn-close">
                  Close
                </button>
                <h2>Get Your Personalized Kit Today!</h2>
                <button disabled style={{ cursor: 'not-allowed' }}>
                  Subscribe
                </button>
              </div>
            )}
          </div>
        )}

        {window.location.pathname === '/guide' && (
          <div className="Product-page">
            <h1>Health is Wealth :)</h1>
            <div className="guide-controls">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
              />
              <div className="price-filter">
                <label htmlFor="minPrice">Min Price:</label>
                <input
                  type="number"
                  id="minPrice"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="price-input"
                />
                <label htmlFor="maxPrice">Max Price:</label>
                <input
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="price-input"
                />
              </div>
              <div className="sort-order">
                <label htmlFor="sortOrder">Sort Order:</label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={handleSortOrderChange}
                  className="sort-select"
                >
                  <option value="">None</option>
                  <option value="price_low_high">Price Low to High</option>
                  <option value="price_high_low">Price High to Low</option>
                </select>
              </div>
              <div className="sort-order">
                <label htmlFor="typeOrder">Products:</label>
                <select
                  id="typeOrder"
                  value={typeOrder}
                  onChange={handleTypeOrderChange}
                  className="sort-select"
                >
                  <option value="">All</option>
                  <option value="Whey Protein">Whey Protein</option>
                  <option value="Peanut Butter">Peanut Butter</option>
                  <option value="Oats">Oats</option>
                  <option value="Creatine">Creatine</option>
                  <option value="Shaker">Shaker</option>
                </select>
              </div>
            </div>
            <div class="product-grid">
              {sortProducts(typeProducts(filterProducts())).map((product) => (
                <div key={product.id} class="product-card">
                  <div class="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div class="product-details">
                    <div class="product-name">{product.name}</div>
                    <div class="product-price">Rs.{product.price}</div>
                    <div
                      className={`bookmark-btn ${
                        bookmarks.includes(product.id) ? 'bookmarked' : ''
                      }`}
                      onClick={() => toggleBookmark(product.id)}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <h2>Get Your Personalized Kit Today!</h2>
            <button disabled style={{ cursor: 'not-allowed' }}>
              Subscribe
            </button>
          </div>
        )}
      </div>

      <div className="fix-button">
        <a
          href="https://api.whatsapp.com/send?phone=9352299663"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src="images/whatsapp-icon.png" alt="Contact us" className="whatsapp-icon" />
        </a>
      </div>

      <footer className="footer">
        <h3 className="head-text">
          <b>Contact: </b>+91-9352299663
        </h3>
        <h3 className="head-text">
          <b>Email: </b>vishal4802@gmail.com
        </h3>
        // <ul className="footer-links">
        //   <li>
        //     <button onclick="window.location.href = 'https:/vishalsmyportfolio.netlify.app';" >
        //       About
        //     </button>
        //   </li>
        //   <li>
        //     <button onclick="window.location.href = 'https:/www.linkedin.com/in/vishal-sharma-a0724a197';" >
        //       Linkedin
        //     </button>
        //   </li>
        //   <li>
        //     <button onclick="window.location.href = 'https:/www.instagram.com/vishal__4802';" >
        //       Instagram
        //     </button>
        //   </li>
        // </ul>
      </footer>
    </div>
  );
};

export default App;


