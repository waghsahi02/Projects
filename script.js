function show(){
    document.getElementById('name2').innerHTML= document.getElementById('name1').value;

    document.getElementById('contact2').innerHTML= document.getElementById('contact1').value;
    
    document.getElementById('address2').innerHTML= document.getElementById('address1').value;
    
    document.getElementById('linkedin2').innerHTML= document.getElementById('linkedin1').value;
    
    document.getElementById('git2').innerHTML= document.getElementById('git1').value;
    
    document.getElementById('edu2').innerHTML= document.getElementById('edu1').value;
    
    document.getElementById('exp2').innerHTML= document.getElementById('exp1').value;
    
    document.getElementById('tech2').innerHTML= document.getElementById('tech1').value;
    
    document.getElementById('cert2').innerHTML= document.getElementById('cert1').value;



    document.getElementById('form').style.display='none';
    document.getElementById('template').style.display='block';


}


function printresume(){
    window.print();
}