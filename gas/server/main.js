// doGet
function doGet(request) {
  var tmp = HtmlService.createTemplateFromFile('server/index');
  return tmp.evaluate().setTitle('資産テキストマイニングDL');
}
// gasのファイル(html)をインポートする
// html上で使うときは<?!=include('filename');?>とする
function include(filename) {
  return HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .getContent();
}
