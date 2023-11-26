import React from 'react';

const YourIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#444444" d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z" />
  </svg>
);

export default YourIcon;
