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
  getProducts = (id) => {
    return this.get("/product/get-products/"+id);
  };
  getSellerProducts = () => {
    return this.geto("/seller/get-products");
  };
  deleteSellerProduct = (id) => {
    return this.deleteo("seller/delete-product/"+id);
  };
  updateSellerProduct = (id,data) => {
    return this.updateo("seller/edit-product/"+id,data);
  };
  getOrdersSel = (data) => {
    return this.geto("/order/get-orders/"+data);
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

  approveOrder=(id)=>{
    return this.updateo("order/approve-order/" + id,{});
  }
  cancelOrder=(data)=>{
    return this.updateo("order/cancel-order/" + data.id,{ id: data.id, qty: data.qty, productId: data.productId });
  }
  completeOrder=(id)=>{
    return this.updateo("/order/complete-order/" + id,{});
  }
  AddStore=(data)=>{
    return this.posto("/seller/create-store" ,data);
  }
  AddProduct=(data)=>{
    return this.posto("/seller/create-product" ,data);
  }
  checkStore=()=>{
    return this.geto("/seller/get-store");
  }
}
let productService = new ProductsServices();
export default productService;
