import { getNotesService } from "@/services/notes";
import { HomeContent } from "@/components/HomeContent";

/**
 * This is the homepage page which will be render when the user access to route "/"
 * Create an async function to fetch information from the api to get all notes
 * Ths notes are passed to the HomeContent which is all the content which will be rendered in the Home page
 */

export default async function Home() {

  // Aync functio to get all notes from database
  const data = await getNotesService();

  return (
   <HomeContent data={data.notes}/>
  );
};