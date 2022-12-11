import React from "react";
import { HomeContent, MainContainer ,SearchHeader,SearchLogo,TextInput,SearchBarContainer} from './SearchBarstyle'



function SearchBar(){
    return(

        <MainContainer>
        <HomeContent>
            <SearchHeader>Epicure works with the top<br/>chef restaurants in Tel Aviv</SearchHeader>
            <SearchBarContainer>
                 <SearchLogo src="logo/search.svg" alt="searchlogo" />
        <TextInput
          type="text"
          placeholder="Search for restaurant cuisine, chef"
        />
            </SearchBarContainer>

           
        </HomeContent>
    </MainContainer>
        
        
    );
}
export default SearchBar;

