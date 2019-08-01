
$(document).ready(function(){
window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth' 
});



    
    
//declaration and initialization/////////////////////////////////////////////////////////////////////
var const_interval;
var country_code_select="null";
var index=-1;
var url="https://newsapi.org/v2/top-headlines?country=in&apiKey=9ba3d0f7d9474cbd99e846d8cebb3e16"
var searchResultArray=[];
var imgLink=" ";
var news_title="";
var news_link="";
var prev=document.getElementById("previous_button");
var nex=document.getElementById("next_button");
var linkArr=[];
var imgNo=-1;
var temp;
var count=3;
var searchArea=$(".search-txt");

//Headlines display interval section//////////////////////////////////////////////////////////////////
cards=Array.from(document.getElementsByClassName("head_slides"));
titles=Array.from(document.getElementsByClassName("title_slides"));


console.log("cards="+cards);
console.log("titles="+titles);




temp=cards[2];
cards[2]=cards[1];
cards[1]=cards[0];
cards[0]=temp;

temp=titles[2];
titles[2]=titles[1];
titles[1]=titles[0];
titles[0]=temp;

function start_interval(){

	const_interval=setInterval(function()
	{

	
		if(count%3==0){
		count=0;

		imgNo=(imgNo+3)%18;	



		$(titles[0]).attr("href",linkArr[imgNo+2].url)	
		$(titles[0]).text(linkArr[imgNo+2].title);
		$(cards[0]).css("background-image","url("+linkArr[imgNo+2].urlToImage+")");
		
		
		$(titles[1]).attr("href",linkArr[imgNo].url)	
		$(titles[1]).text(linkArr[imgNo].title);
		$(cards[1]).css("background-image","url("+linkArr[imgNo].urlToImage+")");
		
		$(titles[2]).attr("href",linkArr[imgNo+1].url)	
		$(titles[2]).text(linkArr[imgNo+1].title);
		$(cards[2]).css("background-image","url("+linkArr[imgNo+1].urlToImage+")");
		}
		
		console.log("count="+count+"imgNo="+imgNo);
		nextSlide();
	

	},5000);


}



//Headlines section////////////////////////////////////////////////////////////////////////////////////

country_code_select=window.sessionStorage.getItem("cc");
index=window.sessionStorage.getItem("si");

console.log(country_code_select);

console.log(index);






if(index!=-1)
	document.getElementById("country_select").selectedIndex=index;
if(country_code_select===null)
url="https://newsapi.org/v2/top-headlines?country=in&apiKey=9ba3d0f7d9474cbd99e846d8cebb3e16"
else
url="https://newsapi.org/v2/top-headlines?country="+country_code_select+"&apiKey=9ba3d0f7d9474cbd99e846d8cebb3e16"


console.log("url="+url);

$.get(url,function(response){

linkArr=Array.from(response.articles);
console.log("linkArr="+linkArr);
start_interval();

});






//COUNTRY CHANGE SECTION/////////////////////////////////////////////////////////////////////////////
$('#country_select').on('change',function(){



country_code_select=document.getElementById("country_select").value;
index=document.getElementById("country_select").selectedIndex;

window.sessionStorage.setItem("cc",country_code_select);
window.sessionStorage.setItem("si",index);

console.log(window.sessionStorage.getItem("cc"));

console.log(window.sessionStorage.getItem("si"));


location.reload();
});


//ACTION LISTENERS SECTION/////////////////////////////////////////////////////////////////////////////


$("#business").click(function(){

window.sessionStorage.setItem("cat","business");
window.open("./cat.html");

});


$("#entertainment").click(function(){

window.sessionStorage.setItem("cat","entertainment");
window.open("./cat.html");

});



$("#health").click(function(){

window.sessionStorage.setItem("cat","health");
window.open("./cat.html");

});



$("#science").click(function(){

window.sessionStorage.setItem("cat","science");
window.open("./cat.html");

});



$("#sports").click(function(){

window.sessionStorage.setItem("cat","sports");
window.open("./cat.html");

});



$("#tech").click(function(){

window.sessionStorage.setItem("cat","technology");
window.open("./cat.html");

});






















searchArea.keypress(function(event){

	if(event.which===13)
	{




		$("#result_list").empty();
		
		console.log("enter");
		var searchString=searchArea.val();
		var urlSearch="https://newsapi.org/v2/everything?q="+searchString+"&sortBy=popularity&pageSize=10&language=en&apiKey=9ba3d0f7d9474cbd99e846d8cebb3e16"
		console.log(urlSearch);
	

					$.get(urlSearch,function(response){

							searchResultArray=Array.from(response.articles);
							console.log("this is"+searchResultArray);
						showResult();


					});

	}

});




function showResult()
{

	
	for(var i=0;i<searchResultArray.length;i++)
	{
				
		var article=searchResultArray[i];
		console.log(article.urlToImage);

		var imgSource=article.urlToImage;
		var urlToNews=article.url;
		var articleTitle=article.title;
		var articleDescription=article.description;
		
		var new_div=$("<div class='result_div'>"+
                    "<img src="+imgSource+">"+
                    "<a href="+urlToNews+">"+articleTitle+"</a>"+
                    "<p>"+articleDescription+"</p></div>"
                    );

		$("#result_list").append(new_div);
		
	}


window.scroll({
  top: 1300, 
  left: 0, 
  behavior: 'smooth' 
});



}











$("#category_select").click(function(){

window.scroll({
  top: 610, 
  left: 0, 
  behavior: 'smooth' 
});

});

$("#top").click(function(){

window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth' 
});

});




$(prev).click(function(){ prevSlide();});

$(nex).click(function(){nextSlide();});

	function prevSlide()
	{


temp=cards[2];
cards[2]=cards[1];
cards[1]=cards[0];
cards[0]=temp;


	temp=titles[2];
titles[2]=titles[1];
titles[1]=titles[0];
titles[0]=temp;



$(cards[0]).css("z-index","7");
	$(cards[0]).css("transform","translatex(-150px) scale(1)");

	$(cards[1]).css("z-index","8");
	$(cards[1]).css("transform","translatex(0px) scale(1.2)");
	
	$(cards[2]).css("z-index","7");
	$(cards[2]).css("transform","translatex(150px) scale(1)");
	

}


function nextSlide()
{

	count=(count+1);
	$(cards[0]).css("z-index","7");
	$(cards[0]).css("transform","translatex(-150px) scale(1)");

	$(cards[1]).css("z-index","8");
	$(cards[1]).css("transform","translatex(0px) scale(1.2)");
	
	$(cards[2]).css("z-index","7");
	$(cards[2]).css("transform","translatex(150px) scale(1)");
	

	temp=cards[0];
cards[0]=cards[1];
cards[1]=cards[2];
cards[2]=temp;


	temp=titles[0];
titles[0]=titles[1];
titles[1]=titles[2];
titles[2]=temp;

}



});
