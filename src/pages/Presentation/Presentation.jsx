import "./Presentation.scss";
import React from "react";
import { Row, Col, Overlay, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const badgeColors = {
  light: { background: '#1c1e21', color: '#f2f2f2' },
  dark:  { background: '#f2f2f2', color: '#18191a' },
};

function PresentationView(pub, slidesUrl, copied, copyBibtex, theme) {
  const { title, authors, conference, year, bibtex, pdf, github, presentation } = pub;
  const copyRef = React.useRef(null);

  const hasEvent = presentation?.event || presentation?.date;
  const badge = badgeColors[theme] || badgeColors.light;

  return (
    <div className="presentation-page">
      <Row className="presentation-header">
        <Col>
          <Link to="/publications" className="back-link">← Publications</Link>

          {hasEvent && (
            <div className="presentation-meta">
              {presentation.event && (
                <span
                  className="event-badge"
                  style={{ background: badge.background, color: badge.color }}
                >
                  {presentation.event}
                </span>
              )}
              {presentation.date && <span className="event-date">{presentation.date}</span>}
            </div>
          )}

          <h1 className="paper-title">{title}</h1>

          {authors && <p className="paper-authors">{authors}</p>}
          {(conference || year) && (
            <p className="paper-venue">
              {conference}{conference && year && ' '}{year && `(${year})`}
            </p>
          )}

          <div className="action-bar">
            {pdf && (
              <a href={pdf} target="_blank" rel="noreferrer" className="action-link">[PDF]</a>
            )}
            {bibtex && (
              <>
                <button
                  ref={copyRef}
                  className="action-link action-button"
                  onClick={copyBibtex}
                  onKeyDown={copyBibtex}
                  style={{ marginLeft: pdf ? "0.5rem" : "0" }}
                >
                  [Bibtex]
                </button>
                <Overlay target={copyRef.current} show={copied} placement="top">
                  {(props) => (
                    <Tooltip id="bibtex-tooltip" {...props}>Copied!</Tooltip>
                  )}
                </Overlay>
              </>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="action-link"
                style={{ marginLeft: (pdf || bibtex) ? "0.5rem" : "0" }}
              >
                [GitHub]
              </a>
            )}
          </div>
        </Col>
      </Row>

      <Row className="slides-row">
        <Col>
          {slidesUrl
            ? (
              <iframe
                src={slidesUrl}
                title={`${title} slides`}
                className="slides-iframe"
              />
            )
            : <p className="loading">Loading slides…</p>
          }
        </Col>
      </Row>

      {presentation?.abstract && (
        <Row className="abstract-row">
          <Col>
            <h2 className="abstract-title">Abstract</h2>
            <p className="abstract-text">{presentation.abstract}</p>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default PresentationView;
