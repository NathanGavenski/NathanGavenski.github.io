import "./Publication.scss";
import React from "react";

import { Overlay, Tooltip } from 'react-bootstrap';

function template(title, authors, conference, year, bibtex, pdf, github, copy, copyState, copyRef) {
  return (
    <div className="publication">
      <div className="text">
        <span className="title">{title}</span>;
        <span className="authors">{' '}{authors}</span>
        <br />
        <span className="conference">{' '}{conference}</span>
        <span className="year">{' '}({year})</span>
        <br />
        <div className="links">
          {pdf.length > 0 && <a href={pdf} target="_blank" rel="noreferrer" className="pdf">[PDF]</a>}
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
          {github.length > 0 && <a href={github} target="_blank" rel="noreferrer" className="github">[GitHub]</a>}
        </div>
      </div>
    </div>
  );
};

export default template;
