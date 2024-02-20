import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./styles/add.css";
import "./styles/add.css"

const Getrecipe = () => {
    const [recipes, setRecipes] = useState([]);
   
    useEffect(() => {
        axios.get("http://localhost:4000/recipes")
          .then(res => setRecipes(res.data))
          .catch(err => console.log(err));
         
      }, []);
      
      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4000/recipes/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
        <>
        <div className='recipes'>
            {recipes.map((recipe, index) => (
               <div className='recipe-card' key={index}>
                  <img src={`http://localhost:4000/Images/${recipe.cover}`} alt='recipe' className="recipe-img" />
                  <div className="recipe-details">
                    <h2 className="recipe-title">Title: {recipe.title}</h2>
                    <p className="recipe-ingred">Ingredients:</p>
                    <ul className="ingredient-list">
                    <li>{recipe.ingred}</li> 
                    </ul>
                    <p className="recipe-desc">Description: {recipe.desc}</p>
                  </div>
                  <div className="recipe-actions">
                    <button className="delete" onClick={() => handleDelete(recipe.id)}>Delete</button>
                    <button className="update">
                      <Link
                        to={`/update/${recipe.id}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Update
                      </Link>
                    </button>
                  </div>
               </div>
            ))}
        </div>
        <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Recipes
        </Link>
      </button>
        </>
    );
};

export default Getrecipe;
