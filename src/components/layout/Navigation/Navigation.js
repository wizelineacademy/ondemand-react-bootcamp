import React from "react";
import "./navigation.css";
import { useProductCategories } from "../../../utils/hooks/useProductCategories";

import ToggleSwitch from "../../ToggleSwitch";

const Navigation = ({ handlerEvent, checkedItems }) => {
  const { data, isLoading } = useProductCategories();
  const handlerToggleSwitch = (e) => {
    return handlerEvent(e);
  }
  return (
    <>
      <div className="navigation">
        {isLoading && <div>Loading...</div>}
        <div className="navigation-items">
          <h2>Categories</h2>
          {data.results &&
            data.results.map((row) => {
              let checked = checkedItems.includes(row.id);
              return <ToggleSwitch
              key={row.id}
              value={row.id}
              label={row.data.name}
              handlerEvent={handlerToggleSwitch}
              checked={checked}/>;
            })}
        </div>
      </div>
      <div className="navigation-sep"></div>
    </>
  );
};

export default Navigation;
