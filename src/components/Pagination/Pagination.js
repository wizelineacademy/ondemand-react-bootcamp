import styled from 'styled-components';
import { useEffect, useState } from "react";

var ButtonStyled= styled.button `` 


export default function Pagination({ totalPages, currentPage }) {

    

    const [pages, setPages] = useState([]);


    useEffect(()=>
        {
            if(currentPage> totalPages && totalPages > 0)
            {
                currentPage = 1;
                return;
            }
            let pagesAux=[]
            for (let index = 1; index <= totalPages; index++) {
                pagesAux.push(index);
                
            }
            setPages(pagesAux)
        
            


        }, []);




return (<>
    <ButtonStyled> {"<"}    </ButtonStyled>
    <div>
    {pages.map(d=> d + " ")}


    </div>
    <ButtonStyled> {">"}    </ButtonStyled>
</>

);



}