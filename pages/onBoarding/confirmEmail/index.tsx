import Link from 'next/link'
import LayoutOnBoarding from '@layouts/LayoutOnBoarding'

export default function ConfirmEmail() {

  return (
    <LayoutOnBoarding>
        <br />
        <br />
        <h1>Hola : ConfirmEmail</h1>
        <br />
        <Link href='/'> Home </Link>
        <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
        <Link href='/onBoarding/createAgent/'>Crear agente </Link>
        <Link href='/onBoarding/createCompany/'>crear Compañia </Link>
        <br />
    </LayoutOnBoarding>
  );
}

export async function getStaticProps() {
  return {
    props: { 
      event: 'ConfirmEmail',
      page: 'page confirmEmail' 
    }
  }
}
