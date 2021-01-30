var app = new Vue({
    el:"#todolist",
    data:{
        thing:{
            "name":"",
            "isOk":false
        },
        items:[]
    },
    methods:{
        deleteAll:function(){
            if(confirm("您确定要删除列表中所有的任务吗？")){
                        this.items=[];
                    }
        },
        addList:function(){
            var test=this.thing.name.trim();
            if(test.length==0){
                this.thing={
                    "name":"",
                    "isOk":false
                };
                return;
            }
            var str=this.thing.name; 
            this.items.push({
                "name":str,
                "isOk":false
            });
            this.thing.name="";
        },
        del:function(){
            let flag=0;
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].isOk==true){
                    flag=1;
                    break;
                }
            }
            if(flag==0){
                alert("您尚未勾选任何任务");
            }else{
                for(var i=0;i<this.items.length;i++){
                    if(this.items[i].isOk==true){
                        this.items.splice(i,1);
                        i--;
                    }
                }
            }
        },
        fix:function(){
            var flag=0;
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].isOk==true){
                    flag=1;
                    break;
                }
            }
            if(flag==0){
                alert("您尚未勾选任何任务");
            }else{
                var temp=prompt("请输入要修改的内容");
                for(var i=0;i<this.items.length;i++){   
                    if(this.items[i].isOk==true){
                    this.items[i].name=temp;
                    this.items[i].isOk=false;
                    }
                }
            }
        }
    }
})