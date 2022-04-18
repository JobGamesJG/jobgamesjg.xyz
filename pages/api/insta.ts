import type { NextApiRequest, NextApiResponse } from "next";
import type { InstagramList, InstagramListRaw } from "../../lib/types";
import axios from "axios";

const Insta = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios
		.get<InstagramListRaw[]>("https://www.instagram.com/jobgamesjg/?__a=1")
		.catch(() => null);

	if (!response) return res.status(200).json({ Instagrams: [] });

	const { data } = response;
	const Instagrams = data.map<InstagramList>((insta) => ({
		name: insta.full_name,
		pfp: insta.profile_pic_url_hd,
	}));

	console.log(response);

	return res.status(200).json({ Instagrams });
};

export default Insta;
