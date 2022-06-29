import type { NextApiRequest, NextApiResponse } from "next";
import type { MangaList, MangaListRaw } from "../../lib/types";
import axios from "axios";

const Manga = async (_: NextApiRequest, res: NextApiResponse) => {
	const getStatus = (status: number): string => {
		const choice = ["watching", "completed", "on hold", "dropped", "", "plan to watch"][status - 1];
		return choice;
	};

	const getColor = (status: number): string => {
		const choice = ["#4071f4", "#90E855", "#FB9D48", "#D83C4A", "", "#FCFA56"][status - 1];
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

	const getStatusIcon = (status: string): string => {
		let choice = "";

		if (status == "Movie") {
			choice = "fas fa-film";
		} else if (status == "TV") {
			choice = "fas fa-tv";
		} else if (status == "Special") {
			choice = "fa-solid fa-wand-magic-sparkles";
		} else {
			choice = "fas fa-film";
		}

		return choice;
	};

	const getGenre = (status: any): any => {
		let choice = "";

		for (let i = 0; i < 30; i++) {
			if (status[i]) {
				let str = choice + ", " + status[i].name;
				let char = str[0];
				choice = str.replace(char, " ");
			}
		}

		return choice;
	};

	const IfZero = (choice: string): string => {
		if (choice == "0") {
			choice = "?";
		}

		return choice;
	};

	const response = await axios
		.get<MangaListRaw[]>("https://myanimelist.net/mangalist/JobGamesJG/load.json?status=7&offset=0")
		.catch(() => null);

	if (!response) return res.status(200).json({ mangas: [] });

	const { data } = response;
	const mangas = data.map<MangaList>((manga) => ({
		img: manga.manga_image_path.replace("r/96x136/", ""),
		num_read_chapters: IfZero(manga.num_read_chapters),
		num_read_volumes: IfZero(manga.num_read_volumes),
		num_chapters: IfZero(manga.manga_num_chapters),
		num_volumes: IfZero(manga.manga_num_volumes),
		mangaType: manga.manga_media_type_string,
		rating: IfZero(manga.score),
		title: manga.manga_title,
		statusIcon: getStatusIcon(manga.manga_media_type_string),
		status: getStatus(manga.status),
		genres: getGenre(manga.genres),
		color: getColor(manga.status),
		icon: getIcon(manga.status),
		url: `https://myanimelist.net${manga.manga_url}`,
	}));

	return res.status(200).json({ mangas });
};

export default Manga;
