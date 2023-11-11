import {Component} from '@angular/core';
import {Event} from "./event";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularv1';
  eventId: string | null = null;
  currentEvent: Event | undefined = undefined;
  events: Event[] = [
    {
      id: 1,
      title: "Concert de l'année",
      description: "Apprêtez vous la famille pour le concert de l'année. Nous allons encore écrire une nouvelle page de l'histoire. Une seule date : 25 Décembre 2023 Un seul",
      day: "25",
      month: "September",
      libelle: "Concert",
      image: "https://backend.met.tg//images/evenement/6b5f8b03dc90501b23a8329f421270f4.jpg"
    },
    {
      id: 2,
      title: "THE ABSOLUTE LIFESTYLE PARTY 3.0 COLOR BLOCK EDITION",
      description: "Voilà l'info que vous attendiez alors satisfaits ? Le 23 Décembre 2023, on reçoit en mode IV: DJ GERAD, DJ DIPONNE, DJ KAARIS et DJ CARLITOS",
      day: "12",
      month: "Decembre",
      libelle: "Concert",
      image: "https://backend.met.tg//images/evenement/5b3ef946efe9a721fe62d33bedc7cb55.jpg"
    },
    {
      id: 3,
      title: "Prayer room 2023",
      description: "PRAYER ROOM 2023 PRAYER ROOM 2023!!!*🔥 Rejoignez-nous pour une soirée inoubliable de louange et d'adoration avec les chantres *APIKALIA!* Et *ERNIE PRAISE",
      day: "25",
      month: "Novembre",
      libelle: "Concert",
      image: "https://backend.met.tg//images/evenement/8a35a1dc62fc00ac6e67bc7efee55c08.jpg"
    },
  ];

  onShowDetails(eventId: number){
    this.currentEvent = this.events.find((event) => event.id === eventId)
    console.log("recupere depuis la liste", this.currentEvent)
  }
}
