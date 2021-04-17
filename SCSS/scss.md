### VS code extension Live SASS Compiler and SCSS Formatter

A VSCode Extension that help you to compile/transpile your SASS/SCSS files to CSS files at realtime with live browser reload and an extension for Visual Studio Code to format SCSS.

### File Orginization

Create a styles folder called "styles". Inside the folder you can create a styles.scss file to write your sass css code. 

In your html you still link to the style.css but now that its in the styles folder you must include that root directory example ./styles/style.css

### Using the Live SASS Compiler

With the styles.scss file open you will have a section in the bottom vs code toolbar the reads "Watch Sass". Clicking this will enable the live compiler. This will create a styles.css file inside the styles root folder compile the code into it written from the styles.scss. Any edits you make to the scss will be live compiled into the css file when the Live SASS Compiler is in the "Watching" state. 

### Benifits of SASS

* Auto inclusion of things like -webkit for crossbrowser compatability of css code.
* Easier use of variables in SASS that are converted to actual hex, rbg, rgba codes when compiled into css as not all browsers support variables.
* Able to use nesting of elements specific to a section to clean up code. Nesting works with pseudo elements and classes

### Variables 

Start variables with the "$" 

### Section specific files

Ability to seperate section scss files by creating a seperate scss file for what ever sections you choose to easily locate the section you want to work with. The individual files should be started with a "_". example _introduction.scss. To incorporate the partial files into your main scss file write @import "filename"; into your main scss file. Order of import is important as they will compile in same order.

### Helper Classes with Mixin

Create reusable css code that operates like a function that you can pass variables into. A mixin is defined with the @mixin directive. The @include directive is used to include a mixin. Mixins accept arguments. This way you can pass variables to a mixin. It is also possible to define default values for mixin variables.    Then, you only need to specify the values that change when you include the mixin. Mixins should be defined above other imports or in global styles.

