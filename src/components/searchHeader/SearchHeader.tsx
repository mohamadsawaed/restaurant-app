import React from 'react';
import { MainContainer, SearchImg, SearchLabel } from './SearchrStyled';



function SearchHeader  (props:any) {
    return <MainContainer>
        <SearchImg src="logo/Vector.svg" alt="" onClick={()=>{props.setSearchLogo(false)}}/>
        <SearchLabel htmlFor="search">Search</SearchLabel>
    </MainContainer>;
}



export default SearchHeader;