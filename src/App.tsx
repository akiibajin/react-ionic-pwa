import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, images, menu, square, triangle, } from "ionicons/icons";
import Case1 from "./pages/Case1";
import Case2 from "./pages/Case2";
import Case3 from "./pages/Case3";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/case-1">
              <Case1 />
            </Route>
            <Route exact path="/case-2">
              <Case2 />
            </Route>
            <Route exact path="/case-3">
              <Case3 />
            </Route>
            <Route exact path="/">
              <Redirect to="home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color={"dark"}>
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="case-1" href="/case-1">
              <IonIcon aria-hidden="true" icon={menu} />
              <IonLabel>Case 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="case-2" href="/case-2">
              <IonIcon aria-hidden="true" icon={images} />
              <IonLabel>Case 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="case-3" href="/case-3">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Case 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </>
);

export default App;
