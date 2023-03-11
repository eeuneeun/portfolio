/* .Env Var 선언부 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;


/* Login */
let loginApiParams = {
    url : AUTH_URL+"token",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method : "post",
    withCredentials : true,
};

/* REC */
let recApiParams = {
    url : API_URL+"api/v1/rec",
    method : "get",
    withCredentials : true,
    startDate : "",
    endDate : "",
    Authorization: ""
};

/* SMP */
let smpApiParams = {
    url : API_URL+"api/v1/smp/stat",
    method : "get",
    withCredentials : true,
    startDate : "",
    endDate : "",
    stat:"", //dayavg, monthavg
    Authorization: ""
};

/* 발전소 목록 */
let plantApiParams = {
    url : API_URL+"api/v1/smp/customers/auth/plants",
    method : "get",
    withCredentials : true,
    startDate : "",
    endDate : "",
    plantId : "",
    Authorization: ""
}

/* 발전소별 발전량 목록 */
let eachPlantApiParams = {
    url : API_URL+"api/v1/smp/customers/pv?plantId=",
    method : "get",
    startDate : "",
    endDate : "",
    withCredentials : true,
};