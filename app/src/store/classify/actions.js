import axios from "axios"
export default{
    handleClassifyData({commit}){
       axios({
           method:"get",
           url:"/classify"
       }).then( (data)=>{
        //    console.log(data.data.item)
           commit("handleClassifyData",data.data)
       } )
    },
    handleGoodListData({commit}){
        axios({
            method:"get",
            url:"/api/queryapi/lists?page=1&pageSize=10&aggs=1&cid=3820&sort=top"
        }).then( (data)=>{
            // console.log(data)
            commit("handleGoodListData",data)
        })
    }
}