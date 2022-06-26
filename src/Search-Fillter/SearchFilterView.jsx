import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { Form, Input, Label, Button } from "reactstrap";

export function SearchFilterVew({
  handleFilterTriggered,
  handleAddItem,
  tempFruits,
  searchItem,
  handleRemoveFruit,
}) {
  return (
    <div>
      <div className={styles.userInputWrapper}>
        <div>
          <Form className={styles.formWrapper} onSubmit={handleAddItem}>
            <div className={styles.inputGroup}>
              <Label for="txtFilter" style={{ width: "150px" }}>
                Enter item filter
              </Label>
              <Input
                style={{ width: "400px" }}
                id="txtFilter"
                name="txtFilter"
                value={searchItem}
                onChange={(e) => handleFilterTriggered(e)}
                placeholder="Enter Search Key"
                type="text"
              />
            </div>
            <div>
              <Button type="submit">Add</Button>
            </div>
          </Form>
        </div>
        <ul>
          {tempFruits.map((val, i, _) => {
            return (
              <li key={val + 1}>
                {val}{" "}
                <Button onClick={() => handleRemoveFruit(i)}>
                  Remove Fruit
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

SearchFilterVew.propTypes = {
  handleFilterTriggered: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  tempFruits: PropTypes.array.isRequired,
  searchItem: PropTypes.string.isRequired,
  handleRemoveFruit: PropTypes.func.isRequired,
};

SearchFilterVew.defaultProps = {
  handleFilterTriggered: () => {},
  handleAddItem: () => {},
  tempFruits: [],
  searchItem: "",
  handleRemoveFruit: () => {},
};
export default SearchFilterVew;
