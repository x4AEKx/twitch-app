import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { API } from "./../api/api"

const initialState = {
	videos: [],
	favoritesVideos: [],
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case "APP/SET_VIDEOS": {
			return {
				...state,
				videos: action.videos,
			}
		}
		case "APP/SET_FAVORITE_VIDEO": {
			const {
				_id,
				url,
				title,
				preview: { medium },
			} = action.video
			const obj = {
				_id,
				url,
				title,
				preview: {
					medium,
				},
			}
			if (!state.favoritesVideos.some((video) => video._id === obj._id)) {
				return {
					...state,
					favoritesVideos: [...state.favoritesVideos, obj],
				}
			}
		}
		case "APP/REMOVE_FAVORITE_VIDEO": {
			return {
				...state,
				favoritesVideos: [
					...state.favoritesVideos.filter((video) => video._id !== action.video._id),
				],
			}
		}
		default:
			return state
	}
}

const setVideos = (videos) => {
	return {
		type: "APP/SET_VIDEOS",
		videos,
	}
}

export const setFavoriteVideo = (video) => {
	return {
		type: "APP/SET_FAVORITE_VIDEO",
		video,
	}
}

export const removeFavoriteVideo = (video) => {
	return {
		type: "APP/REMOVE_FAVORITE_VIDEO",
		video,
	}
}

export const setVideosThunk = (value) => async (dispatch) => {
	const [userId] = await API.getChannelId(value)
	const videos = await API.getVideos(userId)
	console.log(videos)
	dispatch(setVideos(videos))
}

const persistConfig = {
	key: "primary",
	storage,
	whitelist: ["favoritesVideos"],
}

export const persistedReducer = persistReducer(persistConfig, appReducer)
