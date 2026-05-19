import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../services/ThemeService";
import PresentationView from "./Presentation.jsx";

function Presentation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = React.useContext(ThemeContext);
  const pub = location.state || {};

  const [slidesUrl, setSlidesUrl] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!pub.presentation?.slides) {
      navigate("/publications");
      return;
    }
    import(`../../assets/slides/${pub.presentation.slides}`)
      .then((module) => setSlidesUrl(module.default))
      .catch(() => navigate("/publications"));
  }, [pub.presentation, navigate]);

  const copyBibtex = () => {
    if (!pub.bibtex) return;
    navigator.clipboard.writeText(pub.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return PresentationView(pub, slidesUrl, copied, copyBibtex, theme);
}

export default Presentation;
