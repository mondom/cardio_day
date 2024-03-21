// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
	'Bernhard, Sandra',
	'Bethea, Erin',
	'Becker, Carl',
	'Bentsen, Lloyd',
	'Beckett, Samuel',
	'Blake, William',
	'Berger, Ric',
	'Beddoes, Mick',
	'Beethoven, Ludwig',
	'Belloc, Hilaire',
	'Begin, Menachem',
	'Bellow, Saul',
	'Benchley, Robert',
	'Blair, Robert',
	'Benenson, Peter',
	'Benjamin, Walter',
	'Berlin, Irving',
	'Benn, Tony',
	'Benson, Leana',
	'Bent, Silas',
	'Berle, Milton',
	'Berry, Halle',
	'Biko, Steve',
	'Beck, Glenn',
	'Bergman, Ingmar',
	'Black, Elk',
	'Berio, Luciano',
	'Berne, Eric',
	'Berra, Yogi',
	'Berry, Wendell',
	'Bevan, Aneurin',
	'Ben-Gurion, David',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bennington, Chester',
	'Bierce, Ambrose',
	'Billings, Josh',
	'Birrell, Augustine',
	'Blair, Tony',
	'Beecher, Henry',
	'Biondo, Frank',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const findPeople = human => {
	const result = human.year
	return result >= 1500 && result < 1600
}

console.table(inventors.filter(findPeople))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const showFullNames = human => {
	return human.first + ' ' + human.last
}

console.log(inventors.map(showFullNames))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortAge = (a, b) => {
	return a.year - b.year
}

console.table(inventors.sort(sortAge))

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const sum2 = inventors.reduce(function (accumulator, inventor) {
	return accumulator + (inventor.passed - inventor.year)
}, 0)
console.log(sum2)

let totalYears = 0

//-----------------
// to samo przy pomocy pęli for

for (let i = 0; i < inventors.length; i++) {
	totalYears = inventors[i].year
}
console.log(totalYears)
// 5. Sort the inventors by years lived
// moje rozwiązanie
const calculateAge = inventor => {
	const age = inventor.passed - inventor.year
	return { ...inventor, age: age }
}

// w powyższej funkcji rozsmarowujemy każdy obiekt inventor, żeby po przecinku wsadzić do niego nową parę klucz wartość age: age

const inventorsWithAge = inventors.map(calculateAge)

const sortInventors = (a, b) => {
	return a.age - b.age
}

console.log(inventorsWithAge.sort(sortInventors))

//rozwiązanie z kursu

const oldest = inventors.sort(function (a, b) {
	const lastGuy = a.passed - a.year
	const nextGuy = b.passed - b.year

	return lastGuy > nextGuy ? -1 : 1
})
console.table(oldest)

//const oldest = inventors.sort(function (a, b) { ... }): Tworzy nową tablicę oldest, która jest wynikiem sortowania tablicy inventors. Sortowanie odbywa się na podstawie funkcji porównującej przekazanej jako argument dla metody sort(). Ta funkcja zostanie wykonana dla każdej pary elementów tablicy inventors.

// const lastGuy = a.passed - a.year i const nextGuy = b.passed - b.year: Obliczają wiek każdego wynalazcy, odejmując rok urodzenia (year) od roku śmierci (passed). Wynik jest przypisywany do zmiennych lastGuy i nextGuy dla odpowiednio pierwszego (a) i drugiego (b) wynalazcy w danej parze.

// return lastGuy > nextGuy ? -1 : 1: Porównuje wiek dwóch wynalazców (lastGuy i nextGuy). Jeśli wiek pierwszego wynalazcy (lastGuy) jest większy od wieku drugiego wynalazcy (nextGuy), zwraca -1, co oznacza, że pierwszy wynalazca będzie umieszczony przed drugim w posortowanej tablicy. W przeciwnym razie zwraca 1, co oznacza, że drugi wynalazca będzie umieszczony przed pierwszym w posortowanej tablicy.

// console.table(oldest): Wyświetla posortowaną tablicę oldest w konsoli za pomocą funkcji console.table(), co pozwala na czytelne wyświetlenie tablicy w postaci tabeli.

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const Boulevards = [
	'Boulevards of Paris',
	'City walls of Paris',
	'Thiers wall',
	'Wall of Charles V',
	'Wall of Philip II Augustus',
	'City gates of Paris',
	"Haussmann's renovation of Paris",
	'Boulevards of the Marshals',
	'Boulevard Auguste-Blanqui',
	'Boulevard Barbès',
	'Boulevard Beaumarchais',
	"Boulevard de l'Amiral-Bruix",
	'Boulevard Mortier',
	'Boulevard Poniatowski',
	'Boulevard Soult',
	'Boulevard des Capucines',
	'Boulevard de la Chapelle',
	'Boulevard de Clichy',
	'Boulevard du Crime',
	"Boulevard du Général-d'Armée-Jean-Simon",
	'Boulevard Haussmann',
	"Boulevard de l'Hôpital",
	'Boulevard des Italiens',
	'Boulevard Lefebvre',
	'Boulevard de la Madeleine',
	'Boulevard de Magenta',
	'Boulevard Malesherbes',
	'Boulevard Marguerite-de-Rochechouart',
	'Boulevard Montmartre',
	'Boulevard du Montparnasse',
	'Boulevard Raspail',
	'Boulevard Richard-Lenoir',
	'Boulevard Saint-Germain',
	'Boulevard Saint-Michel',
	'Boulevard de Sébastopol',
	'Boulevard de Strasbourg',
	'Boulevard du Temple',
	'Boulevard Voltaire',
	'Boulevard de la Zone',
]

function checkBoulevards(boulevard) {
	return boulevard.includes('de ')
}
console.log(Boulevards.filter(checkBoulevards))

// 7. sort Exercise
// Sort the people alphabetically by last name
//moje błędne rozwiązanie↓
console.log(people.sort())

//rozwiązanie z kursu↓

const alpha = people.sort(function (lastOne, nextOne) {
	const [aLast, aFirst] = lastOne.split(', ')
	// [aLast, aFirst] = ...: Używając destrukturyzacji tablicy, wartości zwrócone przez split() są przypisywane odpowiednio do zmiennych aLast i aFirst. Pierwszy element tablicy (nazwisko) jest przypisywany do zmiennej aLast, a drugi element (imię) do zmiennej aFirst.
	// W rezultacie po wykonaniu tej linii kodu, zmienna aLast przechowuje nazwisko danej osoby, a zmienna aFirst przechowuje jej imię. Ta technika jest często używana, gdy chcemy rozbić tablicę na pojedyncze wartości i przypisać je do zmiennych w jednym kroku.
	const [bLast, bFirst] = nextOne.split(', ')
	return aLast > bLast ? -1 : 1
})

console.log(alpha)

// Kod ten sortuje tablicę people alfabetycznie według nazwisk osób. Oto kroki wykonywane przez ten kod:

// Definicja tablicy people, która zawiera listę nazwisk i imion.
// Wywołanie metody sort() na tablicy people z funkcją porównującą jako argument.
// Funkcja porównująca otrzymuje dwa argumenty, lastOne i nextOne, reprezentujące kolejne elementy do porównania.
// Każdy z tych elementów jest rozbijany na nazwisko i imię za pomocą metody split(', ').
// Porównywane są nazwiska (aLast i bLast) obu osób.
// W zależności od wyniku porównania zwracana jest odpowiednia wartość (-1 dla mniejszej wartości, 1 dla większej, 0 dla równości).
// Wynik sortowania jest przypisywany do zmiennej alpha.
// Posortowana tablica jest wyświetlana w konsoli za pomocą console.log().
// Wynik sortowania jest tablicą osób posortowanych alfabetycznie według ich nazwisk.

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
]

const test = data.reduce(function (obj, item) {
	console.log(item)
	if (!obj[item]) {
		obj[item] = 0
	}
	obj[item]++
	return obj
}, {})

console.log(test)


// Ten kod wykonuje operację redukcji na tablicy data, w której zlicza wystąpienia każdego unikalnego elementu.

// Najpierw tworzony jest obiekt test, który będzie przechowywał wyniki zliczania.
// Następnie wywoływana jest metoda reduce() na tablicy data.
// Funkcja przekazana do metody reduce() przyjmuje dwa argumenty: obj (akumulator) i item (aktualny element przetwarzany w iteracji).
// Wewnątrz funkcji reduce wykonuje się następująca logika:
// Jeśli element item nie istnieje jako klucz w obiekcie obj, to zostaje on dodany, a jego wartość początkowa ustawiana jest na 0.
// Następnie inkrementowana jest wartość właściwości obj[item], czyli zliczane jest wystąpienie danego elementu.
// Na koniec iteracji, obiekt test zawiera liczbę wystąpień każdego unikalnego elementu tablicy data.
// Wynikiem działania tego kodu będzie obiekt test, który będzie zawierał zliczone wystąpienia każdego unikalnego elementu tablicy data.
