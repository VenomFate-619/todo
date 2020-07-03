var btn=document.getElementsByTagName("button")[0]
var add_input=document.getElementById("i-t");
var task_con=document.getElementsByClassName("task_con")[0]
var complete=document.getElementById("my-collapse") 
var checkbox=complete.querySelectorAll("input");
var start=document.getElementsByClassName("begin")[0]
var task=task_con.getElementsByClassName("task")

// localStorage.clear()

// onload
function on_refresh()
{
    if(typeof(Storage) !== "undefined" && Number(localStorage.length)>=2) 
    {
         start.style.display="none";
        for(let i=0;i<localStorage.length;i++)
        {
          if(localStorage.key(i)!="count")
          {
            var task_data=`<div class="task ">
            <p><input type="checkbox" name="" id="${localStorage.key(i)}" /><label for="${localStorage.key(i)}"> ${localStorage.getItem(localStorage.key(i))}</label>
            </p></div>`
            task_con.insertAdjacentHTML("afterbegin",task_data);//change1

          }  
            

        }
        // ading event listerner
        for(let i=0;i<task.length;i++)
        {
            task[i].addEventListener("click",tocomplete)
        }

       
    }
}
if(!localStorage.count)
{
    localStorage.count="0";
}

// localStorage.clear()
// adding tasks
add_input.addEventListener("keypress",add);
function add(e)
{
    if(this.value!="")
    {
        if(e.keyCode=="13")
        {
            // console.log(e.type+" "+e.keyCode);
            start.style.display="none";
            localStorage.count=Number(localStorage.count)+1;
            var unique=`l${Number(localStorage.count)}`
            localStorage.setItem(unique,this.value)
            var task_data=`<div class="task">
            <p><input type="checkbox" name="" id="${unique}" /><label for="${unique}"> ${this.value}</label>
            </p>
            </div>`
            task_con.insertAdjacentHTML("afterbegin",task_data);
            this.value=""
        }
    }
    // ading event listerner
    for(let i=0;i<task.length;i++)
    {
        task[i].addEventListener("click",tocomplete)
    }
    // console.log(e.type+" "+e.keyCode);
}

//complete
function tocomplete()
{
    setTimeout(()=>
    {
    var sound=new Audio('sound/Click_Soft_00.wav');
    sound.play()
    console.log("click");
    $(".task").fadeIn();
    complete.insertAdjacentElement("afterbegin",this)
    var label_in_com=this.querySelector("label")
    
   var  todelete=label_in_com.htmlFor
    // checkbox.disabled="true"
    
    localStorage.removeItem(todelete)
    todelete="pk"
    console.log(todelete)
    if(Number(task_con.childElementCount)== 2)
    {
        start.style.display="block";
    }
    this.removeEventListener("click",tocomplete)
    },500)
}
btn.addEventListener("click",()=>
{
    btn.firstElementChild.classList.toggle("move")
})



