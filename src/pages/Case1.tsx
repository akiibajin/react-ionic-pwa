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
import "./Case1.scss";

const Case1: React.FC = () => {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Case 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <IonImg alt="Silhouette of mountains" src={HSBCMap} />
        <IonCardHeader>
          <IonCardTitle>Crossborder Commercial Payments</IonCardTitle>
          <IonCardSubtitle>Introduction</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Crossborder payments are often perceived to face challenges of high
          costs, low speed, limited access and insufficient transparency
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonImg alt="Silhouette of mountains" src={HSBCMap} />
        <IonCardHeader>
          <IonCardTitle>Top Challenges</IonCardTitle>
          <IonCardSubtitle>issues</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          There are four major obstacles facing crossborder payments
          <IonList>
            <IonItem>
              <IonLabel>
                <b>Complex processing of compliance checks</b>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <b>Limited Operating Hours</b>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <b>Long Transaction Chains</b>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <b>Funding Costs</b>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default Case1;
