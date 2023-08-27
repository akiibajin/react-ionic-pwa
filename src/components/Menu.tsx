import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import { ReactNode } from "react";

const Menu = ({contentId, children, title = "Menu"}: {contentId: string, children: ReactNode, title?: string}) => {
    return (<IonMenu contentId={contentId}>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">{children}</IonContent>
  </IonMenu>);
}
 
export default Menu;