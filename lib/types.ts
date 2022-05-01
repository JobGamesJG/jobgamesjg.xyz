export interface InstagramListRaw {
	full_name: string;
	profile_pic_url_hd: string;
}

export interface InstagramList {
	name: string;
	pfp: string;
}

export interface AnimeListRaw {
	status: number;
	score: number;
	tags: string;
	is_rewatching: number;
	num_watched_episodes: number;
	anime_title: string;
	anime_num_episodes: number;
	anime_airing_status: number;
	anime_id: number;
	anime_studios: null;
	anime_licensors: null;
	anime_season: null;
	has_episode_video: boolean;
	has_promotion_video: boolean;
	has_video: boolean;
	video_url: string;
	anime_url: string;
	anime_image_path: string;
	is_added_to_list: boolean;
	anime_media_type_string: string;
	anime_mpaa_rating_string: string;
	start_date_string: null;
	finish_date_string: null;
	anime_start_date_string: string;
	anime_end_date_string: string;
	days_string: null;
	storage_string: string;
	priority_string: string;
}

export interface AnimeList {
	img: string;
	eps: { count: number; max: string };
	status: string;
	icon: string;
	rating: number;
	title: string;
	animeTypeIcon: string;
	animeType: string;
	colour: string;
	url: string;
}
