import React, { useState } from 'react'
import axios from 'axios'


import Search from './components/search';
import Results from './components/results';
import Popup from './components/popup';

function App() {
  const [stt,setStt]=useState({s:'',res:[],sel:{}})
  const apiurl='http://www.omdbapi.com/?i=tt3896198&apikey=47b2608f'
  

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + stt.s).then(({data}) => {
        
        let results = data.Search;

        setStt(prevState => {
          return { ...prevState, res: results }
        })
      });
      // console.log(stt)
    }}

  const handleInput = (e) => {
    let s = e.target.value;

    setStt(prevState => {
      return { ...prevState, s: s }
    });
    console.log(stt.s)
  }
  
  const openPopup = id => {
    
      let result=stt.res.filter(s=>s.imdbID==id)
      
      // console.log(result);
      // console.log(result[0].Title);

      setStt(prevState => {
        return { ...prevState, sel: result[0] }
      });
    
  }

  const closePopup = () => {
    setStt(prevState => {
      return { ...prevState, sel: {} }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search hndinput={handleInput} search={search}/>
        <Results results={stt.res} openPopup={openPopup} />
        
        {(typeof stt.sel.Title != "undefined") ? 
        <Popup selected={stt.sel} closePopup={closePopup} /> : 
        false}
      </main>

    </div>
  );
}

export default App;
