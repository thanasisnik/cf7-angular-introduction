import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // name = 'Markos';

  //Step 1: One way binding of data
  // person = {
  //   givenName: 'Markos',
  //   surName: 'Karam',
  //   age: 52,
  //   email: 'marka@aueb.gr'
  // }

  //Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragkoydakis",
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece" 
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 32,
  //   email: "john@aueb.gr",
  //   address: "Lamia, Greece"
  // }

  // users: Person[] = [
  //   {
  //     "givenName": "Brana",
  //     "surName": "Rysom",
  //     "email": "brysom0@google.it",
  //     "age": 1,
  //     "address": "2 Sutteridge Point"
  //   }, {
  //     "givenName": "Maryellen",
  //     "surName": "Billo",
  //     "email": "mbillo1@tinypic.com",
  //     "age": 2,
  //     "address": "00 Maple Place"
  //   }, {
  //     "givenName": "Iorgo",
  //     "surName": "Stallebrass",
  //     "email": "istallebrass2@zdnet.com",
  //     "age": 3,
  //     "address": "02597 Dottie Parkway"
  //   }, {
  //     "givenName": "Victoria",
  //     "surName": "Portail",
  //     "email": "vportail3@hao123.com",
  //     "age": 4,
  //     "address": "69791 Old Shore Park"
  //   }, {
  //     "givenName": "Ashly",
  //     "surName": "Poag",
  //     "email": "apoag4@cisco.com",
  //     "age": 5,
  //     "address": "4397 Spaight Crossing"
  //   }, {
  //     "givenName": "Lacie",
  //     "surName": "Haeslier",
  //     "email": "lhaeslier5@digg.com",
  //     "age": 6,
  //     "address": "92 Forest Dale Pass"
  //   }, {
  //     "givenName": "Lissie",
  //     "surName": "Moynham",
  //     "email": "lmoynham6@t-online.de",
  //     "age": 7,
  //     "address": "38175 Gerald Terrace"
  //   }, {
  //     "givenName": "Lorette",
  //     "surName": "Andrejevic",
  //     "email": "landrejevic7@wikia.com",
  //     "age": 8,
  //     "address": "5 Dottie Court"
  //   }, {
  //     "givenName": "Arty",
  //     "surName": "Matthewman",
  //     "email": "amatthewman8@weather.com",
  //     "age": 9,
  //     "address": "90910 Elgar Drive"
  //   }, {
  //     "givenName": "Arlina",
  //     "surName": "Salandino",
  //     "email": "asalandino9@csmonitor.com",
  //     "age": 10,
  //     "address": "3206 Lakeland Circle"
  //   }, {
  //     "givenName": "Toiboid",
  //     "surName": "Halbert",
  //     "email": "thalberta@facebook.com",
  //     "age": 11,
  //     "address": "909 Commercial Trail"
  //   }, {
  //     "givenName": "Cassandry",
  //     "surName": "Howcroft",
  //     "email": "chowcroftb@aboutads.info",
  //     "age": 12,
  //     "address": "932 Hanson Avenue"
  //   }, {
  //     "givenName": "Kessia",
  //     "surName": "Gregan",
  //     "email": "kgreganc@hhs.gov",
  //     "age": 13,
  //     "address": "92590 Emmet Road"
  //   }, {
  //     "givenName": "Berkeley",
  //     "surName": "Dumphry",
  //     "email": "bdumphryd@squidoo.com",
  //     "age": 14,
  //     "address": "7987 Springs Terrace"
  //   }, {
  //     "givenName": "Tally",
  //     "surName": "Lathaye",
  //     "email": "tlathayee@deviantart.com",
  //     "age": 15,
  //     "address": "7 South Point"
  //   }, {
  //     "givenName": "Pauli",
  //     "surName": "Mallard",
  //     "email": "pmallardf@apple.com",
  //     "age": 16,
  //     "address": "392 Northland Way"
  //   }, {
  //     "givenName": "Dot",
  //     "surName": "De Bernardi",
  //     "email": "ddebernardig@nbcnews.com",
  //     "age": 17,
  //     "address": "5073 Farragut Junction"
  //   }, {
  //     "givenName": "Cristabel",
  //     "surName": "Beeson",
  //     "email": "cbeesonh@foxnews.com",
  //     "age": 18,
  //     "address": "20819 New Castle Junction"
  //   }, {
  //     "givenName": "Ivie",
  //     "surName": "Danbrook",
  //     "email": "idanbrooki@fotki.com",
  //     "age": 19,
  //     "address": "2044 Comanche Crossing"
  //   }, {
  //     "givenName": "Kare",
  //     "surName": "Stripp",
  //     "email": "kstrippj@e-recht24.de",
  //     "age": 20,
  //     "address": "8341 Fisk Way"
  //   }, {
  //     "givenName": "Lion",
  //     "surName": "South",
  //     "email": "lsouthk@utexas.edu",
  //     "age": 21,
  //     "address": "741 Dovetail Crossing"
  //   }, {
  //     "givenName": "Paulo",
  //     "surName": "Wanklin",
  //     "email": "pwanklinl@trellian.com",
  //     "age": 22,
  //     "address": "8 Moose Plaza"
  //   }, {
  //     "givenName": "Marylinda",
  //     "surName": "Jannings",
  //     "email": "mjanningsm@prlog.org",
  //     "age": 23,
  //     "address": "6272 Barby Lane"
  //   }, {
  //     "givenName": "Margy",
  //     "surName": "Gloy",
  //     "email": "mgloyn@constantcontact.com",
  //     "age": 24,
  //     "address": "171 Mosinee Court"
  //   }, {
  //     "givenName": "Paulina",
  //     "surName": "Faulconer",
  //     "email": "pfaulconero@china.com.cn",
  //     "age": 25,
  //     "address": "16 Northfield Pass"
  //   }, {
  //     "givenName": "Broddy",
  //     "surName": "Housaman",
  //     "email": "bhousamanp@pbs.org",
  //     "age": 26,
  //     "address": "2306 3rd Drive"
  //   }, {
  //     "givenName": "Dominik",
  //     "surName": "Stanbrooke",
  //     "email": "dstanbrookeq@ibm.com",
  //     "age": 27,
  //     "address": "16967 Prentice Lane"
  //   }, {
  //     "givenName": "Leoline",
  //     "surName": "Eliyahu",
  //     "email": "leliyahur@deviantart.com",
  //     "age": 28,
  //     "address": "387 Farwell Lane"
  //   }, {
  //     "givenName": "Nevile",
  //     "surName": "Farrin",
  //     "email": "nfarrins@sourceforge.net",
  //     "age": 29,
  //     "address": "248 David Circle"
  //   }, {
  //     "givenName": "Kellby",
  //     "surName": "Spellman",
  //     "email": "kspellmant@nps.gov",
  //     "age": 30,
  //     "address": "27907 Nancy Circle"
  //   }, {
  //     "givenName": "Alfons",
  //     "surName": "Wadforth",
  //     "email": "awadforthu@xinhuanet.com",
  //     "age": 31,
  //     "address": "0201 Steensland Drive"
  //   }, {
  //     "givenName": "Dionis",
  //     "surName": "Glanz",
  //     "email": "dglanzv@cloudflare.com",
  //     "age": 32,
  //     "address": "9 Ramsey Plaza"
  //   }, {
  //     "givenName": "Natty",
  //     "surName": "Livings",
  //     "email": "nlivingsw@theguardian.com",
  //     "age": 33,
  //     "address": "4578 Fair Oaks Court"
  //   }, {
  //     "givenName": "Mirabella",
  //     "surName": "Orriss",
  //     "email": "morrissx@oakley.com",
  //     "age": 34,
  //     "address": "789 Mosinee Place"
  //   }, {
  //     "givenName": "Letta",
  //     "surName": "Feedome",
  //     "email": "lfeedomey@friendfeed.com",
  //     "age": 35,
  //     "address": "204 Judy Place"
  //   }, {
  //     "givenName": "Nerta",
  //     "surName": "Symson",
  //     "email": "nsymsonz@github.com",
  //     "age": 36,
  //     "address": "8 Delladonna Avenue"
  //   }, {
  //     "givenName": "Winston",
  //     "surName": "Till",
  //     "email": "wtill10@about.me",
  //     "age": 37,
  //     "address": "982 Homewood Street"
  //   }, {
  //     "givenName": "Lissa",
  //     "surName": "Birdwistle",
  //     "email": "lbirdwistle11@wordpress.com",
  //     "age": 38,
  //     "address": "6264 Oneill Court"
  //   }, {
  //     "givenName": "Leyla",
  //     "surName": "Kemmis",
  //     "email": "lkemmis12@github.com",
  //     "age": 39,
  //     "address": "5 Clove Point"
  //   }, {
  //     "givenName": "Talbert",
  //     "surName": "Rylett",
  //     "email": "trylett13@marriott.com",
  //     "age": 40,
  //     "address": "3 Esker Point"
  //   }, {
  //     "givenName": "Quentin",
  //     "surName": "Shynn",
  //     "email": "qshynn14@amazon.co.jp",
  //     "age": 41,
  //     "address": "64 Lakeland Avenue"
  //   }, {
  //     "givenName": "Lothaire",
  //     "surName": "Ivanov",
  //     "email": "livanov15@bloglovin.com",
  //     "age": 42,
  //     "address": "30891 Canary Way"
  //   }, {
  //     "givenName": "Codee",
  //     "surName": "Matuszak",
  //     "email": "cmatuszak16@aboutads.info",
  //     "age": 43,
  //     "address": "7895 Atwood Junction"
  //   }, {
  //     "givenName": "Melinde",
  //     "surName": "Yair",
  //     "email": "myair17@forbes.com",
  //     "age": 44,
  //     "address": "486 Lake View Point"
  //   }
  // ]

}
