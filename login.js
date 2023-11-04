document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");





    console.log("dont try to cheat otherwise you will be disqualified ");

    var data = {};
  
      onload = fetch("./data.csv").then(res=>{
          return res.text()
          }).then(data=> {
            let user = data.split(/[\n,\r]/).filter((e)=>e.length>1);
            let len = user.length
            for(let i=1;i<len/2;i++){
              let email = user[i*2];
              let password = user[i*2+1];
              data[teamname] = password;
            }
          })

  
    const team= document.querySelectorAll("input");
    var teamid;
    var pass;
    
    function submit() {
      team.forEach((element)=>{
        if(element.id==="teamid"){
          teamid = element.value;
          pass= team_data[element.value];
          if(pass===undefined){
            alert("Wrong teamname");
          }
          
        }
  
        if(element.id==="password"){
          if(pass === element.value){
            localStorage.setItem("teamid", pass);
            localStorage.setItem("teamname", teamid );
            if(localStorage.getItem("counter") === null || localStorage.getItem("counter")=== NaN){
              localStorage.setItem("counter", 0 );
            }
            window.location.href = "riddle.html";
          }
          else{
            alert("wrong password(tip:team name and password is case sensitive)");
          }
        }
      })
    }



    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // You can add your login validation logic here
        if (email === "admin@gmail.com" && password === "admin") {
            errorMessage.textContent = "";
            window.location.href="/dashboard.html"
            // Redirect to the user's dashboard or perform login logic
        } else {
            errorMessage.textContent = "Invalid email or password";
        }
    });
});