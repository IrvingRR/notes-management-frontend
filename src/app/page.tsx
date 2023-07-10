import { getNotesService } from "@/services/notes";
import { HomeContent } from "@/components/HomeContent";

export default async function Home() {

  const data = await getNotesService();

  return (
   <HomeContent data={data.notes}/>
  );
};