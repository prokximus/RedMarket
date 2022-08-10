import { createClient } from "next-sanity";


export default async function handler(req, res) {
    
        const client = createClient({
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
            dataset: "production",
            apiVersion: "2021-10-21",
            useCdn: false,
        });
    
        const query = `*[_type == 'product' && cate == 'Mobile']`;
        const product = await client.fetch(query);

        let array = product.length / 9
        for (let index = 0; index < product.length; index++) {
            const slicedArray = array;
            
        }
        let startArray = Math.floor(req.query.page - 1 ) * 9 ;
        console.log("start array" + startArray)
        let maxArray = startArray + 9

        if (maxArray > product.length) {maxArray = product.length;}


        res.status(200).json(product.slice(startArray,startArray + 9));
}