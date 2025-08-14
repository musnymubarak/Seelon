import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { PopularDestinations } from "./_components/PopularDestinations";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
    </div>
  );
}
