import http from "../utils/http";

export const HomeData = (params) => http("get", "/api/pt_catalog/brand/getBrands?page=1", params);
export const Search = (about) => http("get", "/api/queryapi/suggest?query=" + about);

export const Sandimg = (set) => http("get", "/api/queryapi/lists?page=1&pageSize=10&aggs=1&cid="+set+"&sort=top");

export const Detalist =(pop) => http("get","/api/v1/cms/queryBlock?id=h5-detail-promotion",pop)
