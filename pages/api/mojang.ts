import type { NextApiRequest, NextApiResponse } from "next";
import type { MojangList, MojangListRaw } from "../../lib/types";
import axios from "axios";

const Anime = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios
		.get<MojangListRaw[]>(
			"https://sessionserver.mojang.com/session/minecraft/profile/05dee142-d122-41be-9a8c-d5433362c4b6"
		)
		.catch(() => null);

	if (!response) return res.status(200).json({ mojangs: [] });

	const { data } = response;
	console.log(data);

	return res.status(200).json({ response });
};

export default Anime;
