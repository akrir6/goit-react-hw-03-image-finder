import { Component } from "react";
import { Loader } from "./Loader/Loader"; 

import { Container } from "./App.styled";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
export class App extends Component {
   state = {
   
  }

  componentDidMount() {
   
  }

  componentDidUpdate(_, prevState) {
    
  }
  
  

  render() {
    
    return (
      <>
      <Container>
        <Loader />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        
      </Container>
      <Button>Load more</Button>
    
      </>
      
      )
  }
}

