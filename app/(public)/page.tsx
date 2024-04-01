import AdvantagesSection from "./_components/advantages-section";
import HomeSection from "./_components/home-section";
import ProductSection from "./_components/product-section";

export default function Home() {
  return (
    <>
      {/* Heroes Section Or Home Start*/}
      <HomeSection />
      {/* Heroes Section Or Home End*/}

      {/* Advantages Section Start */}
      <AdvantagesSection />
      {/* Advantages Section End */}

      {/* Product Section Start */}
      <ProductSection />
      {/* Product Section End */}
    </>
  );
}
