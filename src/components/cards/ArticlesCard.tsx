import * as React from "react";
import { useState } from "react";
import { CardProps } from "../../models/cardComponent";

export interface StandardCardConfig {
  showOrdinal?: boolean;
}

export interface StandardCardProps extends CardProps {
  configuration: StandardCardConfig;
  customCssClasses?: StandardCardCssClasses;
}

export interface StandardCardCssClasses {
  container?: string;
  header?: string;
  body?: string;
  descriptionContainer?: string;
  ctaContainer?: string;
  cta1?: string;
  cta2?: string;
  ordinal?: string;
  title?: string;
}

const builtInCssClasses: StandardCardCssClasses = {
  container:
    "justify-between border rounded-lg mb-4 p-4 shadow-sm ArticleVerticalContainer",
  header: "text-grey-800 ProductHeaderClass text-2xl font-bold",
  body: "flex justify-end pt-2.5",
  descriptionContainer: "w-full text-base",
  ctaContainer: "flex flex-col justify-end ml-4",
  cta1: "min-w-max bg-blue-600 text-white font-medium rounded-lg py-2 px-5 shadow",
  cta2: "min-w-max bg-white text-blue-600 font-medium rounded-lg py-2 px-5 mt-2 shadow",
  ordinal: "mr-1.5 text-lg font-medium",
  title: "font-bold ArticlesTitle",
};


/**
 * This Component renders the base result card.
 *
 * @param props - An object containing the result itself.
 */
export function ArticlesCard(props: StandardCardProps): JSX.Element {
  const { result } = props;
  const cssClasses = builtInCssClasses;

  const ArticleCard: any = result.rawData;
  // console.log(ArticleCard.c_articleCard.cTA, "Articlebtn");
  const ArticleDescription = ArticleCard.c_articleCard.description
    ? ArticleCard.c_articleCard.description
    : null;
  const ArticleImageUrl = ArticleCard.c_articleCard.image.url
    ? ArticleCard.c_articleCard.image.url
    : null;
  const ArticleBtn = ArticleCard.c_articleCard.cTA.label
    ? ArticleCard.c_articleCard.cTA.label
    : null;
  function limit(string?: string, limit = 0) {
    return string?.substring(0, limit);
  }

  const greeting = limit(ArticleDescription, 200);
  // console.log(greeting, "greeting");

  // const [categories_data, setFaq_Data] = useState([]);
  // const [faqClass, setFaqClass] = useState("");
  // const [leftFaqLen, setLeftFaqLen] = useState(0);
  // const [rightFaqLen, setRightFaqLen] = useState(0);
  // const [selected, setselected] = useState(null);

  // const isShowContent = (e: any, index: any) => {
  //   setselected(index);
  //   const parent = e.target.parentNode;
  //   if (parent.classList.contains("opened")) {
  //     setFaqClass("");
  //   } else {
  //     const acc = document.getElementsByClassName("faq-block");
  //     for (let s = 0; s < acc?.length; s++) {
  //       acc[s].classList.remove("opened");
  //     }
  //     setFaqClass("opened");
  //   }
  // };
  return (
    <>
      {/* <div className="faq-sec bg-light">
        <div className="container">
          <div className="faq-blocks">
            <div className="left-faq">
              
                  <div
                    id={ArticleCard.id}
                    className={
                      selected == ArticleCard.id
                        ? `faq-block ${faqClass}`
                        : "faq-block"
                    }
                    key={ArticleCard.id}
                  >
                    <h4
                      className="faq-title"
                      onClick={(e) => isShowContent(e, ArticleCard.id)}
                    >
                      {ArticleCard.name}
                    </h4>

                    <>
                      <div className="faq-content">
                        {ArticleCard.body}
                      </div>
                    </>
                  </div>
                

              
            </div>

          </div>
        </div>
      </div> */}

      <div style={{ width: "50%", marginRight: "10px", display: "flex" }}>
        <div className={cssClasses.container}>
          <img
            src={ArticleImageUrl}
            style={{ height: "150px", margin: "auto" }}
          ></img>
          <div style={{ textAlign: "center" }}>
            <p>{ArticleDescription}</p>
            <p>
              <a href={ArticleCard.c_articleCard.cTA.link}>{ArticleBtn}</a>
            </p>
          </div>
        </div>
      </div>

      {/* <div>
        <img src={ArticleImageUrl} style={{ height: "100px" }} />
        <p>{ArticleDescription}</p>
        <a href={ArticleCard.c_articleCard.cTA.link}>{ArticleBtn}</a>
      </div> */}
    </>
  );
}
