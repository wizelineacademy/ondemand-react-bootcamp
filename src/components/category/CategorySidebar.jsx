import React from "react";
import categoryJson from "../../data/product-categories.json";
import CategorySidebarList from "./CategorySidebar.styled";

const CategorySidebar = ({ categoriesFilter, setCategoriesFilter}) => {
    const categories = categoryJson.results;

    const handleClick = (event) => {
        const slugs = event.target.value.split(',');
        if (event.target.checked) {
            setCategoriesFilter(categoriesFilter.concat(slugs));
        } else {
            setCategoriesFilter(categoriesFilter.filter((slug) => !slugs.includes(slug)));
        }
    };

    return (
        <CategorySidebarList>
            <div className='sidebar s-bar-block s-light-gray s-card'>
                <h2>Categories</h2>
                {categories.map((cat, index) => {
                    return (
                        <div 
                            data-filter={cat.slugs} 
                            id={cat.id} key={cat.id} 
                            className={categoriesFilter.includes(cat.slugs[0]) ? "s-bar-item selected" : "s-bar-item"}
                        >
                            <input value={cat.slugs} type="checkbox" onChange={handleClick} />
                            <span>{cat.data.name}</span>
                        </div>
                    );
                })}
            </div>
        </CategorySidebarList>
    );
};

export default CategorySidebar;