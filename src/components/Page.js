import { useEffect, useRef, useState } from "react";
import { useField } from "../context/fieldsContext";
import doc from "./../data/page.jpg";

export default function Page() {
  const [fieldHighlights] = useField();

  const defaultWidth = 1700;
  const defaultHeight = 2200;
  const [currentDim, setCurrentDim] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  const imgEl = useRef(null);
  // Calculate scaling factor for width and height
  const widthScale = currentDim.width / defaultWidth;
  const heightScale = currentDim.height / defaultHeight;

  // Function to handle resizing of the image
  const handleImageResize = () => {
    // Get the current dimensions of the image
    const image = document.getElementById("document-image");
    if (image) {
      setCurrentDim(imgEl.current.getBoundingClientRect());
    }
  };

  // Add resize event listener to handle image resizing
  useEffect(() => {
    window.addEventListener("resize", handleImageResize);
    return () => {
      window.removeEventListener("resize", handleImageResize);
    };
  }, []);

  // Function to scale field positions
  const scaleFieldPosition = ([left, top, width, height]) => {
    return {
      top: top * heightScale + currentDim.top - 2,
      left: left * widthScale + currentDim.left,
      width: width * widthScale,
      height: height * heightScale * 0.1,
    };
  };

  return (
    <div className={`document-viewer `}>
      <img
        id="document-image"
        src={doc}
        alt="Document"
        ref={imgEl}
        onLoad={handleImageResize}
      />
      {/* Render field highlights */}
      {fieldHighlights.map((highlight, index) => {
        return (
          highlight.clicked && (
            <div
              key={index}
              className="field-highlight"
              style={{
                position: "absolute",
                top: scaleFieldPosition(highlight.position).top,
                left: scaleFieldPosition(highlight.position).left,
                width: highlight.value.length * 5 || 45,
                height: 12,
                backgroundColor: highlight.color,
              }}
            ></div>
          )
        );
      })}
    </div>
  );
}
