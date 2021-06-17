import axios from "axios"; //manuel axios

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getAll")
    }
}



/* ================================================================
productService.jx NOTES...
===============================================================================
// SECTION -11 - STEPS
step1: Restfull Service Request Atmak - Ürünleri getiren adrese istek atmak
step2: manule axios import → import axios from "axios"; //manuel axios
step3: ProductList.jsx'e Git
====================================================================
===================================================================
====================================================================
====================================================================

==================================================================== */