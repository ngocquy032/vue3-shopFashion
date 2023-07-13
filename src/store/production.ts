import { ref } from "vue";
// import {getProductService} from "../service/productService";
import productJson from "../store/product.json";

const products = ref(productJson);

const getProduct = () => {
    

}

// const getProductById = async(id: string) => {
//     // const res = await getProductService();
//     // if(res) product.value = res.data
// }

export {
    products,
    getProduct
}