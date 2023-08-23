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
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.scss";
import { usePhotoGallery } from "../hooks/useGalleryPhotos";

const Tab2: React.FC = () => {
  const { takePhoto, photos, setPhotos } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={photo.filepath}>
                  <IonImg src={photo.webviewPath} />
                  <IonButton
                    onClick={() =>
                      setPhotos((prev) =>
                        prev.filter((ph) => ph.filepath !== photo.filepath)
                      )
                    }
                    color="danger"
                  >
                    <IonIcon icon={trash}></IonIcon>
                  </IonButton>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
