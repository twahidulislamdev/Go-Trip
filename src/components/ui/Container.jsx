import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-4 sm:px-5 lg:px-6 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
