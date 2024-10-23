
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
 const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  const[data,setData]=useState(fruits)
  const[searchData,setSearchData]=useState(data)
  const[search,setSearch]=useState("")
  function searchHandler(e){
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const result = data.filter(item => item.toLowerCase().includes(searchValue));
    setSearchData(result);
  }
  return (
    <div>
        <input type="text" onChange={searchHandler}/>
        {
          searchData.length>0 ? (searchData.map((item,id)=>{
            return  <div className="" key={id}> 
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          })) : (<div>No data found</div>)

        }
    </div>
  )
}

export default App
