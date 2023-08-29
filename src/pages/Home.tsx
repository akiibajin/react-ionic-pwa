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
import bank from "../assets/imgs/bank.jpg";
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
          <h1><b>Las nuevas formas de dinero digital podrían estimular el crecimiento</b></h1>
        </IonText>
        <IonText>
          <p>
          "Durante más de 150 años, HSBC ha estado a la vanguardia de la innovación financiera, buscando constantemente formas de hacer la banca más fácil y mejor para nuestros clientes."
          </p>
        </IonText>
        <IonImg alt="Silhouette of mountains" src={bank}/>
      </IonContent>
    </>
  );
};

export default Home;
