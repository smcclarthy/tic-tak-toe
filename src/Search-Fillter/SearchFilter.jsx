import React from "react";
import SearchFilterVew from "./SearchFilterView";
export function SearchFilter() {
  const [searchItem, setSearchItem] = React.useState("");
  const [fruits, setFruits] = React.useState([]);
  const [tempFruits, setTempFruits] = React.useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!fruits.includes(searchItem.trim())) {
      searchItem.trim() !== "" && setFruits([...fruits, searchItem]);
      setSearchItem("");
      setTempFruits([...fruits, searchItem]);
    }
  };
  const handleFilterTriggered = (e) => {
    e.preventDefault();

    if (e.target.value.trim() !== "") {
      const removeItem = [...fruits].filter((val) =>
        val.includes(e.target.value.trim())
      );

      setSearchItem(e.target.value.trim());
      setTempFruits(removeItem);
    } else {
    }
  };

  const handleRemoveFruit = (index) => {
    const removeFruit = [...fruits].filter((_, i) => index !== i);
    setTempFruits(removeFruit);
    setFruits(removeFruit);
  };

  return (
    <SearchFilterVew
      handleAddItem={handleAddItem}
      tempFruits={tempFruits}
      searchItem={searchItem}
      handleRemoveFruit={handleRemoveFruit}
      handleFilterTriggered={handleFilterTriggered}
    />
  );
}
export default SearchFilter;
