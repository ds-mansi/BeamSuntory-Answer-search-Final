import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  SandboxEndpoints,
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  SpellCheck,
  ResultsCount,
  Pagination,
  AlternativeVerticals,
  AppliedFilters,
  DirectAnswer,
  LocationBias,
} from "@yext/search-ui-react";
import VerticalResults from "../components/VerticalResults";
import { ProductsCard } from "../components/cards/ProductsCard";
import Navigation from "../components/Navigation";
import PageLayout from "../components/PageLayout";
import { answersHeadlessConfig } from "../config/answersHeadlessConfig";
import Header from "../components/commons/header";
import Footer from "../components/commons/footer";
import { FaqCard } from "../components/cards/FaqCards";

export const config: TemplateConfig = {
  stream: {
    $id: "faqs",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["id", "uid", "meta", "name", "question", "answer"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return "/faqs";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: `Beam Suntory`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

answersHeadlessConfig.verticalKey = "faqs";
const searcher = provideHeadless(answersHeadlessConfig);

const FaqPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { _site, id, name } = document;

  return (
    <>
      {/* <Header headerLinks={headerProps} /> */}
      <SearchHeadlessProvider searcher={searcher}>
        <div className="px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-col">
            <SearchBar placeholder="Search..." />
            <Navigation />
            <DirectAnswer />
            <SpellCheck />
            <ResultsCount />
            <AppliedFilters hiddenFields={["builtin.entityType"]} />

            <VerticalResults CardComponent={FaqCard} />

            <LocationBias />
          </div>
          <Pagination />
        </div>
      </SearchHeadlessProvider>
      {/* <Footer helpAndSupport={_site.c_useful_links} companyLinks={_site.c_company_links} footerLogo={_site.c_community_fibre_footer_logo} copyrightContent={_site.c_copyright_content} address={_site.c_community_fibre_address} /> */}
    </>
  );
};

export default FaqPage;
