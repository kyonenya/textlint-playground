const { TextLintEngine } = require('textlint');
const path = require('path');

// 設定ファイルの絶対パス
const options = {
  configFile: path.join(__dirname, '.textlintrc.js'),
};

// ファイルのパスを引数に渡し、textlint で校正
const lintFile = async (filePath) => {
  const engine = new TextLintEngine(options);
  const filePathList = [path.resolve(process.cwd(), filePath)];

  const results = await engine.executeOnFiles(filePathList);

  return engine.isErrorResults(results) ? engine.formatResults(results) : 'All Passed!';
};

// テキストを引数に渡し、textlint で校正
const lintText = async (text) => {
  const engine = new TextLintEngine(options);
  const results = await engine.executeOnText(text);

  return engine.isErrorResults(results) ? engine.formatResults(results) : 'All Passed!';
};

lintText('私はJavaScriptが大好きです')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

lintFile('index.md')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// https://fwywd.com/tech/textlint-engine-basic
