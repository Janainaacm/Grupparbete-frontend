import "./FilterFunction.css";
import { useState, useEffect } from "react";
import { useRecipeAPIState } from "../../../store/RecipeAPIState";
import { CategorieInterface } from "../../../Types";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

interface FilterFunctionProps {
  setShowRecipes: any;
  setHeadlineTag: any;
}

const FilterFunction = (props: FilterFunctionProps) => {
  const { recipeList, fetchRecipesByCategoryName, allCategories } =
    useRecipeAPIState();
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
        return index === self.findIndex((obj) => obj._id === value._id);
      });
      if (distinctArray.length > 0) {
        props.setShowRecipes(distinctArray);
        props.setHeadlineTag(
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
      <Button
        id="toggle-filter-button"
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
              <input
                type="radio"
                name={item.name}
                onClick={() => handleOnChange(item)}
                checked={item.selected}
              />
              <span>{item.name.toUpperCase()}</span>
            </label>
          ))}
          <button id="reset-button" onClick={resetFilter}>
            ÅTERSTÄLL FILTER
          </button>
        </div>
      </Collapse>
    </>
  );
};

export default FilterFunction;
