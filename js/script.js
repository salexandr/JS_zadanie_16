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

	
	function Human() {
		this.name = "Jhon";
		this.age = 25;
		this.sex = "man";
		this.growth = 1750;
		this.weight = 78;
	};
	
	
	function Worker() {
		this.working = function () {
		Worker.job = "Google";
		this.salary = 1500;			
		}
	};
	
    Worker.prototype = new Human;
	
	function Student() {
		this.watchSerials = function () {
		this.study = "university";
		this.grants = 300;			
		}
	};	
	
	Student.prototype = new Human;
	
	var worker1 = new Worker();	
	var student1 = new Student();
	var worker2 = new Worker();	
	var student2 = new Student();	

	console.log(worker2);
    console.log(student2);
    console.log(worker2.name);
    console.log(student2.age);