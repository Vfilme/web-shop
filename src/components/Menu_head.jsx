import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../public/components/head_menu.scss'


export default function Menu(props) {
    const [idMemuEl, setIdMemuEl] = useState(0);
    const [statusHeadMenu, setStatusHeadMenu] = useState(false);
    const [headMenuHeight, setHeadMenuHeight] = useState();
    const head_menu = useRef(null);
    const under_menu = useRef(null);
    useEffect(()=>setHeadMenuHeight(head_menu.current.clientHeight+head_menu.current.getBoundingClientRect().top), []);
    return (
        <div className='head_menu' ref={head_menu}>
            <div><p>Лого</p></div>
            <div 
            className='head_menu_container'
            style={{'--position-top': `${headMenuHeight}px`}}>
                <div 
                className='head_menu_src'
                onMouseOver={()=>{setIdMemuEl(1);setStatusHeadMenu(true)}}
                onMouseLeave={()=>{setIdMemuEl(0);setStatusHeadMenu(false)}}
                >
                    <a href="" className={`${idMemuEl==1?'head_menu_src_active':(statusHeadMenu ? 'head_menu_src_not' : '')}`}>Каталог</a>
                    <div className={`head_menu_under ${idMemuEl==1?'visible':'invisible'}`} ref={under_menu}>
                        <div className='head_menu_tables_src'>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                            <a href="">Первая ссылка</a>
                        </div>
                        <div>
                            <div className='head_menu_box_img' style={{backgroundImage: `url(${props.logoSrc})`}}></div>
                            <a href="">еще ссылка</a>
                            <a href="">еще ссылка2</a>
                            <a href="">еще ссылка3</a>
                        </div>
                    </div>
                </div>
                <div 
                className='head_menu_src'
                onMouseOver={()=>{setIdMemuEl(2);setStatusHeadMenu(true)}}
                onMouseLeave={()=>{setIdMemuEl(0);setStatusHeadMenu(false)}}>
                    <a href="" className={`${idMemuEl==2?'head_menu_src_active':(statusHeadMenu ? 'head_menu_src_not' : '')}`}>О компании</a>
                    <div className={`head_menu_under ${idMemuEl==2?'visible':'invisible'}`}>
                        <div>
                            <a href="">Что-то Еще</a>
                            <a href="">Что-то Еще</a>
                            <a href="">Что-то Еще</a>
                            <a href="">Что-то Еще</a>
                        </div>
                    </div>
                </div>
                <div 
                className='head_menu_src'
                onMouseOver={()=>{setIdMemuEl(3);setStatusHeadMenu(true)}}
                onMouseLeave={()=>{setIdMemuEl(0);setStatusHeadMenu(false)}}>
                    <a href="" className={`${idMemuEl==3?'head_menu_src_active':(statusHeadMenu ? 'head_menu_src_not' : '')}`}>Третья ссылка</a>
                    <div className={`head_menu_under ${idMemuEl==3?'visible':'invisible'}`}>
                        <div>
                            <a href="">Что-то Еще</a>
                            <a href="">Что-то Еще</a>
                            <a href="">Что-то Еще</a>
                            <a href="">Что-то Еще</a>
                        </div>
                    </div>
                </div>
            </div>

            <div><p>Второе меню</p></div>
        </div>
    )
}