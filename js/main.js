function save(el) {

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
    else if(name.lenght <= 1 || name.lenght > 100)
        fail = "Введите корректное имя";
    
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

        alert("Черновик создан");
        return true;
    }

    
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
    else if(name.lenght <= 1 || name.lenght > 100)
        fail = "Введите корректное имя";
    
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