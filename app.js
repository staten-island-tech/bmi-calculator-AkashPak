//delcare and define function,input output
// make to run function)
function BMI(weight,height)
{
    let b= ((weight / (height*height))*10000)
    
    console.log (b)
  
    if (b <= 18.5) { 
    
    console.log ("underweight")}
    
    else if(b > 18.5 && b <= 24.9){
    console.log ("Normalweight")
       
    }
     else if(b >= 25 && b <= 29.9){
        console.log ("Overweight")
      
    }
    else if(b >= 30){
        console.log ("Obese")
      
    }
}
let weight = Number(prompt("Enter Your Weight(kg)"))
let height = Number(prompt("Enter Your Height(cm)"))
let name= (prompt("Enter Your Name"))

BMI(weight,height)

