import Link from 'next/link'
import LayoutOnBoarding from '@layouts/LayoutOnBoarding'

export default function CreateAgent() {

  return (
    <LayoutOnBoarding>
      <br />
      <br />
      <h1>Hola : CreateAgent</h1>
      <Link href='/'> Home </Link>
      <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
      <Link href='/onBoarding/createAgent/'>Crear agente </Link>
      <Link href='/onBoarding/createCompany/'>crear Compañia </Link>
    </LayoutOnBoarding>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      event: 'CreateAgent',
      page: 'page createAgent'
    }
  }
}
