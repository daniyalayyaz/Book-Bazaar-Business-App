import GenericServices from "./GenericServices";
class ProductsServices extends GenericServices {
  constructor() {
    super();
  }
  addProduct = (data) => {
    console.log(2);
    return this.posto("/order/add-order", data);
  };
  getOrders = () => {
    return this.geto("/order/get-user-orders");
  };
 
  getStores = () => {
    return this.get("/seller/get-stores");
  };
  getProducts = (id) => {
    return this.get("/product/get-products/"+id);
  };
  deleteProduct = (_id) => {
    return this.delete("products/" + _id);
  };
  updateProduct = (_id, data) => {
    return this.put("products/" + _id, data);
  };
  getSingle = (_id) => {
    return this.get("products/" + _id);
  };
}
let productService = new ProductsServices();
export default productService;
