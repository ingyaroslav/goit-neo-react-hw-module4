import { useEffect, useState } from 'react'
import {fetchImage } from './images-api'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

const notify = () => toast.error('Your request doesn\'t contain data');

function App() {
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [loader, setLoader] = useState(false)
  const [customError, setCustomError] = useState(false)
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState()
  const [fullImage, setFullImage] = useState('')

  useEffect(() => {
    if (!searchQuery)
      return
    
    const getImages = async () => {      
      try {        
        setLoader(true);    
        setCustomError(false);
        
        const result = await fetchImage(searchQuery, page)
        if(!maxPage) setMaxPage(result.total_pages)
        setImages(prev => [...prev, ...result.results])
        }
      catch (error) {
        setCustomError(true)
        console.log(error)
        }
      finally {
        setLoader(false)
        }      
    }
    getImages()  
  },[searchQuery, page])

  const handleSearch = (e) => {   
    e.preventDefault();
    const inputhQuery = e.target.searchInput.value.trim();
    if (inputhQuery) {   
      setSearchQuery(inputhQuery) 
      setImages([]);
      setPage(1);
      setMaxPage();
    }
    else { notify() } 
    e.target.reset()
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

 const handleImageClick = (image) => {
    
   setFullImage(image);
   setModal(true);
  };

  const handleModalClose = () => { 
    setModal(false);
  };

  return (
    <>
      {modal && <ImageModal handleModalClose={handleModalClose} fullImage={fullImage} />}
      <ToastContainer/>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} handleImageClick={handleImageClick}/>}
      {customError&&<ErrorMessage/>}
      <Loader loader={loader}/>     
      {page < maxPage && <LoadMoreBtn onLoadMore={handleLoadMore}/>}
   </>
  )
}

export default App