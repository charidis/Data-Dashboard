import "./Dashboard.css";
import { useState } from "react";

function Dashboard(props) {
  
  const MAX = 100;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };
 
  return (
    <div className="dashboard">
      <div className="sub-dash">
        <div className="sub-section">
        <h1>8</h1>
        <h3>Recipes</h3>
        </div>
        <div className="sub-section">
        <h1>45 Mins</h1>
        <h3>Average Cook Time</h3>
        </div>
        <div className="sub-section">
        <h1>50/100</h1>
        <h3>Average Health Score</h3>
        </div>
      </div>

      <div className="main-dash">
        <input
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => props.searchItem(e.target.value)}
        />
        <form>
          <label>Health Score:</label>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => props.setValue(e.target.value)}
        />
        </form>

        <div className="list">
        <div className="item-titles">
              <h3 className="title" >Recipe</h3>
              <h3 className="price">$ Price</h3>
              <h3 className="cook-time"> Cook Time</h3>
              <h3 className="health-score">Health Score</h3>
            </div>
            <div>
              
          {props.search==""  ? ( 
          props.list.map((item, index) => (
            <div key={index} className="item-titles">
              <p className="title">{item.title}</p>
              <p className="price">${item.pricePerServing}</p>
              <p className="cook-time">{item.readyInMinutes} Min</p>
              <p className="health-score">{item.healthScore}/100</p>
              
            </div>
           
          ))
        ) : (
          props.filteredResults.map((item, index) => (
          <div key={index} className="item-titles">
            <p className="title">{item.title}</p>
            <p className="price">${item.pricePerServing}</p>
            <p className="cook-time">{item.readyInMinutes} Min</p>
            <p className="health-score">{item.healthScore}/100</p>
            
          </div>
         
        )))}
         
        
      </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
