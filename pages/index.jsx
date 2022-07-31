import Navbar from "../components/Navbar";
import { createClient } from "next-sanity";
import Image from "next/image";
import Recent from "../components/Recent";
import Hero from "../components/Hero";
import Exclusive from "../components/Exclusive";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home({ product, exclusive, testimonails }) {

	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: true,
	});

	return (
		<div className="">
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
			<Testimonials testimonails={testimonails}></Testimonials>
			<Footer></Footer>
		</div>
	);
}

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "e12bk888",
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});

	const query = `*[_type == 'product'][0...3]`;
	const product = await client.fetch(query);

	const exclusiveQuery = `*[_type == 'Exclusive'][0...1]`;
	const exclusive = await client.fetch(exclusiveQuery);

	const testimonailsQuery = `*[_type == 'testimonails' ][0...3]`;
	const testimonails = await client.fetch(testimonailsQuery);

	return {
		props: {
			product,
			exclusive,
			testimonails,
		},
	};
}
