/* Truthy
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy 
unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block): */

var age = 25;
var me = "brian";

if (age);
if (me);
if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);

/*Falsey
A falsey value is a value that is considered false when encountered in a Boolean context.

Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):*/

var age = 0;
var me = "";

if (age);
if (me);
if (false);
if (null);
if (undefined);
if (0);
if (-0);
if (0n);
if (NaN);
if ("");
