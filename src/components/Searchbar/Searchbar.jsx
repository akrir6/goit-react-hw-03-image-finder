import { MdOutlineImageSearch } from "react-icons/md";
import { SearchbarStyled, SearchButton, SearchForm, SearchInput } from "./Searchbar.styled"

export const Searchbar = ({onSubmit}) => {
    return (
        <SearchbarStyled>
            <SearchForm onSubmit={onSubmit}>
                <SearchButton type="submit">
                    <MdOutlineImageSearch size={24} />
                </SearchButton>

                <SearchInput
                    name="searchInput"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarStyled>
    )
}
