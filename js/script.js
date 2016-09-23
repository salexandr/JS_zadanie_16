$(function(){
function searchImg(bum){
	var ssilka = 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag='+bum+'&limit=3';
$.getJSON(ssilka,
function(data){
    var ul = document.createElement("ul");
    $.each(data.results, function(i, val){
            var li = document.createElement("li");
			li.innerHTML ='<img src="'+val.url+'" alt="'+val.title+'">';
            ul.appendChild(li);
			console.log(val);
    });
    $('.images').html(ul);
});
};

$('.mbtn').on('click', function(){
	var inputValue = $('.text-field').val();
	searchImg(inputValue);
});

$(".text-field").keypress(function(e){
if(e.keyCode==13){
	var inputValue = $('.text-field').val();
	searchImg(inputValue);
}
});
}); 

	
	var Human = {
		name: "Jhon",
		age: 25,
		sex: "man",
		growth: 1750,
		weight: 78
	};
	
	
	var worker = {
		job: "Google",
		salary: 1500
	};
    worker.__proto__ = Human;
	
	var Student = new Object();
	
	Student.study = "university";
	Student.grants = 300;	
    Student.__proto__ = Human;
	
	var worker1 = {};
    for (var key in worker) {
        worker1[key] = worker[key];
    };
	
	var Student1 = {};
    for (var key in Student) {
        Student1[key] = Student[key];
    };	

    console.log(worker1);
    console.log(Student1);