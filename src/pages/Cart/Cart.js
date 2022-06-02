import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useSearchParams } from "react-router-dom";
const Cart = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(prevProduct => (searchParams.get("product")));
  }, []);
  return (
    <Layout type="withoutNav">
      <div>{`Product ${product}`}</div>
    </Layout>
  );
};

export default Cart;
