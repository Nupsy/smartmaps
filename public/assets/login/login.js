function validateFields(e,t){return e!=""&&t!=""}$(document).ready(function(){$("#submitInput").click(function(){var e=$("#userInput").attr("value"),t=$("#passwordInput").attr("value");validateFields(e,t)?$("#loginForm").submit():alert("A field is not well filled.")})});