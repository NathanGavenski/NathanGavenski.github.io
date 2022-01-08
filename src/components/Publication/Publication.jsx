import "./Publication.scss";
import React from "react";

import { Overlay, Tooltip } from 'react-bootstrap';

function template(title, authors, conference, year, bibtex, pdf, github, copy, copyState, copyRef) {
  return (
    <div className="publication">
      <p className="text">
        <span className="authors">{authors}</span>;
        <span className="title">{' '}{title}</span>
        <br />
        <span className="conference">{' '}{conference}</span>
        <span className="year">{' '}({year})</span>
        <br />
        <div className="links">
          {pdf.length > 0 && <a href={pdf} className="pdf">[PDF]</a>}
          {bibtex.length > 0 &&
            <div className="button">
              <button className="bibtex" ref={copyRef} onClick={copy} onKeyDown={copy}>[Bibtex]</button>
              <Overlay target={copyRef.current} show={copyState} placement="top">
                {(props) => (
                  <Tooltip id="overlay" {...props}>
                    Copied!
                  </Tooltip>
                )}
              </Overlay>
            </div>
          }
          {github.length > 0 && <a href={github} className="github">[GitHub]</a>}
        </div>
      </p>
    </div>
  );
};

export default template;
