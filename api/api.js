const token = "vtd2diw1myj0n64xwpgm1y31i15n59"
const id = "zxzz8vyno83nvzdyua75afty95fexs"

export const API = {
	getChannelId(value) {
		return fetch(`https://api.twitch.tv/kraken/users?login=${value}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Client-Id": `${id}`,
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
				Authorization: `Bearer ${token}`,
				"Client-Id": `${id}`,
				Accept: "application/vnd.twitchtv.v5+json",
			},
		})
			.then((res) => res.json())
			.then((res) => res.videos)
	},
}
