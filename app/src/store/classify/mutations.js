export default{
    handlebanner(state,data){
    	state.bannerimg = data
	
    },
    handleGoods(state,data){
    	state.brandsimg=data.brands
    },
    handleimg(state,data){
    	state.outer =data
    },
    handleSearch(state,data){
    	state.search = data
    	
    },
    handleNewdeta(state,data){
    	state.newdata = data.data,
    	state.olddata = data.best.name
    	console.log(data)
    }
    	
}