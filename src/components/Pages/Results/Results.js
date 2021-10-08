import CustomTable from "./Table/Table";
import "./Results.scss";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router";

import PropTypes from "prop-types";

const Results = (props) => {
  const [initialData, setInitialData] = useState([]);
  const [initialDataSorted, setInitialDataSorted] = useState([]);
  const [initialDataSortedPaginated, setInitialDataSortedPaginated] = useState(
    []
  );

  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (props.data) {
      const loadData = !!props.data.meals;
      if (loadData) {
        setInitialData(props.data.meals);
        setNumberOfPages(Math.floor((props.data.meals.length + 10 - 1) / 10));
        setCurrentPage(1);
      } else {
        setInitialData(null);
      }
    }
  }, [props]);

  const location = useLocation();

  useEffect(() => {
    if (location.state != null) {
      const addedObject = location.state.data;
      const convertedObject = {
        idMeal: Math.random().toString(36).slice(2),
        strMeal: addedObject.name,
        strMealThumb: addedObject.imgURL,
        ingredients: addedObject.ingredients,
        strIngredient1: addedObject.ingredients[0],
        strInstructions: addedObject.instructions,
      };

      setInitialData((prevArray) => [...prevArray, convertedObject]);
    }
  }, [location]);

  useEffect(() => {
    // Sort array
    if (initialData) {
      const sortedData = initialData.sort(function (a, b) {
        if (a.strMeal < b.strMeal) {
          return -1;
        }
        if (a.strMeal > b.strMeal) {
          return 1;
        }
        return 0;
      });

      setInitialDataSorted(sortedData);
    }
  }, [initialData]);

  const filterEmptyIngredients = (data) => {
    if (!data.ingredients) {
      const ingredientsArray = [
        data.strIngredient1,
        data.strIngredient2,
        data.strIngredient3,
        data.strIngredient4,
        data.strIngredient5,
        data.strIngredient6,
        data.strIngredient7,
        data.strIngredient8,
        data.strIngredient9,
        data.strIngredient10,
        data.strIngredient11,
        data.strIngredient12,
        data.strIngredient13,
        data.strIngredient14,
        data.strIngredient15,
        data.strIngredient16,
        data.strIngredient17,
        data.strIngredient18,
        data.strIngredient19,
        data.strIngredient20,
      ];

      return ingredientsArray.filter(function (value) {
        return value !== "";
      });
    } else {
      return data.ingredients;
    }
  };

  const createPages = (num) => {
    const elements = [];
    for (let i = 1; i <= num; i++) {
      if (currentPage === i) {
        elements.push(
          <span
            key={i}
            className={"btn " + (currentPage === i ? "current-page" : "")}
          >
            {i}
          </span>
        );
      } else {
        elements.push(
          <button key={i} className="btn" onClick={() => goToPage(i)}>
            {i}
          </button>
        );
      }
    }
    return elements;
  };

  const goToPage = (i) => {
    setCurrentPage(i);
  };

  // Sort data into pages
  useEffect(() => {
    setInitialDataSortedPaginated(
      initialDataSorted.slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [currentPage, initialDataSorted]);

  return (
    <div className="row">
      <div className="col-2 "></div>
      <div className="col-8 mt-3 p-0">
        {initialData ? (
          <Fragment>
            {initialData && initialData.length > 0 && (
              <div className="results-container mt-3 ">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Picture</th>
                      <th scope="col">Ingredients</th>
                      <th scope="col">Instructions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialDataSortedPaginated.map((result, i) => (
                      <CustomTable
                        index={i}
                        key={result.idMeal}
                        name={result.strMeal}
                        thumbnail={result.strMealThumb}
                        ingredients={
                          result.strIngredient1
                            ? filterEmptyIngredients(result)
                            : null
                        }
                        instructions={
                          result.strInstructions ? result.strInstructions : null
                        }
                        resultsLength={initialData.length}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {numberOfPages > 1 ? (
              <div className="pagination">{createPages(numberOfPages)}</div>
            ) : (
              ""
            )}
          </Fragment>
        ) : (
          <div className="no-result">
            <span>No items returned.</span>
          </div>
        )}
      </div>
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
  ),
};

export default Results;
