var exer2 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];
console.log(exer2);
console.log(exer2.length);
console.log(exer2[6]);

var a = exer2.toString()
console.log(a)
console.log(typeof a)


var b = exer2.join(" / ")  
console.log(exer2)
console.log(b)

var c = exer2.push("IOS");
console.log(exer2)
console.log(c)


 

var exer3 = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995],
    ]
console.log(exer3);
console.log(exer3.length);
console.log(exer3[2][1])


var p = exer3[1][2] = "JavaScript";
console.log(exer3);


delete exer3[2][2];
console.log(exer3);


var e = exer3.push("pipoca");
console.log(exer3)
// console.log(e)