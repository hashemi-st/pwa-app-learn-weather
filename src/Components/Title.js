import React from "react";
import styled from 'styled-components';
import logo from './icon3_prev_ui.png';

const Wrapper = styled.div`
color:white;
font-size : 1.5rem;
margin-bottom: 20px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

& img{
width: 100px;
margin-bottom: 10px;
}
@media only screen and (max-width: 600px) {
& {
font-size : 1.3rem;
}
}
`
const Title = ()=>{
    return(
        <Wrapper>
            <img src={logo} alt="هواشناسی"/>
            <p>نام شهر موردنظر خود را وارد نمائید :</p>
        </Wrapper>
    )
}
export default Title