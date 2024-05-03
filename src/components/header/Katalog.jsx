import React, {useRef, useEffect, useState} from 'react';
import * as data from '../../data.js';

export default function(props) {
    const boxSearch = useRef();
    const [statusSearch, setStatusSearch] = useState(0);
    const [classCleanSearch, setClassCleanSearch] = useState('invisible');
    const [statusCleanSearch, setStatusCleanSearch] = useState('');
    const [classShowSearchProducts, setClassShowSearchProducts] = useState('');
    const cM = 'men', cW = 'women', cCh = 'children';
    const textForSearch = 'all';
    const allText = `${textForSearch} ${cM} ${cW} ${cCh} shoes all `;

    useEffect(()=>{
        const tablesOfSearch = document.querySelectorAll('.tablesOfSearch');
        tablesOfSearch.forEach(elem => {
            if (boxSearch.current.value != "" && statusCleanSearch!='clean')  {
                if (elem.innerText.search(new RegExp(boxSearch.current.value, 'ig')) == (-1)) {
                    elem.classList.remove('show');
                }else {
                    setClassCleanSearch('');
                    elem.classList.add('show');
                    setClassShowSearchProducts('showSearchProducts');
                }
            } else {
                elem.classList.remove('show');
                setClassCleanSearch('invisible');
            }
        });
        setStatusCleanSearch('');
    }, [statusSearch]);

    const makeSearch = ()=>{
        setStatusSearch(statusSearch+1);
    }

    return (
        <div className={`wrapperSearch ${props.statusSearch}`} >  
            <form>
                <img src={props.searchSrc} alt="" />
                <input type="text"  onInput={()=>makeSearch()} ref={boxSearch} placeholder="Искать..." />
                <p className={classCleanSearch} onClick={()=>{setStatusCleanSearch('clean'); makeSearch();boxSearch.current.value = '';setClassShowSearchProducts('');}}>Отчистить</p>
                <img src={props.krestSrc} onClick={props.lowClick} alt="" />
            </form>
            <div className={`boxSearchProducts ${classShowSearchProducts}`}>
                <ul className='searchCategories'>
                    <li><a href="" className={`tablesOfSearch`}><span style={{}}>Categories</span><span style={{'visibility': 'none'}}>`${data.keyWords.allCategories}`</span></a></li>
                    <li><a href="" className={`tablesOfSearch`}>All shoest</a></li>
                    <li><a href="" className={`tablesOfSearch`}>Man's shoes</a></li>
                    <li><a href="" className={`tablesOfSearch`}>Woman's shoes</a></li>
                    <li><a href="" className={`tablesOfSearch`}>Children's shoes</a></li>
                </ul>
                <ul className='searchProducts'>
                    <li><a className={`tablesOfSearch`}><img src="https://www.dcshoes.com/cdn/shop/files/300529_dcshoes_103_frt2.jpg?v=1712674242&width=1117" alt="" />red shoes <span>{`${textForSearch} ${cM}`}</span></a></li>
                    <li><a className={`tablesOfSearch`}><img src="https://www.dcshoes.com/cdn/shop/files/1117x1173_XWKR_65.jpg?v=1711395059" alt="" />black shoes<span>{`${textForSearch} ${cW}`}</span></a></li>   
                    <li><a className={`tablesOfSearch`}><img src="https://www.dcshoes.com/cdn/shop/files/1117x1173_XWKR_65.jpg?v=1711395059" alt="" />black shoes<span>{`${textForSearch} ${cCh}`}</span></a></li>        
                </ul>
            </div>
        </div>
    )
}