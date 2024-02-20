import React from 'react'
import axios from "axios";
import { useState } from 'react';
import "./styles/upd.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
const Updaterecipe = () => {
    const [recipe, setRecipe] = useState({
        title:null,
        ingred: "",
        desc: "",
        cover: "",
      });
      const [error,setError] = useState(false)

      const location = useLocation();
      const navigate = useNavigate();
    
      const recipeId = location.pathname.split("/")[2];
    
      const handleChange = (e) => {
        setRecipe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.put(`http://localhost:4000/recipes/${recipeId}`, recipe);
          navigate("/get");
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };
    
      return (
        <div className="form">
          <h1>Update the Recipe</h1>
          <input
            type="text"
            placeholder="recipie title"
            name="title"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            type="text"
            placeholder="recipie desc"
            name="desc"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="recipie ingredients"
            name="ingred"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingred cover"
            name="cover"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Update</button>
          {error && "Something went wrong!"}
          <Link to="/get">See all recipies</Link>
        </div>
      );
    
}

export default Updaterecipe