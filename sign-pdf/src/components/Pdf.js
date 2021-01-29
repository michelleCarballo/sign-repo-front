import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Page, pdfjs } from 'react-pdf';
import {Container, IDrop, PDF, Up, Buttons} from './styled-page'
import {useDropzone} from 'react-dropzone'
import { Document } from 'react-pdf/dist/esm/entry.webpack';


export default function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const inputFile = useRef(null)
  const [upload, setUpload] = useState('/')

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      
  }, []);

  function showNext() {
    if(pageNumber < numPages)   
    setPageNumber(pageNumber+1);
} 
  function showPrev() {
    if(pageNumber>1) 
      setPageNumber(pageNumber-1);
}
  
 function onButtonClick () {
   inputFile.current.click()
 }
 const onDrop = useCallback((acceptedFiles) => {
  acceptedFiles.forEach((file) => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const binaryStr = reader.result
      console.log(binaryStr)
    }
    reader.readAsArrayBuffer(file)
    setUpload(file)
  })
  
}, [])
const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Container>
      <Up>
        <IDrop {...getRootProps()}>
          <input {...getInputProps()}/>
           <p>Arraste seu arquivo aqui ...</p>
        </IDrop>
        <input 
          type='file' 
          id='file' 
          ref={inputFile} 
          style={{display: 'none'}}
          onChange={event => setUpload(event.target.files[0])}
        />
        <button onClick={onButtonClick}>Arquivo PDF</button>
      </Up>
      {upload === '/' ? <></> :
        <Buttons>
          <button className='btn' onClick={() => showPrev()}> Prev </button>
          <button className='btn' onClick={() => showNext()}> Next </button>
        </Buttons>
      }
       {upload === '/' ? <></>: <p>Page {pageNumber} of {numPages}</p>}

      <PDF>
        {upload === '/' ? <></> :
          <Document
            file={upload}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page className='page' pageNumber={pageNumber} 
              scale={1} />
         </Document>}
      
      </PDF>
      {upload === '/' ? <></>: <p>Page {pageNumber} of {numPages}</p>}
    </Container>
  );
}

  