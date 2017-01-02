const ERROR_LEVEL = 'warn';

module.exports = {
	'env'          : {
		'browser': true,
		'es6'    : true
	},
	'parserOptions': {
		'ecmaVersion': 7,
		'sourceType' : 'script'
	},
	'rules'        : {


		/**
		 * Possible Errors
		 * These rules relate to possible syntax or logic errors in JavaScript code
		 */

		'comma-dangle'            : [ERROR_LEVEL, 'always-multiline'], // require or disallow trailing commas
		'no-cond-assign'          : [ERROR_LEVEL, 'always'],           // disallow assignment operators in conditional expressions
		'no-console'              : [ERROR_LEVEL],                     // disallow the use of console
		'no-constant-condition'   : [ERROR_LEVEL],                     // disallow constant expressions in conditions
		'no-control-regex'        : [ERROR_LEVEL],                     // disallow control characters in regular expressions
		'no-debugger'             : [ERROR_LEVEL],                     // disallow the use of debugger
		'no-dupe-args'            : [ERROR_LEVEL],                     // disallow duplicate arguments in function definitions
		'no-dupe-keys'            : [ERROR_LEVEL],                     // disallow duplicate keys in object literals
		'no-duplicate-case'       : [ERROR_LEVEL],                     // disallow duplicate case labels
		'no-empty'                : [ERROR_LEVEL],                     // disallow empty block statements
		'no-empty-character-class': [ERROR_LEVEL],                     // disallow empty character classes in regular expressions
		'no-ex-assign'            : [ERROR_LEVEL],                     // disallow reassigning exceptions in catch clauses
		'no-extra-boolean-cast'   : [ERROR_LEVEL],                     // disallow unnecessary boolean casts
		'no-extra-parens'         : [ERROR_LEVEL, 'all', {             // disallow unnecessary parentheses
			conditionalAssign      : false,
			returnAssign           : false,
			nestedBinaryExpressions: false
		}],
		'no-extra-semi'           : [ERROR_LEVEL],                     // disallow unnecessary semicolons
		'no-func-assign'          : [ERROR_LEVEL],                     // disallow reassigning function declarations
		'no-inner-declarations'   : [ERROR_LEVEL, 'both'],             // disallow function or var declarations in nested blocks
		'no-invalid-regexp'       : [ERROR_LEVEL],                     // disallow invalid regular expression strings in RegExp constructors
		'no-irregular-whitespace' : [ERROR_LEVEL, {                    // disallow irregular whitespace outside of strings and comments
			skipStrings  : false,
			skipComments : false,
			skipRegExps  : false,
			skipTemplates: false
		}],
		'no-negated-in-lhs'       : [ERROR_LEVEL],                     // disallow negating the left operand in in expressions
		'no-obj-calls'            : [ERROR_LEVEL],                     // disallow calling global object properties as functions
		'no-prototype-builtins'   : ['off'],                           // disallow use of Object.prototypes built-ins directly
		'no-regex-spaces'         : [ERROR_LEVEL],                     // disallow multiple spaces in regular expression literals
		'no-sparse-arrays'        : [ERROR_LEVEL],                     // disallow sparse arrays
		'no-unexpected-multiline' : [ERROR_LEVEL],                     // disallow confusing multiline expressions
		'no-unreachable'          : [ERROR_LEVEL],                     // disallow unreachable code after return, throw, continue, and break statements
		'no-unsafe-finally'       : [ERROR_LEVEL],                     // disallow control flow statements in finally blocks
		'use-isnan'               : [ERROR_LEVEL],                     // require calls to isNaN() when checking for NaN
		'valid-jsdoc'             : ['off'],                           // enforce valid JSDoc comments
		'valid-typeof'            : [ERROR_LEVEL],                     // enforce comparing typeof expressions against valid strings


		/**
		 * Best Practices
		 * These rules relate to better ways of doing things to help you avoid problems
		 */

		'accessor-pairs'              : [ERROR_LEVEL],              // enforce getter and setter pairs in objects
		'array-callback-return'       : [ERROR_LEVEL],              // enforce return statements in callbacks of array methods
		'block-scoped-var'            : [ERROR_LEVEL],              // enforce the use of variables within the scope they are defined
		'complexity'                  : [ERROR_LEVEL, { max: 6 }],  // enforce a maximum cyclomatic complexity allowed in a program
		'consistent-return'           : [ERROR_LEVEL],              // require return statements to either always or never specify values
		'curly'                       : [ERROR_LEVEL, 'all'],       // enforce consistent brace style for all control statements
		'default-case'                : [ERROR_LEVEL],              // require default cases in switch statements
		'dot-location'                : [ERROR_LEVEL, 'property'],  // enforce consistent newlines before and after dots
		'dot-notation'                : [ERROR_LEVEL],              // enforce dot notation whenever possible
		'eqeqeq'                      : [ERROR_LEVEL],              // require the use of === and !==
		'guard-for-in'                : [ERROR_LEVEL],              // require for-in loops to include an if statement
		'no-alert'                    : [ERROR_LEVEL],              // disallow the use of alert, confirm, and prompt
		'no-caller'                   : [ERROR_LEVEL],              // disallow the use of arguments.caller or arguments.callee
		'no-case-declarations'        : [ERROR_LEVEL],              // disallow lexical declarations in case clauses
		'no-div-regex'                : ['off'],                    // disallow division operators explicitly at the beginning of regular expressions
		'no-else-return'              : [ERROR_LEVEL],              // disallow else blocks after return statements in if statements
		'no-empty-function'           : [ERROR_LEVEL],              // disallow empty functions
		'no-empty-pattern'            : [ERROR_LEVEL],              // disallow empty destructuring patterns
		'no-eq-null'                  : [ERROR_LEVEL],              // disallow null comparisons without type-checking operators
		'no-eval'                     : [ERROR_LEVEL],              // disallow the use of eval()
		'no-extend-native'            : [ERROR_LEVEL],              // disallow extending native types
		'no-extra-bind'               : [ERROR_LEVEL],              // disallow unnecessary calls to .bind()
		'no-extra-label'              : [ERROR_LEVEL],              // disallow unnecessary labels
		'no-fallthrough'              : [ERROR_LEVEL],              // disallow fallthrough of case statements
		'no-floating-decimal'         : [ERROR_LEVEL],              // disallow leading or trailing decimal points in numeric literals
		'no-implicit-coercion'        : [ERROR_LEVEL, {             // disallow shorthand type conversions
			allow: ['!!']
		}],
		'no-implicit-globals'         : [ERROR_LEVEL],              // disallow var and named function declarations in the global scope
		'no-implied-eval'             : [ERROR_LEVEL],              // disallow the use of eval()-like methods
		'no-invalid-this'             : [ERROR_LEVEL],              // disallow this keywords outside of classes or class-like objects
		'no-iterator'                 : [ERROR_LEVEL],              // disallow the use of the __iterator__ property
		'no-labels'                   : [ERROR_LEVEL],              // disallow labeled statements
		'no-lone-blocks'              : [ERROR_LEVEL],              // disallow unnecessary nested blocks
		'no-loop-func'                : [ERROR_LEVEL],              // disallow function declarations and expressions inside loop statements
		'no-magic-numbers'            : [ERROR_LEVEL, {             // disallow magic numbers
			ignoreArrayIndexes: true,
			detectObjects     : false,
			enforceConst      : false
		}],
		'no-multi-spaces'             : [ERROR_LEVEL, {             // disallow multiple spaces
			exceptions: {
				Property          : true,
				VariableDeclarator: true
			}
		}],
		'no-multi-str'                : [ERROR_LEVEL],              // disallow multiline strings
		'no-native-reassign'          : [ERROR_LEVEL],              // disallow reassigning native objects
		'no-new'                      : [ERROR_LEVEL],              // disallow new operators outside of assignments or comparisons
		'no-new-func'                 : [ERROR_LEVEL],              // disallow new operators with the Function object
		'no-new-wrappers'             : [ERROR_LEVEL],              // disallow new operators with the String, Number, and Boolean objects
		'no-octal'                    : [ERROR_LEVEL],              // disallow octal literals
		'no-octal-escape'             : [ERROR_LEVEL],              // disallow octal escape sequences in string literals
		'no-param-reassign'           : ['off'],                    // disallow reassigning function parameters
		'no-proto'                    : [ERROR_LEVEL],              // disallow the use of the __proto__ property
		'no-redeclare'                : [ERROR_LEVEL, {             // disallow var redeclaration
			builtinGlobals: true
		}],
		'no-return-assign'            : [ERROR_LEVEL, 'always'],    // disallow assignment operators in return statements
		'no-script-url'               : [ERROR_LEVEL],              // disallow javascript': [errorLevel], // urls
		'no-self-assign'              : [ERROR_LEVEL],              // disallow assignments where both sides are exactly the same
		'no-self-compare'             : [ERROR_LEVEL],              // disallow comparisons where both sides are exactly the same
		'no-sequences'                : [ERROR_LEVEL],              // disallow comma operators
		'no-throw-literal'            : [ERROR_LEVEL],              // disallow throwing literals as exceptions
		'no-unmodified-loop-condition': [ERROR_LEVEL],              // disallow unmodified loop conditions
		'no-unused-expressions'       : [ERROR_LEVEL, {             // disallow unused expressions
			allowShortCircuit: false,
			allowTernary     : false
		}],
		'no-unused-labels'            : [ERROR_LEVEL],              // disallow unused labels
		'no-useless-call'             : [ERROR_LEVEL],              // disallow unnecessary calls to .call() and .apply()
		'no-useless-concat'           : [ERROR_LEVEL],              // disallow unnecessary concatenation of literals or template literals
		'no-useless-escape'           : [ERROR_LEVEL],              // disallow unnecessary escape characters
		'no-void'                     : [ERROR_LEVEL],              // disallow void operators
		'no-warning-comments'         : [ERROR_LEVEL],              // disallow specified warning terms in comments
		'no-with'                     : [ERROR_LEVEL],              // disallow with statements
		'radix'                       : [ERROR_LEVEL, 'as-needed'], // enforce the consistent use of the radix argument when using parseInt()
		'vars-on-top'                 : ['off'],                    // require var declarations be placed at the top of their containing scope
		'wrap-iife'                   : [ERROR_LEVEL, 'inside'],    // require parentheses around immediate function invocations
		'yoda'                        : [ERROR_LEVEL, 'never', {    // require or disallow “Yoda” conditions
			exceptRange: true
		}],


		/**
		 * Strict Mode
		 * These rules relate to strict mode directives
		 */

		'strict': [ERROR_LEVEL, 'safe'], // require or disallow strict mode directives


		/**
		 * Variables
		 * These rules relate to variable declarations
		 */

		'init-declarations'         : ['off'],        // require or disallow initialization in var declarations
		'no-catch-shadow'           : ['off'],        // disallow catch clause parameters from shadowing variables in the outer scope
		'no-delete-var'             : [ERROR_LEVEL],  // disallow deleting variables
		'no-label-var'              : [ERROR_LEVEL],  // disallow labels that share a name with a variable
		'no-restricted-globals'     : ['off'],        // disallow specified global variables
		'no-shadow'                 : [ERROR_LEVEL, { // disallow var declarations from shadowing variables in the outer scope
			builtinGlobals: true,
			hoist         : 'all',
			allow         : []
		}],
		'no-shadow-restricted-names': [ERROR_LEVEL],  // disallow identifiers from shadowing restricted names
		'no-undef'                  : [ERROR_LEVEL, { // disallow the use of undeclared variables unless mentioned in /*global */ comments
			typeof: true
		}],
		'no-undef-init'             : [ERROR_LEVEL],  // disallow initializing variables to undefined
		'no-undefined'              : [ERROR_LEVEL],  // disallow the use of undefined as an identifier
		'no-unused-vars'            : [ERROR_LEVEL, { // disallow unused variables
			vars        : 'all',
			args        : 'all',
			caughtErrors: 'all'
		}],
		'no-use-before-define'      : [ERROR_LEVEL, { // disallow the use of variables before they are defined
			functions: false,
			classes  : true
		}],


		/**
		 * Node.js and CommonJS
		 * These rules relate to code running in Node.js, or in browsers with CommonJS
		 */

		'callback-return'      : [ERROR_LEVEL],          // require return statements after callbacks
		'global-require'       : [ERROR_LEVEL],          // require require() calls to be placed at top-level module scope
		'handle-callback-err'  : [ERROR_LEVEL, 'error'], // require error handling in callbacks
		'no-mixed-requires'    : [ERROR_LEVEL],          // disallow require calls to be mixed with regular var declarations
		'no-new-require'       : [ERROR_LEVEL],          // disallow new operators with calls to require
		'no-path-concat'       : [ERROR_LEVEL],          // disallow string concatenation with __dirname and __filename
		'no-process-env'       : [ERROR_LEVEL],          // disallow the use of process.env
		'no-process-exit'      : [ERROR_LEVEL],          // disallow the use of process.exit()
		'no-restricted-modules': ['off'],                // disallow specified modules when loaded by require
		'no-sync'              : [ERROR_LEVEL],          // disallow synchronous methods


		/**
		 * Stylistic Issues
		 * These rules relate to style guidelines, and are therefore quite subjective
		 */

		'array-bracket-spacing'        : [ERROR_LEVEL, 'never'],                // enforce consistent spacing inside array brackets
		'block-spacing'                : [ERROR_LEVEL, 'always'],               // enforce consistent spacing inside single-line blocks
		'brace-style'                  : [ERROR_LEVEL, '1tbs', {                // enforce consistent brace style for blocks
			allowSingleLine: true
		}],
		'camelcase'                    : ['off'],                               // enforce camelcase naming convention
		'comma-spacing'                : [ERROR_LEVEL, {                        // enforce consistent spacing before and after commas
			before: false,
			after: true
		}],
		'comma-style'                  : [ERROR_LEVEL, 'last'],                 // enforce consistent comma style
		'computed-property-spacing'    : [ERROR_LEVEL, 'never'],                // enforce consistent spacing inside computed property brackets
		'consistent-this'              : [ERROR_LEVEL, 'vm'],                   // enforce consistent naming when capturing the current execution context
		'eol-last'                     : [ERROR_LEVEL, 'unix'],                 // enforce at least one newline at the end of files
		'func-names'                   : ['off'],                               // require or disallow named function expressions
		'func-style'                   : [ERROR_LEVEL, 'declaration', {         // enforce the consistent use of either function declarations or expressions
			allowArrowFunctions: false
		}],
		'id-blacklist'                 : ['off'],                               // disallow specified identifiers
		'id-length'                    : ['off'],                               // enforce minimum and maximum identifier lengths
		'id-match'                     : [                                      // require identifiers to match a specified regular expression
			ERROR_LEVEL,
			'^_?\\$?[a-zA-Z]*(_id)?$',
			{
				onlyDeclarations: true,
				properties: true
			}
		],
		'indent'                       : [ERROR_LEVEL, 'tab', {                 // enforce consistent indentation
			'SwitchCase': 1,
			'VariableDeclarator': 1
		}],
		'jsx-quotes'                   : ['off'],                               // enforce the consistent use of either double or single quotes in JSX attributes
		'key-spacing'                  : [ERROR_LEVEL, {                        // enforce consistent spacing between keys and values in object literal properties
			singleLine: {
				beforeColon: false,
				afterColon: true
			},
			multiLine: {
				beforeColon: true,
				afterColon: true,
				align: 'colon'
			}
		}],
		'keyword-spacing'              : [ERROR_LEVEL, {                        // enforce consistent spacing before and after keywords
			before: true,
			after: true
		}],
		'linebreak-style'              : ['off'],                               // enforce consistent linebreak style
		'lines-around-comment'         : [ERROR_LEVEL, {                        // require empty lines around comments
			beforeBlockComment: true,
			afterBlockComment : false,
			beforeLineComment : true,
			afterLineComment  : false,
			allowBlockStart   : true,
			allowBlockEnd     : false,
			allowObjectStart  : true,
			allowObjectEnd    : false,
			allowArrayStart   : true,
			allowArrayEnd     : false
		}],
		'max-depth'                    : [ERROR_LEVEL, 4],                      // enforce a maximum depth that blocks can be nested
		'max-len'                      : [ERROR_LEVEL, {                        // enforce a maximum line length
			code                  : 120,
			tabWidth              : 4,
			ignoreTrailingComments: true
		}],
		'max-lines'                    : [ERROR_LEVEL, {                        // enforce a maximum file length
			max           : 300,
			skipBlankLines: true,
			skipComments  : true
		}],
		'max-nested-callbacks'         : [ERROR_LEVEL, 3],                      // enforce a maximum depth that callbacks can be nested
		'max-params'                   : ['warn', 3],                           // enforce a maximum number of parameters in function definitions
		'max-statements'               : [ERROR_LEVEL, 10],                     // enforce a maximum number of statements allowed in function blocks
		'max-statements-per-line'      : [ERROR_LEVEL, { max: 1 }],             // enforce a maximum number of statements allowed per line
		'new-cap'                      : [ERROR_LEVEL, {                        // require constructor function names to begin with a capital letter
			newIsCap          : true,
			capIsNew          : true,
			newIsCapExceptions: [],
			capIsNewExceptions: [],
			properties        : true
		}],
		'new-parens'                   : [ERROR_LEVEL],                         // require parentheses when invoking a constructor with no arguments
		'newline-after-var'            : [ERROR_LEVEL, 'always'],               // require or disallow an empty line after var declarations
		'newline-before-return'        : [ERROR_LEVEL],                         // require an empty line before return statements
		'newline-per-chained-call'     : [ERROR_LEVEL, {                        // require a newline after each call in a method chain
			'ignoreChainWithDepth': 2
		}],
		'no-array-constructor'         : [ERROR_LEVEL],                         // disallow Array constructors
		'no-bitwise'                   : [ERROR_LEVEL],                         // disallow bitwise operators
		'no-continue'                  : [ERROR_LEVEL],                         // disallow continue statements
		'no-inline-comments'           : ['off'],                               // disallow inline comments after code
		'no-lonely-if'                 : [ERROR_LEVEL],                         // disallow if statements as the only statement in else blocks
		'no-mixed-operators'           : [ERROR_LEVEL],                         // disallow mixes of different operators
		'no-mixed-spaces-and-tabs'     : [ERROR_LEVEL, 'smart-tabs'],           // disallow mixed spaces and tabs for indentation
		'no-multiple-empty-lines'      : [ERROR_LEVEL, {                        // disallow multiple empty lines
			max   : 2,
			maxEOF: 1,
			maxBOF: 0
		}],
		'no-negated-condition'         : [ERROR_LEVEL],                         // disallow negated conditions
		'no-nested-ternary'            : [ERROR_LEVEL],                         // disallow nested ternary expressions
		'no-new-object'                : [ERROR_LEVEL],                         // disallow Object constructors
		'no-plusplus'                  : ['off'],                               // disallow the unary operators ++ and --
		'no-restricted-syntax'         : ['off'],                               // disallow specified syntax
		'no-spaced-func'               : [ERROR_LEVEL],                         // disallow spacing between function identifiers and their applications
		'no-ternary'                   : ['off'],                               // disallow ternary operators
		'no-trailing-spaces'           : [ERROR_LEVEL, {                        // disallow trailing whitespace at the end of lines
			skipBlankLines: false
		}],
		'no-underscore-dangle'         : [ERROR_LEVEL, {                        // disallow dangling underscores in identifiers
			allowAfterThis: true}
		],
		'no-unneeded-ternary'          : [ERROR_LEVEL],                         // disallow ternary operators when simpler alternatives exist
		'no-whitespace-before-property': [ERROR_LEVEL],                         // disallow whitespace before properties
		'object-curly-newline'         : [ERROR_LEVEL, {                        // enforce consistent line breaks inside braces
			multiline: true
		}],
		'object-curly-spacing'         : [ERROR_LEVEL, 'always'],               // enforce consistent spacing inside braces
		'object-property-newline'      : [ERROR_LEVEL],                         // enforce placing object properties on separate lines
		'one-var'                      : [ERROR_LEVEL, {                        // enforce variables to be declared either together or separately in functions
			uninitialized: 'always',
			initialized  : 'never'
		}],
		'one-var-declaration-per-line' : ['off'],                               // require or disallow newlines around var declarations
		'operator-assignment'          : [ERROR_LEVEL, 'always'],               // require or disallow assignment operator shorthand where possible
		'operator-linebreak'           : [ERROR_LEVEL, 'before'],               // enforce consistent linebreak style for operators
		'padded-blocks'                : [ERROR_LEVEL, 'never'],                // require or disallow padding within blocks
		'quote-props'                  : [ERROR_LEVEL, 'consistent-as-needed'], // require quotes around object literal property names
		'quotes'                       : [ERROR_LEVEL, 'single', {              // enforce the consistent use of either backticks, double, or single quotes
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}],
		'require-jsdoc'                : ['off'],                               // require JSDoc comments
		'semi'                         : [ERROR_LEVEL, 'always'],               // require or disallow semicolons instead of ASI
		'semi-spacing'                 : [ERROR_LEVEL, {                        // enforce consistent spacing before and after semicolons
			'before': false,
			'after': true
		}],
		'sort-vars'                    : ['off'],                               // require variables within the same declaration block to be sorted
		'space-before-blocks'          : [ERROR_LEVEL, 'always'],               // enforce consistent spacing before blocks
		'space-before-function-paren'  : [ERROR_LEVEL, {                        // enforce consistent spacing before function definition opening parenthesis
			'anonymous': 'always',
			'named': 'never'
		}],
		'space-in-parens'              : [ERROR_LEVEL, 'never'],                // enforce consistent spacing inside parentheses
		'space-infix-ops'              : [ERROR_LEVEL],                         // require spacing around operators
		'space-unary-ops'              : [ERROR_LEVEL, {                        // enforce consistent spacing before or after unary operators
			words   : true,
			nonwords: false
		}],
		'spaced-comment'               : [ERROR_LEVEL, 'always'],               // enforce consistent spacing after the // or /* in a comment
		'unicode-bom'                  : [ERROR_LEVEL, 'never'],                // require or disallow the Unicode BOM
		'wrap-regex'                   : [ERROR_LEVEL],                         // require parenthesis around regex literals


		/**
		 * ECMAScript 6
		 * These rules relate to ES6, also known as ES2015
		 */

		'arrow-body-style'       : [ERROR_LEVEL, 'as-needed'], // require braces around arrow function bodies
		'arrow-parens'           : [ERROR_LEVEL, 'as-needed'], // require parentheses around arrow function arguments
		'arrow-spacing'          : [ERROR_LEVEL, {             // enforce consistent spacing before and after the arrow in arrow functions
			before: true,
			after: true
		}],
		'constructor-super'      : [ERROR_LEVEL],              // require super() calls in constructors
		'generator-star-spacing' : [ERROR_LEVEL, {             // enforce consistent spacing around * operators in generator functions
			before: false,
			after: true
		}],
		'no-class-assign'        : [ERROR_LEVEL],              // disallow reassigning class members
		'no-confusing-arrow'     : [ERROR_LEVEL],              // disallow arrow functions where they could be confused with comparisons
		'no-const-assign'        : [ERROR_LEVEL],              // disallow reassigning const variables
		'no-dupe-class-members'  : [ERROR_LEVEL],              // disallow duplicate class members
		'no-duplicate-imports'   : [ERROR_LEVEL],              // disallow duplicate module imports
		'no-new-symbol'          : [ERROR_LEVEL],              // disallow new operators with the Symbol object
		'no-restricted-imports'  : ['off'],                    // disallow specified modules when loaded by import
		'no-this-before-super'   : [ERROR_LEVEL],              // disallow this/super before calling super() in constructors
		'no-useless-computed-key': [ERROR_LEVEL],              // disallow unnecessary computed property keys in object literals
		'no-useless-constructor' : [ERROR_LEVEL],              // disallow unnecessary constructors
		'no-useless-rename'      : [ERROR_LEVEL],              // disallow renaming import, export, and destructured assignments to the same name
		'no-var'                 : [ERROR_LEVEL],              // require let or const instead of var
		'object-shorthand'       : [ERROR_LEVEL, 'always'],    // require or disallow method and property shorthand syntax for object literals
		'prefer-arrow-callback'  : [ERROR_LEVEL],              // require arrow functions as callbacks
		'prefer-const'           : [ERROR_LEVEL, {             // require const declarations for variables that are never reassigned after declared
			destructuring         : 'any',
			ignoreReadBeforeAssign: false
		}],
		'prefer-reflect'         : ['off'],                    // require Reflect methods where applicable
		'prefer-rest-params'     : [ERROR_LEVEL],              // require rest parameters instead of arguments
		'prefer-spread'          : [ERROR_LEVEL],              // require spread operators instead of .apply()
		'prefer-template'        : [ERROR_LEVEL],              // require template literals instead of string concatenation
		'require-yield'          : [ERROR_LEVEL],              // require generator functions to contain yield
		'rest-spread-spacing'    : [ERROR_LEVEL, 'never'],     // enforce spacing between rest and spread operators and their expressions
		'sort-imports'           : ['off'],                    // enforce sorted import declarations within modules
		'template-curly-spacing' : [ERROR_LEVEL, 'never'],     // require or disallow spacing around embedded expressions of template strings
		'yield-star-spacing'     : [ERROR_LEVEL, 'after'],     // require or disallow spacing around the * in yield* expressions
	}
};
