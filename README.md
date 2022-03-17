<div align="center">
  <h1>rn-firebase possibly crashing on EAS monorepo</h1>
  <p>Based on Cedric's EAS monorepo project: https://github.com/byCedric/eas-monorepo-example</p>
</div>

## How to test

- Add your own firebase project `GoogleService-Info-Client.plist` and `google-services-client.json` to root directory
- In `app.json` update both ios and android `bundleIdentifier` and `package` names.
- Build the project on the simulator or device with `yarn ios`
- When the app opens, click on `AUTH GET SETTINGS` and you should get your project settings data in console.
- Finally, click on `AUTH` and the app should show the splash screen and get stuck
