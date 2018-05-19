var zhuogan = zhuogan||{};
zhuogan.upload = function(config) {
	var sfunction = config.success;
	var errorFunction = config.error;
	var id = config.id;
	$.ajaxFileUpload({
		url:"http://192.168.0.111:8081/gzl_retailers/uploadImg/fileUploadAjax.do",
		secureuri:false,
		fileElementId:id,
		dataType: 'json',
		success: function(data, status){
			if(sfunction){
				sfunction(data,status);
			}else{
				alert('上传成功');
			}
		},
		error:function(data){
			if(errorFunction){
				errorFunction(data, status, e)
			}else{
				alert('上传失败');
			}
		}
	});
}
