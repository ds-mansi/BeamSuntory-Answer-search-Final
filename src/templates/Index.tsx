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
  useSearchState,
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  AlternativeVerticals,
  AppliedFilters,
  DirectAnswer,
  LocationBias,  
} from "@yext/search-ui-react";
import { universalResultsConfig } from '../config/universalResultsConfig';
import UniversalResults from '../components/UniversalResults';
import Navigation from '../components/Navigation';
import PageLayout from "../components/PageLayout";
import { answersHeadlessConfig } from '../config/answersHeadlessConfig';
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import Header from "../components/commons/header";
import Footer from "../components/commons/footer";
import { useAnswersState, useAnswersActions } from "@yext/answers-headless-react";
import updateParam from "../components/commons/GetQuery";


export const config: TemplateConfig = {
  stream: {
    $id: "Beam-Suntory",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global"] 
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

const universalResultsFilterConfig = {
  show: true
};

export const getPath: GetPath<TemplateProps> = () => {
  return "/index.html";
};


export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = ({
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

const searcher = provideHeadless(answersHeadlessConfig);

const IndexPage: Template<TemplateRenderProps> = ({
  document,
}) => {

 const {
  _site
 } = document

// let headerProps = _site.c_header_links;




  return (
    <>
    {/* <Header headerLinks={headerProps} /> */}
    <SearchHeadlessProvider searcher={searcher}>
     <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar placeholder='Search...' />
          
          <Navigation />
          <SpellCheck />
          <DirectAnswer />
          <UniversalResults
            appliedFiltersConfig={universalResultsFilterConfig}
            verticalConfigs={universalResultsConfig}
          />
         
        </div>
        <Pagination />
      </div>
    </SearchHeadlessProvider>
    {/* <Footer helpAndSupport={_site.c_useful_links} companyLinks={_site.c_company_links} footerLogo={_site.c_community_fibre_footer_logo} copyrightContent={_site.c_copyright_content} address={_site.c_community_fibre_address} /> */}
    </>
  );
};

export default IndexPage;


