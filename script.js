//all-stores the 16 tiles value

var all=['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
//num- the set from which nos are chosen
var num=['1','2','3','4','5','6','7','8'];
do
{
  for(var i=0;i<8;i++)
  {var n=Math.floor(Math.random()*16)+1;
   var m=Math.floor(Math.random()*16)+1;
    if(m!=n&&all[m]==0&&all[n]==0)
    {all[n]=num[i];
     all[m]=num[i];
    }
   else
   {continue;
   }
  }
for(i=0;i<16;i++)
{if(all[i]==0)
  { var j=0;
    break;
  }
   else
  { j=1;
    continue;
  }
}
  }
while(j==0);
//click - to store the id of the div of first and second click
//a - to store the value of the tiles in first and second click
var click;
var a;
//count - to check if end of game is reached
var count=0;
var t=0;
var I;
var q;
function func(I,q)
 {document.getElementById(I).innerHTML=all[q];
revealTile(I,q) 
        };
function revealTile(I,q)
  {if(t==0)
    { t++;
      click=I;
      a=q;
 document.getElementById(click).innerHTML=p[a];   
    }
  else if(t==1)
    {t=0;
     check(I,click,a,q);
    }
   
  };
function check(I,click,a,q)
{if(all[a]==all[q]&&a!=q)
{document.getElementById(I).innerHTML=all[q];
 document.getElementById(click).innerHTML=all[a];
 document.getElementById(I).disabled = true;
 document.getElementById(click).disabled = true;
 count+=2;
 if(count==16)
   document.write("YOU WIN");
}  
 else
   {   setTimeout(function () {
  document.getElementById(I).innerHTML=" "; }, 750);
      setTimeout(function () {
 document.getElementById(click).innerHTML=" "; }, 750);
 }
};