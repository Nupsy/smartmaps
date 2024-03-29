/**
* Returns an XMLHttp instance to use for asynchronous
* downloading. This method will never throw an exception, but will
* return NULL if the browser does not support XmlHttp for any reason.
* @return {XMLHttpRequest|Null}
*/
function createXmlHttpRequest(){try{if(typeof ActiveXObject!="undefined")return new ActiveXObject("Microsoft.XMLHTTP");if(window.XMLHttpRequest)return new XMLHttpRequest}catch(e){changeStatus(e)}return null}function downloadUrl(e,t){var n=-1,r=createXmlHttpRequest();if(!r)return!1;r.onreadystatechange=function(){if(r.readyState==4){try{n=r.status}catch(e){}n==200&&(t(r.responseXML,r.status),r.onreadystatechange=function(){})}},r.open("GET",e,!0);try{r.send(null)}catch(i){changeStatus(i)}}function xmlParse(e){if(typeof ActiveXObject!="undefined"&&typeof GetObject!="undefined"){var t=new ActiveXObject("Microsoft.XMLDOM");return t.loadXML(e),t}return typeof DOMParser!="undefined"?(new DOMParser).parseFromString(e,"text/xml"):createElement("div",null)}function downloadScript(e){var t=document.createElement("script");t.src=e,document.body.appendChild(t)};