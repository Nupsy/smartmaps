$(document).ready(function() {
    $("#submitInput").click(function() {
        var username = $('#userInput').attr('value');
        var password = $('#passwordInput').attr('value');
        
        if(validateFields(username, password))
            $('#loginForm').submit();
        else
            alert("A field is not well filled.");
    });
});

function validateFields(username, password) {
    return username != "" && password != "";
}
