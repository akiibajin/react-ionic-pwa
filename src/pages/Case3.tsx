import {
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonImg,
  IonToolbar,
} from "@ionic/react";
import finance from "../assets/imgs/finance.jpg";
import "./Case3.scss";

const Case3: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Caso 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent className="ion-padding">
          <IonText color="danger">
            <h1><b>Conexión de Gestión de Patrimonio</b></h1>
          </IonText>
          <IonImg alt="Silhouette of mountains" src={finance}/>
          <IonText>
            <p>
              Un esquema que permite a residentes elegibles en la región de la Gran Bahía Guangdong-Hong Kong-Macao invertir en productos de gestión de patrimonio a través de un canal de flujo de fondos entre sistemas bancarios. Se explora cómo la liquidación mediante CBDC a través de la plataforma mBridge podría optimizar la liquidación de activos digitales bajo este esquema. Se presenta una prueba de concepto para simular la liquidación mayorista basada en CBDC, incluyendo la tokenización de activos y casos de uso adicionales para el dinero programable, como inversión ESG y caridad.
            </p>
            <p>
              La PoC se enfoca en la liquidación mayorista de Wealth Management Connect usando CBDC y mBridge. Esto implica incorporar activos digitales como el e-HKD y gestionar la elegibilidad de productos. Además de la liquidación, se exploran casos de uso adicionales para el dinero programable, como regalos de cumpleaños con restricciones de inversión y tokens de caridad. El uso de mBridge se espera que agilice la liquidación transfronteriza y fomente nuevos productos y activos tokenizados en esta región.
            </p>
          </IonText>
        </IonContent>
      </IonContent>
    </>
  );
};

export default Case3;
