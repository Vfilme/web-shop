import React, {useRef, useEffect, useState} from 'react';
import * as data from '../../data.js';
let statusMake = true;
export default function(props) {
    // let JSONdata = 0;
    const boxSearch = useRef();
    const [classCleanSearch, setClassCleanSearch] = useState('invisible');
    const [statusSearch, setStatusSearch] = useState(0);
    const [JSONdata, setJSONdata] = useState();
    const [resultSearch, setResultSearch] = useState();

    // check jsonData and statusMake, make sv-vo keyWords to jsonData. 
    if (props.jsonData && statusMake) {
        statusMake=false;
        props.jsonData.forEach((el)=>{
        let myId = el.id;
        el.id = "";
        el.keyWords = Object.values(el).reduce((acum, el)=>{
            return acum + ` ${el}`
        }).trim().split(" ");

        el.id = myId;
    })}//now JSONdata will always with keyWords
    
    useEffect(()=>{
        setJSONdata(props.jsonData ? props.jsonData : false);// check jsonData and set  with keyWords  

        let myKeyWord = boxSearch.current.value.trim().replace(/\s+/g, " ").split(" ");// make user's keyWords

        if (JSONdata) {// check JSONdata  && myKeyWord.length!=0 && myKeyWord[0]!=""

            //clean JSONdata 
            for (let i=0; i<JSONdata.length; i++) {
                for (let j=0; j<JSONdata[i].keyWords.length; j++) {
                    JSONdata[i].stat = 0;
                }
            }

            // making and counting stat
            if (props.statusResultSearchProduct == true){
                for (let i=0; i<JSONdata.length; i++) {
                    for (let j=0; j<JSONdata[i].keyWords.length; j++) {
                        for (let l=0; l<myKeyWord.length; l++) {
                            if ( JSONdata[i].keyWords[j].search(new RegExp(myKeyWord[l], "i"))!=-1 && props.statusResultSearchProduct) {
                                JSONdata[i].stat ??= 0;
                                JSONdata[i].stat++;
                                if (myKeyWord[l]=="" && JSONdata[i].id > 2) {
                                    JSONdata[i].stat = 0;
                                }
                            }
                        }
                    }
                }
            }
            
            // console.log(myKeyWord);

            setResultSearch(JSONdata.filter((el)=>{ //set resultSearch which match with user's keyWords
                return el.stat > 0;
            }));
            // console.log(myKeyWord);
        }
    }, [statusSearch, props.jsonData, props.statusResultSearchProduct]);

    const makeSearch = ()=> {
        setStatusSearch(statusSearch+1);
        props.setStatusSearchProduct();
    }
    return (
        <div className={`wrapperSearch ${props.statusSearch}`} >  
            <form>
                <img src={props.searchSrc} alt="" />
                <input type="text" onInput={()=>makeSearch()} ref={boxSearch} placeholder="Искать..." />
                <p className={classCleanSearch} onClick={()=>{setClassCleanSearch('clean'); makeSearch();boxSearch.current.value = ''}}>Отчистить</p>
                <img src={props.krestSrc} onClick={props.lowClick} alt="" />
             </form> {/* boxSearchProducts searchCategories searchProducts */}
            <div className='boxSearchProducts'>
                {resultSearch ? 
                resultSearch.map(el=>{
                    return (
                        <figure key={el.id}>
                            <img src={`images/products/${el.src}`} alt="" />
                            <figcaption>
                                <p>This id {el.id}</p>
                                <p>This keyWords {el.keyWords} the end</p>
                            </figcaption>
                        </figure>
                    )
                })
                : false}
            </div>
        </div>
    )
}
