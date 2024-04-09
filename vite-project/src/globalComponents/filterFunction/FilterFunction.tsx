import React, { useState, useRef, useEffect } from "react";
import { useAPIState } from "../../store/APIState";
import "./FilterFunction.css";
import { RecipeInterface } from "../../Types";

const FilterFunction = ({ showRecipes, setShowRecipes }: { showRecipes: RecipeInterface[], setShowRecipes: any }) => {
    const { recipeList, fetchRecipesByCategoryName, allCategories } = useAPIState();
    const [checkedState, setCheckedState] = useState(new Array(allCategories.length).fill(false));
    const [open, setOpen] = useState(false);
    let [resultList, setResultList] = useState<RecipeInterface[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleDropDownFocus = () => {
        setOpen(!open);
    };

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        chosenCategory(position);
    };

    const chosenCategory = async (position: number) => {
    try {
        const results = await fetchRecipesByCategoryName(allCategories[position].name);
        console.log(allCategories, "allCategories")
        console.log(checkedState, "checkedState")
        console.log(position, "position")
        console.log(resultList, "resultList")

        setResultList(prevResultList => {
            if (!checkedState[position]) {
                console.log(checkedState[position], "position value - add");
                console.log(allCategories[position].name, "category value");

                // If the checkbox is unchecked, remove the results from the resultList
                return prevResultList.filter((el: RecipeInterface) => !results.includes(el));
            } else {
                // If the checkbox is checked, add the results to the resultList
                console.log(checkedState[position], "position value - remove from results");
                console.log(allCategories[position].name, "category value");
                return [...prevResultList, ...results];
                
            }
        });

        setShowRecipes(resultList);
    } catch (error) {
        console.error("Error fetching recipes by category:", error);
    }
};

    
    
    const resetFilter = () => {
        setShowRecipes(recipeList);
        setOpen(false);
    };

    return (
        <div className="App">
            <div className="app-drop-down-container" ref={dropdownRef}>
                <button onClick={handleDropDownFocus}>Filter</button>
                {open && (
                    <ul>
                        {allCategories.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <label className="container">{item.name}
                                        <input type="checkbox" 
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}  />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </li>
                        ))}
                        <div>
                            <button onClick={resetFilter}>Reset Filter</button>
                        </div>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FilterFunction;
