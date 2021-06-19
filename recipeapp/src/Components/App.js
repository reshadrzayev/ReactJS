import React,{useEffect, useState} from 'react'
import Recipe from './Recipe'


const App = () =>{

    const APP_ID = '6086c52c';
    const APP_KEY = '25d39e8614ad1381e4ef3ab8e4afaf53';


    const[recipes,setRecipes] = useState([]);
    const[search,setSearch] = useState('');
    const[query,setQuery] = useState('chicken');

    useEffect(()=>{
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
    }

    const updateSearch =(e)=>{
        setSearch(e.target.value);
    }

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search); 
        setSearch('');
    }

    return(
        <div className="app container-fluid d-flex flex-column justify-content-center align-items-center pt-5">
            <form onSubmit={getSearch} className="search-form">
                <input placeholder="Food Name" className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form> <br /> <br />
            {recipes.map(recipe=>(
                <Recipe key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}

export default App;