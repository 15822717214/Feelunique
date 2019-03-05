// import http from "../utils/http";
//写接口的数据引入mock
import Mock from "mockjs"
let data = Mock.mock({
    "item|21":[
        {
           "id":1,
        //    "bigImg": "@image('530x303', '#50B347', '#FFF', 'Mock.js')",
           "picUrl": "@image('156x156', '@color()',#50B347', '#FFF', 'Mock.js')",
           "wrod":"@word(5)"
        }
    ]
})

export default{
    data
}
