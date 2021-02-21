$(function(){
    class Tab {
        constructor(id){
            //  获取元素
         this.main = document.querySelector(id) ;
         this.lis = this.main.querySelectorAll('li') ;
         this.sections = this.main.querySelectorAll('section') ;
        //  this.init() ;
        }
        init(){
           //初始化相关元素绑定事件
            for( var i = 0 ; i <= this.lis.length ; i++){

            //    index  ?? 未定义

               this.lis[i].index()  = i ;
               this.lis[i].onclick = function(){
                   console.log(this.index());
                //   console.log(1);
                  
              }   
            }

        //    console.log( $('lis').each());
       
        // var lis = $('lis')[0] ;
        // $('main').on("click" , function(){
        //     $.each(lis ,function(i,ele){
        //         // console.log(i);        undefined  ?
        //         console.log(i);
                
        // });

       // });
    //     $("main").on("click" , function(){
    //         $('lis').each(function(i,ele){
    //             console.log(i);
    //             console.log(22);
    //  })
        // })
        // console.log($('sections').html() );   undefined ?
          
              
        
        
        }
        toggleTab() {}
        addTab() {} 
        removeTab() {}
        editTab() {}
        
    }
 var tab =  new Tab('#tab') ;
 tab.init() ;
    
})