import {
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  IonCol,
} from "@ionic/react";
import HSBCIcon from "../assets/icons/hsbc_logo.png";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="header-home">
            <IonRow>
              <IonCol>
                <IonTitle>HSBC</IonTitle>
              </IonCol>
              <IonCol>
                <IonImg src={HSBCIcon}></IonImg>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color={"danger"}>
          <h1>New forms of digital money could spur growth</h1>
        </IonText>
        <IonText>
          <p>
            For over 150 years, HSBC has been at the forefront of financial
            innovation, constantly looking for ways to make banking easier and
            better for our clients.
          </p>
        </IonText>
      </IonContent>
    </>
  );
};

export default Home;
