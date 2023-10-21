// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jspsych-code-completion" is now active!');



	const provider2 = vscode.languages.registerCompletionItemProvider(
		'html',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position){
				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if(!linePrefix.endsWith('jsPsych.')){
					return undefined;
				}

				// Create completion items
				const addNodeToEndOfTimeline = new vscode.CompletionItem('addNodeToEndOfTimeline()', vscode.CompletionItemKind.Method);
				addNodeToEndOfTimeline.detail = "jsPsych.addNodeToEndOfTimeline(node_parameters)";
				addNodeToEndOfTimeline.sortText = '1';

				const endCurrentTimeline = new vscode.CompletionItem('endCurrentTimeline()', vscode.CompletionItemKind.Method);
				endCurrentTimeline.detail = "jspsych.endCurrentTimeline(node)";
				endCurrentTimeline.sortText = '1';
				
				const endExperiment = new vscode.CompletionItem('endExperiment()', vscode.CompletionItemKind.Method);
				endExperiment.detail = "jsPsych.endExperiment(end_message, data)";
				endExperiment.sortText = '1';

				const finishTrial = new vscode.CompletionItem('finishTrial()', vscode.CompletionItemKind.Method);
				finishTrial.detail = "jsPsych.finishTrial(data)";
				finishTrial.sortText = '&';

				const getAllTimelineVariables = new vscode.CompletionItem('getAllTimelineVariables()', vscode.CompletionItemKind.Method);
				getAllTimelineVariables.detail = "jsPsych.getAllTimelineVariables()";
				getAllTimelineVariables.sortText = '1';

				const getCurrentTimelineNodeID = new vscode.CompletionItem('getCurrentTimelineNodeID()', vscode.CompletionItemKind.Method);
				getCurrentTimelineNodeID.detail = "jsPsych.getCurrentTimelineNodeID()";
				getCurrentTimelineNodeID.sortText = '1';

				const getCurrentTrial = new vscode.CompletionItem('getCurrentTrial()', vscode.CompletionItemKind.Method);
				getCurrentTrial.detail = "jsPsych.getCurrentTrial()";
				getCurrentTrial.sortText = '1';

				const getDisplayElement = new vscode.CompletionItem('getDisplayElement()', vscode.CompletionItemKind.Method);
				getDisplayElement.detail = "jsPsych.getDisplayElement()";
				getDisplayElement.sortText = '1';

				const getInitSettings = new vscode.CompletionItem('getInitSettings()', vscode.CompletionItemKind.Method);
				getInitSettings.detail = "jsPsych.getInitSettings()";
				getInitSettings.sortText = '1';

				const getProgress = new vscode.CompletionItem('getProgress()', vscode.CompletionItemKind.Method);
				getProgress.detail = "jsPsych.getProgress()";
				getProgress.sortText = '1';

				const getProgressBarCompleted = new vscode.CompletionItem('getProgressBarCompleted()', vscode.CompletionItemKind.Method);
				getProgressBarCompleted.detail = "jsPsych.getProgressBarCompleted()";
				getProgressBarCompleted.sortText = '1';

				const getStartTime = new vscode.CompletionItem('getStartTime()', vscode.CompletionItemKind.Method);
				getStartTime.detail = "jsPsych.getStartTime()";
				getStartTime.sortText = '1';

				const getTotalTime = new vscode.CompletionItem('getTotalTime()', vscode.CompletionItemKind.Method);
				getTotalTime.detail = "jsPsych.getTotalTime()";
				getTotalTime.sortText = '1';

				const pauseExperiment = new vscode.CompletionItem('pauseExperiment()', vscode.CompletionItemKind.Method);
				pauseExperiment.detail = "jsPsych.pauseExperiment()";
				pauseExperiment.sortText = '1';

				const resumeExperiment = new vscode.CompletionItem('resumeExperiment()', vscode.CompletionItemKind.Method);
				resumeExperiment.detail = "jsPsych.resumeExperiment()";
				resumeExperiment.sortText = '1';

				const run = new vscode.CompletionItem('run()', vscode.CompletionItemKind.Method);
				run.detail = "jsPsych.run(timeline)";
				run.sortText = '1';

				const setProgressBar = new vscode.CompletionItem('setProgressBar()', vscode.CompletionItemKind.Method);
				setProgressBar.detail = "jsPsych.setProgressBar(value)";
				setProgressBar.sortText = '1';

				const timelineVariable = new vscode.CompletionItem('timelineVariable()', vscode.CompletionItemKind.Method);
				timelineVariable.detail = "jsPsych.timelineVariable(variable, call_immediate)";
				timelineVariable.sortText = '1';

				const version = new vscode.CompletionItem('version()', vscode.CompletionItemKind.Method);
				version.detail = "jsPsych.version()";
				version.sortText = '1';

				// Register modules
				const randomization = new vscode.CompletionItem('randomization', vscode.CompletionItemKind.Module);
				randomization.sortText = '0';
				randomization.documentation = 'The jsPsych.randomization module contains methods that are useful for generating random lists of trial variables.';

				return [
					addNodeToEndOfTimeline,
					endCurrentTimeline,
					endExperiment,
					finishTrial,
					getAllTimelineVariables,
					getCurrentTimelineNodeID,
					getCurrentTrial,
					getDisplayElement,
					getInitSettings,
					getProgress,
					getProgressBarCompleted,
					getStartTime,
					getTotalTime,
					pauseExperiment,
					resumeExperiment,
					run,
					setProgressBar,
					timelineVariable,
					version,
					randomization
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
				setSeed.sortText = '1';
				setSeed.insertText = new vscode.SnippetString('setSeed()');
				setSeed.documentation = new vscode.MarkdownString('This function will override the behavior of Math.random() to produce a seedable pseudo random number generator. It uses the seedrandom package. Note that calling setSeed() will change how Math.random() behaves for the entire document. If you have non-jsPsych components on the page that use Math.random() they will be affected. \n\nUsing setSeed() without passing in a seed will generate a random 32-bit seed. The seed value will be returned from the function call, allowing you to save it in the data for the experiment if needed.\n\n[Dcoumentation](https://www.jspsych.org/7.3/reference/jspsych-randomization/#jspsychrandomizationsetseed)');
								
				// repeat
				const repeat = new vscode.CompletionItem('repeat', vscode.CompletionItemKind.Method);
				repeat.detail = "jsPsych.randomization.repeat(array, repetitions, unpack)";
				repeat.sortText = '1';
				repeat.insertText = new vscode.SnippetString('repeat(${1|array|}, {$2|repetitions|})');
				repeat.documentation = new vscode.MarkdownString('This method takes an array of values and generates a new random order of the array, with the option of repeating each element of the array a specified number of times.\n\n[Documentation](https://www.jspsych.org/7.3/reference/jspsych-randomization/#jspsychrandomizationrepeat)');
				
				// shuffle
				const shuffle = new vscode.CompletionItem('shuffle', vscode.CompletionItemKind.Method);
				shuffle.detail = "jsPsych.randomization.shuffle(array)";
				shuffle.sortText = '1';
				shuffle.insertText = new vscode.SnippetString('shuffle(${1|array|})');
				shuffle.documentation = new vscode.MarkdownString('Returns an array with the same elements as the input array in a random order.\n\n[Documentation](https://www.jspsych.org/7.3/reference/jspsych-randomization/#jspsychrandomizationshuffle)');

				// factorial
				const factorial = new vscode.CompletionItem('factorial', vscode.CompletionItemKind.Method);
				factorial.sortText = '1';
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

	// Hover information
	const pluginsHoverInformation = vscode.languages.registerHoverProvider(
		'html',
		{
			provideHover(document, position, token) {
				const range = document.getWordRangeAtPosition(position);
				const word = document.getText(range);

				if (word === 'jsPsychAnimation'){
					//const markdown = new vscode.MarkdownString("This **plugin** displays a sequence of images at a fixed frame rate. The sequence can be looped a specified number of times. The participant is free to respond at any point during the animation, and the time of the response is recorded.\n\n| Parameter | Type | Default value | Description |\n\n| --- | --- | --- | --- |\n\n| stimuli | array | undefined | Each element of the array is a path to an image file. |");
					const markdown = new vscode.MarkdownString(`<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>stimuli</td>
<td>array</td>
<td><em>undefined</em></td>
<td>Each element of the array is a path to an image file.</td>
</tr>
<tr>
<td>frame_time</td>
<td>numeric</td>
<td>250</td>
<td>How long to display each image in milliseconds.</td>
</tr>
<tr>
<td>frame_isi</td>
<td>numeric</td>
<td>0</td>
<td>If greater than 0, then a gap will be shown between each image in the sequence. This parameter specifies the length of the gap in milliseconds.</td>
</tr>
<tr>
<td>sequence_reps</td>
<td>numeric</td>
<td>1</td>
<td>How many times to show the entire sequence. There will be no gap (other than the gap specified by <code>frame_isi</code>) between repetitions.</td>
</tr>
<tr>
<td>choices</td>
<td>array of strings</td>
<td><code>"ALL_KEYS"</code></td>
<td>This array contains the key(s) that the participant is allowed to press in order to respond to the stimulus. Keys should be specified as characters (e.g., <code>'a'</code>, <code>'q'</code>, <code>' '</code>, <code>'Enter'</code>, <code>'ArrowDown'</code>) - see <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values">this page</a> and <a href="https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/">this page (event.key column)</a> for more examples. Any key presses that are not listed in the array will be ignored. The default value of <code>"ALL_KEYS"</code> means that all keys will be accepted as valid responses. Specifying <code>"NO_KEYS"</code> will mean that no responses are allowed.</td>
</tr>
<tr>
<td>prompt</td>
<td>string</td>
<td>null</td>
<td>This string can contain HTML markup. Any content here will be displayed below the stimulus. The intention is that it can be used to provide a reminder about the action the participant is supposed to take (e.g., which key(s) to press).</td>
</tr>
<tr>
<td>render_on_canvas</td>
<td>boolean</td>
<td>true</td>
<td>If true, the images will be drawn onto a canvas element. This prevents a blank screen (white flash) between consecutive images in some browsers, like Firefox and Edge. If false, the image will be shown via an img element, as in previous versions of jsPsych.</td>
</tr>
</tbody>
</table>`);
					markdown.supportHtml = true;
					markdown.isTrusted = true;
					return new vscode.Hover(markdown, new vscode.Range(position, position));
				}
			},
		}
	);

	context.subscriptions.push(pluginsHoverInformation);

	/*
		Signature helper providers 
	*/
	const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
		{ scheme: 'file', language: 'html' }, // Replace 'yourLanguage' with the language you're targeting
		{
			provideSignatureHelp(document, position, token, context) {
				// Get the current line and the current word at the cursor position
				const line = document.lineAt(position.line).text;
				const currentWord = document.getText(document.getWordRangeAtPosition(position));
	
				// Check if the current line contains a function call
				const functionCallPattern = /(\w+)\s*\(/;
				const match = functionCallPattern.exec(line);
			
				if (match) {
					const functionName = match[1];
	
					if (functionName !== "factorial"){
						return null;
					}

					// Function documentation
					const documentation = new vscode.MarkdownString('This method takes a list of factors and their levels, and creates a full factorial design by creating each unique combination of the factors. The returned set of combinations is in a random order.');

					// Parameter information
					const parameters = [
						new vscode.ParameterInformation('factors', 'The factors object should contain a property for each different factor. Each property-factor should have a value of an array, with each element of the array corresponding to a level of the factor.'),
						new vscode.ParameterInformation('repetitions', 'The number of times to repeat each unique combination of the factors in the output sample.'),
						new vscode.ParameterInformation('unpack', 'If true then the output will be an object with a property for each factor in the original factors object. The value of each property-factor will be an array containing the levels of the factor in a random order. The order will be consistent across each property-factor (e.g., the first element of each property-factor will specify one unique combination of the factors). If false, then the return value will be an array of objects where each property-factor contains only a single value.'),
					];

					// Create the SignatureInformation object
					const signatureInformation = new vscode.SignatureInformation('factorial(factors: object, repetitions: integer, unpack: boolean)', documentation);
					signatureInformation.parameters = parameters;

					// Example usage in a SignatureHelp object
					// TODO: make sure the active signature index tracks the actual signature index
					const signatureHelp = new vscode.SignatureHelp();
					signatureHelp.signatures = [signatureInformation];
					signatureHelp.activeSignature = 0;

					// Return the SignatureHelp object from your provideSignatureHelp function
					return signatureHelp;
				}
			
				return null;
			}
		},
		'(', ',', ' ' // Trigger characters
	);

	context.subscriptions.push(signatureHelpProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
