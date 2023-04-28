import { data } from "../../data/images";

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            // console.log(data)
            res.status(200).json(data);
            break;
        case "POST":
            const { url , desc } = req.body;

            data.push({
                id: data.length + 1,
                url,
                desc,
            });
            res.status(200).json({response:"ok" , data : data});
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
