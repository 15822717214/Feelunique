import {HomeData} from "../../apis/classify";
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
	}
		
}