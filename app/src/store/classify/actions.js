import {HomeData,Search,Sandimg,Detalist} from "../../apis/classify";
import axios from "axios";
var i = 1
export default{
	handlebanner({commit}){
     axios({
			method:"get",
			url:"http://localhost:3000/data",
			}).then((data)=>{
				commit("handlebanner",data.data)
				
			})
	},
	async handleGoods({commit}){
		let data = await HomeData({page:i});
		commit("handleGoods",data);
		i++
		if(i==7){
			i=1
		}
	},
	async handleimg({commit},send){
		let cit=Number(send.name)+Number(send.id)
		let data = await Sandimg(cit);
//		console.log(data)
		commit("handleimg",data.results)
	
	},
	async handleSearch({commit},about){
		let data = await Search(about)
//		console.log(data)
		commit("handleSearch",data.results)
		
	},
	async handleNewdeta({commit},best){
		let data = await Detalist()
		commit("handleNewdeta",{data,best})
	}
		
}