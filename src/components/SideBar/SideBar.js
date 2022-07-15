

import { useState } from 'react';
import './SideBar.css'
export default function SideBar({ menuListItems, categoriesParentList, updateParentSelectedCategories }) {


    const [selectedCategories, updateSelectedCategories] = useState(categoriesParentList);


    function handleClick(categoryId) {
        let newArray;
        if (selectedCategories.includes(categoryId)) {
            newArray = selectedCategories.filter((d) => d !== categoryId);
        }
        else {
            newArray = [...selectedCategories, categoryId];
        }
        updateSelectedCategories(newArray);
        updateParentSelectedCategories(newArray);
    }

    return (


        <div className="sidebar">
            {
                menuListItems.map((optionItem, index) => (
                    <a key={index}
                        className={selectedCategories.some(d => d === optionItem.categoryId) ? 'active' : ''}
                        href={'#'+encodeURIComponent(optionItem.categoryId)}
                        onClick={() => handleClick(optionItem.categoryId)} >
                        {optionItem.alt}
                    </a>))
            }

        </div >
    );




}