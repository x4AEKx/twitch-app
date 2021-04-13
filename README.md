# Search videos from channel on Twitch

NextJs application, that allows you to search for a video of a channel on twitch by the name of this channel:

- created a service that allows you to search for a video of a channel on twitch by the name of this channel
- the user can add videos to favorites and in the favorites tab the videos that he added will be displayed, he can also remove them from the favorites
- when you reload the page, videos added to favorites should not disappear from there
- clicking on the preview opens this video in the browser
- when you hover over a video, the title of the video is shown

## Demonstration:

you can see the project:
https://twitch-app-x4aekx.vercel.app/

---

![Twitch-app image](https://github.com/x4aekx/twitch-app/raw/main/public/twitch-app.gif)

---

## Run project:

for run project

1. Clone repository
   `git clone https://github.com/x4AEKx/twitch-app.git your-folder`

1. Create `.env.local` file in root (`/`) directory and edit it:

   ```
   TOKEN=your_token_from_twitchAPI
   CLIENT_ID=your_clientId_from_twitchAPI
   ```

1. Type
   `npm install && npm run dev`

## Used technologies:

- NextJs
- styled components
- React
- Redux
- Redux-thunk
- third party api: Twitch.api
