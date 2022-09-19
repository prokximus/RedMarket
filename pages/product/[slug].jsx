import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ product, addToCart }) => {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div>
			<section className="text-gray-600 body-font">
				<Toaster position="top-center" reverseOrder={false} />
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<picture>
							<img
								className="object-cover object-center rounded w-full"
								alt="hero"
								src={product.img_url}
							/>
						</picture>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							{product.title}
						</h1>
						<p className="mb-8 leading-relaxed">{product.desc}.</p>
						<p className="my-4 text-xl text-gray-500 font-semibold">
							{Intl.NumberFormat(`hi-IN`, {
								currency: `INR`,
								style: "currency",
							})
								.format(product.defaultProductVariant.price)
								.replace(".00", "")}
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
								Buy Now
							</button>
							<button onClick={() => {
								addToCart(product.slug.current, product.title, product.defaultProductVariant.price, product.img_url, product.cate);
								toast.success("Item added to Cart!", {
									style: { border: "2px solid black" },
								});
							}} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default Product;

export const getServerSideProps = async (context) => {
	const { slug } = context.query;

	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: "production",
		apiVersion: "2021-10-21",
		useCdn: false,
	});
	// All queries
	const query = `*[_type == 'product' && slug.current == '${slug}'][0]`;
	const product = await client.fetch(query);

	return {
		props: {
			product,
		},
	};
};
