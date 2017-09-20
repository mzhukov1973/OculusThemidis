# OculusThemidis
###### Version: 0.0.4

[React.js](https://facebook.github.io/react/) based One-Page-App for one small but spunky law firm.

## ToDo: :calendar:
- [x] ~~Set up gh-pages with autobuilt deploys at https://mzhukov1973.github.io/OculusThemidis~~
- [x] ~~Fix routing issues by correctly setting basename for react-routers' <BrowserRouter>~~
- [x] ~~Add relevant info to `/package.json` as required/recommended per relevant standard~~
- [x] ~~Make contents of `/public` directory fully React standards-compliant~~
- [x] ~~Remove all extra fonts&css imports from `/public/index.html`~~
- [x] ~~Remove sweet-alert.js import from `/public/index.html`~~
- [x] ~~Move css, fonts & js directories from `/public` to `/src/components`~~
- [x] ~~Make maximum of non-js resources (CSS files, fonts, images, etc) available to components via import {..}, to reap maximum benefits from apps' intended architecture~~
- [x] ~~Rename repository to **oculus-themides** to conform to "no capital letters in the name" npm & create-react-app standard and move live version of the site/app at gh-pages from **https://mzhukov1973.github.io/OculusThemidis** to [**https://mzhukov1973.github.io/oculus-themides**](https://mzhukov1973.github.io/oculus-themides) (tweaking content to make it work from new URL)~~
- [x] ~~Rename `HISTORY` to `CHANGES` to keep it all closer to canon~~
- [x] ~~Update `/manifest.json` to include proper info to make for a more smooth web app experience~~
- [x] ~~Add icon sizes other than 192x192 and 512x512 (namely: 48x48, 64x64 72x72, 96x96, 128x128, 144x144, 168x168, 256x256, 384x384) - all PNGs~~
- [x] ~~Add resources for splashscreen generation and reference them in `/manifest.json`~~
- [x] ~~Update `/favicon.ico` to include more different resolutions for the favicon. (Expand it from 16, 32 & 48 to 16, 32, 48, 64, 72, 96, 128 & 256 sized favicon.ico images)~~
- [ ] Change current navigation bar to something more aesthetically palatable for both mobile and desktop/tablet cases
- [ ] Check web app features work as intended:
   - [ ] Splash screen works with phones
      - [ ] For Android
      - [ ] For iOS
   - [ ] Launch icons are chosen correctly for devices' screen dpi
      - [ ] For Android
      - [ ] For iOS
   - [ ] App name is derived correctly from `/manifest.json`
      - [ ] For Android
      - [ ] For iOS
   - [ ] Apps' chosen display mode (standalone) is honoured by the device
      - [ ] For Android
      - [ ] For iOS
   - [ ] Service worker works as intended
      - [ ] For reading data from the server
         - [ ] For Android
         - [ ] For iOS
      - [ ] For writing data to the server
         - [ ] For Android
         - [ ] For iOS
- [ ] Make sure live version of the site/app correctly works with our test server back end
- [ ] Add minimal set of decorative images (i.e. backgrounds, premises&staff photos at the [**Contacts**](https://mzhukov1973.github.io/oculus-themides/contacts) section, etc)
- [ ] Add final font set to the site, make sure it is minimal and imported only by components, that need them
- [ ] Update admin dashboard functionality:
   - [ ] Add image upload option (with automatic image re-creation via gd(2), resizing it if necessary)
   - [ ] Add background image assignment option from the pool of uploaded images
   - [ ] Add staff & premises photos upload option (with automatic image re-creation via gd(2), resizing it if necessary)
   - [ ] Update [**Contacts**](https://mzhukov1973.github.io/oculus-themides/contacts) section [editor](https://mzhukov1973.github.io/oculus-themides/contacts)
   - [ ] Refactor [**News**](https://mzhukov1973.github.io/oculus-themides/news) section [editor](https://mzhukov1973.github.io/oculus-themides/news) to make it useable both in mobile and desktop app variants
   - [ ] Add [**About us** / **Articles**](https://mzhukov1973.github.io/oculus-themides/about) section [editor](https://mzhukov1973.github.io/oculus-themides/adm/about)
   - [ ] Add [**pricelist**](https://mzhukov1973.github.io/oculus-themides/price) [editor](https://mzhukov1973.github.io/oculus-themides/adm/price)
   - [ ] Add [**discount action**](https://mzhukov1973.github.io/oculus-themides/sale) [editor](https://mzhukov1973.github.io/oculus-themides/adm/sale)
      - [ ] Add basic discount editor - static actions with only start and end dates
      - [ ] Add automatic actions editor - with rules to auto-generate and apply actions according to given patterns (see documentation for details)
- [ ] Finalise and apply consistent styling to all sections of the app, including admin dashboard
- [ ] Properly protect admin dashboard from unauthorised access (see documentation about apps' architechture details)
- [ ] Add i18n proper support with proper selection of language to use in [admin dashboard](https://mzhukov1973.github.io/oculus-themides/adm)
- [ ] Add Russian language support
