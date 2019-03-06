import http from "../utils/http";

export const Catemes = (params)=>http("get","/api/queryapi/lists?page=1&pageSize=10&aggs=1&cid=3726&sort=top",params)