import {HomeBanner,HomeData} from "../../apis/home";
export default {
   async handleHomeBanner({commit}){
        let data = await HomeBanner();
        commit("handleHomeBanner",data);
    },
    async handleHomeData({commit}){
        let data = await HomeData();
        commit("handleHomeData",data);
    }
}