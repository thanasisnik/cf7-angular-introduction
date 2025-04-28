import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [ PersonTableComponent ],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {

  users: Person[] = [
    {
      "givenName": "Berkeley",
      "surName": "Dumphry",
      "email": "bdumphryd@squidoo.com",
      "age": 14,
      "address": "7987 Springs Terrace"
    }, {
      "givenName": "Tally",
      "surName": "Lathaye",
      "email": "tlathayee@deviantart.com",
      "age": 15,
      "address": "7 South Point"
    }, {
      "givenName": "Pauli",
      "surName": "Mallard",
      "email": "pmallardf@apple.com",
      "age": 16,
      "address": "392 Northland Way"
    }, {
      "givenName": "Dot",
      "surName": "De Bernardi",
      "email": "ddebernardig@nbcnews.com",
      "age": 17,
      "address": "5073 Farragut Junction"
    }, {
      "givenName": "Cristabel",
      "surName": "Beeson",
      "email": "cbeesonh@foxnews.com",
      "age": 18,
      "address": "20819 New Castle Junction"
    }, {
      "givenName": "Ivie",
      "surName": "Danbrook",
      "email": "idanbrooki@fotki.com",
      "age": 19,
      "address": "2044 Comanche Crossing"
    }, {
      "givenName": "Kare",
      "surName": "Stripp",
      "email": "kstrippj@e-recht24.de",
      "age": 20,
      "address": "8341 Fisk Way"
    }, {
      "givenName": "Lion",
      "surName": "South",
      "email": "lsouthk@utexas.edu",
      "age": 21,
      "address": "741 Dovetail Crossing"
    }, {
      "givenName": "Paulo",
      "surName": "Wanklin",
      "email": "pwanklinl@trellian.com",
      "age": 22,
      "address": "8 Moose Plaza"
    }, {
      "givenName": "Marylinda",
      "surName": "Jannings",
      "email": "mjanningsm@prlog.org",
      "age": 23,
      "address": "6272 Barby Lane"
    }, {
      "givenName": "Margy",
      "surName": "Gloy",
      "email": "mgloyn@constantcontact.com",
      "age": 24,
      "address": "171 Mosinee Court"
    }, {
      "givenName": "Paulina",
      "surName": "Faulconer",
      "email": "pfaulconero@china.com.cn",
      "age": 25,
      "address": "16 Northfield Pass"
    }, {
      "givenName": "Broddy",
      "surName": "Housaman",
      "email": "bhousamanp@pbs.org",
      "age": 26,
      "address": "2306 3rd Drive"
    }, {
      "givenName": "Dominik",
      "surName": "Stanbrooke",
      "email": "dstanbrookeq@ibm.com",
      "age": 27,
      "address": "16967 Prentice Lane"
    }, {
      "givenName": "Leoline",
      "surName": "Eliyahu",
      "email": "leliyahur@deviantart.com",
      "age": 28,
      "address": "387 Farwell Lane"
    }, {
      "givenName": "Nevile",
      "surName": "Farrin",
      "email": "nfarrins@sourceforge.net",
      "age": 29,
      "address": "248 David Circle"
    }, {
      "givenName": "Kellby",
      "surName": "Spellman",
      "email": "kspellmant@nps.gov",
      "age": 30,
      "address": "27907 Nancy Circle"
    }, {
      "givenName": "Alfons",
      "surName": "Wadforth",
      "email": "awadforthu@xinhuanet.com",
      "age": 31,
      "address": "0201 Steensland Drive"
    }, {
      "givenName": "Dionis",
      "surName": "Glanz",
      "email": "dglanzv@cloudflare.com",
      "age": 32,
      "address": "9 Ramsey Plaza"
    }, {
      "givenName": "Natty",
      "surName": "Livings",
      "email": "nlivingsw@theguardian.com",
      "age": 33,
      "address": "4578 Fair Oaks Court"
    }, {
      "givenName": "Mirabella",
      "surName": "Orriss",
      "email": "morrissx@oakley.com",
      "age": 34,
      "address": "789 Mosinee Place"
    }, {
      "givenName": "Letta",
      "surName": "Feedome",
      "email": "lfeedomey@friendfeed.com",
      "age": 35,
      "address": "204 Judy Place"
    }, {
      "givenName": "Nerta",
      "surName": "Symson",
      "email": "nsymsonz@github.com",
      "age": 36,
      "address": "8 Delladonna Avenue"
    }, {
      "givenName": "Winston",
      "surName": "Till",
      "email": "wtill10@about.me",
      "age": 37,
      "address": "982 Homewood Street"
    }, {
      "givenName": "Lissa",
      "surName": "Birdwistle",
      "email": "lbirdwistle11@wordpress.com",
      "age": 38,
      "address": "6264 Oneill Court"
    }, {
      "givenName": "Leyla",
      "surName": "Kemmis",
      "email": "lkemmis12@github.com",
      "age": 39,
      "address": "5 Clove Point"
    }, {
      "givenName": "Talbert",
      "surName": "Rylett",
      "email": "trylett13@marriott.com",
      "age": 40,
      "address": "3 Esker Point"
    }, {
      "givenName": "Quentin",
      "surName": "Shynn",
      "email": "qshynn14@amazon.co.jp",
      "age": 41,
      "address": "64 Lakeland Avenue"
    }, {
      "givenName": "Lothaire",
      "surName": "Ivanov",
      "email": "livanov15@bloglovin.com",
      "age": 42,
      "address": "30891 Canary Way"
    }, {
      "givenName": "Codee",
      "surName": "Matuszak",
      "email": "cmatuszak16@aboutads.info",
      "age": 43,
      "address": "7895 Atwood Junction"
    }, {
      "givenName": "Melinde",
      "surName": "Yair",
      "email": "myair17@forbes.com",
      "age": 44,
      "address": "486 Lake View Point"
    }
  ]
}
