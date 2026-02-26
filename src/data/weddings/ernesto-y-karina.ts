import type { EventData } from "@/types/EventData";
import elegant from "@/assets/pictures/vestimentCode/elegant.png";
import partyElegant from "@/assets/pictures/birthdayType/elegante.png";
import song from "@/assets/music/one-more-kiss.mp3";
import picture1 from "@/assets/pictures/ernestoykarina/1.jpg";
import picture2 from "@/assets/pictures/ernestoykarina/2.jpg";
import picture3 from "@/assets/pictures/ernestoykarina/3.jpg";
import picture4 from "@/assets/pictures/ernestoykarina/4.jpg";
import picture5 from "@/assets/pictures/ernestoykarina/5.jpg";
import picture6 from "@/assets/pictures/ernestoykarina/6.jpg";
import picture7 from "@/assets/pictures/ernestoykarina/7.jpg";
import picture8 from "@/assets/pictures/ernestoykarina/8.jpg";

const event: EventData = {
  tipo: "boda",
  name: "Ernesto y Karina",
  date: "21 Diciembre 2026",
  hour: "06:00 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  location:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3277.394427826965!2d-100.67679523213359!3d18.367961687644286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84332c4dd4dbc2f1%3A0xa5a50a368e9b3e74!2s%22QUINTA%20KAREN%22!5e0!3m2!1ses!2smx!4v1772127050455!5m2!1ses!2smx",
  images: [
    picture5,
    picture6,
    picture1,
    picture2,
    picture3,
    picture4,
    picture7,
    picture8,
  ],
  vestimentCode: "Elegante",
  vestimentCodeImg: elegant,
  phone: "522206283499",
  music: song,
  suscription: "intermediary",
  ceremonyWedding: "Catedral de Ciudad Altamirano",
  ceremonyHour: "6:00 PM",
  partyType: partyElegant,
  colors: {
    primary: "#8B4513",
    secondary: "#D2B48C",
    accent: "#DC143C",
    background: "#FFFFFF",
  },
  petitionSpecially: true,
  namesParents: {
    momBoy: "Francisca Perez Ferreira",
    dadBoy: "Ignacio Allende Gonzalez",
    momGirl: "Karina Gonzalez Perez",
    dadGirl: "Fernando Ozuna Perez",
  },
  limitDate: "20 diciembre 2026",
  messageConfirmation: `Hola 👋
Confirmo mi asistencia a la boda de Karina y Ernesto 👰‍♀️🤵‍♂️💍
¡Gracias por la invitación!`,
  phrase: "Por siempre juntos",
};

export default event;
