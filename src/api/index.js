import ajax from "./ajax"


export const getSwpers = () => ajax({
    url: `/index`
})

export const getCateNavDatas = () => ajax({
    url: `/getCateNavDatas`
})

export const getCateLists = () => ajax({
    url: `/getCateLists`
})