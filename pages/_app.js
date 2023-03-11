/* React */
import React ,{useState, useEffect} from 'react';

/* Next JS */
import Head from 'next/head'

/* Layout */
import Header from '../components/layout/Header.js';
import SignIn from './signin/index.js';

/* Css */
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import 'semantic-ui-css/semantic.min.css';
import "tabulator-tables/dist/css/tabulator.min.css"; 

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "react-datepicker/dist/react-datepicker.css";
import 'react-count-animation/dist/count.min.css';

import '../styles/reset.css';
import '../styles/components.css';
import '../styles/globals.css';
import '../styles/white-theme.css';

import Scrollbar  from "react-scrollbars-custom";

/* Redux */
import { wrapper } from '../store/store.js';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin, setIsAdmin } from '../store/reducers/authSlice';
import { setAccToken } from '../store/reducers/tokenSlice.js';
import { setAllPlantList } from '../store/reducers/plantSlice.js';
import { setIsLoading } from '../store/reducers/loadingSlice.js';

/* Function */
import reCallAccessToken from '../components/utils/reCallAccessToken';
import { getPlantData } from '../components/utils/api/apiFunctions.js';



function MyApp({ Component, pageProps }) {

  /* Redux */
  // 리덕스 컨트롤용 디스패치
  const dispatch = useDispatch()

  
  // - 로그인 여부
  // - 관리자 여부
  // - Access Token
  const { isLoading, isLogin, isAdmin, accToken } = useSelector(state => ({
      isLoading : state.loadingSlice.isLoading,
      isLogin: state.authSlice.isLogin,
      isAdmin: state.authSlice.isAdmin,
      accToken: state.tokenSlice.accToken
  }));


  /* UI 관련 */
  // - 테마 상태 확인
  const { isWhiteMode } = useSelector(state => ({
    isWhiteMode: state.themeSlice.isWhiteMode
  }));
  // - Gnb 오픈 여부 확인
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  
  // 로그인 체크
  async function loginChecker(){
    let result = await reCallAccessToken()
    
    console.log("result", result)

    if(result !== undefined){
      dispatch(setIsLogin(result.isLogin));
      dispatch(setIsAdmin(result.isAdmin));
      dispatch(setAccToken(result.accToken));

    }else if(isLogin == false){
      setIsLoading(false);
    }
  }

  // 발전소 리스트 가져오기
  async function plantListChecker(accToken){
    let result = await getPlantData(accToken)
    dispatch(setAllPlantList(result));
    setIsLoading(false);
  }


  useEffect(()=>{
    loginChecker();
  },[])

  useEffect(()=>{
    if(accToken !== ""){
      plantListChecker(accToken);
    }
  },[accToken])


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#" />
      </Head>
      <div id="page"> 
        { isLogin ? 
            // isLoading ? 
              // "//spinner"
            // : 
            (<>
              <Header 
                {...pageProps}
                  isGnbOpen={isGnbOpen}
                  setIsGnbOpen={setIsGnbOpen}
                  accToken={accToken}
                  setAccToken={setAccToken}
              />
              <Scrollbar id="container" >
              <div className={`container-wrap ${isWhiteMode ? "white" : ""}`}>
                
                <Component 
                  {...pageProps}
                  accToken={accToken}
                  setAccToken={setAccToken}
                />

              </div>
              </Scrollbar >
            </>)
        
        // : 

          // isLoading ? 
            // "//spinner"
          : 
            <SignIn 
              {...pageProps}
              accToken={accToken}
              setAccToken={setAccToken}
            />
        }
      </div>
  </>
  );
}

export default wrapper.withRedux(MyApp);
