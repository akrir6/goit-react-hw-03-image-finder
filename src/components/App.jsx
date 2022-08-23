import { fetchImages } from "services/pixabayAPI";
import { Container } from "./App.styled";
import { Component } from "react";
import { Loader } from "./Loader/Loader"; 

import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Searchbar } from "./Searchbar/Searchbar";
import { BadRequest } from "./BadRequest/BadRequest";
export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    totalHits:0,
  }

  componentDidUpdate(_, prevState) {
   if (prevState.query!==this.state.query || prevState.page!==this.state.page) this.getImages();
  }

  async getImages() {
  this.setState({isLoading:true})
    const { imagesData, totalHits } = await fetchImages(this.state.query, this.state.page);
    if (totalHits) {
      this.setState(prevState => ({ images: [...prevState.images, ...imagesData]}));
      
    }
  this.setState({totalHits, isLoading:false})
  }
    
  searchQueryHandler = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value.trim();
    if (query) this.setState({ images:[], page:1, query, });
   } 
  
  loadMoreHandler = () => {
    this.setState(prevState => ({ page: prevState.page+=1 }));
  }
  
  render() {
    
    return (
      
      <Container>
        <Searchbar onSubmit={this.searchQueryHandler} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>
        <Loader visible={this.state.isLoading} />
        {!this.state.isLoading && this.state.images.length<this.state.totalHits &&
          <Button Button onClick={this.loadMoreHandler}>
        Load more
      </Button> }
        {this.state.query && !this.state.totalHits && <BadRequest>
          Sorry, there are no images matching your search query. Please try again.
        </BadRequest>}
      </Container>
         
    )
  }
}

