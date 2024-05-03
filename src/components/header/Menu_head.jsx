import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../public/components/menu/head_menu.scss';
import '../../../public/components/menu/under_menu.scss';


export default function Menu(props) {
    const [idMemuEl, setIdMemuEl] = useState(0);
    const [statusHeadMenu, setStatusHeadMenu] = useState(false);
    const [headMenuHeight, setHeadMenuHeight] = useState();
    const [headUnderImgWidth, setHeadUnderImgWidth] = useState();
    const head_menu = useRef(null);
    const under_menu = useRef(null);
    const under_menu_img = useRef(null);

    useEffect(()=>{
        setHeadMenuHeight(head_menu.current.clientHeight+head_menu.current.getBoundingClientRect().top);
        setHeadUnderImgWidth(under_menu_img.current.clientWidth);
        
        window.addEventListener('resize', ()=>{setHeadUnderImgWidth(under_menu_img.current.clientWidth)});
        
    }, []);
    return (
        <div className='head_menu' ref={head_menu}>
            <div className='head_menu_second head_menu_logo'>
                <a href="">
                    <img src={props.logoSrc} alt="" />
                </a>
            </div>
            <div 
            className='head_menu_container'
            style={{'--position-top': `${headMenuHeight}px`,'--head_menu_box_img-height': `${headUnderImgWidth*1.5}px` }}>
                <div
                className='head_menu_src'
                onMouseOver={()=>{setIdMemuEl(1);setStatusHeadMenu(true)}}
                onMouseLeave={()=>{setIdMemuEl(0);setStatusHeadMenu(false)}}>
                    <a href="" className={`${idMemuEl==1?'head_menu_src_active':(statusHeadMenu ? 'head_menu_src_not' : '')}`}>Каталог</a>
                    <div className={`head_menu_under ${idMemuEl==1?'visible':'invisible'}`} ref={under_menu}>
                        <div className='head_menu_tables_src'>
                            <a href="" className='menu_tables_src'>Nike</a>
                            <a href="" className='menu_tables_src'>кроссовки</a>
                            <a href="" className='menu_tables_src'>рюкзаки</a>
                            <a href="" className='menu_tables_src'>костюмы</a>
                            <a href="" className='menu_tables_src'>носки</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='menu_tables_src'>Adidas</a>
                            <a href="" className='menu_tables_src'>кроссовки</a>
                            <a href="" className='menu_tables_src'>трусы</a>
                            <a href="" className='menu_tables_src'>костюмы</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='menu_tables_src'>New balance</a>
                            <a href="" className='menu_tables_src'>кроссовки</a>
                            <a href="" className='menu_tables_src'>футболки</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='menu_tables_src'>Asics</a>
                            <a href="" className='menu_tables_src'>кроссовки</a>
                            <a href="" className='menu_tables_src'>костюмы</a>
                            <a href="" className='menu_tables_src'>футболки</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='inVert'>
                                <div className='head_menu_box_img' style={{backgroundImage: `url(${props.logoSrc})`}} ref={under_menu_img}></div>
                                <p>Название картинки</p>
                                <p>описание</p>
                                <p>Купить сейчас <span>{`>`}</span></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                className='head_menu_src'
                onMouseOver={()=>{setIdMemuEl(2);setStatusHeadMenu(true)}}
                onMouseLeave={()=>{setIdMemuEl(0);setStatusHeadMenu(false)}}>
                    <a href="" className={`${idMemuEl==2?'head_menu_src_active':(statusHeadMenu ? 'head_menu_src_not' : '')}`}>О компании</a>
                    <div className={`head_menu_under ${idMemuEl==2?'visible':'invisible'}`}>
                        <div className='head_menu_tables_src'>
                            <a href="" className='menu_tables_src'>История компании</a>
                            <a href="" className='menu_tables_src'>Место зарождения</a>
                            <a href="" className='menu_tables_src'>Дата появления</a>
                            <a href="" className='menu_tables_src'>Индивидуальность</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='inVert'>
                                <div className='head_menu_box_img' style={{backgroundImage: `url(${props.logoSrc})`}} ref={under_menu_img}></div>
                                <p>Название картинки</p>
                                <p>описание</p>
                                <p>Купить сейчас</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                className='head_menu_src'
                onMouseOver={()=>{setIdMemuEl(3);setStatusHeadMenu(true)}}
                onMouseLeave={()=>{setIdMemuEl(0);setStatusHeadMenu(false)}}>
                    <a href="" className={`${idMemuEl==3?'head_menu_src_active':(statusHeadMenu ? 'head_menu_src_not' : '')}`}>Акции</a>
                    <div className={`head_menu_under ${idMemuEl==3?'visible':'invisible'}`}>
                        <div className='head_menu_tables_src'>
                            <a href=""  className='menu_tables_src'>Система лояльности</a>
                            <a href="" className='menu_tables_src'>Бесплатная доставка</a>
                            <a href="" className='menu_tables_src'>Бесплантые вещи</a>
                            <a href="" className='menu_tables_src'>Розагрыши</a>
                            <a href="" className='menu_tables_src'>Баллы</a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='inVert'>
                                <div className='head_menu_box_img' style={{backgroundImage: `url(${props.logoSrc})`}} ref={under_menu_img}></div>
                                <p>Название картинки</p>
                                <p>описание</p>
                                <p>Купить сейчас</p>
                            </a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='inVert'>
                                <div className='head_menu_box_img' style={{backgroundImage: `url(${props.logoSrc})`}} ref={under_menu_img}></div>
                                <p>Название картинки</p>
                                <p>описание</p>
                                <p>Купить сейчас</p>
                            </a>
                        </div>
                        <div className='head_menu_tables_src'>
                            <a href="" className='inVert'>
                                <div className='head_menu_box_img' style={{backgroundImage: `url(${props.logoSrc})`}} ref={under_menu_img}></div>
                                <p>Название картинки</p>
                                <p>описание</p>
                                <p>Купить сейчас</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='head_menu_USB head_menu_second'>
                <a href="">
                    <img src={props.userSrc} alt="" />
                </a>
                <a href="" onClick={props.downClick}>
                    <img src={props.searchSrc} />
                </a>
                <a href="">
                    <img src={props.basketSrc} alt="" />
                </a>
            </div>
        </div>
    )
}