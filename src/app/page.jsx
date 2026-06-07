import Banner from "@/components/home/Banner";
import TopDestinations from "@/components/home/TopDestinations";
import BestHotels from "@/components/home/BestHotels";
import HotelInBd from "@/components/home/HotelInBd";
import MostVisitPlaceBd from "@/components/home/MostVisitPlaceBd";

export default function Home() {
  return (
    <>
      <Banner />
      <MostVisitPlaceBd />
      <HotelInBd />
      <TopDestinations />
      <BestHotels />
    </>
  );
}
