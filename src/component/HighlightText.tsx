import React from 'react';

type HighlightTextProp = {
  texts: string[];
  hightLightText: string;
};
function HighlightText({ texts, hightLightText }: HighlightTextProp) {
  return (
    <>
      {texts.map((text, i) => (
        <>
          {i !== 0 && <span className="highlight">{hightLightText}</span>}
          <span>{text}</span>
        </>
      ))}
    </>
  );
}

export default HighlightText;
