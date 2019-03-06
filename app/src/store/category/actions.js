import {Catemes} from "../../apis/category";
export default {
   async handelCategoryMes({commit}){
        let data = await Catemes();
        commit("handelCategoryMes",data);
    }
}