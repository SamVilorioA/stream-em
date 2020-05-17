function generateVCard()
{
    var fullName = document.getElementById("lastName").value + ";" +document.getElementById("firstName").value +";;";
    var address = document.getElementById("address").value;
    var cell = document.getElementById("cellphone").value;
    var email = document.getElementById("email").value; 
    var contact = {
        "version":"2.0",
        "n":fullName,
        "email":[{"value":email, "type":"home"}],
        "tel":[{"value":cell, "type":"cell"}],
        "address":[{"value":address,"type":"home"}]
    }
    var createe = vCard.dump(contact);
    //document.getElementById("generatedVCard").innerHTML = createe;
    generateCode(createe);
}
function generateCode(strVCard)
{
    new QRCode(document.getElementById("GeneratedQRCode"),strVCard);
}