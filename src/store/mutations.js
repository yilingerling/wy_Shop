
import {
    GET_SWPER
} from "./mutations-type"

export default{
    async [GET_SWPER](state,address){
        //let result = await getSwpers()

        //state.address = address
        state.address = address
    }
}