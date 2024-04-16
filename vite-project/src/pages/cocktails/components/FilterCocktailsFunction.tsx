import React, { useEffect, useState } from "react";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { CategorieInterface } from "../../../Types";
import { Button, Collapse } from "react-bootstrap";

const FilterCocktailsFunction = () => {
  const {
    cocktailList,
    cocktailCategories,
    updateCocktailID,
    fetchCocktailCategories,
    fetchCocktails,
    filterCocktailByCategory,
  } = useCocktailAPIState();

  const letterButtons = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "Y",
    "Z",
  ];
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
          return await filterCocktailByCategory(e);
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
        return index === self.findIndex((obj) => obj._id === value._id);
      });
      
      if (distinctArray.length > 0) {
        props.setShowRecipes(distinctArray);
          "Visar alla recept inom: " + filteredCategories.join(", ")
        );
      } else {
        resetLists();
      }
    } catch (error) {
      console.error("Error fetching recipes by category:", error);
    }
  };

  const resetFilter = () => {
    props.setShowRecipes(recipeList);
    props.setHeadlineTag("Alla recept");
    setOpen(false);
    resetClick();
  };

  const resetLists = () => {
    props.setShowRecipes(recipeList);
    props.setHeadlineTag("Alla recept");
  };

  const resetClick = () => {
    for (const item of allCategories) {
      item.selected = false;
    }
  };

  return (
  <>
      <Button id="toggle-filter-button"
        onClick={() => handleDropDownFocus()}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      FILTER
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

export default FilterCocktailsFunction;
