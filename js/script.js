//exe-3

function myFunction(){
    let mail = "narmin@mail.ru";
    let index = mail.indexOf("@");
    let new_mail = mail.replace( mail.slice(1, index) , "*****" );
    console.log(new_mail)
}

myFunction()



//exe-2

function truncate_string(lorem, number){
    return lorem.slice(0, number);
}

console.log(truncate_string("Leman Pashayeva" , 7))