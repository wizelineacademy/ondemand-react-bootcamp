import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../utils/hooks/useSearch";

export default function Search(){

const {searchString,setSearchString}= useState('');
const {data,isLoading} = useSearch(searchString);
const [searchParams] = useSearchParams();

useEffect(()=>
{

    const searchString = searchParams.get("q");
    if (searchString === undefined || searchString === null || searchString === '') return;
    setSearchString(searchString)

},[])


    return (<p>search</p>);


}

