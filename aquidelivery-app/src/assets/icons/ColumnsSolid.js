import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="columns"
      className="prefix__svg-inline--fa prefix__fa-columns prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
      />
    </svg>
  );
}

export default SvgComponent;