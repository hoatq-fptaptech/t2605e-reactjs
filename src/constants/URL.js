const URL = {
    PRODUCT_SEARCH: "/products/search?q=phone",
    CATEGORY_PRODUCT: (slug)=> "/products/category/"+slug,
    DETAIL_PRODUCT: (id)=> "/products/"+id
}

export default URL;