import React, {useRef, useEffect, useState} from 'react';

let statusMake = true;
export default function(props) {
    const boxSearch = useRef();
    const [classCleanSearch, setClassCleanSearch] = useState('invisible');
    const [statusSearch, setStatusSearch] = useState(0);
    const [JSONdata, setJSONdata] = useState();
    // const [collections, setCollections] = useState();
    const [resultSearch, setResultSearch] = useState();

    // check jsonData and statusMake, make sv-vo keyWords to jsonData. 
    if (props.jsonData && statusMake) {
        statusMake=false;
        props.jsonData.forEach((el)=>{
        let myId = el.id, mySrc = el.src;
        
        el.id = ""; el.src = "";
        el.keyWords = Object.values(el).reduce((acum, el)=>{
            return acum + ` ${el}`
        }).trim().split(" ");

        el.id = myId; el.src = mySrc;
    })}//now JSONdata will always with keyWords
    
    useEffect(()=>{
        // props.jsonData2 ? setCollections([...Object.values(props.jsonData2)[0], ...Object.values(props.jsonData2)[1]]) : false;
        setJSONdata(props.jsonData ? props.jsonData : false);// check jsonData and set  with keyWords  
        // props.jsonData2 ? console.log(props.jsonData2) : false;

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
            setResultSearch(JSONdata.filter((el)=>{ //set resultSearch which match with user's keyWords
                return el.stat > 0;
            }));
            // props.jsonData2 ? setCollections(props.jsonData2.filter(el=>{
            //     return el.search(new RegExp(myKeyWord,"i"))!=-1;
            // })) 
            // : console.log("not now");
            // collections ? console.log(collections) : false;
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
                <>
                    <ul>
                        {/* {
                            collections ? collections.map(el=>{
                                return (
                                    <li>{el}</li>
                                )
                            })
                            : ""
                        } */}
                    </ul>
                    {resultSearch.slice(0,4).map(el=>{//.slice(0,3) after resultSearch
                        return (
                            <figure key={el.id}>
                                <img src={`images/${el.src}`} alt="" />
                                <figcaption>
                                    <p>{el.title}</p>
                                    <p>{`costs $${el.costs}`}</p>
                                    <p>{`for ${el.categories}`}</p>
                                </figcaption>
                            </figure>
                        )
                    })}
                </>
                : false}
            </div>
        </div>
    )
}
