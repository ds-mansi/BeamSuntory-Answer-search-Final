import { CardProps } from "../../models/cardComponent";
import * as React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";

//prettier-ignore
export interface TrainerCardConfig {
  showOrdinal?: boolean
}

//prettier-ignore
export interface TrainerCardProps extends CardProps {
  configuration: TrainerCardConfig
}

//prettier-ignore
export interface SimpleImage {
  url: string,
  width: number,
  height: number
}

//prettier-ignore
export interface Image extends SimpleImage {
  sourceUrl: string,
  thumbnails: SimpleImage[]
}

//prettier-ignore
interface PrimaryPhoto {
  image?: Image
}

//prettier-ignore
export interface TrainerData {
  id: any;
  answer: string | undefined;
  name?: string,
  c_inspirationalQuote?: string,
  primaryPhoto?: PrimaryPhoto
}

//prettier-ignore
export interface TrainerCardCssClasses {
  container?: string,
  descriptionContainer?: string,
  name?: string,
  // TODO: why can't I use the tailwind pixels here
  trainerPhoto?: string,
  ctaButton?: string,
  ctaButtonText?: string
}

//prettier-ignore
const builtInCssClasses: TrainerCardCssClasses = {
  container: 'flex flex-col p-4 shadow-sm my-2 align-items-center',
  descriptionContainer: 'w-full text-sm font-heading ',
  name: 'text-xl font-medium font-body font-bold text-black-300',
  ctaButton: 'flex border rounded-md mt-4 px-4 bg-green-300 justify-center hover:bg-orange-900',
  ctaButtonText: 'font-heading text-green font-bold text-base px-3 py-3 sm:py-0',
};
function limit(string?: string, limit = 0) {
  return string?.substring(0, limit);
}
// TODO: format hours, hours to middle, fake CTAs on the right, hours to show current status and then can be expanded, limit to 3 results for now, margin between map
export function FaqCard(props: TrainerCardProps): JSX.Element {
  // console.log(props, "props");

  return (
    <>
      <div className="faq-sec">
        <div className="faq-blocks">
          <Accordion atomic={true}>
            <AccordionItem
              className="faq-title"
              title={props.result.rawData.name}
            >
              {" "}
              <span className="faq-icon"></span>
              <div className="faq-content new-accr">
                <p>{props.result.rawData.answer}</p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
