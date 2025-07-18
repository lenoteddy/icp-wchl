import SplitWithScreenshot from "../components/blocks/heroes/split-with-screenshot";
import { StatsWithNumberTicker } from "@/components/blocks/stats/stats-with-number-ticker";
import SimpleThreeColumnWithLargeIcons from "@/components/blocks/feature-sections/simple-three-column-with-large-icons";
import WithProductScreenshot from "@/components/blocks/feature-sections/with-product-screenshot";
import { TestimonialsGridWithCenteredCarousel } from "@/components/blocks/testimonials/testimonials-grid-with-centered-carousel";
import { ThreeColumnBentoGrid } from "@/components/blocks/bento-grids/three-column-bento-grid";
import { FrequentlyAskedQuestionsAccordion } from "@/components/blocks/faqs/faqs-with-accordion";
import SimpleCenteredWithGradient from "@/components/blocks/ctas/simple-centered-with-gradient";
import { FooterWithGrid } from "@/components/blocks/footers/footer-with-grid";

/**
 * Marketing homepage component showcasing the BTC lending platform.
 * 
 * Displays a series of marketing sections:
 * - Hero section with product overview and screenshot
 * - Platform statistics and metrics
 * - Feature highlights in three-column layout
 * - Product demonstration with screenshot
 * - User testimonials carousel
 * - Feature showcase in bento grid layout
 * - Frequently asked questions
 * - Call-to-action section
 * - Footer with additional links and information
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SplitWithScreenshot />
      <StatsWithNumberTicker />
      <SimpleThreeColumnWithLargeIcons />
      <WithProductScreenshot />
      <TestimonialsGridWithCenteredCarousel />
      <ThreeColumnBentoGrid />
      <FrequentlyAskedQuestionsAccordion />
      <SimpleCenteredWithGradient />
      <FooterWithGrid />
    </div>
  );
}