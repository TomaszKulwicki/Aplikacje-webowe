var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var imieziomka = 'John';
document.body.innerHTML = "<H1>Hello " + imieziomka + "</H1>";
///////////////////////////////////////////////////////
var Person = /** @class */ (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML += "Witaj " + this.imie + " i " + this.nazwisko + " mam " + this.wiek + " lat";
    };
    return Person;
}());
var p1 = new Person('John', 'Black', 11);
p1.Show();
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(persons) {
    console.log(persons.name + " " + persons.surname + " " + persons.age + " " + persons.role);
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
}
function filterPersons(persons, criteria) {
    return persons.filter(function (person) { return person.name == criteria.name || person.surname == criteria.surname || person.age == criteria.age || person.role == criteria.role; });
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log('1');
users.forEach(logPerson);
admins.forEach(logPerson);
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
console.log('2');
var usersAdmins = __spreadArray(__spreadArray([], users), admins);
usersAdmins.forEach(function (usersAdmins) { return logPerson(usersAdmins); });
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log('3');
var filterAge = usersAdmins.filter(function (usersAdmins) { return usersAdmins.age > 25; });
filterAge.forEach(logPerson);
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log('4');
var filterName = filterPersons(usersAdmins, { name: 'Adam' });
filterName.forEach(logPerson);
