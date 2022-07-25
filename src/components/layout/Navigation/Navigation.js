import React from "react";
import "./navigation.css";
import { useProductCategories } from "../../../utils/hooks/useProductCategories";
import Button from '../../Button';
import ToggleSwitch from "../../ToggleSwitch";

const Navigation = ({ handlerEvent, checkedItems }) => {
  const { data, isLoading } = useProductCategories();
  const handlerToggleSwitch = (e) => {
    return handlerEvent(e);
  }
  const handlerOnclickButton = (e) => {
    return handlerEvent(e);
  }
  return (
    <>
      <div className="navigation">
        {isLoading && <div>Loading...</div>}
        <div className="navigation-items">
          <div>
          <h2>Categories</h2>
          </div>
          <div className="navigation-content">
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
        <div className="navigation-button-container">
          { checkedItems.length > 0 &&
          <Button classname="navigation-button" onclick={handlerOnclickButton}>Clear filters</Button>
          }
        </div>
      </div>
      <div className="navigation-sep"></div>
    </>
  );
};

export default Navigation;
