// import { StandardCard } from '../components/cards/StandardCard';
import { ProductsCard } from "../components/cards/ProductsCard";
import { ArticlesCard } from "../components/cards/ArticlesCard";
import { FaqCard } from "../components/cards/FaqCards";
import { VerticalConfig } from "../components/UniversalResults";
import { LocationCard } from "../components/cards/LocationCard";
import LocationSection from "../sections/LocationSection";
import ProductsSection from "../sections/ProductSection";
import StandardSection from "../sections/StandardSection";
import { ProductReciepeCard } from "../components/cards/ProductReciepeCards";

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  products: {
    SectionComponent: StandardSection,
    label: "Products",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false,
    },
  },
  articles: {
    SectionComponent: StandardSection,
    label: "Articles",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ArticlesCard,
      showOrdinal: false,
    },
  },
  faqs: {
    SectionComponent: StandardSection,
    label: "FAQ",
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false,
    },
  },
  product_reciepes: {
    SectionComponent: StandardSection,
    label: "Reciepes",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductReciepeCard,
      showOrdinal: false,
    },
  },
};
