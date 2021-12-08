import type { NextApiRequest, NextApiResponse } from "next";
import type { AnimeList, AnimeListRaw } from "../../lib/types";
import axios from "axios";

const Anime = async (_: NextApiRequest, res: NextApiResponse) => {
	const getStatus = (status: number): string => {
		const choice = ["watching", "completed", "on hold", "dropped", "", "plan to watch"][status - 1];
		return choice;
	};

	const getColour = (status: number): string => {
		const choice = ["#6F9BE1", "#90E855", "#FB9D48", "#D83C4A", "", "#FCFA56"][status - 1];
		return choice;
	};

	const getIcon = (status: number): string => {
		const choice = [
			"fas fa-eye",
			"fas fa-check-circle",
			"fas fa-pause-circle",
			"fas fa-trash-alt",
			"",
			"far fa-calendar-alt",
		][status - 1];
		return choice;
	};

	const response = await axios
		.get<AnimeListRaw[]>("https://myanimelist.net/animelist/JobGamesJG/load.json?status=7&offset=0")
		.catch(() => null);

	if (!response) return res.status(200).json({ animes: [] });

	const { data } = response;
	const animes = data.map<AnimeList>((anime) => ({
		eps: { count: anime.num_watched_episodes, max: anime.anime_num_episodes },
		img: anime.anime_image_path.replace("r/96x136/", ""),
		rating: anime.score,
		title: anime.anime_title,
		status: getStatus(anime.status),
		colour: getColour(anime.status),
		icon: getIcon(anime.status),
		url: `https://myanimelist.net${anime.anime_url}`,
	}));

	return res.status(200).json({ animes });
};

export default Anime;
