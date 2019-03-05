//引入mockjs
import Mock from "mockjs"
//引入写好的数据
import classify from "../apis/classify"



//写接口请求数据
//分类首页
Mock.mock(/\/classify/ , "get" , classify.data)