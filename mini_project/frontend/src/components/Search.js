import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function Search() {

     const [keyword,setKeyword]=useState('');
     const navigator = useNavigate();

     const searchHandeler=()=>{

        navigator("/search?keyword="+keyword)

 
     }
     
    return  <div className="input-group">
              <input
                type="text"
                id="search_field"
                onChange={(e)=>setKeyword(e.target.value)}
                className="form-control"
                onBlur={searchHandeler}
                placeholder="Enter Product Name ..."
              />
              <div className="input-group-append">
                <button onClick={searchHandeler} id="search_btn" className="btn">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
    
}