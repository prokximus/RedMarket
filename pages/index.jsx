import Navbar from "../components/Navbar";
import { createClient } from "next-sanity";

export default function Home({ product }) {
    const client = createClient({
			projectId: "e12bk888",
			dataset: "production",
			useCdn: true,
		});
	// console.log(product);
	return (
		<div className="">
			<Navbar></Navbar>
			<img className="mx-auto" src="/assets/herp.png" alt="" />
		</div>
	);
}

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		useCdn: true,
	});

	const query = `*[_type == 'product'][0...3]`;
	const product = await client.fetch(query);
	// console.log(product);
	return {
		props: {
			product,
		},
	};
};
