//Validar solo numeros.
const num = /^[0-9]+$/;

//Validar solo letras. 
const letras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

//Validar letras con espacios 
const letrasConEspacios = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

//Validacion de nombre y apellidos
const nombreApellidos = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

//Validacoin de precio
const precio = /^[0-9]+[.,]{1,1}\[0]{2,2}$/;

//Validar numeros enteros y decimales
const numEnteroDecimal = /^\d*\.\d+$/;

//Validar los numeros positivos y negativos
const numPosNeg = /^-?\d*(\.\d+)?$/;

//Validar fechas
const fechas = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

//Validar contraseña
const password = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

//Validar email
const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

//Validar url
const url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

//Validar ipv4
const ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

//Validar color hexadecimal 
const color = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;