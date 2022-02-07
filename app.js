var names=new Array();
names[0]="Kristin";
names[1]="Nickey";
names[2]="John";
names[3]="Jessica";
names[4]="Paul";
names[5]="Jaun";
names[6]="Saiken";
names[7]="Naruto";
for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}