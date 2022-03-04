import type { NextApiRequest, NextApiResponse } from "next";
import type { MojangRaw } from "../../lib/types";
import axios from "axios";

const Mojang = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios
		.get<MojangRaw>(
			"https://sessionserver.mojang.com/session/minecraft/profile/05dee142d12241be9a8cd5433362c4b6"
		)
		.catch(() => null);

	if (!response) return res.status(200).json({ minecraft: [] });

	const { data } = response;
	const skinDataString = data.properties[0].value;
	const buffer = Buffer.from(skinDataString, "base64");
	const skinData = buffer.toString("ascii");
	console.log(skinData);

	return res.status(200).json({ minecraft: data });
};

export default Mojang;
