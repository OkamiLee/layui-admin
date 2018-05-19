(function(z){
	var $;//默认加载内置jquery模块
	layui.use('jquery',function(){
		$ = layui.jquery;
		$(function(){
			$('input[date]').focus(function(){//日期组件
				layui.use('laydate', function(){
					var dateType;
				  	var laydate = layui.laydate;
				  	if($(this).attr('date')=='time'){
						dateType = 1;
					}
					if($(this).attr('date')=='datetime'){
						dateType = 0;
					}
					laydate.render({
				    	elem: 'input[date]' //挂载元素
				  	});
				});
			})
			$('input[zg-form = "phone"]').each(function(i){
				$('input[zg-form = "phone"]').eq(i).blur(function(){
					var val = $(this).val(); 
				    var reg = /^1[34578]\d{9}$/;
				    if(!(reg.test(val))){ 
				        $(this).css({borderColor:'red'});
				        $(this).focus();
				        zg.pop.msg('请输入正确的手机号');
				    }else{
				    	$(this).css({borderColor:'#e6e6e6'});
				    }
				})
			})
			$('input[zg-form = "email"]').each(function(i){
				$('input[zg-form = "email"]').eq(i).blur(function(){
					var val = $(this).val(); 
				    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;; 
				    if(!(reg.test(val))){ 
				        $(this).css({borderColor:'red'});
				        $(this).focus();
				        zg.pop.msg('请输入正确的邮箱');
				    }else{
				    	$(this).css({borderColor:'#e6e6e6'});
				    }
				})
			})
			$('input[zg-form = "id"]').each(function(i){
				$('input[zg-form = "id"]').eq(i).blur(function(){
					var val = $(this).val(); 
				    var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
				    if(!(reg.test(val))){ 
				        $(this).css({borderColor:'red'});
				        $(this).focus();
				        zg.pop.msg('请输入正确的身份证号');
				    }else{
				    	$(this).css({borderColor:'#e6e6e6'});
				    }
				})
			})
			$('input[zg-form = "must"]').each(function(i){
				$('input[zg-form = "must"]').eq(i).blur(function(){
					if($('input[zg-form = "must"]').eq(i).val().length<1){
						$(this).attr('placeholder','此项是必填项')
						$(this).focus();
					}
				})
			})
		})
		/* carousel
		 * props  {imgUrl:[图片地址数组]}
		 * */
		$.fn.extend({
			carousel(props){
				var $self = this;
				var defaultObj = { 
					width:'100%'
					,height:'500px'
					,arrow: true //始终显示箭头
					,interval:5000
				}
				var newsObj = $.extend(defaultObj,props);
				$self.addClass('layui-carousel');
				$self.attr('id','zg-carousel-component');
				var carouselStr = " <div carousel-item>"
				$.each(newsObj.imgUrl,function(i){
					carouselStr += "<img src = " + newsObj.imgUrl[i] + "/>"
				})
				carouselStr += "</div>";
				$self.append(carouselStr);
				layui.use('carousel', function(){
				  	var carousel = layui.carousel;
				  	carousel.render({
				    	elem: '#zg-carousel-component'
				    	,width: newsObj.width 
				    	,height: newsObj.height 
				    	,arrow: newsObj.arrow 
				    	,interval: newsObj.interval 
				  	});
				});
			}
		})
		$.fn.extend({
			editor(){
				this.append('<textarea class="layui-textarea" id="textEditor" style="display: none"></textarea>')
				layui.use('layedit', function(){
	                var layedit = layui.layedit
	                ,$ = layui.jquery;
	                var index = layedit.build('textEditor');
	            });
			}
		})
		$.fn.extend({
			tab(props){
				var ele = document.createElement("div");
				ele.className ="layui-tab layui-t237890-ab-brief";
				ele.setAttribute('lay-filter','docDemoTabBrief');
				var navBox = document.createElement("ul");
				navBox.className = "layui-tab-title";
				var conBox = document.createElement("div");
				conBox.className = "layui-tab-content";
				for(var i=0;i<props.nav.length;i++){
					if(i==0){
						navBox.innerHTML += '<li class="layui-this">'+props.nav[i]+'</li>';
						conBox.innerHTML += '<div class="layui-tab-item layui-show">'+props.content[i]+'</div>';
					}else{
						navBox.innerHTML += '<li>'+props.nav[i]+'</li>';
						conBox.innerHTML += '<div class="layui-tab-item">'+props.content[i]+'</div>';
					}
				}
				ele.appendChild(navBox);
				ele.appendChild(conBox);
				this[0].appendChild(ele)
			}
		})
		$.fn.extend({
			linkage(props){
				var form = layui.form;
				var hie = props.hie;
				var pIndex = -1;
				var adress = props.data;
		        var $self = this;
		        for(var i=0;i<hie;i++){
		        	var sele = $('<select class="sele'+(i+1)+'" ></select>');
		        	$self.append(sele);
		        }
		        $.each(adress.pres,function(i){
		        	let preOption = new Option(adress.pres[i], i);
		        	$('.sele1')[0].options.add(preOption);
		        })
		        $.each(adress.cities[0],function(i){
		        	let cityOption = new Option(adress.cities[0][i], i);
		        	$('.sele2')[0].options.add(cityOption);
		        })
		        if(props.hie==3){
		        	$.each(adress.areas[0][0],function(i){
			        	let areaOption = new Option(adress.areas[0][0][i], i);
			        	$('.sele3')[0].options.add(areaOption);
			        })
		        }
		        if(props.hie==4){
		        	$.each(adress.street[0][0][0],function(i){
			        	let areaOption = new Option(adress.areas[0][0][i], i);
			        	$('.sele3')[0].options.add(areaOption);
			        })
		        }
		       	$('.sele1').change(function(){
		       		if($(this).val()==-1){
		       			$('.sele2')[0].options.length = 0;
		       			$('.sele3')[0].options.length = 0;
		       		}
		       		var val = $(this).val();
		       			pIndex = $(this).val();
		       		var cityArr = adress.cities[val];
		       		if(props.hie==3){
		       			var areaArr = adress.areas[val][0];
		       			$('.sele3')[0].options.length = 0;
		       			$.each(areaArr,function(i){
		       				var areaOption = new Option(areaArr[i], i);
		       				$('.sele3')[0].options.add(areaOption);
		       			})
		       		}
		       		$('.sele2')[0].options.length = 0;
	       			$.each(cityArr,function(i){
	       				var cityOption = new Option(cityArr[i], i);
	       				$('.sele2')[0].options.add(cityOption);
	       			})
	       			
		       	}) 
		       	if(props.hie==3){
		       		$('.sele2').change(function(){
			       		var val = $('.sele2')[0].selectedIndex;
			       		console.log(pIndex+'/'+val)
			       		var areaArr = adress.areas[pIndex][val];
			       		$('.sele3')[0].options.length = 0;
			       		$.each(areaArr,function(i){
		       				var areaOption = new Option(areaArr[i], i);
		       				$('.sele3')[0].options.add(areaOption);
		       			})
			       	})
		       	}
		       	
			}
		})
	});
	z.zg = {
		/* init
		 * 初始化加载需要的组件
		 * components组件名称    "layer"||['layer', 'form']
		 * callback 回调函数
		 * */
		init(components,callback){
			layui.use(components,callback);
		}
		,pop:{//弹出层
			open(props){
				var defaultObj = {
					type:0,
					content:'卓感科技',
					title:'标题',
					anim:5,
					move:false
				}
				var newObj;
				($) ? newObj = $.extend(defaultObj,props) : newObj = props;
				layer.open(newObj)
			}
			,alert(content){//弹窗
				layer.alert(content); 
			}
			/* confirm  询问框
			 * props {icon: 3, title:'提示'}
			 * trueBall 点击确定回调  index=1确定  layer.close(index);
			 * */
			,confirm(title,trueBall){
				layer.confirm(title,trueBall);
			}
			,msg(content,callback){//提示框
				layer.msg(content, {
				  	icon: 1,
				  	time: 2000 //2秒关闭（如果不配置，默认是3秒）
				},callback); 
			}
			/* iframe 分页弹出层
			 * props {title:标题，url:加载的地址，aspect：[width,height]}
			 * */
			,iframe(props){
				layer.open({
			      	type: 2,
			      	title: props.title,
			      	shadeClose: true,
			      	shade: true,
			      	maxmin: true, //开启最大化最小化按钮
			     	area: props.aspect,
			      	content: props.url,
			      	move:false
			    });
			}
		} 
		,date(ele,type){
            layui.use('laydate', function(){
                var laydate = layui.laydate;
                var dateType = type||'date';
                if(type==1){
                	dateType = 'datetime';
              	}else if(type==0){
                	dateType = 'time';
              	}
              	laydate.render({
                	elem: ele
                  ,type: dateType
              	});
            });
        }
		/* 
		 * upload  询问框
		 * props {ele:挂载元素，pageSize:数据总数，pageNum：每页数据项，callback:回调}
		*/
		,pages(props){
			zg.init('laypage', function(){
			  	var laypage = layui.laypage;
			  	laypage.render({
			    	elem: props.el 
			    	,count: props.pageSize 
			    	,limit: props.pageNum   
			    	,jump: props.callback 
			  	});
			});
		}
		
		/* upload  询问框
		 * props {el:挂载元素，url:接口，done：成功回调，err:失败回调}
		 * */
		,upload(props){
			zg.init('upload', function(){
			  	var upload = layui.upload;
			  	var uploadInst = upload.render({
		   		 	elem: props.el
		    		,url: props.url
		    		,accept:'images'
		   		 	,done: props.done
			    	,error: props.err
			  	});
			});
		}
		,loadding(){//加载层
			return layer.load(2);
		}
		,close(index){//关闭弹出层  index弹出层索引
			layer.close(index);
		}
		,setStorage(key,val){//本地储存 可以储存对象
			var value ;
			(typeof val == 'string') ? value = val : value = JSON.stringify(val);
			localStorage.setItem(key,value);
		}
		,getStorage(key,type){//如果key值储存的是对象需要加传type=1
			var value;
			if(type && type == 1){
				return localStorage.getItem(key);
			}else{
				return JSON.parse(localStorage.getItem(key));
			}
		}
		,removeStorage(key){//移除key值储存
			localStorage.removeItem(key);
		}
		,tree(props){
			layui.use(['tree', 'layer'], function(){
			  	var layer = layui.layer
			  		,$ = layui.jquery; 
			  	layui.tree({
				    elem: props.el 
				    ,target: '_blank' 
				    ,click: props.cb
			    	,nodes:props.data
				});
			});
		}
		,table(props){
			var defaultObj = {
				height:500
			}
			var newObj = Object.assign({},defaultObj,props);
			layui.use('table', function(){
			  	var table = layui.table;
			  	//第一个实例
			  	table.render({
				    elem: newObj.el
				    ,height: newObj.height
				    ,url: newObj.url //数据接口
				    //,page: true //开启分页
				    ,cols: newObj.colArr
				});
			  	table.on('tool('+newObj.filter+')',newObj.cb);
			});
		}
	}
})(window)
