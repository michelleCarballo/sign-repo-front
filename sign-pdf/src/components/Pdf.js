import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import teste from './test.pdf'
import {Container, PDF} from './styled-page'

export default function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

 function onClickLeft () {
   if(pageNumber < numPages)
      setPageNumber(pageNumber+1)
  }

  function onClickRight () {
    if(pageNumber > 1)
      setPageNumber(pageNumber -1)
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [])

  return (
    <Container>
    <PDF>
      <button onClick={() => onClickRight()}>🡰</button>
      <Document
      file={teste}
      onLoadSuccess={onDocumentLoadSuccess}
>
    <Page pageNumber={pageNumber} />
     
</Document>
    <button onClick={() => onClickLeft()}>🡲</button>
    </PDF>
    <p>Page {pageNumber} of {numPages}</p>
    </Container>
  );
}

  