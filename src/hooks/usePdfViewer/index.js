import { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

export const usePdfViewer = (file, scale) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: file,
    page,
    canvasRef,
    scale,
  });

  return { pdfDocument, setPage, page, pdfPage, canvasRef }
}
