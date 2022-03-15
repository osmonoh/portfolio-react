import React from "react";

const CV = () => {
  return (
    <div className="pdf-wrapper">
      <iframe
        src="https://docs.google.com/gview?url=https://dusan-chmelko.netlify.app/docs/CV_Dusan_Chmelko.pdf&embedded=true"
        style={{ width: "100%", height: "100vh" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default CV;
