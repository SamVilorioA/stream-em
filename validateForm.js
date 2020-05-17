function validateForm(e)
{
    if(!validateUsername() || !validateAddress() || !validatePhone() || !validateIdentification())
    {}
    else
    {
        alert("Datos registrados satisfactoriamente!");
        location.reload();
    }
}

function validateUsername()
{
    var element = document.getElementById("username");
    noError(element);
    if(element.value == "")
    {
        var mensaje = "El campo nombre es obligatorio";
        error(element,mensaje);
        return false;
    }    
    return true;
}
function validateAddress()
{
    var element = document.getElementById("address");
    noError(element);
    if(element.value == "")
    {
        var mensaje = "El campo direccion es obligatorio";
        error(element,mensaje);
        return false;
    }
    return true;
}
function validatePhone()
{
    var element = document.getElementById("phone");
    noError(element);
    if(isNaN(element.value) || element.value == "")
    {
        var mensaje = "El campo telefono debe ser verificado.";
        error(element,mensaje);
        return false;
    }
    return true;
}
function validateIdentification()
{
    var element = document.getElementById("identification");
    noError(element);
    if(element.value == "")
    {
        var mensaje = "El campo cedula es obligatorio";
        error(element,mensaje);
        return false;
    }
    return true;
}
function error(element, mensaje)
{
    element.className = "error";
    element.focus();
    alert(mensaje);
}
function noError(element)
{
    element.className="";
}