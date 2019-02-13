(function () {
  function loadJson(file,callback) {
  var rawFile=new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 & rawFile.status == "200") {
      callback(rawFile.responseText);
}
  }
  rawFile.send(null);
}
loadJson("resume.json",function (text) {
  var data=JSON.parse(text);
  console.log(data);
  leftData(data.profile);
  console.log(data);
  Education(data.EducationInformation);
  console.log(data);
  Skills(data.Skills);
});
var left=document.querySelector(".leftDiv");
var right=document.querySelector(".rightDiv");
function leftData(leftdetails) {
  var image=document.createElement("img");
  image.src=leftdetails.image;
  image.alt="Profile Image";
  left.appendChild(image);

  var name=document.createElement("h2");
  name.textContent=leftdetails.name;
  left.appendChild(name);

  var branch=document.createElement("h3");
  branch.textContent=leftdetails.branch;
  left.appendChild(branch);

  var mobilenumber=document.createElement("h5");
  mobilenumber.textContent=leftdetails.mobilenumber;
  left.appendChild(mobilenumber);

  var gmail=document.createElement("h5");
  gmail.textContent=leftdetails.gmail;
  left.appendChild(gmail);

  //rightDiv data
  var co=document.createElement("h1");
  co.textContent="career object";
  right.appendChild(co);
  right.appendChild(document.createElement("hr"));
  let p=document.createElement("p");
  p.textContent=leftdetails.careerobject;
  right.appendChild(p);

}
//create education details

function Education(edu) {
  var Education=document.createElement("h1");
  Education.textContent="EducationInformation";
  right.appendChild(Education);
  right.appendChild(document.createElement("hr"));
for(i in edu){
    let h3=document.createElement("h3");
    h3.textContent=edu[i].degree;
    right.appendChild(h3);

    let ul=document.createElement("ul");
    right.appendChild(ul);

     let li1=document.createElement("li");
     li1.textContent="College:"+edu[i].college;
     ul.appendChild(li1);

     let li2=document.createElement("li");
     li2.textContent="Branch:"+edu[i].branch;
     ul.appendChild(li2);

     let li3=document.createElement("li");
     li3.textContent="Marks:"+edu[i].marks;
     ul.appendChild(li3);
   }


}
function Skills(skill){
  var sk=document.createElement("h1");
  sk.textContent="Technical skills";
  right.appendChild(sk);
  right.appendChild(document.createElement("hr"));

  var p=document.createElement("p");
  p.textContent=skill.os;
  right.appendChild(p);

  var p1=document.createElement("p");
  p1.textContent=skill.ps;
  right.appendChild(p1);
}
})()
