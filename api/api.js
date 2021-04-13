export const API = {
	getChannelId(value) {
		return fetch(`https://api.twitch.tv/kraken/users?login=${value}`, {
			headers: {
				Authorization: `Bearer ${process.env.token}`,
				"Client-Id": `${process.env.client_id}`,
				Accept: "application/vnd.twitchtv.v5+json",
			},
		})
			.then((res) => res.json())
			.then((res) =>
				res.users.map((user) => {
					return user._id
				})
			)
	},
	getVideos(userId) {
		return fetch(`https://api.twitch.tv/kraken/channels/${userId}/videos`, {
			headers: {
				Authorization: `Bearer ${process.env.token}`,
				"Client-Id": `${process.env.client_id}`,
				Accept: "application/vnd.twitchtv.v5+json",
			},
		})
			.then((res) => res.json())
			.then((res) => res.videos)
	},
}
