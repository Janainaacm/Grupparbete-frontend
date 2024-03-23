import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config';
import { RecipeInterface } from '../Types';
import { JSX } from 'react/jsx-dev-runtime';
import './App.css'
import { DiVim } from 'react-icons/di';

function App() {
    const [value, setValue] = useState()
    const onChange = async (e) => {
        setValue(e.target.value)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    }

    return (
        <div className="App">
            <div className="search">
                <div>
                    <input type="text" onChange={onChange} value={value} />
                    <button>search</button>
                </div>
                <div className='dropdown-content'>
                    {
                        value &&
                        data.filter(item => item.title.startsWith(value) && item.tilte !== value)
                        .slice(0, 5)
                        .map(item => <div key={item.id} onClick={(e) => setValue(item.title)}>
                            {item.tilte} <hr />
                            </div>)
                    }

                </div>

            </div>

        </div>
    )
}