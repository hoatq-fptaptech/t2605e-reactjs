import URL from "../constants/URL"
import apiClient from "../utils/api"

export const get_product_by_category = async (slug)=>{
    var products = [];
    try {
        const rs = await apiClient.get(URL.CATEGORY_PRODUCT(slug));
        const data = rs.data;
        products = data.products;
    } catch (error) {
        // nổ 1 cái thông báo gì đó
    }
    return products;    
}
export const get_product_detail = async (id)=>{
    var product = {};
    try {
        const rs = await apiClient.get(URL.DETAIL_PRODUCT(id));
        product = rs.data;
    } catch (error) {
    }
    return product;
}