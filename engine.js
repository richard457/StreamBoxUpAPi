#! /usr/bin/env node

var exec = require('child_process').exec;
var cli = require('cli'), options = cli.parse();

var cli = require('cli');
var createFile = require('create-file');
 var figlet = require("figlet");
var program = require('commander');






//manipulate squalizer






























var userArgs = process.argv.slice(2);
var Arg = userArgs[0];
// var child = exec('ls -a | grep ' + searchPattern, function(err, stdout, stderr) {
//   console.log(stdout);
// });

program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-C, --CreateMigration', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

//loading our Brand on Screen though


if (program.CreateMigration || program.C) {
    console.log(Arg);
    var d ="const Post = Conn.define('post', {\n\n\n });";
    createFile('./migrations/P.js', d, function (err) {
    // file either already exists or is now created (including non existing directories) 
    });
}

// figlet.text("StreamUpBox Server!", function(error, data) {
//     if (error)
//       console.error(error);
//     else
//       console.log(data);
// });







// console.log('stuff');







//showing progress with ... no spinner
// var i = 0, interval = setInterval(function () { 
//     cli.progress(++i / 100); 
//     if (i === 100) {
//         clearInterval(interval);
//         cli.ok('Finished!');
//     }
// }, 50);


//spinner

// var cli = require('cli');

// cli.spinner('Working..');

// setTimeout(function () {
//     cli.spinner('Working.. done!', true); //End the spinner
// }, 3000);



/* All of the following commands are equivalent and write `foo\tbar foo` to out.txt
    $ ./echo.js -n -e --output=out.txt "foo\tbar" "foo"
    $ ./echo.js --newline --escape --output "out.txt" "foo\tbar" "foo"
    $ ./echo.js -ne --output=out.txt "foo\tbar" "foo"
    $ ./echo.js -en --output="out.txt" "foo\tbar" "foo"
*/

// var cli = require('cli');

// cli.parse({
//     newline:   ['n', 'Do not output the trailing newline'],
//     escape:    ['e', 'Enable interpretation of backslash escapes'],
//     separator: ['s', 'Separate arguments using this value', 'string', ' '],
//     output:    [false, 'Write to FILE rather than the console', 'file']
// });

// cli.main(function (args, options) {
//     var output = '', i, j, l, output_stream;
    
//     if (this.argc) {
//         if (options.escape) {
//             var replace = {'\\n':'\n','\\r':'\r','\\t':'\t','\\e':'\e','\\v':'\v','\\f':'\f','\\c':'\c','\\b':'\b','\\a':'\a','\\\\':'\\'};
//             var escape = function (str) {
//                 str += '';
//                 for (j in replace) {
//                     str = str.replace(i, replace[i]);
//                 }
//                 return str;
//             }
//             for (i = 0, l = this.argc; i < l; i++) {
//                 args[i] = escape(args[i]);
//             }
//             options.separator = escape(options.separator);
//         }
//         output += args.join(options.separator);
//     }
    
//     if (!options.newline) {
//         output += '\n';
//     }
    
//     try {
//         if (options.output) {
//             output_stream = this.native.fs.createWriteStream(options.output)
//         } else {
//             output_stream = process.stdout;
//         }
//         output_stream.write(output);
//     } catch (e) {
//         this.fatal('Could not write to output stream');
//     }
// });

//command
// var cli = require('cli');

// //The second (optional) argument of cli.parse() is a command list 
// //Type `./command.js --help` for usage info

// //cli enables auto-completion of commands (similiar to npm), e.g. all of
// //the following are equivalent and result in "Command is: install":
// //    $ ./command.js install
// //    $ ./command.js inst
// //    $ ./command.js i

// cli.parse(null, ['install', 'test', 'edit', 'remove', 'uninstall', 'ls']);

// console.log('Command is: ' + cli.command);
