# 🥷🏻 Pillow Fund Assesment

The Giphy store displays the trending GIFs and has the capability to display GIFs based on the input keywords.

## Demo link:

- Download Android APK [here](https://github.com/ShravanMeena/pillow-apk/blob/main/src/assets/apk/pillow_fund_apk1.0.0.apk)

## Features of this product:

- Trending GIFs
- Filtered GIFs
- Infinite Scroll
- Theme Toggler
- Play/Pause GIFs

## 👾 Technologies

I used `React Native`, `React-Navigation`, `Redux`, `Redux-Thunk`, `React-Redux` and some more libraries - [explained just below](#)

- [React-native-fast-image](https://www.npmjs.com/package/react-native-fast-image): Performance React Native image component.
- [react-native-video-player](https://www.npmjs.com/package/react-native-video-player): This player uses react-native-video for the video playback. So We can also play mp4 GIF.I just added and comment some code so you can see my work.
  `NOTE- With this npm some libraries -- react-native-video react-native-vector-icons`
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) : This plugin can simplify the require/import paths in your project. For example, instead of using complex relative paths like ` ../../../../utils/my-utils`, you can write `utils/my-utils`.
- [axios](https://www.npmjs.com/package/axios): Axios for http/api calling.

## 🤷🏻‍♂️ Setup

- download or clone the [repository](https://github.com/ShravanMeena/pillow-apk.git)
- `npm install`
- run `npx react-native run-ios/android`

## 🚀 Approach

### 🫰 Folder Struture:

![struture](https://i.ibb.co/bBJ8KSb/folder-struture.png)

### 🤘 Code quality & consistency:

- In this project I use absolute path for import ([What is absolute path?](https://dev.to/abrahamlawson/using-absolute-paths-in-react-native-24ak))
- Helper function for managing common function like for showing error as a toast.
- I try to write clean and efficient code (You can see [here](https://github.com/ShravanMeena/pillow-apk))
- For consistency I try to import everything in a proper sequence (- actions --> UI Component --> styles)
- And try to use a `global function for api` call, so we can call GET/POST/DELETE/PUT api with only same function without thinking extra error handling for every api call.

## 😎 Reusability

- So I have created reusabale helper functions.
- for this I have create a proper `ui` folder so we can use them all over the code

## 😎 Note

- For any doubts ,feel free to connect on mail `shravanmeena47@gmail.com`.
