import Link from 'next/link'
import LayoutOnBoarding from '@layouts/LayoutOnBoarding'

export default function Signup() {
 
  return (
    <LayoutOnBoarding>
      <br />
      <br />
      <h1>Creacion de cliente</h1>
      <Link href='/'>ir a Home </Link>
    </LayoutOnBoarding>
  );
}

export async function getStaticProps() {
  return {
    props: { 
      event: 'CreateLeadOnBoarding',
      page: 'page signup'
    },
  }
}
