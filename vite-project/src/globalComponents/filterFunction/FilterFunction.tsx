import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { RecipeInterface } from '../../Types';
import { useAPIState } from '../../store/APIState';

const FilterFunction = ({ setShowRecipes }) => {
    const categories = useAPIState((state) => state.allCategories);
  const getResultsCategories = useAPIState((state) => state.fetchRecipesByCategoryName);


  console.log(categories)

  const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleDropDownFocus = (state: boolean) => {
      setOpen(!state);
    };

    const handleClickOutsideDropdown =(e:any)=>{
      if(open && !dropdownRef.current?.contains(e.target as Node)){
        setOpen(false)
      }
    }
    window.addEventListener("click",handleClickOutsideDropdown)
    
    console.log(open);

    const chosenCategory = async (name:string) => {
        try {
            const results = await getResultsCategories(name)
                setShowRecipes(results)
                setOpen(false)
          } catch (error) {
            console.error('Error fetching recipe:', error);
          }
    };
  
    return (
        <div className="App">
          <div className="app-drop-down-container" ref={dropdownRef}>
            <button onClick={(e) => handleDropDownFocus(open)}>Filter</button>
            {open && ( 
              <ul>
                {categories.map((item, index) => (
                  <li key={index}>
                    <div onClick={() => chosenCategory(item.name)}>{item.name}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    };
export default FilterFunction