/* eslint-disable */
import React, { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { Document, Page, pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import HTMLFlipBook from "react-pageflip";

// Material Kit 2 React addons
// import DefaultCounterCard from "addons/Cards/CounterCards/DefaultCounterCard";

function Flipbook() {
  const [file] = useState(
      "./Aravinth_MarriageInvitation.pdf"
    // "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess() {
    setNumPages(5);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <div>
              <div className="pagec">
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </div>
              <div className="buttonc">
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    className="Pre"

                >
                  Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}

                >
                  Next
                </button>
              </div>
            </div>
          </div>
          {/* <Grid item xs={12} md={4}> */}
          {/*  <DefaultCounterCard */}
          {/*    count={70} */}
          {/*    suffix="+" */}
          {/*    title="Coded Elements" */}
          {/*    description="From buttons, to inputs, navbars, alerts or cards, you are covered" */}
          {/*  /> */}
          {/* </Grid> */}
          {/* <Grid item xs={12} md={4} display="flex"> */}
          {/*  <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}
          {/*  <DefaultCounterCard */}
          {/*    count={15} */}
          {/*    suffix="+" */}
          {/*    title="Design Blocks" */}
          {/*    description="Mix the sections, change the colors and unleash your creativity" */}
          {/*  /> */}
          {/*  <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} /> */}
          {/* </Grid> */}
          {/* <Grid item xs={12} md={4}> */}
          {/*  <DefaultCounterCard */}
          {/*    count={4} */}
          {/*    title="Pages" */}
          {/*    description="Save 3-4 weeks of work when you use our pre-made pages for your website" */}
          {/*  /> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Flipbook;
