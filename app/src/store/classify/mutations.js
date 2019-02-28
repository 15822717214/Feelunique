export default{
    handlebanner(state,data){
    	state.bannerimg = data
    },
    handleGoods(state,data){
    	state.brandsimg=data.brands
    	console.log(data)
    }
}