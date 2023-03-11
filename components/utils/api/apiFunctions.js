
/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { setIsLogin, setIsAdmin } from '../../../store/reducers/authSlice';

/* Library */
import axios from 'axios';

/* .Env */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;



// ★ 로그아웃 
export function logout(){

    // 리덕스 컨트롤용 디스패치
    const dispatch = useDispatch()

    // 쿠키 객체 생성
    const cookies = new Cookies();

    const userInfo = cookies.get('userInfo');
    const refToken = userInfo ? userInfo.refToken : ""


    // API 호출하여 Access Token 파괴
    logoutApiParams = {
        url : AUTH_URL+"auth/realms/kpp/protocol/openid-connect/logout",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        method : "post",
        withCredentials : true,
        data : qs.stringify({
            client_id : "web",
            refresh_token : refToken,
        })
    } 

    axios(logoutApiParams).then((res)=>{

        if(res.status == 204){
            // 로그인 정보가 담겨있는 쿠키 삭제
            cookies.remove(
                "userInfo",
                {
                    path: "/", 
                    //domain: ".example.com"
                }
            );
        
            // 로그인 && 관리자 권한 State 제거
        }

        return true;

    }).catch((err)=>{
        console.log(err);

        return false;
    });

}


// ★ 발전소 정보 호출
export async function getPlantData(accToken){
    
    let plantApiParams = {
        url : API_URL+"api/v1/customers/auth/plants",
        method : "get",
        withCredentials : true,
        headers: {
            Authorization: `Bearer ${accToken}`
        }
    }

    const result = await axios(plantApiParams).then((res)=>{
        if(res.status == 200){
            const data = res.data;
            let tmp = [];
            
            data.map((item, idx)=>{
                tmp.push({
                        value : item.id,
                        label : item.name
                    });
            })

            return tmp;
        }
    }).catch((err)=> {
        console.error(err);
    
    });

    return result;
}


// ★ SMP 정보 호출
function getSmpData(startDate, endDate){
    smpApiParams = {
        ...smpApiParams,
        headers: {
        Authorization: `Bearer ${accToken}`
        },
        params:{
        startDate : startDate ? startDate : DATE_today,
        endDate : endDate ? endDate : DATE_today
        }
    }

    axios(smpApiParams).then((res)=>{
        
        if(res.status == 200){
        const data = res.data;
        setSmp(data);
        }
    }).catch((err)=> {
        console.error(err);
    });
}


// ★ REC 정보 호출
function getRecData(){
    recApiParams = {
        ...recApiParams,
        headers: {
        Authorization: `Bearer ${accToken}`
        },
        params:{
        startDate : DATE_defaultShowDay,
        endDate : DATE_today
        }
    }

    axios(recApiParams).then((res)=>{
        
        if(res.status == 200){
        const data = res.data;
        setRec(data);
        }
    }).catch((err)=> {
        console.error(err);
    });
}


// ★ 발전소별 발전량 목록
export async function getGenAmount(accToken, stat){
    let genAmountApiParams = {
        url : API_URL+"api/v1/customers/pv/stat",
        method : "get",
        withCredentials : true,
        headers: {
            Authorization: `Bearer ${accToken}`
        },
        params: {
            type : "hour",
            plantId : "1"
        }
    }
    
    
    const result = await axios(genAmountApiParams).then((res)=>{
        if(res.status == 200){

            const data = res.data;
            const tmp = data.map((item, idx)=>{
                return item.value;
            })
            return tmp;
        }
    }).catch((err)=> {
        console.error(err);
    
    });

    return result;
}