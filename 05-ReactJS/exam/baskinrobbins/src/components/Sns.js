/**
* @filename Sns.js
* @description sns 아이콘 이미지와 ajax를 사용하여 instagram 사진
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from 'styled-components'
import axios from "axios"
const SnsBox  = styled.section`
    width: 1200px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 170px;
    h3 {
        padding-bottom: 26px;
        img {
            display: block;
            margin: 0 auto;
        }
    }
    .sns_img {
        width: 400px;
        padding-bottom: 35px;
        margin: 0 auto;
        li {
            height: 62px;
            display: inline-block;
            img {
                padding: 0 9px;
            }
        }
    }
    h4 {
        padding: 26px 0;
        margin-bottom: -14px;
        height: 0;
        &:before{
            width: 1200px;
            position: absolute;
            z-index: -1;
            top: 174px;
            height: 1px;
            content: '';
            text-align: center;
            background: #dcd7d1;
        }
        img {
            display: block;
            margin: 0 auto;
        }
    }
    .insta_img {
        width: 1200px;
        height: 785px;
        margin-top: 50px;
        a {
            &:nth-child(5n) {
                img {
                    padding-right: 0px;
                }
            }
            img {
                display: block;
                float: left;
                width: 19.6%;
                height: 32%;
                padding: 0 5px 5px 0;
            }
        }
    }
`

const Sns = () => {
    const [instaImg, setInstaImg] = React.useState();
    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:3001/insta")
                setInstaImg(response.data)
            } catch(e) {
                console.error(e)
                alert("서버 연결 실패")
            }
        })()
    },[])
    return (
        <SnsBox>
            <h3>
                <img href="/" src="http://www.baskinrobbins.co.kr/assets/images/main/h_sns.png" alt="sns img"/>
            </h3>
            <nav className="sns_img">
                <ul>
                    <li>
                        <a href="/">
                            <img src="http://www.baskinrobbins.co.kr/assets/images/main/sns_facebook.png" alt='facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src="http://www.baskinrobbins.co.kr/assets/images/main/sns_twitter.png" alt='twitter'/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src="http://www.baskinrobbins.co.kr/assets/images/main/sns_blog.png" alt='blog'/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src="http://www.baskinrobbins.co.kr/assets/images/main/sns_instagram.png" alt='instagram'/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src="http://www.baskinrobbins.co.kr/assets/images/main/sns_youtube.png" alt='youtube'/>
                        </a>
                    </li>
                </ul>
            </nav>
            <h4>
                <a href="/">
                    <img src="http://www.baskinrobbins.co.kr/assets/images/main/tit_sns.png" alt="baskinrobbins instagram"/>
                </a>
            </h4>
            <div className="insta_img clear">
                {
                    instaImg &&
                    instaImg.map((v, i) => {
                        return(
                            <a href="/" key={i}>
                                <img src={v.src} alt={`insta${i}`}/>
                            </a>
                        )
                    })
                }
            </div>
        </SnsBox>
    );
};

export default Sns;