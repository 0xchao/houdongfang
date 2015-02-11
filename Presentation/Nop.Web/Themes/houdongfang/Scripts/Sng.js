// JavaScript Document
$(function(){
	var a = b = 0;
	var opp = false;
	var Mis = true;
	var Ser = true;
	var bannerplay = function(){
			Ser = false;	
			a = b;
			$('.index_banner>ul>li').eq(a).addClass('leave');
			$('.index_banner>ul>li').removeClass('hover');
			a++;
			
			if(a > $('.index_banner>ul>li').length - 1){ 
				a = 0;	
			}	
			if(a == 0){ 
				$('.play_video').eq(0).fadeIn();
			}
			$('.index_banner>ul>li').eq(a).addClass('hover').siblings().removeClass('leave');
			if(a != 0){ 
				$('.play_video').eq(0).fadeOut(1200);
			}
			b = a ;
			setTimeout(function(){Ser=true;},1000);
			//console.log($('.index_banner>ul>li').length)
		}
		
	$('.index_banner>a>img').mouseover(function() {
		clearInterval(timer);
    }).mouseleave(function(){
		timer = setInterval(bannerplay,6000);
	});
	var Vio = true;
	
	$('.play_video').on('click',function() {
		$('#video').css({backgroundColor:'#fff'});
		$('#video').fadeIn(1000,function(){	
		var myPlayer = videojs('video');
			myPlayer.play();
			$('.close').fadeIn(420).after(function(){Vio = false;});

		});
	});
	$('.catelog>ul>li:nth-of-type(1)').delay(100).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(2)').delay(200).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(3)').delay(300).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(4)').delay(400).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(5)').delay(500).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(6)').delay(600).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(7)').delay(700).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(8)').delay(800).animate({top:0,opacity:1},800);
	$('.catelog>ul>li:nth-of-type(9)').delay(900).animate({top:0,opacity:1},800);
	$('.index_banner').mouseenter(function(){	
		if( !Vio ){
			$('.close').fadeIn(420);
		}
	}).mouseleave(function(){
		$('.close').fadeOut(420);
	});
	$('.close').on('click',function() {
		var myPlayer = videojs('video');
		myPlayer.pause();
		$(this).fadeOut(800);
		$('#video').fadeOut(1200);
		Vio = true;
	});

	$('.index_next').on('click',function (){
		if( Ser ){
			bannerplay();
		}
	});
	$('.index_banner>ul>li').eq(0).addClass('hover');

	var timer = setInterval(bannerplay,6000);
	$('.index_prev').on('click',function(){
		if( Ser ){
			Ser = false;
			a = b;
			$('.index_banner li').eq(a).addClass('leave');
			$('.index_banner li').removeClass('hover');
			a--;
			if(a < -1){ 
				a = $('.index_banner>ul>li').length - 2;	
			}
			if(a < 0){ 
				a = $('.index_banner>ul>li').length - 1;	
			}
			$('.index_banner>ul>li').eq(a).addClass('hover').siblings().removeClass('leave');		
			b = a;
			setTimeout(function(){Ser=true;},1000);
		}
	});
	
	$('.shopping input').click(function(){
		if( Mis ){
			Mis = false;
			$(this).css({backgroundImage:'none',textIndent:15});
			$(this).siblings('img').css({display:'block'});
			$(this).animate({width:220},function(){ Mis = true; });
			$(this).attr('placeholder','搜索商品');
		}
	});
	$('.shopping input').blur(function(){
		$(this).attr('placeholder','');
		$(this).animate({width:22},function(){
			$(this).css({backgroundImage:'url("http://www.houdongfang.com/Themes/houdongfang/content/images/search.png")',textIndent:30});
			$(this).siblings('img').css({display:'none'});
		});
		
	});
	
	/*商品列表的排序*/
	$('.filter>div').mouseenter(function(){
		//$(this).find('i:last').html('&#xe610');
		$(this).find('ul').stop().slideDown();
		$('.filter>div').not($(this)).find('ul').stop().slideUp(200);	
		//$('.filter>div').not($(this)).find('i:last').html('&#xe611');
	}).mouseleave(function () {
		$('.filter>div').find('ul').slideUp(200);
		//$(this).find('i:last').html('&#xe611');
  	});
	$('.pagenav>ul').css({width:$('.pagenav>ul>li').length*50});
	$('.pagenav>ul').css({left:(1170-$('.pagenav>ul>li').length*50)/2});
	
	/*单件商品详情展示*/
	var Cop1 = Cop2 = Cop3 = Cop4 = 0;
	$('.product_Bigimg>img').eq(0).fadeIn();
	$('.product_Litimg>img').on('click',function(){
		var product_Litimg_nums = $(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.product_Bigimg>img').eq(product_Litimg_nums).fadeIn().siblings().fadeOut();
		Cop1 = product_Litimg_nums;
	});
	$('.product_intro_prev').on('click',function(){
		Cop3 = Cop1;	
		Cop3--;
		if( Cop3 < 0 ){
			Cop3 = 0;	
		}
		$('.product_Litimg>img').eq(Cop3).addClass('hover').siblings().removeClass('hover');
		$('.product_Bigimg>img').eq(Cop3).fadeIn().siblings().fadeOut();
		Cop1 = Cop3;	
	});
	$('.product_intro_next').on('click',function(){
		Cop3 = Cop1;	
		Cop3++;
		if( Cop3 > $('.product_Bigimg>img').length - 1 ){
			Cop3 = $('.product_Bigimg>img').length - 1;	
		}
		$('.product_Litimg>img').eq(Cop3).addClass('hover').siblings().removeClass('hover');
		$('.product_Bigimg>img').eq(Cop3).fadeIn().siblings().fadeOut();
		Cop1 = Cop3;	
	});

	$('.btn_add').on('click',function(){
		var product_shopping_num = $('.product_shopping_num>input').val();
		product_shopping_num++;
		$('.product_shopping_num>input').val(product_shopping_num);
	});
	$('.btn_reduce').on('click',function(){
		var product_shopping_num = $('.product_shopping_num>input').val();
		product_shopping_num--;
		if(product_shopping_num<1){
			product_shopping_num=1;
		}
		$('.product_shopping_num>input').val(product_shopping_num);
	});
	
	$('.product_shopping_top').on('click',function(){
		$(this).siblings('ul').slideDown(220);
	});
	
	$('.product_shopping_sel>ul>li').on('click',function(){
		$(this).parent().siblings('.product_shopping_top').html($(this).html());
		$(this).parent('ul').slideUp(150);
	});
	
	
	$('.product_tab_right').on('click',function(){
		$('.product_info').css({display:"none"});
		$('.review').css({display:'block'});
		$('.product_tab_line').animate({left:585},420,'swing');
	});
	$('.product_tab_left').on('click',function(){
		$('.product_info').css({display:"block"});
		$('.review').css({display:'none'});
		$('.product_tab_line').animate({left:0},420,'swing');
	});
	
	$('.service_info_tab>div').on('click',function(){
		$('.service_cont>div').eq($(this).index()).css({display:"block"}).siblings('div').css({display:'none'});
		$(this).siblings('p').animate({left:234*$(this).index()},420,'swing');
	});
	$('.entry_1B').on('click',function(){
		$('.entry_3').css({display:"block"});
		$('.entry_2').css({display:'none'});
		$('.entry_line').animate({left:150},420,'swing');
	});
	$('.entry_1T').on('click',function(){
		$('.entry_2').css({display:"block"});
		$('.entry_3').css({display:'none'});
		$('.entry_line').animate({left:0},420,'swing');
	});
	
	/*登录、注册框*/
	var H = $('body').height();
	$('.entry').css({marginTop:(H-500)/2});
	
	$('.deng').on('click',function(){
		$('.mask').fadeIn();
		$('.entry_2').css({display:"block"});
		$('.entry_3').css({display:'none'});
		$('.entry_line').animate({left:0},420,'swing');
	});
	$('.zhu').on('click',function(){
		$('.mask').fadeIn();
		$('.entry_3').css({display:"block"});
		$('.entry_2').css({display:'none'});
		$('.entry_line').animate({left:150},420,'swing');
	});
	$('.entry_close').on('click',function(){
		$('.mask').fadeOut();
	});
	/*购物车弹窗*/
	$('.cart').on('click',function(){
		$('.shopcart').fadeIn();
		$('.shopcart_mask').css({marginTop:(H-$('.shopcart_mask').outerHeight())/2});
	});
	$('.shopcart_close').on('click',function(){
		$('.shopcart').fadeOut();
	});
	var shopPush = shopShare = true;
	$('.shop_push').on('click',function(){
		if(shopPush ){
			shopPush = false;
			$(this).css({backgroundColor:'#ab2828',color:'#fff'}).html('已加入购物车');	
			setTimeout(function(){
				$('.shop_push').css({backgroundColor:'#fff',color:'#000'}).html('加入购物车');	
				shopPush = true;
			},2500);
		}
	});
	$('.share').on('click',function(){
		if(shopShare ){
			shopShare = false;
			$(this).css({backgroundColor:'#ab2828',color:'#fff'}).html('已收藏');	
			setTimeout(function(){
				$('.share').css({backgroundColor:'#fff',color:'#000'}).html('收藏');	
				shopShare = true;
			},2500);
		}
	});
	/*购物车计算*/
	var shopcart_price = Ztm = 0;
	var Price = Pont = true;
	$('.shopcart_add').on('click',function(){

		var shopcart_num = $(this).siblings('.quantity_cont').html();
		var shopcart_price = parseFloat($(this).parent().siblings('.price').find('i').html());
		shopcart_num++;
		$(this).siblings('.quantity_cont').html(shopcart_num);
		//$(this).parent().siblings('.price').find('i').html(parseFloat(shopcart_num*shopcart_price) == parseInt(shopcart_num*shopcart_price)?String(shopcart_num*shopcart_price)+'.00':shopcart_num*shopcart_price);
		
		Pont = true;
	});
	$('.shopcart_reduce').on('click',function(){

		var shopcart_num = $(this).siblings('.quantity_cont').html();
		if( Price ){
			shopcart_price = String($(this).parent().siblings('.price').find('i').html());
		}
		shopcart_num--;
		if( shopcart_num < 1 ){
			shopcart_num = 1;
		}
		$(this).siblings('.quantity_cont').html(shopcart_num);
		//$(this).parent().siblings('.price').find('i').html(String(shopcart_num*shopcart_price) == parseFloat(shopcart_num*shopcart_price)?String(shopcart_num*shopcart_price)+'.00':shopcart_num*shopcart_price);
		Price = false;
	});
	
    /*订单列表*/
	$('.shopping_state_kuc').css({ left: (220 - $('.shopping_state_kuc').width()) / 2 });
	var move_ids = Wob = 0;
	var Chek = true;
	$('.shopping_state_span2').html(move_ids);
	$("[name='allcheckbox']").on('click', function () {
	    if ($(this).prop('checked') == true) {
	        $('.shopping_state_th1>input').prop('checked', true);
	    } else {
	        $('.shopping_state_th1>input').prop('checked', false);
	    }
	});

	$(".shopping_state_add").click(function () {
	    var shopping_state_price = $(this).parents('.shopping_state_tr').find('input[class*=text_box]');
	    shopping_state_price.val(parseInt(shopping_state_price.val()) + 1);
	    //console.log(parseInt(shopping_state_price.val()));
	});
	$(".shopping_state_reduce").click(function () {
	    var shopping_state_price = $(this).parents('.shopping_state_tr').find('input[class*=text_box]');

	    if (parseInt(shopping_state_price.val()) > 0) {
	        shopping_state_price.val(parseInt(shopping_state_price.val()) - 1);
        }

	});

    //var str = 123.456;
    //alert(str.toFixed(2));
    /**/
	$('.checkout_info_top').on('click', function () {
	    $('.checkout_info1>ul').not($(this)).slideUp(180);
	    $(this).siblings('ul').slideDown(240);
	});
	$('.checkout_info1>ul>li').on('click', function () {
	    $(this).parent().siblings('.checkout_info_top').html($(this).html());
	    $(this).parent('ul').slideUp(240);
	});
	$('.checkout_address_add').on('click', function () {
	    $('.checkout_address_list').css({ display: 'block' });
	    $(this).css({ display: 'none' });
	});
	$('.checkout_address_close').on('click', function () {
	    $(this).parents('.checkout_address_list').css({ display: 'none' });
	    $('.checkout_address_add').css({ display: 'block' });

	});
	$("[name='checkout_bill']").on('click', function () {
	    if ($('.checkout_bill_2').find("input").prop("checked") == true) {
	        $('.checkout_bill_details').fadeIn();
	    } else {
	        $('.checkout_bill_details').fadeOut();
	    }
	});

	$('.checkout_cont_li').on('click', function () {
	    $(this).animate({ opacity: 1 }, 240);
	    $('.checkout_cont_li').not($(this)).animate({ opacity: 0.3 }, 240);

	});

	$('.shopping_inner_sub').find("input").on('click', function () {
	    $('.pay_mask').fadeIn();
	});
	$('.pay_close').on('click', function () {
	    $('.pay_mask').fadeOut();
	});

	
	
	
});