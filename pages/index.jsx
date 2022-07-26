import Navbar from "../components/Navbar";
import { createClient } from "next-sanity";
import Image from "next/image";

export default function Home({ product }) {
	// const client = createClient({
	// 	projectId: "e12bk888",
	// 	dataset: "production",
	// 	useCdn: true,
	// });
	// console.log(product);
	return (
		<div className="">
			<Navbar></Navbar>
			<div className="flex justify-center">
				<Image
					width={1500}
					height={500}
					className=""
					src="/assets/herp.png"
					alt=""
				/>
			</div>
		</div>
	);
}

// export async function getServerSideProps(context) {
// 	const client = createClient({
// 		projectId: "e12bk888",
// 		dataset: "production",
// 		useCdn: false,
// 	});

// 	const query = `*[_type == 'product'][0...3]`;
// 	const product = await client.fetch(query);
// 	// console.log(product);
// 	return {
// 		props: {
// 			product,
// 		},
// 	};
// }
