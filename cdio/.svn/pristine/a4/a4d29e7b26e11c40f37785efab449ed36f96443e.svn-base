<!-- Query_donatin  Query_trade Query_recharge -->

$(function(){

  var pym_queHight=$(".pym_queContent").height();
  $(".pym_queCpan").css("height",pym_queHight);
  $(".pym_queCpull a").click(function(){
  pym_queJudge=$(this).parent().prev().children().height();
  if(pym_queHight==pym_queJudge)
  {
  $(this).children().attr("src","img/pym_quePullup.png");
  $(this).parent().prev().children().css("height","auto");
  }
  else
  {
   $(this).children().attr("src","img/pym_quePulldown.png");
   $(this).parent().prev().children().css("height",pym_queHight);
  }
    });
  });


<!-- Recharge -->

   function pym_recJudge()
    {
      var zero=0;
      var num=$("#pym_recMoney").val();
  

      var rec_warm="*请输入正确的充值数额";
      var isNumber=/(^[1-9]\d*$)/;

      if(num==0)
      {
        $('#pym_recWarm').html(rec_warm);
        $('#pym_recPrices').html(zero);
        $("#pym_recSub").attr("disabled",true);
      }

      else if(isNumber.test(num))
      {
        $('#pym_recPrices').html(num);
        $("#pym_recSub").attr("disabled",false);
        $('#pym_recWarm').html(null);
      }
      else if(num=="")
      { 
        $('#pym_recPrices').html(zero);
        $("#pym_recSub").attr("disabled",true);
        $('#pym_recWarm').html(rec_warm);
      }
      else{
        $('#pym_recPrices').html(zero); 
        $("#pym_recSub").attr("disabled",true);
        $('#pym_recWarm').html(rec_warm);
      }
    }


   <!-- Donation -->

   function pym_donJudge()
   {

     var yn_judge=$('#pym_donSelect').val();
    
     var yes="A";
     var no="B";
     
     if(yn_judge==yes)
     {
       $('#pym_donInformation').css("display","none");
       $("#pym_QQ").attr("checked",false);
       $("#pym_Email").attr("checked",false);
       $("#pym_Tel").attr("checked",false);
       $("#pym_Contact").attr("checked",false);

     }
     else{
       $('#pym_donInformation').css("display","block");

     }
   }

  $(function(){
     
     var yn_judge=$('#pym_donSelect').val(); 
     var yes="A";
     var no="B";     
     if(yn_judge==yes)
     {
       $('#pym_donInformation').css("display","none");
       $("#pym_QQ").attr("checked",false);
       $("#pym_Email").attr("checked",false);
       $("#pym_Tel").attr("checked",false);
       $("#pym_Contact").attr("checked",false);

     }
     else{
       $('#pym_donInformation').css("display","block");
     }


  });


   function pym_donJudgenumber()
    {

      var num1 = $("#pym_donInput").val();
      var don_warm="*请输入正确的捐赠数额";
      var don_warm2="*当前帐号余额不足,请充值"
      var isNumber=/(^[1-9]\d*$)/;
      var num2=$('#pym_donationPrices').text();
      var num=num1-num2;    
      if(num1==0)
      {
        $('#pym_donWarm').html(don_warm);
        $("#pym_donBtn").attr("disabled",true); 
      }
      else if(num1==null)
      { 
        $("#pym_donBtn").attr("disabled",true);
        $('#pym_donWarm').html(don_warm);
      }
      else if(num>0)
      {
        $("#pym_donBtn").attr("disabled",true);
        $('#pym_donWarm').html(don_warm2);
      }
      else if(isNumber.test(num1))
      {
        $("#pym_donBtn").attr("disabled",false);
        $('#pym_donWarm').html(null);
      }
      else{
        $("#pym_donBtn").attr("disabled",true);
        $('#pym_donWarm').html(don_warm);
      }
    }

<!-- ProofSuccess -->


 function pym_prosucJudgenumber()
  {

    var num = $("#pym_prosucInput").val();
    var prosuc_warm="*请输入正确的点数";
    var isNumber=/(^[1-9]\d*$)/;
    if(num==0)
    {
      $('#pym_prosucWarm').html(prosuc_warm);
      $("#pym_prosucBtn").attr("disabled",true); 
    }
    else if(num==null)
    { 
      $("#pym_prosucBtn").attr("disabled",true);
      $('#pym_prosucWarm').html(prosuc_warm);
    }
    else if(isNumber.test(num))
    {
      $("#pym_prosucBtn").attr("disabled",false);
      $('#pym_prosucWarm').html(null);
    }
    else{
      $("#pym_prosucBtn").attr("disabled",true);
      $('#pym_prosucWarm').html(prosuc_warm);
    }
  }

