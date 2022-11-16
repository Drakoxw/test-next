import Link from 'next/link'
import { useState, useEffect } from 'react'
import { logDev } from '../../../utils'

type Data = {
  capitulos: string[]
}

export default function RickMorty() {
  const [data, setData] = useState<Data>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/rickMorty/')
      .then((res) => res.json())
      .then((data: Data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
    
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  if (data) {
    logDev('data api', data)
  }

  return (
    <>
      <h1>Hola Api Rick</h1>
      <Link href='/'> Home </Link>
      <div>{Capitulo(data.capitulos[0])}</div>
      <ul>
        {data.capitulos.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

    </>
  )
}

function Capitulo(title: string ) {
  return <h4>{title ? title : 'Default title'}</h4>;
}