
import styled from 'styled-components';

export const MainContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    height: 273px;

    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    background-image: url("./logo/hompePage_img.png");
    background-size: cover;
    background-position:75% 25%  ;
`;


export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    padding: 10px;
    letter-spacing: 1.97px;
    height: 144px;
    background-color: rgba(255, 255, 255, 0.88);
    
`;
export const SearchHeader = styled.label`
`
export const SearchLogo = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 2%;
`
export const TextInput = styled.input`
    width: 90%;
    border: none;
    background-color: transparent;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.29px;
`;
export const SearchBarContainer = styled.div`
    display: flex;
    width: 90%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border: 1px solid black;
    border-radius: 5px;
    align-items: center;
    padding-right: 5px;
    gap: 30px;  
`;