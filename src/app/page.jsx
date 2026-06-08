import Banner from "@/components/home/Banner";
import TopDestinations from "@/components/home/MostVisitPlaceAbroad";
import BestHotels from "@/components/home/HotelnAbroad";
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


