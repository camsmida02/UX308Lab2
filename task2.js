//Take a variable with a numeric grade and output the corresponding letter grade

let numericGrade = 67;

if (numericGrade >=90){
    console.log("A+")
} 
if (numericGrade <90 && numericGrade>=85){
    console.log("A")
}
if (numericGrade <85 && numericGrade>=74){
    console.log("B")
}
if (numericGrade <74 && numericGrade>=64){
    console.log("C")
}
if (numericGrade <64 && numericGrade>=50){
    console.log("D")
}
if (numericGrade <50){
    console.log("FAIL")
}