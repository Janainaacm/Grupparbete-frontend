import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config';
import { RecipeInterface } from '../Types';
import { JSX } from 'react/jsx-dev-runtime';
//import './App.css'
import { DiVim } from 'react-icons/di';
import useGetAllRecipes from '../api/getAllRecipes';
import SearchBarComponent from './SearchBarComponent';

let recipes = useGetAllRecipes()

function FilterFunction() {
    const [value, setValue] = useState()
    const onChange = async (e: { target: { value: React.SetStateAction<undefined>; }; }) => {
        setValue(e.target.value)
    
    }

    return (
        <div className="App">
            <p>Filter</p>
           {/*  <div className="search">
                <div>
                    <input type="text" onChange={onChange} value={value} />
                    <button>search</button>
                </div>
                <div className='dropdown-content'>
                    {
                        value &&
                        recipes.filter((item: { title: string; tilte: any; }) => item.title.startsWith(value) && item.tilte !== value)
                        .slice(0, 5)
                        .map((item: { id: any; title: React.SetStateAction<undefined>; tilte: any; }) => <div key={item.id} onClick={(_e: any) => setValue(item.title)}>
                            {item.tilte} <hr />
                            </div>)
                    }

                </div>

            </div> */}

        </div>
    )
}
export default FilterFunction;