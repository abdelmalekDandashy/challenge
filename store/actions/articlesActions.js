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

import {GET_TOP_ARTICLES, TOP_ARTICLES_ERROR} from '../type'
import axios from 'axios'

export const getArticles = () => {
    return async (dispatch,getState) => {
    const page = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&page=${getState().art.nbOfPage}&api-key=SjVcW4HSUCz5LuIS0gE8TP95R2NENaBm`;
    try{
        axios.get(page)
         .then((res)=>{
             dispatch({type: GET_TOP_ARTICLES,
                payload: res.data.response.docs});
         });
  
    }
    catch(e){
     throw new Error(e.message);
    }
    }
}
export const addData = () => {
    return { type: 'ADD_DATA' };
    }
