import PlaceOrderSection from "./components/HomeOrder";
import HomeIntroSection from "./components/HomeIntro";
import HomeHeroSection from "./components/HomeHero";
import HomeBannerSection from "./components/HomeBanner";
import HomeValuesSection from "./components/HomeValues";
import HomeAuthorSection from "./components/HomeAuthor";
import HomeBookChapter from "./components/HomeBookChapter";
import HomeMediaSection from "./components/HomeMedia";
import HomeGallerySection from "./components/HomeGallary";

export default function Home() {
  return (
    <div>
      <main className="isolate">
        {/* Hero section */}
        <HomeHeroSection />

        {/* Introduction Section */}
        <HomeIntroSection />

        {/* Banner section */}
        <HomeBannerSection />

        {/* PlaceOrder Section */}
        <PlaceOrderSection />

        {/* Book Chapter Section */}
        <HomeBookChapter />

        {/* Media section */}
        <HomeMediaSection />

        {/* Values section */}
        <HomeValuesSection />

        {/* Gallary */}
        <HomeGallerySection />

        {/* Author section */}
        <HomeAuthorSection />
      </main>
    </div>
  );
}
