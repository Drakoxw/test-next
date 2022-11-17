import Link from 'next/link'

export default function CreateAgent() {

  return (
    <>
      <br />
      <br />
      <h1>Hola : CreateAgent</h1>
      <Link href='/'> Home </Link>
      <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
      <Link href='/onBoarding/createAgent/'>Crear agente </Link>
      <Link href='/onBoarding/createCompany/'>crear Compañia </Link>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { page: 'page createAgent' },
  }
}
