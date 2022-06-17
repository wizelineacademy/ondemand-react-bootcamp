import './Home.css';
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Footer from '../components/Footer.js'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import  useFeaturedData  from '../mocks/en-us/featured-products.json';

function Home() {
    const { data:bannerData, isLoading } = useFeaturedBanners();
 
    let bannerDataItems = [];
    if (bannerData.results !== undefined) {
        let i=1;
        // console.log(bannerData.results)
        bannerDataItems = bannerData.results.map((row) => {
        return {
            id: i++,      
            src: row.data.main_image.url,
            alt: 'Ultimate products!',
            text: 'Ultimate products!'
        };
      });
    }

  //  console.log(useFeaturedData.results);
    let featuredDataItems = [];
    if (useFeaturedData.results !== undefined) {
        let i=1;
        // console.log(useFeaturedData.results)
        featuredDataItems = useFeaturedData.results.map((row) => {
          // console.log("data",row.data);
        return {
            id: i++,      
            srcs: row.data.images,
            alt: 'Ultimate products!',
            text: 'Ultimate products!'
        };
      });
    }
// console.log("featuredItems", featuredDataItems);
  return (
   
    
    <div className="App">
     <Header/>
     {isLoading && <div>Loading...</div>}
        {/* {(bannerDataItems.length>0) && 
          // console.log("items"+bannerDataItems)
          
        } */}
        {(bannerDataItems.length>0) && 
         
          <Content bannerData={bannerDataItems} featuredData ={featuredDataItems}/>
        }
      <Footer />
    </div> 
  );
} 

export default Home;
 