/* eslint-disable keyword-spacing */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */


import {GET_SEARCH_ARTICLES, TOP_ARTICLES_ERROR} from '../type'
import axios from 'axios'

export const SearchArtical = (items) => {
    return async (dispatch) => {
        
    const page = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${items}&api-key=HGRCOa4NsS37U9rE0JxNGshoILCbekI5`;
    try{
        axios.get(page)
         .then((res)=>{
             dispatch({type: GET_SEARCH_ARTICLES,
                payload: res.data.response.docs});
         });
  
    }
    catch(e){
     throw new Error(e.message);
    }
    }
}
export const resetData = () => {
    return { type: 'RESET_ARTICLES' };
    }
