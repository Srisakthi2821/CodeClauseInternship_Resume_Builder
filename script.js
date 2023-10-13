let mainContainer = document.getElementById("main_container");
let selectTemplate = document.getElementById("SelectTemplate");
let BuildButton = document.getElementById("buildButton");
let BuildButton2 = document.getElementById("buildButton2");
let backIcon = document.getElementById("backIcon");
let template1Container = document.getElementById("Template1Container");
let template2Container = document.getElementById("Template2Container");
let template1 = document.getElementById("template1");
let template2 = document.getElementById("template2");
let form_One = document.getElementById("template_form1");
let Template1COntainer = document.getElementById("Input_template1")
let InputTemplate1 = document.getElementById("Input_template1");

let TemplatesObjectData = {
    "template1": false,
    "template2": false
}
BuildButton2.addEventListener('click', function() {
    mainContainer.classList.add("d-none");
    selectTemplate.classList.remove("d-none");
})
BuildButton.addEventListener('click', function() {
    mainContainer.classList.add("d-none");
    selectTemplate.classList.remove("d-none");
});
backIcon.onclick = function() {
    mainContainer.classList.remove("d-none");
    selectTemplate.classList.add("d-none");
}
template1.onclick = function() {
    mainContainer.classList.add("d-none");
    selectTemplate.classList.add("d-none");
    Template1COntainer.classList.toggle('d-none');
    TemplatesObjectData.template1 = true;
    console.log(TemplatesObjectData);
}
template2.onclick = function() {
    mainContainer.classList.add("d-none");
    selectTemplate.classList.add("d-none");
    Template1COntainer.classList.toggle('d-none');
    TemplatesObjectData.template2 = true;
    console.log(TemplatesObjectData);
}

function displayTemplate1() {
    template1Container.classList.toggle('d-none')
}

function displayTemplate2() {
    template2Container.classList.toggle('d-none')
}




function formsubmiting_fun() {
    event.preventDefault();

    let Name_inp = document.getElementById("user_name");
    let useraboutip = document.getElementById("user_about");
    let userskill_ip = document.getElementById("user_skills");
    let projecttit_ip = document.getElementById("user_projectTitle");
    let user_projectexp_ip = document.getElementById("user_projectExperience");
    let user_gen_ip = document.getElementsByName("user_gender");
    let usereducation_ip = document.getElementById("usereducation");
    let usermobile_ip = document.getElementById("user_mobile");
    let user_mail_ip = document.getElementById("user_email");


    if (TemplatesObjectData["template1"] === true) {
        console.log(TemplatesObjectData["template1"])
        let temp1_name = document.getElementById("temp1_name");
        let temp1_mail = document.getElementById("mainID_temp1_2");
        let temp1_mail_2 = document.getElementById("mainID_temp1_2")
        let about_temp1 = document.getElementById("about_temp1");
        let temp1_skills = document.getElementById("temp1_skills");
        let temp1_proTitle = document.getElementById("temp1_proTitle");
        let pro_des_temp1 = document.getElementById("pro_des_temp1");
        let temp1_education = document.getElementById("temp1_education");
        let mobilenumber_temp1 = document.getElementById("mobilenumber_temp1");
        let gen_user_temp1 = document.getElementById("gender_temp1");

        temp1_name.textContent = Name_inp.value;
        temp1_mail.textContent = user_mail_ip.value;
        about_temp1.textContent = useraboutip.value;
        temp1_skills.textContent = userskill_ip.value;
        temp1_proTitle.textContent = projecttit_ip.value;
        pro_des_temp1.textContent = user_projectexp_ip.value;
        temp1_education.textContent = usereducation_ip.value;
        mobilenumber_temp1.textContent = usermobile_ip.value;


        InputTemplate1.classList.add("d-none")
        template1Container.classList.remove("d-none")
    } else {
        let temp2_name = document.getElementById("temp2_name");
        let temp2_mail_1 = document.getElementById("temp2_mail_1");
        let temp2_mail_2 = document.getElementById("temp2_mail_2")
        let about_temp2 = document.getElementById("about_temp2");
        let temp2_skills = document.getElementById("temp2_skills");
        let temp2_proTitle = document.getElementById("temp2_proTitle");
        let pro_des_temp2 = document.getElementById("pro_des_temp2");
        let temp2_education = document.getElementById("temp2_education");
        let mobilenumber_temp2 = document.getElementById("mobilenumber_temp2");

        temp2_name.textContent = Name_inp.value;
        temp2_mail_1.textContent = user_mail_ip.value;
        temp2_mail_2.textContent = user_mail_ip.value;
        about_temp2.textContent = useraboutip.value;
        temp2_skills.textContent = userskill_ip.value;
        temp2_proTitle.textContent = projecttit_ip.value;
        pro_des_temp2.textContent = user_projectexp_ip.value;
        temp2_education.textContent = usereducation_ip.value;
        mobilenumber_temp2.textContent = usermobile_ip.value;



        InputTemplate1.classList.add("d-none")
        template2Container.classList.remove("d-none")
    }


}
form_One.addEventListener("submit", formsubmiting_fun)