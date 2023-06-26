var name_op;
var responsible;
var getting_started;
var end_of_work;
var city;
var type_work;
var graph;
var office;
var project;
var finance;
var task_description;
var competence;
var grade;
var number_of_specialists;
var requirements;
var responsibilities;
var additional_requirements;

function save(el) {
    name_op = document.getElementById('name').value;
    responsible = document.getElementById('responsible').value; 
    getting_started = document.getElementById('getting_started').value; 
    end_of_work = document.getElementById('end_of_work').value;
    city = document.getElementById('city').value; 
    type_work = document.getElementById('type_work').value;
    graph = document.getElementById('graph').value;
    office = document.getElementById('office').value; 
    project = document.getElementById('project').value;
    finance = document.getElementById('finance').value;
    task_description = document.getElementById('task_description').value; 
    competence = document.getElementById('competence').value;
    grade = document.getElementById('grade').value;
    number_of_specialists = document.getElementById('number_of_specialists').value;
    requirements = document.getElementById('requirements').value;
    responsibilities = document.getElementById('responsibilities').value;
    additional_requirements = document.getElementById('additional_requirements').value;
    
    alert("Черновик создан");
    return true;  
}

function report(el) {
    var fail = "";

    //Проверка заполнения 
    if(
        document.getElementById('name').value == "" 
        || document.getElementById('responsible').value == "" 
        || document.getElementById('getting_started').value == ""
        || document.getElementById('end_of_work').value == "" 
        || document.getElementById('city').value == ""
        || document.getElementById('type_work').value == "" 
        || document.getElementById('graph').value == "" 
        || document.getElementById('office').value == "" 
        || document.getElementById('project').value == "" 
        || document.getElementById('finance').value == "" 
        || document.getElementById('task_description').value == "" 
        || document.getElementById('competence').value == ""
        || document.getElementById('grade').value == "" 
        || document.getElementById('number_of_specialists').value == "" 
        || document.getElementById('requirements').value == "" 
        || document.getElementById('responsibilities').value == "" 
        || document.getElementById('additional_requirements').value == ""
    )
        fail = "Заполните все поля";
    else if(document.getElementById('name').value.lenght <= 1 || document.getElementById('name').value.lenght > 100)
        fail = "Введите корректное имя";
    else if (typeof document.getElementById('competence').value !== 'number')
        fail = "Введите корректное компетенцию";
    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
        return false;
    }
    else {
        //массив для Json
        const arr = []

        arr.push(["name", document.getElementById('name').value]);
        arr.push(["responsible", document.getElementById('responsible').value]);
        arr.push(["getting_started", document.getElementById('getting_started').value]);
        arr.push(["end_of_work", document.getElementById('end_of_work').value]);
        arr.push(["city", document.getElementById('city').value]);
        arr.push(["type_work", document.getElementById('type_work').value]);
        arr.push(["graph", document.getElementById('graph').value]);
        arr.push(["office", document.getElementById('office').value]);
        arr.push(["project", document.getElementById('project').value]);
        arr.push(["finance", document.getElementById('finance').value]);
        arr.push(["task_description", document.getElementById('task_description').value]);
        arr.push(["competence", document.getElementById('competence').value]);
        arr.push(["grade", document.getElementById('grade').value]);
        arr.push(["number_of_specialists", document.getElementById('number_of_specialists').value]);
        arr.push(["requirements", document.getElementById('requirements').value]);
        arr.push(["responsibilities", document.getElementById('responsibilities').value]);
        arr.push(["additional_requirements", document.getElementById('additional_requirements').value]);

        const data = Object.fromEntries(arr);
        
        const file = new Blob(
            // сериализуем данные
            [JSON.stringify(data)], {
                type: 'application/json'
            }
        );
        
        
        console.log(file);

        alert("Запрос создан");
        return true;
    }

    
}


// Автозаполненине 
function autofill(el){

    document.getElementById('name').value = name_op;
    document.getElementById('responsible').value = responsible; 
    document.getElementById('city').value = city; 
    document.getElementById('type_work').value = type_work;
    document.getElementById('graph').value = graph;
    document.getElementById('office').value = office; 
    document.getElementById('project').value = project;
    document.getElementById('finance').value = finance;
    document.getElementById('task_description').value = task_description; 
    document.getElementById('competence').value = competence;
    document.getElementById('grade').value = grade;
    document.getElementById('number_of_specialists').value = number_of_specialists;
    document.getElementById('requirements').value = requirements;
    document.getElementById('responsibilities').value = responsibilities;
    document.getElementById('additional_requirements').value = additional_requirements;

    alert("Данные подставлены");
    return true;
}