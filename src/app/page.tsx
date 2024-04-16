import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/2c1e1d9a-e3bb-4d24-812c-f68ea3c33256-f3i57u.jpg",
  "https://utfs.io/f/f4bd6d5a-4a79-44b4-8de3-c951d7dfa7d2-kg9ln6.jpg",
  "https://utfs.io/f/86bd7af3-6157-41e8-b930-bfa2c22ed831-f1t7nh.jpg",
  "https://utfs.io/f/c48d4449-76e7-4d1a-809e-e4b174f3cd80-gb8pe6.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
