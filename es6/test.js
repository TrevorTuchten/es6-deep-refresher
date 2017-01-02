'use strict';

// es6 feature: blocked-scoped 'let' declaration
const sentences = [{
	subject : 'JavaScript',
	verb    : 'is',
	object  : 'great',
}, {
	subject : 'Elephants',
	verb    : 'are',
	object  : 'large',
}];

// es6 feature: object destructuring
function say({
	subject,
	verb,
	object,
}) {
	// es6 feature: template strings
	// note that quotes below are backtick (`), not single quotes(')
	console.log(`${subject} ${verb} ${object}`); // TODO: Remove Me!;
}

// es6 feature: for..of
for (const s of sentences) {
	say(s);
}
