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
import HS from "../assets/imgs/handshake.jpg";
import "./Case2.scss";

const Case2: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Caso 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent className="ion-padding">
          <iframe
            width="100%"
            height="50%"
            src="https://www.youtube.com/embed/JcEM4FwbNIc?si=JTZJm3e33t8RWBMF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <IonText color="danger">
            <h1><b>Financiación comercial programable</b></h1>
          </IonText>
          <IonText>
            <h4>
             Existen diversos desafíos en el comercio transfronterizo, como la falta de transparencia y la lentitud en los pagos internacionales. Se discute cómo las Monedas Digitales de Banco Central (CBDC) y la infraestructura mBridge pueden mejorar los pagos y la financiación comercial.
            </h4>
          </IonText>
          <IonImg alt="Silhouette of mountains" src={HS}/>
          <IonText>
            <p>
              La falta de seguimiento y transparencia en los pagos, los procesos manuales intensivos en tiempo, y las tarifas impredecibles de pagos transfronterizos. La CBDC y mBridge pueden mejorar estos aspectos, brindando seguimiento en tiempo real, procesos automatizados y reducción de tarifas.
            </p>
            <p>
              Esto representa en beneficios potenciales para los clientes, incluyendo seguimiento en tiempo real de los pagos, condiciones de pago basadas en el cumplimiento, y pagos comerciales más baratos y rápidos. También se exploran casos de uso futuros para la CBDC, como préstamos comerciales, garantías y financiación en la cadena de suministro.
            </p>
          </IonText>
        </IonContent>
      </IonContent>
    </>
  );
};

export default Case2;
