import {HomeData} from "../../apis/classify";
import axios from "axios";
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
		let data = await HomeData({page:1});
		commit("handleGoods",data);
//		console.log(data)
	}
		
}