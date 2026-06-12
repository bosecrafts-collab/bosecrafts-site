import CollectionBanners from "@/components/sections/CollectionBanners";
import LatestArrivals from "@/components/sections/LatestArrivals";
import DualBanners from "@/components/sections/DualBanners";
import BrandIntro from "@/components/sections/BrandIntro";
import StorySections from "@/components/sections/StorySections";
import InstagramFeed from "@/components/sections/InstagramFeed";
import TrustBadges from "@/components/sections/TrustBadges";

/**
 * Homepage section order mirrors the reference architecture:
 * 1. Three collection banner tiles (hero)
 * 2. Latest arrivals product grid
 * 3. Dual About / Contact banners
 * 4. Brand intro
 * 5. Two story sections
 * 6. Instagram feed
 * 7. Trust badges
 */
export default function HomePage() {
  return (
    <>
      <CollectionBanners />
      <LatestArrivals />
      <DualBanners />
      <BrandIntro />
      <StorySections />
      <InstagramFeed />
      <TrustBadges />
    </>
  );
}
