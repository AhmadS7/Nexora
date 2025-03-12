// seed.ts
import { db, getAllArticles } from "./db.server";
import { articles } from "./schema";

async function seed() {
  // Clear existing data (optional, use with caution!)
  await db.delete(articles).run();

  // Insert some sample articles
  await db.insert(articles).values([
    {
      slug: "welcome-to-weird-world",
      title: "Welcome to Weird World!",
      content: `# Welcome to Weird World!

This is our first article. We're excited to share interesting and engaging news from around the globe.

## Stay Tuned

More content coming soon!
`,
      category: "World",
    },
    {
      slug: "tech-trends-2024",
      title: "Top Tech Trends of 2024",
      content: `# Top Tech Trends of 2024

The tech world is constantly evolving. Here are some trends to watch:

* **AI and Machine Learning:**  Continued growth in AI applications.
* **Web3 and Blockchain:**  Exploring decentralized technologies.
* **Sustainable Tech:**  Focus on eco-friendly solutions.

## What to Expect

We'll be diving deeper into each of these trends in future articles.
`,
      category: "Tech",
    },
    {
      slug: "malaysian-food-delights",
      title: "Malaysian Food Delights",
      content: `# Malaysian Food Delights

Malaysia is a food paradise!  From Nasi Lemak to Char Kway Teow, there's something for everyone.

## Must-Try Dishes

* **Nasi Lemak:**  The national dish!
* **Char Kway Teow:**  Stir-fried noodles with prawns, cockles, and more.
* **Laksa:**  Spicy noodle soup, with many regional variations.
`,
      category: "Malaysia",
    },
  ]).run();

  console.log("Database seeded!");
  const allArticles = await getAllArticles()
  console.log(allArticles)
  process.exit(0)
}

seed();
