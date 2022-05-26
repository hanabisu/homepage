/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Slideshow.css';

function Slideshow(props) {
  const hasMultiple = props.images.length > 1;
  const [slideIndex, setSlideIndex] = React.useState(0);

  const showPrev = () => {
    const newSlideIndex = slideIndex - 1;
    setSlideIndex(newSlideIndex < 0 ? props.images.length - 1 : newSlideIndex);
  };

  const showNext = () => {
    const newSlideIndex = slideIndex + 1;
    setSlideIndex(newSlideIndex > (props.images.length - 1) ? 0 : newSlideIndex);
  };

  const goToSlide = (i) => {
    setSlideIndex(i);
  };
  return (
    <>
      <div className="slideshow-container">
        {props.images.map((img, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`img-${index}`} className="slides fade" style={index === slideIndex ? { display: 'flex' } : { }}>
            <img src={img.img} alt="" />
            <div className="text">{img.description}</div>
          </div>
        ))}
        {hasMultiple && <a className="prev" onClick={showPrev}>&#10094;</a>}
        {hasMultiple && <a className="next" onClick={showNext}>&#10095;</a>}
      </div>
      {hasMultiple
    && (
    <div className="dots">
      {props.images.map((img, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`dot-${index}`} className={index === slideIndex ? 'dot active' : 'dot'} onClick={() => goToSlide(index)} />
      ))}
    </div>
    )}
    </>
  );
}

export default Slideshow;
