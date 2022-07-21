import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
//import useSearch from "../../utils/hooks/useSearch";
import useWrappedSearch from "../../utils/wrappers/useWrappedSearch";
import ProductsInfo from '../../components/ProductsInfo/ProductsInfo'
export default function Search() {

    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const { totalPages, data, isLoading } = useWrappedSearch({ searchTerm, pageNumber: currentPage });


    useEffect(() => {
       // console.log('Search useEffect')
        const searchString = searchParams.get("q");
        if (searchString === undefined || searchString === null || searchString === '') return;
        setSearchTerm(searchString);
        setCurrentPage(1);
    }, [searchParams])
    // const [wrappedData, setWrappedData] = useState(() => ({
    //     data: {},
    //     isLoading: true,
    //   }));

    //   useEffect(() => {

    //     let dataFiltered = [];
    //     if (data.results !== undefined) {

    //       dataFiltered = data.results.map((item, index) => {
    //         return {

    //           id: index + 1,
    //           categoryId: item.data.category.id,
    //           srcs: item.data.images.map((image, index) => { return image.image.url }),
    //           alt: item.data.mainimage.alt,
    //           text: [item.data.name, item.data.price, item.data.category.slug],
    //           navigationLink: `/detail?productId=${item.id}`,
    //           uniqueId:item.id
    //         };
    //       })    
    //         setWrappedData({ data:dataFiltered,  isLoading });
    //     }
    //      console.log(dataFiltered)

    //   }, [data, isLoading,searchTerm]);



   console.log('test', data, isLoading, totalPages)

    return (
        <>
            {(!isLoading && data?.length > 0) ? <ProductsInfo products={data} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <div>No products found</div>}
        </>


    )


}

