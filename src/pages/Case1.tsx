import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonPage,
  IonText,
  IonToolbar,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import HSBCMap from "../assets/imgs/HCBSMap.png";
import DC from "../assets/imgs/digital_currency.jpg"
import world from "../assets/imgs/world.jpg"
import "./Case1.scss";

const Case1: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Caso 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonText color="danger">
        <h1><b>Conexión de Gestión de Patrimonio</b></h1>
      </IonText>
      <IonCard>
        <IonImg alt="Silhouette of mountains" src={HSBCMap} />
        <IonCardContent>
        Este caso se centra en los desafíos de los pagos transfronterizos, como altos costos y baja velocidad. Se identifican problemas clave y se explora el uso de Monedas Digitales de Banco Central (CBDC) para resolverlos. HSBC participa en un proyecto que demuestra cómo la tecnología DLT puede mejorar los pagos transfronterizos usando CBDC.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonImg alt="Silhouette of mountains" src={DC} />
        <IonCardHeader>
          <IonCardTitle>Principales retos</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Los pagos transfronterizos se enfrentan a cuatro grandes obstáculos:
          <IonList>
            <IonItem>
              <IonLabel class="ion-text-wrap">
                <b>Tramitación compleja de los controles de conformidad</b>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel class="ion-text-wrap">
                <b>Horario de funcionamiento limitado</b>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel class="ion-text-wrap">
                <b>Largas cadenas de transacciones</b>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel class="ion-text-wrap">
                <b>Costes de financiación</b>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonImg alt="Silhouette of mountains" src={world} />
        <IonCardContent>
        Los beneficios anticipados para los clientes son pagos transfronterizos más rápidos y económicos. Aunque se necesitan ajustes técnicos, regulatorios y legales, HSBC se compromete a explorar la innovación en pagos habilitada por CBDC, lo que también permitirá nuevos casos de uso en el futuro.
        </IonCardContent>
      </IonCard>
    </IonContent>
    </>
  );
};

export default Case1;
