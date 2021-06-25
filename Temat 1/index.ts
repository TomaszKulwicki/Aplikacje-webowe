const imieziomka = 'John';
document.body.innerHTML = `<H1>Hello ${imieziomka}</H1>`

///////////////////////////////////////////////////////

class Person {
    imie: string;
    nazwisko: string;
    wiek: number;

    constructor(imie: string, nazwisko: string, wiek: number){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Show(){
        document.body.innerHTML +=`Witaj ${this.imie} i ${this.nazwisko} mam ${this.wiek} lat`
    }
}

let p1 = new Person('John', 'Black', 11);
p1.Show();

///////////////////////////////////////////////////////

interface Persons {
    name: string;
    surname: string;
    age: number;
    role: string;
    }
    
    const users: Persons[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Persons[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(persons: Persons) {
        console.log(`${persons.name} ${persons.surname} ${persons.age} ${persons.role}`)
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    }
    
    function filterPersons(persons: Persons[], criteria: any): Persons[] {
        return persons.filter(person => person.name == criteria.name || person.surname == criteria.surname || person.age == criteria.age || person.role == criteria.role);
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    }
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    console.log('1');
    users.forEach(logPerson);
    admins.forEach(logPerson);
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    console.log('2');
    const usersAdmins:  Persons[] = [...users, ...admins];
    usersAdmins.forEach(usersAdmins => logPerson(usersAdmins));
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    console.log('3');
    const filterAge = usersAdmins.filter(usersAdmins => usersAdmins.age > 25);
    filterAge.forEach(logPerson);
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log('4');
    const filterName = filterPersons(usersAdmins, { name: 'Adam' });
    filterName.forEach(logPerson);