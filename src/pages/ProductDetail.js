import { useParams } from "react-router-dom";
function ProductDetail() {
    const params = useParams();
  return (
    <>
    <h2>Product Detail Page</h2>
    <p>{params.productId}</p>
    </>
  );
}
export default ProductDetail;