import React, { useState, useRef, useEffect } from "react";
import { useAPIState } from "../../store/APIState";
import "./FilterFunction.css";
import { RecipeInterface, CategorieInterface } from "../../Types";

const FilterFunction = ({ setShowRecipes, setHeadlineTag }: { setShowRecipes: any, setHeadlineTag: any }) => {
  const { recipeList, fetchRecipesByCategoryName, allCategories } =
    useAPIState();
  let [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      // console.log(distinctArray)
      setShowRecipes(distinctArray);
      if (filteredCategories.length != 0){
        setHeadlineTag("Visar alla recept inom: " + filteredCategories.join(", "));
      }
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
                  <label className="container">
                    {item.name}
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleOnChange(item)}
                    />
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
