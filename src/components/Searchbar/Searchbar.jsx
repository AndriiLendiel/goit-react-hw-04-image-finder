import React, {useState} from "react";

import s from './SearchBar.module.css'

export const  SearchBar = ({onSubmit}) => {

const [searchName, setSearchName] = useState('');



const  handleInput = (e) => {
    setSearchName(e.currentTarget.value)
    }
const  handleSubmit = (e) => {
e.preventDefault();
onSubmit(searchName);
setSearchName('');
    }

        return (
            <header className={s.Searchbar}>
            <form
            className={s.SearchForm}
            onSubmit={handleSubmit}
            >
            <button 
                    type="submit"
                    className={s.SearchForm__button}
                    >
                        <span className={s.SearchForm__button__label}>Search
                        </span>
                    </button>

                    <input 

                    className={s.SearchForm__input}
                    type="text" 
                    name="name"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInput}
                    value={searchName}
                    />
            </form>
            </header>

        )
    }
