import Link from 'next/link'
import LayoutOnBoarding from '@layouts/LayoutOnBoarding'

export default function CreateCompany() {
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
      event: 'createBillingData',
      page: 'page createCompany' 
    }
  }
}
