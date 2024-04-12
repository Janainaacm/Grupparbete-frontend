import React, { useState, useRef, useEffect } from "react";
import { useAPIState } from "../../store/APIState";
import "./FilterFunction.css";
import { RecipeInterface, CategorieInterface } from "../../Types";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const FilterFunction = ({ setShowRecipes, setHeadlineTag }: { setShowRecipes: any, setHeadlineTag: any }) => {
  const { recipeList, fetchRecipesByCategoryName, allCategories } = useAPIState();
  let [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleDropDownFocus = () => {
    setOpen(!open);
  };

  const handleOnChange = (item: CategorieInterface) => {
    const updatedCategories = [...filteredCategories];
    if (item.selected) {
      item.selected = false;
      const index = updatedCategories.indexOf(item.name);
      if (index !== -1) {
        updatedCategories.splice(index, 1);
      }
    } else {
      item.selected = true;
      updatedCategories.push(item.name);
    }
    setFilteredCategories(updatedCategories);
  };

  useEffect(() => {
    chosenCategory();
  }, [filteredCategories]);

  const chosenCategory = async () => {
    try {
      const fetchPromises = filteredCategories.map(async (e) => {
        try {
          return await fetchRecipesByCategoryName(e);
        } catch (error) {
          console.error("Error fetching recipes by category:", error);
          return [];
        }
      });

      const results = await Promise.all(fetchPromises);

      const flattenedResults = results.reduce(
        (acc, val) => acc.concat(val),
        []
      );

      const distinctArray = flattenedResults.filter((value, index, self) => {
        return index === self.findIndex(obj => obj._id === value._id);
    });
      if (distinctArray.length > 0) {
        setShowRecipes(distinctArray);
        setHeadlineTag("Visar alla recept inom: " + filteredCategories.join(", "))
      } else {
        resetLists();
      }
      
      
    } catch (error) {
      console.error("Error fetching recipes by category:", error);
    }
  };

  const resetFilter = () => {
    setShowRecipes(recipeList);
    setHeadlineTag("Alla recept");
    setOpen(false);
  };

  const resetLists = () => {
    setShowRecipes(recipeList);
    setHeadlineTag("Alla recept");
  }
  

  return (
<>
      <Button id="toggle-filter-button"
        onClick={() => handleDropDownFocus()}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      FILTER <i className="bi bi-caret-down"></i>
      </Button>
      <Collapse in={open}>
        <div id="filter-inside-collapse">
        {allCategories.map((item, index) => (
              <label className="radio-button" key={index}>
              <input type="radio" name={item.name} onClick={() => handleOnChange(item)} checked={item.selected}/>
              <span>{item.name.toUpperCase()}</span>
            </label>
            ))}
          <button id="reset-button" onClick={resetFilter} >ÅTERSTÄLL FILTER</button>
        </div>
      </Collapse>
    </>
  );
};

export default FilterFunction;
