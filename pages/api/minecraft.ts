import type { NextApiRequest, NextApiResponse } from "next";
import type { Minecraft, MinecraftRaw } from "../../lib/types";
import axios from "axios";

const Anime = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios
		.get<MinecraftRaw[]>("https://api.mojang.com/users/profiles/minecraft/JobGamesJG")
		.catch(() => null);

	if (!response) return res.status(200).json({ minecraftState: [] });

	const { data } = response;
	const minecraftState = data.map<Minecraft>((minecraft) => ({
		username: minecraft.name,
		uuid: minecraft.id,
	}));

	return res.status(200).json({ minecraftState });
};

export default Anime;
