'use strict'; // Дабы код работал в современном режиме (директива)


alert ('Press "OK"'); // выводит текст на экран в виде модального окна

let message; // переменная и название переменной, однострочная функция
message = 'Example'; // можно поместить данные с помощью оператора присваивания "=" 

alert (message); // вывод переменной

let alarm = 'text', // является строкой (string)
    alarm2 = 'text',
    alarm3 = 'text'; // способ еще более краткой функции

let $ = 1,
    _ = 2; // допустимые знаки для переменных

let APPLE = 1,
    apple = 2; // разные регистры = разные переменные

const simpleWords = 'Hello World!'; // константа (неизменяемые переменные)

const COLOR_ORANGE = 'FF7F00'; // константа в верхнем регистре может использоваться для трудных значений цвета, которые нужно запомнить и для других жестко закодированных значений

// Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

// Infinity - представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа. Можно вывести с помощью деления на ноль.

alert (1 / 0); // выводится Infinity

// NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции

alert ('не число' * 2); // выводится NaN
alert (NaN + 3); // возвращает NaN

// Если где-то в математическом выражении есть NaN, то оно распространяется на весь результат (есть только одно исключение: NaN ** 0 равно 1).

alert (NaN ** 0); // выводится 1

// Для работы с большими числами ±(253-1) потребуется значение типа bigInt

const bigInt = 1234567890123456789012345678901234567890n; // для его работы требуется поставить значение 'n' в конец произвольного числа

alert (`Меня зовут ${currentUserName}`); // выражение внутри ${} вычисляется или преобрзаует переменную, для этого string нужно поместить в обратные кавычки (`)


let ageChecked = false; // boolean в виде обозначения
let isGreater = 4 > 1; // boolean в виде задачи
alert (isGreater); // boolean тип, есть два значения true или false, в данном примере выводится значение true

let age = null; // значение null обозначает пустоту, значние неизвестно и пусто
alert (age); // выводится null


let userAge;
alert (userAge); // выводится undefined


let ageOfUser = prompt ('Сколько тебе лет?', [18]); // модальное окно с возможностью написания значения пользователем (сначала будет стоять автозаполнение значением в квадратных скобках, [значение внутри них необязательны])
alert (`Тебе ${ageOfUser} лет`) // выводится текст с указанным раньше числом

let ageIdentifire = confirm ('Тебе больше 18 лет?'); // выводится модальное окно с кнопками отмены и ОК. При отмене выводится результат false и наоборот.
alert (ageIdentifire); // выводится текст с ответами

// На все указанные методы распространяются два ограничения: Расположение окон определяется браузером. Обычно окна находятся в центре. Визуальное отображение окон зависит от браузера, и мы не можем изменить их вид.

// Строковое преобразование:

let value = true;
alert (typeof value); // выводится тип boolean
value = String(value); // boolean преобразуется в тип string
alert = (typeof value); // выводится тип string


// Правила Численного Преобразования:
    // undefined преобразуется в NaN;
    // null преобразуется в 0;
    // true/false преобразуется в 1/0;
    // string (пробелы (знаки табуляции \t и знаки новой строки \n и т.п.) обрезаются) Далее если пустая строка, выводится значение 0, либо считывается число, При ошибке (буквы или слова в значении) выводится NaN.

alert ("6" / "2") // выводится 3, строки преобразуются в числа

let str = "777";
alert (typeof str); // выводится тип string
str = Number(str); // string преобразуется в тип number
alert (typeof str); // выводится тип number


// Если использовать любой символ в преобразовании, оно приведет к значению NaN, что означает, что преобразование не удалось выполнить

str = Number("Any letter");
alert (typeof str); // выводится NaN, преобразование не удалось



alert (Number ("   123   ")); // выводится 123, пробелы по краям обрезаются в типе number
alert (Number ("123z")); // выводится NaN, ошибка чтения числа на месте символа "z"
alert (Number (true)); // выводится 1
alert (Number (false)); // выводится 0

// Правило Логичного Преобразования в типе данных Boolean:
    // Пустые значения (пустая строка, NaN, undefined, 0 и null) выводятся как false;
    // Все остальные значение выводятся как true;

alert (Boolean (1)); // true
alert (Boolean (0)); // false
alert (Boolean ("Привет!")); // true
alert (Boolean ("")); // false
alert (Boolean (" ")) // true

// В других языках, например PHP, строку "0" воспринимают как false, но в JavaScript выводится значение true

alert (Boolean ("0")) // true



// Операнд - то, к чему применяется оператор. В уравнении 8 * 2, есть левый и правый операнд (8(л) и 2(п)), также их можно назвать аргументами.
// Унарный - оператор, который применяется к одному операнду
let x = 1;
x = -x;
alert (x); // выодится -1, применили унарный минус к одному операнду

// Бинарный это оператор, который применяется к двум операндам
let y = 2,
    c = 1;
alert (y - c); // выводится 1, бинарный минус вычитает значения


// Операторы которые стоит детально изучить:

// % - остаток от деления (не проценты)
alert (5 % 2); // выводится 1, остаток от деления 5 на 2

// ** возведение в степень
alert (2 ** 2); // выводится 8, операнд умножает себя 2 раза (2*2*2)

// Оператор работает не только для целых чисел

alert (4 ** (1/2)); // выводится 2, квадратный корень является возведением в степень 1/2

alert (8 ** (1/3)); // выводится 2, кубический корень является возведением в степень 1/3



let stringPlus = "Java" + "Script";

alert (stringPlus); // выводится JavaScript, бинарный плюс работает так же и со строками, даже если один операнд является числом

alert ('2' / 2); // выводится 1, ведь любые другие операторы кроме плюса, преобразуют строку в число для совершения операции

alert (+true); // выводится 1, унарные строки преобразуют значения в числа, но ничего не делают с числами
alert (+""); // выводится 0, необходимость преобразовывать строки в числа возникают часто, это более укороченная версия Number();

let string1 = "2",
    string2 = "3";
alert (+string1 + +string2); // выводится 5, строки автоматически преобразовываются в числа с помощью унарного плюса, и с помощью бинарного прибавляются друг к другу
alert (Number(string1) + Number(string2)); // выводится 5, более длинная версия **

// Приоритет выполнения у унарных операторов выше, чем у бинарных, благодаря чему унарный будет считываться в первую очередь.

let a,
    b,
    d;

a = b = d = 2 + 2;
alert (a); // выводится 4, цепочка присваивания происходит справа налево

// Сокращенная арифметика присваивания:

let n = 2;
n *= 2; // 4
n /= 2; // 1
n += 2; // 4
n -= 2; // 0

// Совмещенные операторы работают в кратком виде, то же самое, что и (n = n * 2)

let num = 2;
num *= 3 + 5;
alert (num); // выводится 16, имеет такой же приоритет как обычное присваивание



// Инкремент/декпемент:

let counter = 2;
counter--;
// --counter (тоже самое)
alert (counter); // выводится 1, работает как counter = counter - 1, но запись короче, имеет высокий приоритет (нельзя использовать со значениями, приводит к ошибке *ТОЛЬКО ПЕРЕМЕННЫЕ*)
counter++;
// ++counter (тоже самое)
alert (counter); // выводится 3, counter = counter + 1

let preCounter = ++counter; // префиксная форма
alert (preCounter); // выводит 3, префиксная форма увеличивает и возвращает новое значение 3

let postCounter = counter++; // постфиксная форма
alert (postCounter); // выводится 2, постфиксная форма также увеличивает переменную, но возвращает старое значение, выводя его



// Оператор "запятая" имеет очень низкий приоритет, используется для вычисления нескольких выражений, разделенных запятыми, каждое действие обрабатывается, но возвращается результат только последнего

let comma = (1 + 2, 3 + 4);
alert (comma); // выводится 7, результат (3 + 7)

// Используется для выполнения более сложных конструкций, где требуется вычисления множества выражений.



// Операторы сравнения:

a > b, a < b; // больше/меньше
a >= b, a <= b; // больше или равно/меньше или равно
a == b; // равно
a != b; // не равно

2 > 1; // true, результат имеет логический тип true or false

// Сравнение строк происходит посимвольно.

"Коты" > "Кода" // true, "К" равно, "O" равны, "Т" > "Д", сравнение оканчивается

// Используется кодировка Unicode, заглавные буквы не равны строчным, даже более, строчные больше заглавных ("Я" < "я"), потому что строчные буквы имеют больший код во внутрненней таблице кодирования, которую использует JavaScript (Unicode).

// Сравнение разных типов:

"2" > 1; // true, "2" преобразуется в 2 (при сравнении строк с числами так происходит со всеми строками)
"01" == 1; // true, "01" преобразуется в 1

true == 0; // false, true преобразуется в 1
false != 1; // true, false преобразуется в 0

// Строгие операторы сравнения:

true === 1; // false, строгое равенство не будет преобразовать строку в число (===)
false !== 0; // true, строгое неравентсво не будет преобразовать строку в число (!==)


null == undefined; // true, значения равны друг-другу и не равны другим значением, это правила языка

null > 0; // false
null == 0; // false
null >= 0; // true

undefined > 0; // false
undefined < 0; // false
undefined == 0; // false, undefined преобразуется в NaN, которое выводит false при любых сравнениях, также, при нестрогих сравнениях, выводится false, потому что undefined равно только null, undefined и ничему более



// Условное ветвление:

const question = prompt (`В каком году родился создатель этой шпаргалки?(2003)`);

if (question == 2003) {
    alert ("Верно!");
} // инструкция "if" вычисляет условие в скобках, если результат true, то выполняет код блока

const question1 = confirm ("Вам больше 18 лет?");
if (question1 == true) {
    alert ("Добро пожаловать!");
}
if (question1 == false) {
    alert ("Повзрослейте!");
} // небольшой пример работы true/false


const condition = prompt ('В каком году родился создатель этой шпаргалки?(2003)');

if (condition == 2003) {
    alert ("Верно!");
} else {
    alert ("Неверно(");
} // else выполняет все остальные false значения

const year = prompt ('В каком году родился создатель этой шпаргалки?(2003)');

if (year < 2003) {
    alert ('Слишком рано!');
} else if (year > 2003) {
    alert ('Слишком поздно!');
} else {
    alert ('Верно!');
} // если нужно проверить несколько вариантов, нужно указать инструкцию else if (их может быть безграничсное количество, присутствие else необязательно)

// Тернарный оператор "?" (условный) упрощает синтаксис небольших ветвлений

let ages = (ages > 18) ? true : false; // сначала вычисляется условие (ages > 18), если оно истинно, возвращается значение1 (true), если ложно - значение2 (false)  

let ages2 = prompt ("Ваш возраст?", 18);

let messages = (ages2 < 3) ? 'Привет, мелкий!' : 
    (ages2 < 18) ? 'Привет!' :
    (ages2 < 100) ? 'Здравствуйте!' : 'Необычный возраст..';

alert (messages); // синтаксис нескольких терарных операторов, выполняются последовательно



// Логические операторы:

alert (true || true); // результат true, "||" оператор (ИЛИ) традиционно предназначен для манипулирования булевыми значениями, если один аргумент равен true, он вернется, в противоположном случае возвращается false, но в JavaScript работает несколько иным способом
alert (true || false); // результат true, четыре логические комбинации
alert (false || true); // результат true
alert (false || false); // результат false, результат комбинаций всегда равен true, за исключением, когда оба аргумента false. Если значение не логического типа, то оно приводится в целях вычисления, где 1 - true, 0 - false:

if (1 || 0) { // if (true || false)
    alert ('truthy');
} // обычно оператор используется в if для проверки истинности любого из заданных условий:

const hour = prompt ('Укажите время');

if (hour < 10 || hour > 18) {
    alert ('Офис закрыт');
}

// Также можно выдавать и больше значений:

const hour1 = prompt ('Укажите время');
const weekend = true;

if (hour1 < 10 || hour1 > 18 || weekend) {
    alert ('Офис закрыт');
}

// При выполнении оператора (ИЛИ) с несколькими значениями, он выполняет следующие действия:
// 1. Вычисляет операнды слева - направо.
// 2. Каждый операнд конвертируется в логическое значение. Если один результат выдает true, возвращает исходное значение операнда.
// 3. Если все операнды ялвяются false, возвращает последний из них (значение возвращается в исходном виде, без преобразования).

alert (1 || 0); // возвращается 1
alert (true || 'no matter what'); // возвращается true
alert (null || 1); // возвращается 1 (первое истинное значение)
alert (null || 0 || 1); // возвращается 1 (первое истинное значение)
alert (undefined || 0 || 1); // возвращается 1 (первое истинное значение)
alert (undefined || null || 0); // возвращается 0 (поскольку все ложно, возвращается последнее значение)

// Это делает возможным более интересное применение оператора (ИЛИ).

// 1. Получение первого истинного значения из списка переменных или выражений:

const currentUser = prompt ('Введите ваше имя', John);
const defaultUser = "John";

let names = currentUser || defaultUser || 'unnamed';

alert (names); // При пропуске модального окна с вводом имени, тоесть значения undefined, первым истинным значением является John, но если задать условно имя Calvin, первым выведется оно. И в последнем случае если бы currentUser и defaultUser были бы false, результат был бы unnamed

// 2. Сокращенное вычисление:

// Операндами могут быть и произвольные выражения. Вычисление останавливается при достижении первого истинного значения. Этот процесс называется "сокращенным вычислением", поскольку второй операнд вычисляется только в том случае, когда первого недостаточно. Приведенный ниже пример показывает, что при введенном первом аргументе true, второй не вычисляется, тоесть l не изменяется.
let l;
true || (l = 1);

alert (l); // выводится undefined, потому что (x = 1) не вычисляется

// Если бы первый аргумент имел значение false, оператор приступил бы к вычислению второго и выполнил бы операцию присваивания:

false || (l = 1);

alert (l); // выводится 1



alert (true && true); // результат true, оператор && (И) возвращает true, если оба аргумента истинны, в противном случае выводит false (в традиционном программировании)
alert (false && true); // результат false
alert (true && false); // результат false
alert (false && false); // результат false

let hours = 12,
    minute = 30;

if (hours == 12 && minute == 30) { // пример работы с if
    alert ('The time is 12:30');
}

// При нескольких подряд операторах (И) выполняет следующие действия:
// 1. Вычисляет операнды слева направо.
// 2. Каждый операнд преобразуется в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
// 3. Если все операнды были истинными, возвращается последний. (Другими словами, возвращает первое ложное значение или последнее, если ничего не найдено)

let value1,
    value2,
    value3;

result = value1 && value2 && value3;


// Разница (И) и (ИЛИ) в том, что (И) возвращает первое ложное значение, а (ИЛИ) - первое истинное:

alert (1 && 0); // выводится 0, если первый операнд истинный, возвращается второй
alert (1 && 5); // выводится 5
alert (null && 5); // выводится null, если первый операнд ложный, возвращается, второй операнд игнорируется
alert (0 && 'no matter what'); // выводится 0

alert (1 && 2 && null && 3); // выведется null, можно передать несколько значений подряд, возвратится первое ложное значение, на котором остановились вычисления

alert (1 && 2 && 3); // выведется 3, если все значения верны, возвращается последнее

// ** Приоритет оператора (И) больше, чем у (ИЛИ), так что он выполняется раньше.
// Таким образом, код a && b || c && d такой же, как и (a && b) || (c && d).

let o = 1;

(o > 0) && alert ('Greater than zero!'); // заменяет if, alert сработает только в том случае, если до него дойдут вычисления, то есть o > 0 будет true



alert (!true); // выводится false, оператор ! (НЕ) приводит аргумент к логическому типу, затем возвращает противоположное значение.
alert (!0); // выводится true

alert (!!"non-empty string"); // выводится true, двойное (НЕ) !!, используют для преобразования к логическому типу (тот же самый Boolean), он не возвращает противоположное значение
alert (!!null); // выводится false

// ** Приоритет (НЕ) является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед (И) и (ИЛИ).


result = a ?? b; // Оператор нулевого слияния ?? возвращает первый аргумент, если он не null/undefined, иначе второй, тоже самое, что и:
result = (a !== null && a !== undefined) ? a : b;

let users;
alert (users ?? 'Аноним'); // выводится Аноним, потому что users = undefined

let users1 = 'something';
alert (users1 ?? 'Аноним'); // выводится something, потому что он опеределен

// Использование последовательных операторов нулевого слияния:

let firstName,
    lastName,
    nickName = 'Soicy';
alert (firstName ?? lastName ?? nickName ?? 'Аноним'); // выводится Soicy, оператор считывает слева направо и останавливается на первом известном значении

// Разница между операторами (ИЛИ) и нулевого слияния в том, что оператор (ИЛИ) не различает false, 0, пустую строку и null/undefined, для него они все ложные. В некоторых моментах, оно не требуется, и правильно бы было использовать оператор нулевого слияния, например как тут:

let height = 0;
alert (height || 100); // выводится 100, ведь первое значение равняется 0 и переводится в false и не проходит проверку оператора (ИЛИ)
alert (height ?? 100); // выводится 0, ведь первое значение задано и проходит проверку оператора нулевого слияния

// Приоритет оператора нулевого слияния такой же, как и у (ИЛИ), равен 3, вычисляется до = и ?, но после большинства других операций, как + и *, так что, в выражениях такого вида понадобятся скобки:

let height1 = null,
    width = null;
let area = (height1 ?? 100) * (width ?? 50);
alert (area); // выводится 5000, ведь высота и ширина не заданы

// Использование оператора нулевого слияния с другими операторами ограничивается надобностью выставлений синтаксиса в скобки, иначе он будет приводить к ошибке:
// x = 1 && 2 ?? 3; синтаксическая ошибка
x = (1 && 2) ?? 3; // выводится 2, работает без ошибок


// Циклы:

// Цикл WHILE
while (condition) {
    // Код цикла (тело цикла). Одно выполнение цикла называется интерацией.
}

let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}

// Цикл, написанный выше, совершает три интерации, тоесть выполняется три раза. В первый раз выводит 0, во второй - 1, в третий 3.

// Цикл DO .. WHILE

do {
    // Тело цикла
} while (condition);

// Данный цикл выполнит тело, затем проверит WHILE, если оно true, выполнит DO еще раз, если false пойдет дальше
// Такой синтаксис нужен, если вы хотите выполнить цикл хотя бы один раз, даже при значении false.

// Цикл FOR

for (start; condition; step) {
    // Тело цикла
}

// Алгоритм работы цикла:

// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → ...

for (i = 0; i < 3; i++) {
    console.log(i);
}
// i = 0; - выполняется один раз при входе в цикл
// i < 3; - проверяет условие, если оно true - идет дальше, false - останавливается
// console.log(i); - выполняет тело, если условие true
// i++ - выполняет шаг

// Объявление переменной внутри цикла объявляет ее ТОЛЬКО внутри цикла. За ее границами она будет необъявленной!

// Любая часть FOR может быть пропущена (точки с запятой обязательны, иначе будет ошибка синтаксиса)

for (; condition; step) {

}

for (; condition;) {

}

for (;;) {
    // Бесконечный цикл
}

// Прерывание цикла BREAK

let sum = 0;

while (true) {
    let value = +prompt('Введите число');
    if (!value) break;
    sum += value;
}

console.log(+sum);

// С помощью BREAK, можно остановить цикл в любой момент, в примере выше, цикл обрывается, если в value введено значение NaN
// И передает управление на строку за его телом

// Переход к следующей интерации CONTINUE

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

// При выполнении CONTINUE цикл не прерывается, а переходит к следующей интерации
// В примере выше, цикл будет игнорировать четные числа и выводить нечетные.

// Метки для BREAK/CONTINUE

outer: 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let input = prompt('Значение');
        // Если пустая строка или отмена, BREAK выведет сразу из двух циклов, и выполнит следующее выражение после основного цикла
        if (!input) break outer;
        // Продолжение цикла...
    }
}
console.log('error');

// С CONTINUE метки также будут работать, только будут выполнять следующую интерацию цикла.
// Метки не позволяют прыгать в произвольное место в коде, следующее выражение ошибочное:
// break outer;
// outer:



// Конструкция SWITCH:

// Заменяет собой сразу несколько IF, более наглядный способ сравнить выражение сразу с несколькими вариантами.

// синтаксис:

let p = 2 + 2;

switch (p) {
    case 3:
        console.log('Few');
        break;
    case 4:
        console.log('Yep');
        break;
    case 5:
        console.log('Much');
        break;
    default:
        console.log('What?');
}

// Переменная Р проверяется на строгое равенство первому значению 3, затем 4 и так далее.
// Если установлено SWITCH начинает выполняться от соответствующей директивы CASE и далее, до ближайшего BREAK (или до конца SWITCH).
// Если ни один CASE не совпал, выполняется (если есть) DEFAULT (не обязателен).

// Если BREAK нет, то выполнение пойдет ниже игнорируя проверки:

switch (p) {
    case 3:
        console.log('Few');
    case 4:
        console.log('Yep');
    case 5:
        console.log('Much');
    default:
        console.log('What?');
}

// Выведется первое правильно 4 и все остальные ниже без проверок
// Группировать несколько CASE можно с помощью фишки, что case выполняет действия до ближайшего BREAK

// Любое выражение может быть аргументом для SWITCH/CASE

// Тип данных имеет значение, ведь конструкция проверяется на строгое равенство.

let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}

// case 3 никогда не выполнится, ведь STRING !=== NUMBER, DEAD CODE ☠


// Функции:

// Функции являются основными строительными блоками программы. Если надо повторить один и тот же код в разных местах программы, используются функции.
// Встроенные функции - alert(); prompt(); confirm();
// Синтаксис FUNCTION DECLARATION:

function nameOfFunction (paramets) {
    bodyOfFunction;
} 

function showMessage () {
    console.log('text');
}

showMessage();
showMessage(); 

// Код выполнится два раза, не нужно каждый раз заново вводить одинаковые значения. А чтобы изменить параметры, достаточно поменять их в одном месте, в функции.
// Переменные, объявленные внутри функции, видны только внутри этой функции.
// У функции есть доступ к внешным переменным и она может их изменять.
// Если внутри функции есть локальная одноименная переменная, она будет игнорировать внешнюю.

// Параметры функции:
// Можно передать внутрь функции любую информацию, используя параметры

function funcName(from, text) {
    console.log(from + ': ' + text);
}

funcName('John', 'Hello!');
funcName('Alen', 'How is it going, John?');

// В вышеприведенном примере передаются два параметра, FROM и TEXT.
// Если функция вызывается, переданные значения копируются в локальные переменные, затем они используются в теле функции.
// Если у нас есть переменная FROM, при изменении ее внутри функции, изменение не будет видно снаружи. Функция всегда получает только копию значения.
// Значение, передаваемое в качестве параметра функции, также называется аргументом.
// • Параметр - переменная, указанная в круглых скобках в объявлении функции.
// • Аргумент - значение, которое передается функции при ее вызове.
// Приведенный выше пример расшифровывается так:
// Функция FUNCNAME объявляется с помощью параметров FROM, TEXT, затем вызывается с помощью аргументов 'John' и 'Hello!'.

// Значения по умолчанию:

// Если при вызове функции аргумент не был указан, то его значением становится UNDEFINED.

funcName('John');

// Функция вызвана с одним аргументом, не приведет к ошибке, но в вызове не был указан параметр TEXT, поэтому предполагается, что TEXT === UNDEFINED.
// Если нужно задать значение по умолчанию, мы должны задать его после '=':

function funcDefault(from, text = 'текст не добавлен') {
    console.log(from + ': ' + text);
}

funcDefault('John'); // John: текст не добавлен

// Теперь если параметр TEXT не указан, его значением будет "текст не добавлен". В данном случае это строка, но можеь юыьб и более сложное выражение
// Например другая функция.

function showMessage(from, text = anotherFunction()){
    // anotherFunction() выполнится только если не передан TEXT
    // Результатом будет значение TEXT   
}


// Альтернативные значения по умолчанию:

text === undefined;

text = text || 'пусто';

// Оператор нулевого слияния будет лучшим, если нужно расценивать большинство ложных значений (как 0) как нормальные:
text ?? 'неизвестно';

// Возврат значения RETURN:

// Функция может вернуть результат, который будет передан в вызвавший ее код.

function sum(a, b) {
    return a + b;
}

let result = sum(1,2);
console.log(result); // выведет 3

// Директива RETURN может находится в любом месте функции, как только выполнение доходит до этого места, функция
// заканчивается и значение возвращается в вызвавший ее код. В примере выше присваивается переменной RESULT.
// RETURN может быть несколько.
// Если использовать RETURN без значения, это приведет к немедленному выходу из функции.
// Результат функции с пустым RETURN или без него – UNDEFINED.
// ** НЕЛЬЗЯ делать перевод строки между RETURN и его значением, ведь оно работать не будет.
// ** Для того чтобы его перевести, нужно указать значение круглой скобкой:

function example(a, b, c, o, i) {
    return (
        a + b + c
        + o + i
    )
}

// FUNCTION EXPRESSION:

let sayHi = function () {
    console.log('Hi!')
}

// Стрелочные функции ARROW FUNCTIONS:

let func = (arg1, arg2, arg3) => expression;

// • Если один аргумент, круглые скобки можно опустить

let double = n => n * 2;

// • Если аргументов нет, круглые скобки должны быть пустыми

let functio = () => console.log('Hello!');

// В многострочных стрелочных функциях выражения и инструкции нужно помечать в фигурные скобки и обязательно помечать
// возврат значения - RETURN

let summ = (a, b) => {
    let result = a + b;
    return result;
}


// TIME-LINE BREAK

//
//               МАССИВЫ
//

// Предоставляет методы управления порядком элементов, когда объекты это делать не могут
// Если нам требуется вставить новое свойство между уже существующими, требуется особая структура данных (массив Array)
// Синтаксис:
// 1

let arr = new Array();

// 2

let arr2 = [];

// Практически всегда используется второй вариант синтаксиса.
// В скобках мы можем указать начальные значения элементов:

let fruits = ['Apple', 'Orange', 'Mango'];

// Элементы массива нумеруются начиная с нуля.
// Можно получить элемент, указав его номер в квадратных скобках:

console.log(fruits[0]) // Apple
console.log(fruits[1]) // Orange
console.log(fruits[2]) // Mango

// Также можно заменять элементы:

fruits[1] = 'Banana' // теперь ['Apple', 'Banana', 'Mango']

// Или добавить новый к существующему массиву:

fruits[3] = 'Lemon' 

// Общее число элементов массива содержится в свойстве LENGHT:

console.log(fruits.length) // 4

// Можно вывести массив целиком:

console.log(fruits) // Apple, Banana, Mango, Lemon

// В массиве могут храниться элементы любого типа:

let arr3 = ['Apple', 
            {name: 'John'},
            true,
            function() {console.log('Hi World!')}, 
            1, // висячая запятая **
        ]
// Получить элемент с индексом 1 (объект) и затем показать его свойство:
console.log(arr3[1].name) // John

// Получить элемент с индексом 3 (функция) и выполнить ее:
console.log(arr3[3]()) // Hi World!

// Получение последних элементов при помощи AT

// Новая функция, в старых браузерах нужен полифил
// Синтаксис:

console.log(fruits.at(-1)) // Lemon 
// То же самое, что и fruits[fruits.lenght - 1]

// arr.at(i):
// то же самое, что и arr[i], если >= 0
// для отрицательных значений i, он отступает от конца массива



// Методы pop/push, shift/unshift
// 
// Очередь - один из самых распространенных вариантов применения массива. В области компьютерных наук так
// называется упорядоченная коллекция элементов, поддерживающая два вида операций:
// PUSH добавляет элемент в конец
// SHIFT удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым