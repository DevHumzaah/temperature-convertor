const calculateTemp=()=>{

    const numberTemp=document.getElementById("temp").value;
    const tempSelected=document.getElementById('temp_diff');

    const valueTemp =temp_diff.options[tempSelected.selectedIndex].value;


    const celToFah=(cel)=>{
        let fahrenheit= Math.round((cel*9/5) + 32);
        return fahrenheit;
    }

    const fahToCel=(fah)=>{
        let celsius= Math.round((fah  - 32) *9/5 );
        return celsius;
    }

    const fahToKel=(fah)=>{
        let kelvin= Math.round((fah - 32) * 5/9 + 273.15 );
        return kelvin;
    }
    const kelToFah=(kel)=>{
        let fahrenheit= Math.round((kel - 273.15) * 9/5 + 32 );
        return fahrenheit;
    }
    const celToKel=(cel)=>{
        let kelvin= Math.round(Kel - 273.15 );
        return kelvin;
    }
    const kelToCel=(kel)=>{
        let celsius= Math.round(kel - 273.15 );
        return celsius;
    }




    let result;

    if(valueTemp=='cel'){
        result=celToFah(numberTemp);
        document.getElementById('resultConatiner').innerHTML=`${result} °Fahrenheit`;


    }
    else if(valueTemp=='fah'){
        result=fahToCel(numberTemp);
        document.getElementById('resultConatiner').innerHTML=`${result} °Celsius`;
    }
    else if(valueTemp=='Kel'){
        result=kelToFah(numberTemp);
        document.getElementById('resultConatiner').innerHTML=`${result} °Fahrenheit`;

    }else if(valueTemp=='fah'){
        result=fahToKel(numberTemp);
        document.getElementById('resultConatiner').innerHTML=`${result} °Kelvin`;
    }
    else if(valueTemp=='Kel'){
        result=kelToCel(numberTemp);
        document.getElementById('resultConatiner').innerHTML=`${result} °Celsius`;
    }else{
        result=celToKel(numberTemp);
        document.getElementById('resultConatiner').innerHTML=`${result} °Kelvin`;
    
    }


}