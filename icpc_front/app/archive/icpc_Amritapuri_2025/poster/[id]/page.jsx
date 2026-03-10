import { notFound } from "next/navigation";

// Move this to a shared constants file
const samplePosters = [
 	{
		id: 1,
		title: "Poster 1",
		imageUrl: "/socials_1.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 2,
		title: "Poster 2",
		imageUrl: "/socials_2.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 3,
		title: "Poster 3",
		imageUrl: "/socials_3.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 4,
		title: "Poster 4",
		imageUrl: "/socials_4.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 5,
		title: "Poster 5",
		imageUrl: "/socials_5.png",
		date: new Date("2025-08-27"),
	},
	{
		id: 6,
		title: "Poster 6",
		imageUrl: "/socials_6.png",
		date: new Date("2025-08-29"),
	},
	{
		id: 7,
		title: "Poster 7",
		imageUrl: "/socials_7.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 8,
		title: "Poster 8",
		imageUrl: "/socials_8.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 9,
		title: "Poster 9",
		imageUrl: "/socials_9.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 10,
		title: "Poster 10",
		imageUrl: "/socials_10.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 11,
		title: "Poster 11",
		imageUrl: "/socials_11.jpeg",
		date: new Date("2025-09-09"),
	},
  // ...other posters
];

export async function generateMetadata({ params }) {
  const poster = samplePosters.find(p => p.id === Number(params.id));
  if (!poster) return notFound();

  return {
    title: poster.title,
    description: `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 310+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`,
    openGraph: {
      title: poster.title,
      description: `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 310+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`,
      images: [
        {
          url: `https://amritaicpc.in${poster.imageUrl}`,  // Use your actual domain
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      url: `https://amritaicpc.in/poster/${poster.id}`,  // Use your actual domain
    },
  };
}

export default function PosterPage({ params }) {
  const poster = samplePosters.find(p => p.id === Number(params.id));
  
  if (!poster) {
    notFound(); // This will show a proper 404 page
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img 
        src={poster.imageUrl} 
        alt={poster.title} 
        className="max-w-full rounded-lg"
      />
    </div>
  );
}
