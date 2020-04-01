import React from 'react';

import pdf from '../../pdfs/sample-multi-page-pdf.pdf';
import { usePdfViewer } from '../../hooks/usePdfViewer/index';

const PDFViewer = () => {
  const { pdfDocument, setPage, page, canvasRef } = usePdfViewer(pdf, 1)
  const isFirstPage = page === 1
  const goToPrevious = () => {
    setPage(page - 1)
  }
  const goToNext = () => {
    setPage(page + 1)
  }

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button disabled={isFirstPage} onClick={goToPrevious}>
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={goToNext}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default PDFViewer;
