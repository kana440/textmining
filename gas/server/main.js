// doGet
function doGet(request) {
  var tmp = HtmlService.createTemplateFromFile('client/index');
  return tmp.evaluate().setTitle('資産テキストマイニング');
}
// gasのファイル(html)をインポートする
// html上で使うときは<?!=include('filename');?>とする
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
