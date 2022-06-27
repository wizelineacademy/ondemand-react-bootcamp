import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useSearchParams } from "react-router-dom";
const Cart = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState();
  const [numItems, setNumItems] = useState(0);
  useEffect(() => {
    setProduct(prevProduct => (searchParams.get("productId")));
    setNumItems(prevNumItems => (searchParams.get("numItems")));
  }, []);
  return (
    <Layout type="withoutNav">
      <div>{`Product ${product} Number of items ${numItems}`}</div>
    </Layout>
  );
};

export default Cart;
