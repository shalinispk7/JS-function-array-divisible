// Divisible by 4,3,5 in array
let num = [2,8,9,12,13,16,15,22,21,35,60];

function divisibleCount(num){
	let count=0;
	for(i=0;i<num.length;i++){
	if(num[i]%4==0 && num[i]%3==0 && num[i]%5==0){
		count++;
		}
	}
	return count;
}
document.write("The elements in the array are "+num+"<br>")
document.write("The numbers divisible by 4,3,5 is: "+divisibleCount(num))





