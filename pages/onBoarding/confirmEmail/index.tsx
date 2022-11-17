import Link from 'next/link'
import { useRouter } from 'next/router';
import { gtmVirtualPageView } from '../../../components/tagManager';

export default function ConfirmEmail() {
  const router = useRouter()
  const mainDataLayer = {
    pageTypeName: 'page confirmEmail',
    url: router.pathname,
  }

  return (
    <>
      <br />
      <br />
      <h1>Hola : ConfirmEmail</h1>
      <br />
      <Link href='/'> Home </Link>
      <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
      <Link href='/onBoarding/createAgent/'>Crear agente </Link>
      <Link href='/onBoarding/createCompany/'>crear Compañia </Link>
      <br />
      <button onClick={() => gtmVirtualPageView(mainDataLayer)}>Click</button>
    </>
  );
}
