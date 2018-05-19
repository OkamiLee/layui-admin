(function($){ 
	$.fn.extend({
		editor:function(newsobj){
			var editorObj = {text:"",imgSrc:'',width:'100%',height:'400px'};
			var resultObj = $.extend({},editorObj,newsobj);
			var $self = this;
			var str ='<div class="zg_editor_box">'				
					+	'<div class="zg_editor_topfun clearfix">'
					+		'<input type="button" class=" zg_fun_bold fl zg_fun_icon" value="B" />'
					+			'<input type="button" class=" zg_fun_incline fl zg_fun_icon" value="I" />'
					+		'<input type="button" class=" zg_fun_underline fl zg_fun_icon" value="U" />'
					+		'<input type="button" class=" zg_fun_del fl zg_fun_icon" value="-" />'
					+		'<input type="button" class=" zg_fun_indent fl zg_fun_icon" value="--" />'
					+		'<input type="button" class=" zg_fun_fontColor fl zg_fun_icon" value="A" />'
					+		'<input type="button" class=" zg_fun_bgColor fl zg_fun_icon" value="C" />'
					+		'<input type="button" class=" zg_fun_ol fl zg_fun_icon" value="OL" />'
					+		'<input type="button" class=" zg_fun_ul fl zg_fun_icon" value="ul" />'
					+		'<input type="button" class=" zg_algin_left fl zg_fun_icon" value="L" />'
					+		'<input type="button" class=" zg_algin_justfiy fl zg_fun_icon" value="J" />'
					+		'<input type="button" class=" zg_algin_right fl zg_fun_icon" value="RT" />'
					+		'<input type="button" class=" zg_algin_center fl zg_fun_icon" value="C" />'
					+		'<input type="button" class=" zg_algin_reset fl zg_fun_icon" value="R" />'
					+		'<input type="button" class=" zg_algin_all fl zg_fun_icon" value="All" />'
					+		'<input type="button" class=" zg_algin_undo fl zg_fun_icon" value="un" />'
					+		'<div class="algin_link_box"><div class="pab_algin_link"><input type="text" class="algin_link_text" /><span id="algin_link_btn">确定</span></div><input type="button" class=" zg_algin_link fl zg_fun_icon" value="L" /></div>'
					+		'<input type="text" class=" link_text fl zg_fun_icon" placeholder="链接地址"/>'
					+		'<input type="button" class=" zg_algin_data fl zg_fun_icon" value="D" />'
					+		'<input type="button" class=" zg_algin_time fl zg_fun_icon" value="T" />'
					+		'<select class="zg_font_fam fl zg_fun_icon">'
					+			'<option>Microsoft YaHei</option><option>SimSun</option><option>SimHei</option><option>NSimSun</option><option>DFKai-SB</option><option>Arial</option><option>Cambria</option><option>Corbel</option>'
					+		'</select>'
					+		'<select class="zg_font_size fl zg_fun_icon">'
					+			'<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>'
					+		'</select>'
					+		'<div class="fl file_box">'
					+			'<span>Im</span>'
					+			'<div class="link_img"><input type="text" placeholder="图片链接地址" class="link_inp" /><div class="upload_file_box"><em>上传图片</em><input type="file" class=" zg_upload_img fl zg_fun_icon" id="file" name="file"  /></div></div>'
					+		'</div>'
					+	'</div>'
					+	'<div class="zg_editor_wrap">'
					+		'<div class = "zg_editor_text"  contenteditable="true"></div>'
					+	'</div>'
					+'</div>';
			$self.append(str);
			$('.zg_editor_text').width(editorObj.width);
			$('.zg_editor_text').css('min-height',editorObj.height);
			$(".zg_fun_bold").click(function(){
				document.execCommand("Bold");
			})
			$(".zg_fun_incline").click(function(){
				document.execCommand("Italic");
			})
			$(".zg_fun_underline").click(function(){
				document.execCommand("Underline");
			})
			$(".zg_fun_del").click(function(){
				document.execCommand("strikeThrough");
			})
			$(".zg_fun_indent").click(function(){
				document.execCommand("indent");
			})
			$(".zg_fun_ol").click(function(){
				document.execCommand("insertUnorderedList");
			})
			$(".zg_fun_ul").click(function(){
				document.execCommand("insertOrderedList");
			})
			$(".zg_fun_del").click(function(){
				document.execCommand("strikeThrough");
			})
			$(".zg_algin_justfiy").click(function(){
				document.execCommand("justifyFull");
			})
			$(".zg_algin_right").click(function(){
				document.execCommand("justifyRight");
			})
			$(".zg_algin_left").click(function(){
				document.execCommand("justifyLeft");
			})
			$(".zg_algin_center").click(function(){
				document.execCommand("justifyCenter");
			})
			$(".zg_algin_reset").click(function(){
				document.execCommand("removeFormat");
			})
			$(".zg_algin_all").click(function(){
				document.execCommand("selectAll");
			})
			$(".zg_algin_undo").click(function(){
				document.execCommand("undo");
			})
			$(".zg_algin_link").click(function(){
				var txt = window.getSelection?window.getSelection():document.selection.createRange().text;
				var str = $('.link_text').val()||"http://www.baidu.com";
				document.execCommand("insertHTML",false,'<a href="' +str+ '" target="_blank">' + txt + '</a>');
			})
			$(".zg_algin_time").click(function(){
				var date = new Date();
				document.execCommand("insertText",false,toToo(date.getHours())+':'+toToo(date.getMinutes()+1)+':'+toToo(date.getSeconds()));
			})
			$(".zg_algin_data").click(function(){
				var date = new Date();
				document.execCommand("insertText",false,date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
			})
			$(".zg_fun_fontColor").bigColorpicker(function(el,color){
				document.execCommand("foreColor",false,color);
			});
			$(".zg_fun_bgColor").bigColorpicker(function(el,color){
				document.execCommand("backColor",false,color);
			});
			$(".zg_font_fam").change(function(){			
				document.execCommand("fontName",false,$(this).val());
			})
			$(".zg_font_size").change(function(){			
				document.execCommand("fontSize",false,$(this).val());
			})
			$('.file_box span').click(function(){
				$('.link_img').show();
			})
			$('#file').change(function(){
				var str = '';
				if($('.link_inp').val().length>0){
					str = $('.link_inp').val()
				}else{
					str = null
				}
				zhuogan.upload({
					id:"file",
					success:function(data){
						if(str!=null){
							$('.zg_editor_text').append('<a href="'+str+'"><img src="http://localhost:8081/gzl_retailers'+data.data+'" class="resize_img" /></a>');
						}else{
							$('.zg_editor_text').append('<img src="http://localhost:8081/gzl_retailers'+data.data+'" class="resize_img" />');
						}
						$('.link_img').hide();
						$('.link_inp').val('');
						$('.resize_img').click(function(){
							$(this).resizable();
						})
					},
					error:function(data, status, e){
						upload();
					}
				});
			})
			document.execCommand("insertBrOnReturn");
	     	function toToo(num){
	     		 return (num<10) ? num = "0"+num : num;
	     	}
		},
		result:function(){
			return $('.zg_editor_text').html();
		}
	})
})(jQuery); 