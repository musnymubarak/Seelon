"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularDestinations() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
       Most Popular Destinations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Beach",
    title: "Unawatuna Beach – Paradise by the Sea",
    src: "https://explore.vacations/wp-content/uploads/2024/12/Unawatuna-Beach-Sri-Lanka-.jpg",
    content: <PopularDestinations />,
  },
  {
    category: "Historical",
    title: "Sigiriya Rock Fortress – The 8th Wonder",
    src: "https://mwtours.com.au/wp-content/uploads/2022/06/Sigiriya-Rock-Sri-Lanka.jpg",
    content: <PopularDestinations />,
  },
  {
    category: "Hill Country",
    title: "Nuwara Eliya – The Little England",
    src: "https://static.wixstatic.com/media/1275ed_d4cd0b23ad804360b9498287714f33d5~mv2.jpg/v1/fill/w_2500,h_2500,al_c/1275ed_d4cd0b23ad804360b9498287714f33d5~mv2.jpg",
    content: <PopularDestinations />,
  },
  {
    category: "Wildlife",
    title: "Yala National Park – Land of the Leopards",
    src: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2018/01/18/34fc6bc4-fc13-11e7-b2f7-03450b80c791_1280x720_221404.JPG?itok=c0wN2Wmx",
    content: <PopularDestinations />,
  },
  {
    category: "Cultural",
    title: "Temple of the Tooth – Sacred Heritage",
    src: "https://lakshmisharath.com/wp-content/uploads/2022/09/Kandy-toothrelictemple-dawn.jpg",
    content: <PopularDestinations />,
  },
  {
    category: "Scenic Train",
    title: "Ella – Nine Arch Bridge",
    src: "https://d1ynolcus8dvgv.cloudfront.net/2019/01/nine-arch-2-5.jpg",
    content: <PopularDestinations />,
  },
];
