# react-ionic-pwa
<img src="https://ionicframework.com/img/meta/ionic-react-og.png" alt="ionic-react" height="300" />
<hr/>

### In this project you can find the first ionic-react tutorial's steps with the tabs template <a href="https://ionicframework.com/docs/react/your-first-app" target="_blank">Docs</a>.

#### Steps that you need to run the project:
  - [x] In a terminal located on the folder, type `yarn` to read the package.json and install all dependencies.
  - [x] After all depedencies are installed, type `yarn dev` to run the command script.
  - [x] You can see the project running with vite tool on the terminal with the port of your localhost.
  - [x] If you enter to the project running with `Google Chrome`, you can see the "dowload as an app" option.
#### To build the project, just run the command `yarn build` and edit the manifest.json on the dist folder like this:
``` json
{
  "short_name": "photo-gallery",
  "name": "photo gallery app",
  "icons": [
    {
      "src": "assets/icons/icon-48.webp",
      "type": "image/png",
      "sizes": "48x48",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-72.webp",
      "type": "image/png",
      "sizes": "72x72",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-96.webp",
      "type": "image/png",
      "sizes": "96x96",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-128.webp",
      "type": "image/png",
      "sizes": "128x128",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-192.webp",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-256.webp",
      "type": "image/png",
      "sizes": "256x256",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-512.webp",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any maskable"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#ffffff",
  "background_color": "#ffffff"
}
```
this grants to the explorer find the icons to generate the app.
<hr />
## This is an example to make a react-ionic app in a pwa, if you need to change the icons of your app, there are some steps to create the icons.

  - [x] find a /.jpg/.png image with 1024 x 1024px
  - [x] replace the resources/icon-only.jpg with the new image, make sure that the name would be the same.
  - [x] Run the command `yarn @capacitor/assets generate --"type android or ios in base of the case"`.
  - [x] The new icons are on the icons folder
To know more about capacitor/assets, click <a href="https://github.com/ionic-team/capacitor-assets" target="_blank">here</a>
