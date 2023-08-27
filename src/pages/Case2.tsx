import { camera, trash, close } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonButton,
  IonText,
} from "@ionic/react";
import "./Case2.scss";

const Case2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Case 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent className="ion-padding">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/JcEM4FwbNIc?si=JTZJm3e33t8RWBMF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <IonText>
            <h1>Programmable Trade Finance</h1>
          </IonText>
          <IonText>
            <h4>
              A CBDC not only makes trade payments faster and more transparent,
              but also potentially allows Fls to provide clients with more
              comprehensive trade finance solution.
            </h4>
          </IonText>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Case2;
