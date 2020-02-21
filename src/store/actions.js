import {
    getSwpers
} from "../api"

import {
    GET_SWPER
} from './mutations-type'

export default{
    async getAddressAction({commit}){
        let result = await getSwpers()   
        commit(GET_SWPER,result)
    }
}