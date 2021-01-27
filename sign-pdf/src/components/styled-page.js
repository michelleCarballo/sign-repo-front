import styled from 'styled-components'

export const HomeP = styled.div `
    display: flex;
    justify-content: center;
button {
    height: 42px;
    border-radius: 2px;
    background-color: #e86e5a;
    border: none;
    margin-top: 50px;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
}
`

export const PDF = styled.div `
    display: flex;
    justify-content: space-around;
    align-items:flex-end;

    button{
    height: 42px;
    border-radius: 2px;
    width: 50px;
    border: none;
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
    z-index: 99;
    
    }
`
export const Container = styled.div`
    p{
        text-align:center;
    }
`