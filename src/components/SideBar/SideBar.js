

 import   './SideBar.css'
export default function SideBar({menuListItems}) {
     console.log(menuListItems )
    return (
        

        <div className="sidebar">
            {menuListItems.map( (optionItem, index ) => (<a key={index}  >{optionItem.alt}</a>)) }
    
      </div>
    );




}