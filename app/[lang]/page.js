import PhotoList from "@/components/PhotoList";

export default async function Home({ params }) {
  try {
    // console.log( process.env.NEXT_PUBLIC_BASE_URL );
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/photos`);
    if (!response.ok) {
      throw new Error(`Failed to fetch photos: ${response.statusText}`);
    }
    const photos = await response.json();
    // console.log(photos)
    return (
      <div>
        <PhotoList photos={ photos } />
      </div>
    );
  } catch (error) {
    console.error('Error fetching photos:', error);
    return <p>Failed to load photos.</p>;
  }
};