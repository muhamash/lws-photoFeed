import { getDictionary } from "./dictionary/dictionary";

export default async function Home ( { params } )
{
  const dict = await getDictionary( params.lang );
  return (
    <div>{ dict.views }</div>
  );
}
