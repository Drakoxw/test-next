import Link from 'next/link'
import TagManager from '../../../components/tagManager';
import LayoutOnBoarding from '@layouts/LayoutOnBoarding'

export default function Signup() {
 
  return (
    <LayoutOnBoarding>
      <TagManager/>
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
