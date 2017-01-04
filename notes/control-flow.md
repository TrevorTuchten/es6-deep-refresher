#A Control Flow Primer

Chances are, you’ve been exposed to the concept of a flowchart, which is a visual way of representing control flow.  

The game is simple: there’s a mat with six squares with symbols for “Crown,” “Anchor,” “Heart,” “Club,” “Spade,” and “Diamond.” The sailor places any number of coins on any combination of the squares: these become the bets. Then he1 rolls three six-sided dice with faces that match the squares on the mat. For each die that matches a square that has a bet on it, the sailor wins that amount of money. Here are some examples of how the sailor might play, and what the payout is:

![senarios](./images/control-flow-senario-ex.png)

While it’s unlikely that you will ever need to simulate the gambling behaviors of 19th-century sailors, this type of simulation is quite common in many applications. In the case of Crown and Anchor, perhaps we have constructed a mathematical model to determine if we should open a Crown and Anchor booth to raise money for charity at our next company event. The simulation we construct in this chapter can be used to support the correctness of our model.  

Let’s begin with the basics: starting and stopping conditions. Every time Thomas gets shore leave, he takes 50 pence with him to spend on Crown and Anchor. Thomas has a limit: if he’s lucky enough to double his money, he quits, walking away with at least 100 pence in his pocket (about half his monthly wages). If he doesn’t double his money, he gambles until he’s broke.  

We’ll break the playing of the game into three parts: placing the bets, rolling the dice, and collecting the winnings (if any). Now that we have a very simple, high-level picture of Thomas’s behavior, we can draw a flowchart to describe it  
![flow-chart](./images/control-flow-flowChart.png)

In a flowchart, the diamond shapes represent “yes or no” decisions, and the rectangles represent actions. We use circles to describe where to start and end.  

we’ll restrict our flowchart actions to the following:
 * Variable assignment: `funds = 50, bets = {}, hand = []`
 * Random integer between m and n, inclusive: `rand(1, 6)` (this is a “helper function” we will be providing later)
 * Random face string (“heart,” “crown,” etc.): `randFace()` (another helper function)
 * Object property assignment: `bets["heart"] = 5, bets[randFace()] = 5`
 * Adding elements to an array: `hand.push(randFace())`
 * Basic arithmetic: `funds - totalBet, funds + winning`
 * Increment: `roll++` (this is a common shorthand that just means “add one to the variable roll”)

And we’ll limit our flowchart decisions to the following:
 * Numeric comparisons `(funds > 0, funds < 100)`
 * Equality comparisons `(totalBet === 7;` we’ll learn why we use three equals signs in Chapter 5)
 * Logical operators `(funds > 0 && funds < 100;` the double ampersand means “and,”)

Now that we know the limited language we can use, we’ll have to rewrite our flowchart as shown here:

![flow-chart-refined](./images/control-flow-flowChart-refined.png)

A while loop repeats code as long as its condition is met. In our flowchart, the condition is `funds > 1 && funds < 100`. Let’s see how that looks in code:

```javascript
let funds = 50;     // starting conditions
while(funds > 1 && funds < 100) {
	// place bets
	// roll dice
	// collect winnings 
}
```

##Block Statements

 A block statement is just a series of statements enclosed in curly braces that is treated by JavaScript as a single unit. While it is possible to have a block statement by itself, it has little utility. For example:

```javascript
{   // start block statement
	console.log("statement 1");
	console.log("statement 2");
}   // end block statement
console.log("statement 3");
```

For example, if we wanted to take “two steps forward and one step back,” we could write:

```javascript
let funds = 50;     // starting conditions
while(funds > 1 && funds < 100) {
	funds = funds + 2;  // two steps forward
	funds = funds - 1;  // one step back
}
```

##Helper Functions

```javascript
// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}
// randomly returns a string representing one of the six // Crown and Anchor faces 
function randFace() {
	return ["crown", "anchor", "heart", "spade", "club", "diamond"]
		[rand(0, 5)];
}
```

##if...else Statement

One of the shaded boxes in our flowchart is “place bets,” which we’ll fill out now. So how does Thomas place bets? Thomas has a ritual, as it turns out. He reaches into his right pocket and randomly pulls out a handful of coins (as few as one, or as many as all of them). That will be his funds for this round. Thomas is superstitious, however, and believes the number 7 is lucky. So if he happens to pull out 7 pence, he reaches back into his pocket and bets all his money on the “Heart” square. Otherwise, he randomly places the bet on some number of squares  

![place-bets](./images/place-bets-flowChart.png)
