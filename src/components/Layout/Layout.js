import './Layout.scss';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'



export default function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <div>{children}</div>
            <Footer />
            <div>
<p>## Deliverable 3</p>
<p></p>
<p>- **Goal**: In this assignment, you will continue working on your Ecommerce Store. It should contain the following:</p>
<p>  - Home Page (with API integration)</p>
<p>  - Product List Page (with API integration)</p>
<p>  - Product Detail Page (with API integration)</p>
<p>  - Search Results Page (with API integration)</p>
<p>- **Related topics**: Fetching a Real API, React Router, Global State Management</p>
<p></p>
<p></p>
<p>### Before you start</p>
<p>Follow these steps before you begin:</p>
<ol>
  <li>Merge your branch from the previous deliverable into main in your own GitHub repo</li>
  <li>Create a new branch with the name “feat/deliverable3” derived from main on your repo</li>
  <li>Read carefully all the instructions and notes for this deliverable</li>
  <li>Start working on the requirements specified below</li>
</ol>
<p></p>
<del><p>### Requirements</p></del>
<del><p>The following is the list of requirements for your deliverable:</p></del>
<del><p>1. Refactor your App to use **React Router** to navigate across your pages. You should remove all the conditional rendering logic and update your “onClick” event handlers that you previously implemented so you can navigate through your pages using the React Router Link Component.</p></del>
<del><p>2. Update your **Home Page** according to the following requirements:</p></del>
<del><p>- 2.1. The route for this page should be **/** and **/home**</p></del>
<del><p>- 2.2. Refactor your **Featured Banners Slider** to fetch data from the API using [this custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js).</p></del>
<del><p>- 2.3. Refactor your **Product Categories Carousel** or **Grid** according to the following requirements:</p></del>
<del><p>- 2.3.1. Fetch data from this endpoint:</p></del>
<del><p>  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=apiRef&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30</p></del>
<del><p>  **IMPORTANT:** You have to replace the **apiRef** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.</p></del>
<del><p>- 2.3.2. Each category should have a link to the **Product List Page** including a query param in the URL to filter the products by that category.</p></del>
<del><p>- 2.4. Refactor your **Featured Products Grid** according to the following requirements:</p></del>
<del><p>- 2.4.1. Fetch data from this endpoint:</p></del>
<del><p>  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=apiRef&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16</p></del>
<del><p> **IMPORTANT:** You have to replace the **apiRef** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.</p></del>
<del><p>- 2.4.2. Each element on this grid should have at least the main image of the product, its name, category, price, “Add to cart” button, and a link to its detail page.</p></del>
<del><p>- 2.4.3. You should show 16 products maximum on this grid and it is not necessary to implement pagination controls.</p></del>
<del><p>3. Update your **Product List Page** according to the following requirements:</p></del>
<del><p>- 3.1. The route for this page should be **/products** and **/products?category=categorySlug**</p></del>
<del><p>- 3.2. Refactor your Product Categories Sidebar according to the following requirements:</p></del>
<del><p>- 3.2.1. Fetch data from this endpoint:</p></del>
<del><p>  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=apiRef&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30</p></del>
<del><p> **IMPORTANT:** You have to replace the **apiRef** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.</p></del>
<del><p>- 3.2.2. You should be able to filter your products by category according to the category [filtering behavior from the previous deliverable](#filtering-behavior).</p></del>
<p>- 3.2.3. If there is a filter applied, you should show a “Clear filters” button that will remove all the active filters and update the grid to show all the products.</p>
<p>- 3.3. Refactor your **Products Grid** according to the following requirements:</p>
<p>- 3.3.1. Fetch data from this endpoint:</p>
<p>  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=apiRef&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=12</p>
<p> **IMPORTANT:** You have to replace the **apiRef** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.</p>
<p>- 3.3.2. Each element on this grid should have at least the main image of the product, its name, category, price, “Add to cart” button, and a link to its detail page.</p>
<p>- 3.3.3. Create the Pagination Controls dynamically, you should show 12 products maximum per page.</p>
<p>4. Create the **Product Detail Page** according to the following requirements:</p>
<p>- 4.1. The route for this page should be **/product/productId**</p>
<p>- 4.2. Fetch data for the selected product from this endpoint:</p>
<p>  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=apiRef&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22productId%22%29+%5D%5D</p>
<p> **IMPORTANT:** You have to replace the **apiRef** on the query params of the URL with the latest value for this particular API and **productId** with the id of the selected product. Please check [the sample custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.</p>
<p>- 4.3. This page should include the following blocks:</p>
<p>- 4.3.1. A **Gallery** to display the images of the selected product. You can use [this library](https://codesandbox.io/s/modsk?file=/src/App.jsx) (or any other) and customize its appearance to match the look and feel of your application.</p>
<p>- 4.3.2. A **Label** to display the name of the selected product.</p>
<p>- 4.3.3. A **Label** to display the current price of the selected product.</p>
<p>- 4.3.4. A **Label** to display the SKU of the selected product.</p>
<p>- 4.3.5. A **Label** to display the category name of the selected product.</p>
<p>- 4.3.6. A **List of Labels** to display the tags of the selected product.</p>
<p>- 4.3.7. A **Paragraph** to display the description of the selected product.</p>
<p>- 4.3.8. A **Number Input** to select the number of items to be added to the cart.</p>
<p>- 4.3.9. An **Add to Cart Button**.</p>
<p>- 4.3.10. A **Table** or **List** to display the specs of the selected product.</p>
<p>5. Create the **Search Results Page** according to the following requirements:</p>
<p>- 5.1. The route for this page should be **/search?q=searchTerm**</p>
<p>- 5.2. You can consume this endpoint to get the products matching your search term:</p>
<p>  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=apiRef&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22searchTerm%22)%5D%5D&lang=en-us&pageSize=20</p>
<p> **IMPORTANT:** You have to replace the **apiRef** on the query params of the URL with the latest value for this particular API and **searchTerm** with the search term that the user entered. Please check [the sample custom hook](https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.</p>
<p>- 5.3. This page should contain the following blocks:</p>
<p>- 5.3.1. A **List** to display the products that match your search term. For each element on this grid, you should show at least the main image of the product, its name, category, price, short description, and “Add to Cart” button.</p>
<p>- 5.3.2. **Pagination Controls** created dynamically to switch between results pages in case there are more than 20 search results.</p>
<p>- 5.3.3. A **Custom Message** that will be rendered only when there are no results matching the searchTerm.</p>
<p>6. Update your **Header** to include a search input and a button that after clicking on it, redirects to the **Search Results Page** for the search term that you entered.</p>
<p></p>
<p> **Notes**:</p>
<p> - You should implement functional components with hooks.</p>
<p> - Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don’t use any components library such as Bootstrap or Material UI.**</p>
<p> - We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!</p>
<p> - Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).</p>
<p> - Please make sure that no warnings or errors are logged in the browser console.</p>
<p> - You don’t have to implement the “Add to cart” logic yet.</p>
<p> - If you want to dive deeper into how to consume the REST API please check [the official documentation of the Prismic CMS](https://prismic.io/docs/technologies/rest-api-technical-reference) which is the platform that we’re using for this project.</p>
<p></p>
<p>### Evaluation Criteria</p>
<p></p>
<p>The following is the list of evaluation criteria for your deliverable:</p>
<p>- Navigation to all pages (Home Page, Product Page, Product Detail Page, Search Results Page) works correctly using React Router: 20 points</p>
<p>- Featured Banners Slider, Product Categories Carousel/Grid, and Featured Products Grid on the Home Page are working correctly fetching data from the API: 5 points</p>
<p>- Product Category Sidebar on the Product List Page is filtering Products Grid correctly interacting with the API: 25 points</p>
<p>- Products List Grid is fetching data from the API and Pagination Controls are working correctly: 15 points</p>
<p>- Product Detail Page is fetching data correctly from the API for the selected product and all the required blocks are working properly: 15 points</p>
<p>- Search Results Page is connected to the search input in the header and is consuming the API to filter only the results that match the search term value from the query param: 10 points</p>
<p>- Pagination Controls and Custom Message in Search Results Page are generated dynamically and are working correctly: 10 points</p>
<p></p>
           </div>
        </div>
    );
}