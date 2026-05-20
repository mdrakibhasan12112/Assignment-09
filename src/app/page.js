import Banner from "@/components/Banner";
import CarSlider from "@/components/CarSlider";
import FeatureSections from "@/components/FeatureSections";
import TopCars from "@/components/TopCars";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCars></TopCars>
      <FeatureSections></FeatureSections>
      <CarSlider></CarSlider>
</div>
  );
}
