import Link from "next/link";
import { useEffect, useState } from "react";
import { logDev } from "../../../utils";

interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

export default function PokeApi() {
  const [data, setData] = useState<RootObject>()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data: RootObject) => {
        setData(data)
      })
  }, [])

  if (!data) return <p>No profile data</p>

  if (data) {
    logDev('data api', data)
  }

  return (
    <>
      <h1>Hola Api Poke</h1>
      <Link href='/'> Home </Link>
      <ul>
        {data.results.map((name) => (
          <li key={name.name}>{name.name}</li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { page: 'page pokeApi' },
  }
}
