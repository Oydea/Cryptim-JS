const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
const nome = document.getElementById('name');
const cpf = document.getElementById('cpf');
const password = document.getElementById('password');
const passconfirm = document.getElementById('passconfirm');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const profession = document.getElementById('profession');
const radio = document.getElementsByName('estado');
const radiodiv = document.getElementById('radio');
const years = document.getElementById('years');
let estado = "";
let cpfend = "";
let nomend = "";
let pass = "";
let trabalho = "";
let ano = "";

form1.addEventListener("submit", (e) => {
    error = Number(0);
    message.innerText = "";
    nome.removeAttribute("class", "wrong");
    cpf.removeAttribute("class", "wrong");
    password.removeAttribute("class", "wrong");
    passconfirm.removeAttribute("class", "wrong");

    if ((nome.value == "") || (nome.value == null)) {
        error += 1;
        message.innerText += "Nome não informado";
        nome.setAttribute("class", "wrong");

    };

    if ((cpf.value == "") || (cpf.value == null)) {
        error += 1;
        write(message);
        message.innerText += "CPF não informado";
        cpf.setAttribute("class", "wrong");

    } else {
        if (cpf.value.length != 11) {
            error += 1;
            write(message);
            message.innerText += "CPF inválido";
            cpf.setAttribute("class", "wrong");
        };
    };

    if ((password.value == "") || (password.value == null)) {
        error += 1;
        write(message);
        message.innerText += "Senha não informada";
        password.setAttribute("class", "wrong");
    } else {
        if (password.value.length < 8) {
            error += 1;
            write(message);
            message.innerText += "Senha inválida";
            password.setAttribute("class", "wrong");
        };
    };

    if ((passconfirm.value == "") || (passconfirm.value == null)) {
        error += 1;
        write(message);
        message.innerText += "Confirme a senha";
        passconfirm.setAttribute("class", "wrong");
    } else {
        if (passconfirm.value != password.value) {
            error += 1;
            write(message);
            message.innerText += "As senhas não batem";
            passconfirm.setAttribute("class", "wrong");
        };
    };
    e.preventDefault();
    if (error == 0) {
        nomend = nome.value;
        cpfend = cpf.value.slice(0, 3) + "." + cpf.value.slice(3, 6) + "." + cpf.value.slice(6, 9) + "-" + cpf.value.slice(9);
        pass = password.value;
        
        document.getElementById("form1").setAttribute("class", "formhide");
        document.getElementById("form2").removeAttribute("class", "formhide");
    };
    if(document.querySelector(".wrong") != null){
        document.querySelector(".wrong").focus()
    }});
form2.addEventListener("submit", (e) => {
    error = Number(0);
    message2.innerText = "";
    profession.removeAttribute("class", "wrong");
    radiodiv.removeAttribute("class", "wrong");
    years.removeAttribute("class", "wrong");

    if ((profession.value == "") || (profession.value == null)) {
        error += 1;
        message2.innerText += "Profissão não informada";
        profession.setAttribute("class", "wrong");
    };

    if ((radio[0].checked == false) && (radio[1].checked == false) && (radio[2].checked == false)) {
        error += 1;
        write(message2);
        message2.innerText += "Estado não informado";
        radiodiv.setAttribute("class", "wrong");
    } else {
        if (radio[0].checked == true) {
            estado = "Rio Grande do Sul";
        };
        if (radio[1].checked == true) {
            estado = "Santa Catarina";
        };
        if (radio[2].checked == true) {
            estado = "Paraná";
        };
    };

    if ((years.value == "") || (years.value == null)) {
        error += 1;
        write(message2);
        message2.innerText += "Experiência não informada";
        years.setAttribute("class", "wrong");
    } else {
        if ((years.value > 50) || (years.value < 1)) {
            error += 1;
            write(message2);
            message2.innerText += "Experiência inválida";
            years.setAttribute("class", "wrong");
        };
    };
    e.preventDefault();
    if (error == 0) {
        trabalho = profession.value
        ano = years.value
        document.getElementById("form2").setAttribute("class", "formhide");
        revela();
    };
    if(document.querySelector(".wrong") != null){
        document.querySelector(".wrong").focus()
    }});

function write(message) {
    if (message.innerText.length > 0) {
        message.innerText += "/";
    };
};
function revela() {
    document.getElementById("form3").removeAttribute("class", "formhide");
    document.getElementById("pnome").innerText = "Nome: " + nome.value;
    document.getElementById("pcpf").innerText = "CPF: " + cpfend;
    document.getElementById("psenha").innerText = "Senha (não deixa os outros ver hein): " + password.value;
    document.getElementById("pprofissao").innerText = "Profissão: " + profession.value;
    document.getElementById("pregiao").innerText = "Região: " + estado;
    document.getElementById("pxp").innerText = "Anos de experiência: " + years.value;
};

function restart() {
    form3.setAttribute("class", "formhide");
    form1.removeAttribute("class", "formhide");
};

document.getElementById("refaz").addEventListener("click", restart);

form3.addEventListener("submit", (e) => {
    form3.setAttribute("class", "formhide");
    form4.removeAttribute("class", "formhide");
    document.getElementById("thanks").innerText = "Muito obrigado pela sua colaboração, " + nome.value + "!!";
    e.preventDefault()});