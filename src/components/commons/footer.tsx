import * as React from "react";
// import Footeraccordian from "./Footeraccordian";
// import Scroll from "./Scroll"

type props = {
  helpAndSupport: any;
  companyLinks: any;
  footerLogo : any,
  copyrightContent : any,
  address: any
};

export default function Footer(data: props) {
  // console.log(data,"data");
  const communityFibreAddress = data.address;
  const copyrightText = data.copyrightContent;
  const footerLogo  = data.footerLogo.url;
  const helpAndSupportTitle = data.helpAndSupport.headerLinksHeading;
  const helpAndSupportLinks = data.helpAndSupport.links;
  const helpAndSupportMenus = helpAndSupportLinks.map((submenus: any) => {
    return (
      <>
        <li>
          <a href={submenus.link}>{submenus.label}</a>
        </li>
      </>
    );
  });

  /**
   * Company Data code - Starts
   */
  const companyData = data.companyLinks;
  const companyHeading = companyData.headerLinksHeading;
  const companyLinks = companyData.links.map((res: any) => {
    return (
      <>
        <li>
          <a href={res.link}>{res.label}</a>
        </li>
      </>
    );
  });

  /**
   * Company Data Code - Ends
   */
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1023px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      <hr></hr>
      <div className="header-main">
        
          <footer>
            <div className="flex flex-row ml-5 mr-5">
              <div className="text-2xl font-bold helpAndSupport">
                {helpAndSupportTitle}
                <ul className="gap-x-10 font-normal">{helpAndSupportMenus}</ul>
              </div>
              <div className="text-2xl font-bold companyLinks">
                {companyHeading}
                <ul className="gap-x-10 font-normal">{companyLinks}</ul>
              </div>
              <div className="footer-bx footer-a py-3 mr-5 connect-img">
                {/* <h4>Connect</h4> */}
                <ul>
                  <div className="">
                    <h6 className="uppercase font-semibold text-2xl font-bold mb-4 flex justify-center md:justify-start">
                      Connect
                    </h6>
                    <p className="flex justify-right items-right   border-gray-300">
                      <a target="_blank" href="#">
                        <img
                          src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F8JYcEJbtSvS1YPOASYrM&w=1920&q=75"
                          alt="footericon"
                        ></img>
                      </a>

                      <a
                        target="_blank"
                        href="#"
                        className="ml-2 mr-4 text-gray-600"
                      >
                        <img
                          src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2FmFQC6pvGSlyZAAB1zkN2&w=1920&q=75"
                          alt="footericon"
                        ></img>
                      </a>

                      <a target="_blank" href="#" className=" text-gray-600">
                        <img
                          src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F6rzZHRkToOEbGHVd83z2&w=1920&h=1&q=75"
                          alt="footericon"
                        ></img>
                      </a>
                      <a
                        target="_blank"
                        href="#"
                        className="ml-2 mr-4 text-gray-600"
                      >
                        <img
                          src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2FcNBUqv3VRJEGmRdUbgG7&w=1920&q=75"
                          alt="footericon"
                        ></img>
                      </a>
                    </p>
                  </div>
                </ul>
              </div>
              <div className="CommunityFibreLogoSection">
                <a href="#" rel="noopener noreferrer">
                  <img src={footerLogo} width="full" alt="logo" height="50"></img>
                </a>
                <p>{communityFibreAddress}</p>
                <p>{copyrightText}</p>
                <p></p>
              </div>

            </div>
          </footer>
        
      </div>
    </>
  );
}
