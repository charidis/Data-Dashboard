import { useEffect} from 'react';
import { useState } from 'react';
import axios from "axios";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import './App.css'
import SideNav from '../SideNav/SideNav'
import Dashboard from '../Dashboard/Dashboard'

function App() {
  const [list, setList] = useState([]);
  const [filteredResults, setFilteredResults] = useState(list);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);

  let URL = 'https://api.spoonacular.com/recipes/random?number=10&apiKey='+ACCESS_KEY
  
 
  

  const fetchData = async () => {
    axios.get(URL).then((res) => {
      const data = res.data.recipes
      setList(data)
    });
  }
  const searchItem = searchValue => {
    setSearch(searchValue);
    if (searchValue !== "") {
      const recipes = list.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));
      setFilteredResults(recipes);
    } 
    
  };
  // const searchItem2 = value => {
   
  //   if(value!=0){
  //     const recipe = list.filter((item)=>item.healthScore > value);
  //     setFilteredResults(recipe);
  //   }
  // };
console.log(search) 
  
  // const recipes = list.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())&&item.healthScore < value);
  
   
    
   
  useEffect(() => {
    fetchData()
  }, []);
  
  return (
    <div className="App">
     <SideNav/>
     <Dashboard
     list={list}
     setSearch={setSearch}
     searchItem={searchItem}
     setValue={setValue}
     search={search}
     filteredResults={filteredResults}
    //  filtered={filtered}
    //  recipes={recipes}

     />
    </div>
  )
}

export default App
