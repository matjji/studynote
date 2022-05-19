import React from 'react';
import styled from 'styled-components'

import close from '../img/btn_search_close.gif'
const SearchBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    .dim {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 186px;
        background: #000;
        opacity: 0.5;
    }
    .container {
        position: relative;
        width: 100%;
        margin-top: 186px;
        background: #fff;
        overflow: hidden;
        .content {
            position: relative;
            width: 1200px;
            padding: 25px 0;
            margin: 0 auto;
        }
    }
    form {
        text-align: left;
        font-size: 14px;
        color: #2f231c;
        font-weight: normal;
        .title {
            padding-top: 8px;
            width: 87px;
            float: left;
        }
        input {
            padding: 8px 1px 8px 10px;
            height: 16px;
            background: #efefef;
            border: none;
            font-size: 13px;
            line-height: 16px;
            &:focus {
                outline: 0;
            }
        }
        .upline {
            float: left;
            width: 486px;
            select {
                background: #fff;
                border: 1px solid #d1cecc;
                border-radius: 4px;
                width: 128px;
                color: #636363;
                margin-right: 14px;
                height: 32px;
                font-size: 13px;
                padding: 0 1px 0 10px;
                &:focus {
                    outline: 0;
                }
            }
            input {
                width: 249px;
            }
        }
        .hashtag {
            width: 540px;
            float: left;
            input {
                width: 529px;
            }
            p {
                font-size: 12px;
                color: #9c9c9c;
                &:before{
                    font-size: 8px;
                    content: "＊";
                }
            }
            .tags {
                margin: 10px 0 0 14px;
                a {
                    font-size: 13px;
                    margin-right: 8px;
                    color: #ff7c98;
                    display: inline-block
                }
            }
        }
        .allergy {
            .allergie {
                float: left;
                width: 280px;
                label {
                    position: relative;
                    float: left;
                    display: block;
                    margin-top: 8px;
                    width: 70px;
                    height: 17px;
                    cursor: pointer;
                    input {
                        width: 17px;
                        height: 17px;
                        margin-right: 5px;
                    }
                    span {
                        position: absolute;
                        top: 2px;
                        display: inline-block;
                        height: 17px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .submit {
        text-align: center;
        padding-top: 25px;
        button {
            width: 147px;
            height: 37px;
            background: #ff7c98;
            color: #fff;
            font-size: 15px;
            line-height: 37px;
            border-radius: 18px;
            cursor: pointer;
            border: none;
        }
    }
    .closeButton {
        position: absolute;
        right: -103px;
        z-index: 1000;
        width: 54px;
        height: 54px;
        top: 42px;
        margin-left: 546px;
        left: 50%;
        img {
            width: 54px;
            height: 54px;
        }
    }
`

const Search = () => {
    const closeBox = React.useRef();
    const closeContainer = React.useRef();
    const closeBtn = React.useRef();
    const onClick = (e) => {
        e.preventDefault();
        closeContainer.current.style.height = 0;
        closeBtn.current.style.display = "none";
        closeBox.current.style.height = 0;
    }
    return (
        <SearchBox ref={closeBox}>
            <div className="dim"></div>
            <div className="container" ref={closeContainer}>
                <div className="content" >
                    <div className="contentProduct">
                        <form className='clear'>
                            <div className="productName clear">
                                <span className='title'>제품명</span>
                                <div className="upline">
                                    <select>
                                        <option value>전체</option>
                                        <option value="A">아이스크림</option>
                                        <option value="B">아이스크림케이크</option>
                                        <option value="C">음료</option>
                                        <option value="D">커피</option>
                                        <option value="E">디저트</option>
                                        <option value="F">block pack</option>
                                        <option value="G">ready pack</option>
                                    </select>
                                    <label htmlFor="product_name"></label>
                                    <input id="product_name" type="text"/>
                                </div>
                                <span className='title'>해시태그</span>
                                <div className="hashtag">
                                    <div>
                                        <label htmlFor="hashtag"></label>
                                        <input id="hashtag" type="text"/>
                                    </div>
                                    <div className="tags">
                                        <div>
                                            <p>자주 찾는 해시태그</p>
                                        </div>
                                        <div>
                                            <a href="/">#피카피카피카츄</a>
                                            <a href="/">#피카츄초코바나나블라스트</a>
                                            <a href="/">#쿨쿨잠만보밀키소다블라스트</a>
                                            <a href="/">#고라파덕아이스크림콘</a>
                                            <a href="/">#푸린아이스크림콘</a>
                                            <a href="/">#포켓몬스터</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="allergy clear">
                                <span className='title'>알레르기 성분</span>
                                <div className="allergie clear">
                                    <label>
                                        <input type="checkbox"/>
                                        <span>계란</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>대두</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>돼지고기</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>땅콩</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>밀</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>복숭아</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>우유</span>
                                    </label>
                                    <label>
                                        <input type="checkbox"/>
                                        <span>없음</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="submit">
                            <button type="button">검색</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="closeButton" ref={closeBtn}>
                <a href="/">
                    <img src={close} alt="close" onClick={onClick}/>
                </a>
            </div>
        </SearchBox>
    );
};

export default Search;