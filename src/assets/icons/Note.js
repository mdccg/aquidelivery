import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M496 0H16C7.168 0 0 7.168 0 16v480c0 8.832 7.168 16 16 16h320c4.24 0 8.32-1.68 11.312-4.688l160-160A15.958 15.958 0 00512 336V16c0-8.832-7.168-16-16-16zM352 457.376V352h105.376L352 457.376zM480 320H336c-8.832 0-16 7.168-16 16v144H32V32h448v288z" />
    </svg>
  );
}

export default SvgComponent;