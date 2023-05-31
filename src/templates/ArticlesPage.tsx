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
  LocationBias

} from "@yext/search-ui-react";
import VerticalResults from "../components/VerticalResults";
import { ArticlesCard } from "../components/cards/ArticlesCard";
import Navigation from "../components/Navigation";
import { answersHeadlessConfig } from "../config/answersHeadlessConfig";
// import VerticalResults from "../components/VerticalResults";

export const config: TemplateConfig = {
  stream: {
    $id: "articles",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["id", "uid", "meta", "name"],
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
  return "/articles";
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

answersHeadlessConfig.verticalKey = "articles";
const searcher = provideHeadless(answersHeadlessConfig);

const ArticlesPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { _site } = document;
  // const headerProps = _site.c_header_links;
  // console.log(_site.c_useful_links.headerLinksHeading,"Sites");
  // const {
  //   _site
  // } = document;
  // console.log(document, "doc");

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
            <VerticalResults CardComponent={ArticlesCard} />
            <LocationBias />
          </div>
          <Pagination />
        </div>
      </SearchHeadlessProvider>
      {/* <Footer helpAndSupport={_site.c_useful_links} companyLinks={_site.c_company_links} footerLogo={_site.c_community_fibre_footer_logo} copyrightContent={_site.c_copyright_content} address={_site.c_community_fibre_address} /> */}
    </>
  );
};

export default ArticlesPage;
