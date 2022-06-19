import type { NextApiRequest, NextApiResponse } from "next";
import type { DiscordUser, DiscordUserRaw } from "../../lib/types";
import axios from "axios";

const discord = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios
		.get<DiscordUserRaw[]>("https://discord.com/api/v9/users/$679240313952403457")
		.catch(() => null);

	if (!response) return res.status(200).json({ discords: [] });

	const { data } = response;
	const discords = data.map<DiscordUser>((discord) => ({
		id: discord.id,
		username: discord.username,
		discriminator: discord.discriminator,
		avatar: discord.avatar,
		verified: discord.verified,
	}));

	console.log(data);

	return res.status(200).json({ discords });
};

export default discord;
