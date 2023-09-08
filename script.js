function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let outPutCode = document.getElementById("output");

  outPutCode.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";

  outPutCode.contentWindow.eval(jsCode);
}
