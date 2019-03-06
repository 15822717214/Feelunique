export default {
    handleHomeBanner(state,data){
        state.banners=data.data;
    },
    handleHomeData(state,data){
        state.mes=data.results
    }
}