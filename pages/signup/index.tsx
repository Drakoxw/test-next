import Link from 'next/link'
import { useRouter } from 'next/router'
import { logDev } from '../../utils';



export default function Signup() {
  const { asPath } = useRouter();
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';

  const URL = `${origin}${asPath}`;
  logDev('urlParams', URL )
  logDev('asPath', asPath )
  return (
    <>
      <br />
      <br />
      <h1>Hola : Signup</h1>
      <Link href='/'>
        Home
      </Link>
    </>
  );
}
