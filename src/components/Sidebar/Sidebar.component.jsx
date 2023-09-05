import React, { useState } from "react";
import { Sidebar, Option } from "./Sidebar.style";
export function BuildSidebar(data) {
  const [categoriesSelected, setCategoriesSelected] = useState(new Set());
  const sidebar = (
    <Sidebar>
      {Object.keys(data).length !== 0 ? (
        data.results.map((category) => (
          <Option
            className={categoriesSelected.has(category.id) ? "active" : ""}
            key={category.id}
            onClick={() => {
              if (categoriesSelected.has(category.id))
                categoriesSelected.delete(category.id);
              else categoriesSelected.add(category.id);
              setCategoriesSelected(new Set(categoriesSelected));
            }}
          >
            {category.data.name}
          </Option>
        ))
      ) : (
        <></>
      )}
    </Sidebar>
  );
  return [sidebar, categoriesSelected];
}
