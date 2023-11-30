import React from "react";
import { useState,useEffect } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import * as API from '../service/api.js'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from './Button/Button'
import {Loader} from "./Loader/Loader";
import s from './App.module.css'
import toast, {Toaster} from "react-hot-toast";







const  App = () => {
const [inputWord, setInputWord] = useState('')
const [photos, setPhotos] = useState([])
const [page, setPage] = useState(1)
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(false)
const [totalHits, setTotalHits] = useState(null)



const inputSearch = (name) => {
setInputWord(name);
setPhotos([]);
setPage(1);
if(name === '') {
  toast.error('Put a word for searching 🫎', {position: 'top-right'})
}
}


 useEffect(() =>{
  if(!inputWord) {
    return
  }

async function Fetch ()  {
    try {

        setIsLoading(true)
        const {hits, totalHits} = await API.getData(inputWord, page);

        if(hits.length === 0) {
          toast.error(`Sorry, we can't find ${inputWord} 😭`, {position: 'top-right'})
        }
        if(hits.length > 0 && page === 1) {
          toast.success(`We find ${totalHits} photos 😊`)
  
          
        }
const filteredHits = hits.map(({id, tags, webformatURL, largeImageURL}) => 
({id, tags,webformatURL, largeImageURL}))





setPhotos(prevState => ([
  ...prevState, ...filteredHits ]))
setTotalHits(totalHits)

    }
    
  
    
    catch (error) {
setError('We have error. Relode a page')
    }
  finally {
    setIsLoading(false)
  }
      

}
if(inputWord !== '') {
  Fetch()
}


}, [inputWord,page])



const pageCounter = () => {

setPage(prevState => prevState + 1)

}






  return (
    <div
className={s.App}
    >
<SearchBar

  onSubmit={inputSearch}
/>
{isLoading && <Loader/>}
{error && <p>{error}</p>}

{photos.length > 0 && <ImageGallery items={photos}/>}
{totalHits > photos.length && (<Button pageCounter={pageCounter}/>)}
<Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{

    style: {
      width: '400px',
      height: '100px',
      fontSize: '24px',
      background: '#363636',
      color: '#fff',
    }}}
/> 
    </div>
  );
} 
;

export default App;



