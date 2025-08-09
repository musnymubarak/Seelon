import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

const suggestions = [
    {
        title: 'Explore Sri Lanka',
        description: 'Discover the best places to visit in Sri Lanka with personalized itineraries.',
        image: 'https://lankapura.com/wp-content/uploads/2024/09/10-Best-Places-to-Visit-in-Sri-Lanka.jpg',
    },
    {
        title: 'Cultural Experiences',
        description: 'Immerse yourself in the rich culture and history of Sri Lanka.',
        image: 'https://cdn.prod.website-files.com/6364d88dd010ce5c6f8aa8fc/66d7df75442e055ccf47a8b4_669641699b6aeb59800255bf_kandyan-dance-and-drum-show-mob.webp',
    },
    {
        title: 'Adventure Activities',
        description: 'Find thrilling adventure activities tailored to your interests.',
        image: 'https://zaaratravels.com/wp-content/uploads/2023/10/68-1024x683-1.jpg',
    },
    {
        title: 'Beach Surfing',
        description: 'Catch the best waves and enjoy stunning beaches perfect for surfing.',
        image: 'https://radar-list.com/wp-content/uploads/2021/08/photo-1502680390469-be75c86b636f-1024x683.jpeg',
    },
    {
        title: 'Mountain Escapes',
        description: 'Experience breathtaking mountain views and refreshing cool climates.',
        image: 'https://tripjive.com/wp-content/uploads/2024/10/knuckles-mountain-range-day-tour-1024x585.jpg'
    },
    {
        title: 'Hidden Gems',
        description: 'Explore off-the-beaten-path destinations full of secrets and surprises.',
        image: 'https://media.licdn.com/dms/image/v2/D5612AQG9evftG0DBQw/article-cover_image-shrink_600_2000/B56ZW207f6GsAQ-/0/1742529084631?e=2147483647&v=beta&t=trX92qNcbD0T-uFO5lY4RAFSsj5QnMgvVf6zR1jhPok',
    },
];


function Hero() {
  return (
    <div className="mt-12 w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold">
          I'm <span className="text-[#fc9513]">Seelon</span> AI assistant, How can I help you?
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Explore Sri Lanka your way with Seelon. From beaches to culture and adventure, get a custom plan that makes your journey effortless and unforgettable.
        </p>

        {/* Textarea container: match max-w-4xl and full width */}
        <div className="max-w-4xl w-full mx-auto">
          <div className="border rounded-2xl p-3 sm:p-4 md:p-6 relative w-full">
            <Textarea
              placeholder="Create your own itinerary"
              className="w-full h-24 sm:h-28 md:h-32 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none text-base sm:text-lg"
            />
            <Button size={"icon"} className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6">
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="relative border rounded-lg p-4 sm:p-5 md:p-6 overflow-hidden text-white
                hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-35"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-hidden="true"
              />
              {/* Content above the background */}
              <div className="relative z-10">
                <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
                <p className="text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Hero
