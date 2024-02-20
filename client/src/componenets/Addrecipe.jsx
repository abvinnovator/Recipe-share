import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Addrecipe = () => {
    const [recipe, setRecipe] = useState({
        title: null,
        ingred:"",
        desc: "",
        cover: "",
    });
    const [error, setError] = useState(false);
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', recipe.title);
            formData.append('desc', recipe.desc);
            formData.append('ingred', recipe.ingred);
            formData.append('cover', file);

            const response = await axios.post("http://localhost:4000/recipes", formData);

            if (response.data.Status === 'Success') {
                setMsg("File Successfully Uploaded");
                navigate("/get");
            } else {
                setMsg("Error");
            }
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div>
            <div className="form">
                <h1>Add New Recipe</h1>
                <input
                    type="text"
                    placeholder="Recipe title"
                    name="title"
                    value={recipe.title}
                    onChange={handleChange}
                />
                <textarea
                    rows={5}
                    placeholder="Recipe description"
                    name="desc"
                    value={recipe.desc}
                    onChange={handleChange}
                />
              <textarea
                    placeholder="Ingredients used in your Recipe (One ingredient per line)"
                    name="ingred"
                    value={recipe.ingred} 
                    onChange={handleChange}
                />
                <input
                    type="file"
                    placeholder="cover"
                    name="cover"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button onClick={handleClick}>Add</button>
                {error && "Something went wrong!"}
                <Link to="/get">See all Recipes</Link>
                <h1 style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{msg}</h1>
            </div>
        </div>
    );
}

export default Addrecipe;
