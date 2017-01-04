
##Variables and Constants

A variable is essentially a named value, and as the name implies, the value can change at any time. For example, if we’re working on a climate control system, we might have a variable called currentTempC:

```javascript
let currentTempC = 22; // degrees Celsius
```

Note that we don’t use let again; let specifically declares a variable, and you can only do it once.

```javascript
currentTempC = 22.5; 
```

When you declare a variable, you don’t have to provide it with an initial value. If you don’t, it implicitly gets a special value, undefined:

```javascript
let targetTempC;
```

equivalent to 'let targetTempC = undefined'; You can also declare multiple variables with the same let statement:

```javascript
let targetTempC, room1 = 'conference_room_a', room2 = 'lobby';
```

A constant (new in ES6) also holds a value, but unlike a variable, can’t be changed after initialization. Let’s use a constant to express a comfortable room temperature and a maximum temp (const can also declare multiple constants):

```javascript
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
```

It is conventional (but not required) for constants that refer to a specific number or string to be named with all uppercase letters and underscores. This makes them easy to spot in your code, and is a visual cue that you shouldn’t try to change their value.

##Identifier Names

Variable and constant names (as well as function names, which we’ll cover in Chapter 6) are called identifiers, and they have naming rules:  
> - Identifiers must start with a letter, dollar sign ($), or underscore (_).  
> - Identifiers consist of letters, numbers, the dollar sign ($), and underscore (_).  
> - Unicode characters are allowed (for example, π or ö).  
> - Identifiers cannot be a reserved word (see Appendix A).  

#####Camel case

```javascript
currentTempC; anIdentifierName (so named because the capital letters look like the humps in a camel’s back).  
```
#####Snake case 

```javascript
current_temp_c; an_identifier_name (slightly less popular).  
```

It is also advisable to adhere to the following conventions:  
> - Identifiers shouldn’t start with a capital letter except for classes. 
> - Very often, identifiers that start with one or two underscores are used to represent special or “internal” variables. >Unless you need to create your own special category of variables, avoid starting variable names with an underscore. 
> - When using jQuery, identifiers that start with a dollar sign conventionally

##Literals

The word literal means that you’re providing the value directly in the program. Essentially, a literal is a way to create a value; JavaScript takes the literal value you provide and creates a data value from it. 

```javascript
let room1 = 'conference_room_a';	 // 'conference_room_a' (in quotes) is a literal
let currentRoom = room1;			 // currentRoom now has the same value as room1 ('conference_room_a')
let currentRoom = conference_room_a; // produces an error; no identifier called conference_room_a exists.
```

##Primative Types and Objects

In JavaScript, values are either primitives or objects. Primitive types (such as string and number) are immutable. The number 5 will always be the number 5; the string 'alpha' will always be the string 'alpha'

Note that immutability doesn’t mean the contents of a variable can’t change:

```javascript
let str = 'hello'; 
str = 'world';
```

First str is initialized with the (immutable) value 'hello', and then it is assigned a new (immutable) value, 'world'. What’s important here is that 'hello' and 'world' are different strings; only the value that str holds has changed.

##Numbers

JavaScript—along with most other programming languages—approximates real numbers through a format called IEEE-764 double-precision floating-point (which I will refer to simply as a “double” from here on out). 

For example, if you ask JavaScript to calculate 0.1 + 0.2, it will return 0.30000000000000004. This does not mean that JavaScript is “broken” or bad at math: it’s simply an unavoidable consequence of approximating infinite values in finite memory.

JavaScript recognizes four types of numeric literal: 
> - decimal
> - binary 
> - octal 
> - hexadecimal

```javascript
let count = 10;           // integer literal; count is still a double 
const blue = 0x0000ff;    // hexadecimal (hex ff = decimal 255) 
const umask = 0o0022;     // octal (octal 22 = decimal 18) 
const roomTemp = 21.5;    // decimal 
const c = 3.0e6;          // exponential (3.0 × 10^6 = 3,000,000) 
const e = -1.6e-19;       // exponential (-1.6 × 10^-19 = 0.00000000000000000016) 
const inf = Infinity; 
const ninf = -Infinity; 
const nan = NaN;          // 'not a number'
```

In addition, there are some useful properties of the corresponding Number object that represent important numeric values:

```javascript
const small = Number.EPSILON;            // the smallest value that can be added to 1 to get a distinct larger than 1, approx. 2.2e-16 
const bigInt = Number.MAX_SAFE_INTEGER;  // the largest representable integer 
const max = Number.MAX_VALUE;            // the largest representable number 
const minInt = Number.MIN_SAFE_INTEGER;  // the smallest representable integer 
const min = Number.MIN_VALUE;            // the smallest representable number 
const nInf = Number.NEGATIVE_INFINITY;   // the same as -Infinity
const nan = Number.NaN;                  // the same as NaN 
const inf = Number.POSITIVE_INFINITY;    // the same as Infinity
```

##Strings

A string is simply text data (the word string comes from “string of characters”—a word originally used in the late 1800s by typesetters, and then later by mathematicians, to represent a sequence of symbols in a definite order). Strings in JavaScript represent Unicode text.

In JavaScript, string literals are represented with single quotes, double quotes, or backticks.2 The backtick was introduced in ES6 to enable template strings, which we will cover shortly.

##Escaping

Fortunately, we can escape quotation marks with a backslash (\\), which is a signal to JavaScript that the string is not ending.

```javascript
const dialog1 = 'He looked up and said \'don't do that!\' to Max.';
const dialog2 = 'He looked up and said 'don\'t do that!' to Max.';
```

Then, of course, we get into the chicken-and-egg problem that arises when we want to use a backslash in our string. To solve this problem, a backslash can escape itself:

```javascript
const s = 'In JavaScript, use \\ as an escape character in strings.';
```

##Special Characters

The backslash is used for more than simply escaping quotation marks: it is also used to represent certain non-printable characters, such as newlines and arbitrary Unicode characters.

| Code | Description | Example |  
| ---- | ----------------- | -------------------|  
| \\n |      Newline (technically a line feed character: ASCII/Unicode 10) |       'Line1\nLine2' |  
| 
| \\r |      Carriage return (ASCII/Unicode 13) |         'Windows line 1\r\nWindows line 2' |  
| 
| \\t |      Tab (ASCII/Unicode 9) |                      'Speed:\t60kph' |  
| 
| \\' |      Single quote (note that you can use this even when not necessary) |        "Don\'t" |  
| 
| \\" |      Double quote (note that you can use this even when not necessary) |        'Sam said \"hello\".' |  
| 
| \\\` |      Backtick (or “accent grave”; new in ES6) |       \`New in ES6: \\\` strings.\` |  
| 
| \\$ |      Dollar sign (new in ES6) |                       `New in ES6: ${interpolation}` |  
| 
| \\\ |      Backslash |                                      'Use \\\\\\\ to represent \\\\!' |  
| 
| \\uXXXX |  Arbitrary Unicode code point (where +XXXX+ is a hexadecimal code point) |     'De Morgan’s law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)' |  
| 
| \\xXX |    Latin-1 character (where +XX+ is a hexadecimal Latin-1 code point) |         '\xc9p\xe9e is fun, but foil is more fun.' |  
| 



######Rarely used special characters Code Description Example  

| Code | Description | Example |  
| ---- | ----------------- | -------------------|  
| \\0 |            The NUL character (ASCII/Unicode 0) |                 'ASCII NUL: \0' |  
| 
| \\v |            Vertical tab (ASCII/Unicode 11) |                     'Vertical tab: \v' |  
| 
| \\b |            Backspace (ASCII/Unicode 8) |                         'Backspace: \b' |  
| 
| \\f |            Form feed (ASCII/Unicode 12) |                        'Form feed: \f' |  

##Template Strings

String templates use backticks instead of single or double quotes. Here is the previous example rewritten using string templates:

```javascript
let currentTemp = 19.5; 
const message = `The current temperature is ${currentTemp}\u00b0C`;
```

Inside a string template, the dollar sign becomes a special character (you can escape it with a backslash): if it’s followed by a value wrapped in curly braces, that value is inserted into the string.

##Multiline Strings

the following will result in a string with newlines and whitespace before line2 and line3, which may not be desirable:

```javascript
const multiline = `line1
	line2
	line3`;
```

If I do want to break strings up over multiple lines of source code, I usually use string concatenation:

```javascript
const multiline = 'line1\n' +
	'line2\n' +
	'line3';
```

This allows me to indent my code in an easy-to-read fashion, and get the string I want. Note that you can mix and match types of strings in string concatenation:

```javascript
const multiline = 'Current temperature:\n' +
	`\t${currentTemp}\u00b0C\n` +
	'Don\'t worry...the heat is on!';
```

##Numbers as Strings

If you put a number in quotation marks, it’s not a number—it’s a string.

```javascript
const result1 = 3 + '30';  // 3 is converted to a string; result is string '330'
const result2 = 3 * '30';  // '30' is converted to a number; result is numeric 90
```

##Booleans

Booleans are value types that have only two possible values: true and false.

Be careful not to use quotation marks when you intend to use a boolean. In particular, a lot of people get tripped up by the fact that the string 'false' is actually truthy! Here’s the proper way to express boolean literals:

```javascript
let heating = true;
let cooling = false;
```

##Symbols

New in ES6 are symbols: a new data type representing unique tokens. Once you create a symbol, it is unique: it will match no other symbol. In this way, symbols are like objects (every object is unique). However, in all other ways, symbols are primitives, lending themselves to useful language features that allow extensibility

Symbols are created with the Symbol() constructor.4 You can optionally provide a description, which is just for convenience:

```javascript
const RED = Symbol();
const ORANGE = Symbol('The color of a sunset!');
RED === ORANGE  // false: every symbol is unique
```

##null and undefined

null has only one possible value (null), and undefined has only one possible value (undefined). Both null and undefined represent something that doesn’t exist

```javascript
let currentTemp;          // implicit value of undefined
const targetTemp = null;  // target temp null -- 'not yet known'
currentTemp = 19.5;       // currentTemp now has value
currentTemp = undefined;  // currentTemp appears as if it had never been initialized; not recommended
```

##Objects

Unlike the immutable primitive types, which only ever represent one value, objects can represent multiple or complex values, and can change over their lifetime. In essence, an object is a container, and the contents of that container can change over time (it’s the same object with different contents). Like the primitive types, objects have a literal syntax: curly braces ({ and }). Because curly braces come in pairs, it allows us to express an object’s contents. 

Let’s start with an empty object:

```javascript
const obj = {};
```

The contents of an object are called properties (or members), and properties consist of a name (or key) and value. Property names must be strings or symbols, and values can be any type (including other objects).

Let’s add a property color to obj:

```javascript
obj.color = 'yellow';
```

You also use the computed member access operator for symbol properties:

```javascript
const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];  // 8
```

In the instance of obj, we created an empty object, but the object literal syntax also allows us to create an object that has properties right out of the gate. Inside the curly braces, properties are separated by commas, and the name and value are separated by a colon:

```javascript
const sam1 = {
	name : 'Sam',
	age  : 4,
};

const sam2 = { name: 'Sam', age: 4 };   // declaration on one line

const sam3 = {
	name           : 'Sam',
	classification : {            // property values can be objects themselves
		kingdom    : 'Anamalia',
		phylum     : 'Chordata',
		class      : 'Mamalia',
		order      : 'Carnivoria',
		family     : 'Felidae',
		subfaimily : 'Felinae',
		genus      : 'Felis',
		species    : 'catus',
	},
};
```

Consider the different ways we can access Sam the cat’s family (it also doesn’t matter if we use single or double quotes or even backticks):

```javascript
sam3.classification.family;        // 'Felidae'
sam3['classification'].family;     // 'Felidae'
sam3.classification['family'];     // 'Felidae'
sam3['classification']['family'];  // 'Felidae'
```

Objects can also contain functions
Here’s how we add a function to sam3:

```javascript
sam3.speak = function() { return 'Meow!'; };
```

We can now call that function by adding parentheses to it:

```javascript
sam3.speak();     // 'Meow!'
```

Lastly, we can delete a property from an object with the delete operator:

```javascript
delete sam3.classification;   // the whole classification tree is removed 
delete sam3.speak;            // the speak function is removed
```

##Number, String, and Boolean Objects

We mentioned earlier in this chapter that numbers, strings, and booleans have corresponding object types (Number, String, and Boolean). These objects serve two purposes: to store special values (such as Number.INFINITY), and to provide functionality in the form of function.

```javascript
const s = "hello";
s.toUpperCase();    // "HELLO"
```

As soon as the function has been called, JavaScript discards the object. To prove the point, let’s try to assign a property to a string:

```javascript
const s = "hello";
s.rating = 3;      // no error...success? 
s.rating;          // undefined
```

##Arrays

Arrays in JavaScript have the following properties:
> • Array size is not fixed; you can add or remove elements at any time.
> • Arrays are not homogeneous; each individual element can be of any type.
> • Arrays are zero-based. That is, the first element in the array is element 0.

To create an array literal in JavaScript, use square brackets, with the elements of the array separated by commas:

```javascript
const a1 = [1, 2, 3, 4];                 // array containing numbers 
const a2 = [1, 'two', 3, null];          // array containing mixed types 
const a3 = [                             // array on multiple lines
	"What the hammer?  What the chain?",
	"In what furnace was thy brain?",
	"What the anvil?  What dread grasp",
	"Dare its deadly terrors clasp?", ];
const a4 = [                             // array containing objects    
	{ name: "Ruby", hardness: 9 },
	{ name: "Diamond", hardness: 10 },
	{ name: "Topaz", hardness: 8 },
];
const a5 = [                             // array containing arrays
	[1, 3, 5],
	[2, 4, 6],
];
```

Arrays have a property length, which returns the number of elements in the array:

```javascript
const arr = ['a', 'b', 'c'];
arr.length;                    // 3
```

To access individual elements of an array, we simply use the numeric index of the element inside square brackets (similar to how we access properties on an object):

```javascript
const arr = ['a', 'b', 'c'];
```

get the first element:

```javascript
arr[0];                       // 'a'
```

the index of the last element in arr is arr.length-1:

```javascript
arr[arr.length - 1];         // 'c'
```

To overwrite the value at a specific array index, you can simply assign to it:

```javascript
const arr = [1, 2, 'c', 4, 5];
arr[2] = 3;     // arr is now [1, 2, 3, 4, 5]
```

##Dates

Dates and times in JavaScript are represented by the built-in Date object.
To create a date that’s initialized to the current date and time, use new Date():

```javascript
const now = new Date();
now;   // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)
```

To create a date that’s initialized to a specific date (at 12:00 a.m.):

```javascript
const halloween = new Date(2016, 9, 31);  // note that months are zero-based: 9=October
```

To create a date that’s initialized to a specific date and time:

```javascript
const halloweenParty = new Date(2016, 9, 31, 19, 0);   // 19:00 = 7:00 pm
```

Once you have a date object, you can retrieve its components:

```javascript
halloweenParty.getFullYear();       // 2016
halloweenParty.getMonth();          // 9
halloweenParty.getDate();           // 31
halloweenParty.getDay();            // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours();          // 19
halloweenParty.getMinutes();        // 0
halloweenParty.getSeconds();        // 0
halloweenParty.getMilliseconds();   // 0
```

##Regular Expressions

A regular expression (or regex or regexp) is something of a sublanguage of JavaScript. It is a common language extension offered by many different programming languages, and it represents a compact way to perform complex search and replace operations on strings.  
Regular expressions in JavaScript are represented by the RegExp object, and they have a literal syntax consisting of symbols between a pair of forward slashes.

they have a literal syntax consisting of symbols between a pair of forward slashes:

```javascript
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;                // extremely simple email recognizer
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;  // US phone number recognizer
```

##Maps and Sets

ES6 introduces the data types Map and Set, and their “weak” counterparts, WeakMap and WeakSet. Maps, like objects, map keys to values, but offer some advantages over objects in certain situations. Sets are similar to arrays, except they can’t contain duplicates. The weak counterparts function similarly, but they make functionality trade-offs in exchange for more performance in certain situations.

##Data type Conversion

Converting between one data type and another is a very common task. Data that comes from user input or other systems often has to be converted. This section covers some of the more common data conversion techniques.

##Converting to Numbers

JavaScript offers a couple of methods to convert strings to numbers. The first is to use the Number object constructor:

```javascript
const numStr = "33.3";
const num = Number(numStr);  // this creates a number value, *not* an instance of the Number object
```

If the string can’t be converted to a number, NaN will be returned.

The second approach is to use the built-in parseInt or parseFloat functions. These behave much the same as the Number constructor, with a couple of exceptions. With parseInt, you can specify a radix, which is the base with which you want to parse the number. For example, this allows you to specify base 16 to parse hexadecimal numbers. It is always recommended you specify a radix, even if it is 10 (the default). Both parseInt and parseFloat will discard everything they find past the number, allowing you to pass in messier input. 

Here are examples:

```javascript
const a = parseInt("16 volts", 10); // the " volts" is ignored, 16 is parsed in base 10 
const b = parseInt("3a", 16);       // parse hexadecimal 3a; result is 58 
const c = parseFloat("15.5 kph");   // the " kph" is ignored; parseFloat always assumes base 10
```

A Date object can be converted to a number that represents the number of milliseconds since midnight, January 1, 1970, UTC, using its valueOf() method:

```javascript
const d = new Date();    // current date 
const ts = d.valueOf();  // numeric value: milliseconds since midnight, January 1, 1970 UTC
```

Sometimes, it is useful to convert boolean values to 1 (true) or 0 (false). The conversion uses the conditional operator:

```javascript
const b = true;
const n = b ? 1 : 0;
```

##Converting to String

All objects in JavaScript have a method toString(), which returns a string representation. In practice, the default implementation isn’t particularly useful. It works well for numbers, though it isn’t often necessary to convert a number to a string: that conversion usually happens automatically during string concatenation or interpolation.

But if you ever do need to convert a number to a string value, the toString() method is what you want:

```javascript
const n = 33.5;
n;            // 33.5 - a number
const s = n.toString();
s;           // "33.5" - a string
```

##Converting to Boolean

 But we will see that we can convert any value to a boolean by using the “not” operator (!) twice. Using it once converts the value to a boolean, but the opposite of what you want; using it again converts it to what you expect.

As with numeric conversion, you can also use the Boolean constructor (again, without the new keyword) to achieve the same result:

```javascript
const n = 0;            // "falsy" value
const b1 = !!n;         // false
const b2 = Boolean(n);  // false
```

##Conclusion

the key points you want to take away from this chapter are as follows:
> • JavaScript has six primitive types (string, number, boolean, null, undefined, and symbol) and an object type.
> • All numbers in JavaScript are double-precision floating-point numbers.
> • Arrays are special types of objects, and along with objects, represent very powerful and flexible data types.
> • Other data types you will be using often (dates, maps, sets, and regular expressions) are special types of objects.

