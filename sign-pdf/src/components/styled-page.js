import styled from "styled-components";


export const PDF = styled.div `
    display: flex;
    justify-content: space-around;
    align-items:flex-end;

`
export const Up = styled.div`
    margin: 60px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        margin: 25px;
        text-align:center;
    }

`
export const IDrop = styled.div`
    width:400px;
    height: 70px;
    display:flex;
    justify-content:center;
    border-style: dashed;
    color: black;
    background-color: white;
    outline:none;

    :hover{
        background-color: #DCDCDC;
    }
    
`
export const Container = styled.div`

    button {
        margin: 40px 110px 0px 110px;
        background-color: #4CAF50; /* Green */
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        transition-duration: 0.4s;
        border: solid 2px #4CAF50;
        outline: none;
        border-radius: 10px;
        :hover{
            background-color: white; /* Green */
            color: black;
            border-color: #4CAF50;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
    }
    p{
        text-align: center;
    }
    
`

export const Buttons = styled.div`
    display:flex;
    justify-content: space-between;

`