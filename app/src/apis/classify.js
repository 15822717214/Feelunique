import http from "../utils/http";

export const HomeData = (params)=>http("get","/api/pt_catalog/brand/getBrands?page=1",params);