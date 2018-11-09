import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';


const Index = (props) => ( 
<div>
	<Head>
		<title>React Server Side Rendering</title>
		<meta charSet='utf-8' />
		<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		<meta name="google-site-verification" content="BTBGtjSmjRlIGKxxkdO2oip-gRk-vGZNXoTOWNV38KQ" />
	</Head>

	<Layout>
		<h1>Batman TV shows</h1>
		<ul>
			{props.shows.map(({show}) => (
				<li key={show.id}>
					<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
						{show.name}
					</Link>
				</li>
			))}
		</ul>
	</Layout>
	</div>
);

Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const data = await res.json()
  
	console.log(`Show data fetched. Count: ${data.length}`)
  
	return {
	  shows: data
	}
  }

export default Index;