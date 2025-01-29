import React from "react";

function Layout_Seven() {
    const logos = [
        require("./../assets/marqueeLogo/Hilton.jpg"),
        require("./../assets/marqueeLogo/Group1_automotive.jpg"),
        require("./../assets/marqueeLogo/Lowes.jpg"),
        require("./../assets/marqueeLogo/Polaris.png"),
        require("./../assets/marqueeLogo/Gorillas.jpg"),
        require("./../assets/marqueeLogo/wolt.jpg"),
        require("./../assets/marqueeLogo/Marriot.jpg"),
        require("./../assets/marqueeLogo/Merck.jpg"),
        require("./../assets/marqueeLogo/Costco.jpg"),
        require("./../assets/marqueeLogo/Saic.jpg"),
      ];

  return (
    <div className="marquee-container bg-white">
      <div className="marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="marquee-logo"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="marquee-logo"
          />
        ))}
      </div>
    </div>
  );
}

export default Layout_Seven;
