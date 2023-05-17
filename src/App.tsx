import React from 'react';
import {
  IonApp,
  IonSelect,
  IonSelectOption,
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp style={{ maxWidth: "500px", margin: "auto" }}>
    <IonSelect
      multiple
      color="secondary"
      label="Testing with multiple"
      placeholder="Select One or More"
      label-placement="stacked"
      mode="md"
    >
      <IonSelectOption value="brown">Brown</IonSelectOption>
      <IonSelectOption value="blonde">Blonde</IonSelectOption>
      <IonSelectOption value="black">Black</IonSelectOption>
    </IonSelect>
  </IonApp>
)

export default App;
