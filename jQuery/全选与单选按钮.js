$(function(){
    $(".checkall").change(function(){
$(".j-checkbox , checkall").prop("check" , $(this).prop("check"));
$(".j-checkbox").change(function(){
    $(".j-checkbox:check").length ===$(".j-checkbox").length  ?  $("checkball").prop("check" , ture)  : $("checkball").prop("check" , false) 
})
    });
})