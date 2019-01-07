import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens();

export default class Nav {
  constructor() {
    this._initApp();
  }

  _initApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            text: "Feeds",
            children: [
              {
                stack: {
                  id: "AppStack",
                  children: [
                    {
                      component: {
                        name: "wave_client.FeedsScreen"
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: "Feeds",
                      testID: "test"
                    }
                  }
                }
              },

              {
                component: {
                  name: "wave_client.ExploreScreen",
                  options: {
                    bottomTab: {
                      text: "explore screen"
                    }
                  }
                }
              }
            ]
          }
        }
      });
    });
  }
}
