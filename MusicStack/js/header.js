
   $(function () {
   	// 开关状态
   	var open = false;
   	$('#nav-btn').click(function (){
   		
   	            // 按钮状态
   	    $(this).css("background-color", open ? '#333' : '#222');
   	    var navBar = $('.nav-bar');
   	            // 设置header的高度，将导航列表显示出来
   	    var height = navBar.offset().top + navBar.height();
   	    
   	    $('.nav').animate({
   	        height: open ? 90 : height
   	    });
   	            // 修改开关状态
   	    open = !open;
   	});
   })
		$(window).resize( function  () {     
			if($(window).width()<768){
				$('.nav-bar>li>a').unbind("mouseenter");    
				$('.nav-bar>li>a').unbind("mouseleave");    
				$('.nav-bar>li').unbind("mouseleave");    
				
				var a =0
				$(".nav-bar>li>a").click(function () {
					
            			$(this).siblings("ul").toggle();
            			
            			
            			
					
            	})
				$(".nav-bar>li>a").mouseenter(function () {
            		$(this).siblings(".move").show();
            	}).mouseleave(function () {
            		$(this).siblings(".move").hide();
            	})
            	
			}else{
				$(".nav-bar>li>a").mouseenter(function () {
            		$(this).siblings(".move").show();
            		$(this).siblings("ul").show();
            	}).mouseleave(function () {
            		$(this).siblings(".move").hide();
            	})
            	$(".nav-bar>li").mouseleave(function () {
            		
            		$(this).children("ul").hide();
            	})
			}
		     
		     
		});
		$(function () {
			if($(window).width()<768){
				$('.nav-bar>li>a').unbind("mouseenter");    
				$('.nav-bar>li>a').unbind("mouseleave");    
				$('.nav-bar>li').unbind("mouseleave");    
				
				var a =0
				$(".nav-bar>li>a").click(function () {
					
            			$(this).siblings("ul").toggle();
					
            	})
				$(".nav-bar>li>a").mouseenter(function () {
            		$(this).siblings(".move").show();
            	}).mouseleave(function () {
            		$(this).siblings(".move").hide();
            	})
            	
			}else{
				$(".nav-bar>li>a").mouseenter(function () {
            		$(this).siblings(".move").show();
            		$(this).siblings("ul").show();
            	}).mouseleave(function () {
            		$(this).siblings(".move").hide();
            	})
            	$(".nav-bar li").mouseleave(function () {
            		
            		$(this).children("ul").hide();
            	})
			}
		     
		})
