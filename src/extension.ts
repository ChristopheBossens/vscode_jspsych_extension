// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jspsych-code-completion" is now active!');

	const provider1 = vscode.languages.registerCompletionItemProvider('html', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const simpleCompletion = new vscode.CompletionItem('Hello Worldest!');

			const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning, afternoon, evening|}. It is ${1}, right?');

			const docs: any = new vscode.MarkdownString("Inserts a snippet that lets you select [link](.ts).");
			snippetCompletion.documentation = docs;

			docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c');

			const commitCharacerCompletion = new vscode.CompletionItem('jsPsych');
			commitCharacerCompletion.commitCharacters = ['.'];
			commitCharacerCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

			const commandCompletion = new vscode.CompletionItem('new');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = 'new';
			commandCompletion.command = { command : 'editor.action.triggerSuggest', title : 'Re-trigger completions ...'};

			return [
				simpleCompletion,
				snippetCompletion,
				commitCharacerCompletion,
				commandCompletion
			];
		},		
	});

	context.subscriptions.push(provider1);

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'html',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position){
				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if(!linePrefix.endsWith('jsPsych.')){
					return undefined;
				}

				const addNodeToEndOfTimeline = new vscode.CompletionItem('addNodeToEndOfTimeline()', vscode.CompletionItemKind.Method);
				addNodeToEndOfTimeline.detail = "jsPsych.addNodeToEndOfTimeline(node_parameters)";

				return [
					addNodeToEndOfTimeline,
					new vscode.CompletionItem('endCurrentTimeline', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('endExperiment', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('finishTrial', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getAllTimelineVariables', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getCurrentTimelineNodeID', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getCurrentTrial', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getDisplayElement', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getInitSettings', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getProgress', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getProgressBarCompleted', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getStartTime', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('getTotalTime', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('pauseExperiment', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('resumeExperiment', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('run', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('setProgressBar', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('timelineVariable', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('version', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('randomization', vscode.CompletionItemKind.Module)
				];
			}
		},
		'.'
	);

	context.subscriptions.push(provider2);

	const randomizationModuleProvider = vscode.languages.registerCompletionItemProvider(
		'html',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position){
				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if(!linePrefix.endsWith('.randomization.')){
					return undefined;
				}

				// setSeed
				const setSeed = new vscode.CompletionItem('setSeed', vscode.CompletionItemKind.Method);
				setSeed.detail = "jsPsych.randomization.setSeed(seed)";
				setSeed.insertText = new vscode.SnippetString('setSeed()');
				setSeed.documentation = new vscode.MarkdownString('This function will override the behavior of Math.random() to produce a seedable pseudo random number generator. It uses the seedrandom package. Note that calling setSeed() will change how Math.random() behaves for the entire document. If you have non-jsPsych components on the page that use Math.random() they will be affected. \n\nUsing setSeed() without passing in a seed will generate a random 32-bit seed. The seed value will be returned from the function call, allowing you to save it in the data for the experiment if needed.\n\n[Dcoumentation](https://www.jspsych.org/7.3/reference/jspsych-randomization/#jspsychrandomizationsetseed)');
								
				// repeat
				const repeat = new vscode.CompletionItem('repeat', vscode.CompletionItemKind.Method);
				repeat.detail = "jsPsych.randomization.repeat(array, repetitions, unpack)";
				repeat.insertText = new vscode.SnippetString('repeat(${1|array|}, {$2|repetitions|})');
				repeat.documentation = new vscode.MarkdownString('This method takes an array of values and generates a new random order of the array, with the option of repeating each element of the array a specified number of times.\n\n[Documentation](https://www.jspsych.org/7.3/reference/jspsych-randomization/#jspsychrandomizationrepeat)');
				
				// shuffle
				const shuffle = new vscode.CompletionItem('shuffle', vscode.CompletionItemKind.Method);
				shuffle.detail = "jsPsych.randomization.shuffle(array)";
				shuffle.insertText = new vscode.SnippetString('shuffle(${1|array|})');
				shuffle.documentation = new vscode.MarkdownString('Returns an array with the same elements as the input array in a random order.\n\n[Documentation](https://www.jspsych.org/7.3/reference/jspsych-randomization/#jspsychrandomizationshuffle)');

				// factorial
				const factorial = new vscode.CompletionItem('factorial', vscode.CompletionItemKind.Method);
				factorial.insertText = new vscode.SnippetString('factorial(${1|factors|}, ${2|repetitions|}, ${3|unpack|})');
				factorial.detail = "jsPsych.randomization.factorial(factors, repetitions, unpack)";
				factorial.documentation = new vscode.MarkdownString('This method takes a list of factors and their levels, and creates a full factorial design by creating each unique combination of the factors. The returned set of combinations is in a random order.');

				return [
					setSeed,
					repeat,
					shuffle,
					factorial
				];
			}
		},
		'.'
	);
	
	context.subscriptions.push(randomizationModuleProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
