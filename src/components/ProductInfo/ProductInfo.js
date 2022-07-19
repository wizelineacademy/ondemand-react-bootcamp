import { useEffect, useState, useContext } from "react";
import CarouselGrid from "../CarouselGrid/CarouselGrid";
import './ProductInfo.css'
import Pagination from "../Pagination/Pagination";
import { UserDetailsContext } from '../../components/UserDetailsContextProvider/UserDetailsContextProvider'

export default function ProductInfo({ products }) {


    const { userDetails, setUserDetails } = useContext(UserDetailsContext);
    // console.log(userDetails)
    // console.log(setUserDetails)

    const [gridData, setGridData] = useState([]);
    const [totalPages, setTotalPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        if (products === undefined || products?.length === 0) {
            setGridData({});
            return;

        }
        setGridData(products.map
            ((data) => {
                return data.srcs.map((image, index) => {
                    return {
                        id: index + 1,
                        src: image,
                        alt: data.alt,
                        text: data.text,
                        categoryId: data.categoryId,
                        navigationLink: data.navigationLink,
                        uniqueId: data.uniqueId
                    };
                })
            }))

    }, [products, setGridData]);

    return (
        <div style={{ display: 'inline-block' }}>
            {(gridData?.length > 0) ?
                <CarouselGrid
                    gridData={gridData}
                    gridName={'Products'}
                    buttonFunction={(id) => { /*console.log("id", id);*/ setUserDetails([...userDetails,id]) }}
                    buttonText='Add to cart' />
                : <div>No items Found</div>
            }
            
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setTotalPages={setTotalPages}
                setCurrentPage={setCurrentPage} />
        </div>

    );



}