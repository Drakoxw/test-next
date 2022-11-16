import Link from 'next/link'

export default function ConfirmEmail() {

  return (
    <>
      <br />
      <br />
      <h1>Hola : ConfirmEmail</h1>
      <Link href='/'> Home </Link>
      <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
      <Link href='/onBoarding/createAgent/'>Crear agente </Link>
      <Link href='/onBoarding/createCompany/'>crear Compañia </Link>
    </>
  );
}