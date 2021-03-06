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


import { GET_SEARCH_ARTICLES,RESET_ARTICLES } from '../type'
import Article from '../../models/Article'
const initialState = {
    searchItem: []
};

const searchReducer = (state = initialState, action)=> {
  switch (action.type) {
   case GET_SEARCH_ARTICLES:
            let data = [];
            action.payload.forEach((el, index) => {
                let myArticles = new Article(
                    el._id,
                    el.headline.main,
                    el.abstract,
                    el.multimedia[5],
                    el.lead_paragraph,
                    el.subsection_name,
                    el.web_url
                );
                data.push(myArticles);

                //data.push(index);
            });
            return {
                ...state,
                searchItem: state.searchItem.concat(data)
            } 
            case 'RESET_ARTICLES':
            return {
                ...state,
                searchItem: []
            };

            default:
            return state;
            
        }   
    };
    export default searchReducer