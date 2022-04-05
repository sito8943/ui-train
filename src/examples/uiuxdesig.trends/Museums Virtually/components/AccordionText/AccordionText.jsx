import React, { useState } from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { readMoreSpan, accordionCss, pCss } from "./styles";

const AccordionText = (props) => {
  const { text } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={accordionCss}>
      <p className={pCss}>
        {text.length >= 68 && !expanded ? (
          <>{text.substring(0, 68)}... </>
        ) : (
          <>{text}... </>
        )}
        {text.length >= 68 && (
          <span className={readMoreSpan} onClick={() => setExpanded(!expanded)}>
            {!expanded ? "Read More" : "Reduce"}
          </span>
        )}
      </p>
    </div>
  );
};

AccordionText.defaultProps = {
  text: PropTypes.string.isRequired,
};

export default AccordionText;
