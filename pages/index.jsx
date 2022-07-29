import Navbar from "../components/Navbar";
import { createClient } from "next-sanity";
import Image from "next/image";
import Recent from "../components/Recent";
import Hero from "../components/Hero";
import Exclusive from "../components/Exclusive";

export default function Home({ product, exclusive }) {
	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		useCdn: true,
	});
	console.log(exclusive);
	return (
		<div className="">
			<Navbar></Navbar>
			<Hero></Hero>
			<div className="md:flex hidden justify-center">
				<Image
					width={1500}
					height={500}
					className=""
					src="/assets/herp.png"
					alt=""
				/>
			</div>
			<Recent product={product}></Recent>
			<Exclusive exclusive={exclusive}></Exclusive>
		</div>
	);
}

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		useCdn: false,
	});

	const query = `*[_type == 'product'][0...3]`;
	const product = await client.fetch(query);

	const exclusiveQuery = `*[_type == 'Exclusive'][0...1]`
	const exclusive = await client.fetch(exclusiveQuery)

	return {
		props: {
			product, exclusive
		},
	};
}
