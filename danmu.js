var i = 0;

function fire(){
	//clearInterval(Interval);	//清除定时器缓存
	var span = document.createElement("span"),	//设置节点
		value = $("input").val(),
		span_id = "span" + i,
		wordLength;
	if (value=='请输入想要发送的弹幕'){
		alert('请输入想要发送的弹幕');
		return;
	}
	span.id = span_id;
	span.style.position = "absolute";
	span.style.left = "100%";
	span.innerHTML = value;		
	for (var x = 0;x<=8;x++){
			var id = "liner" + x;
			var spans = document.getElementById(id).getElementsByTagName("span");
			var lastSpan = spans[spans.length-1];
			if(spans.length>0){ 			//使获取spans不为空
				wordLength = length(lastSpan.innerHTML);		
				if(parseFloat(lastSpan.style.left) + wordLength<85){		//设置弹幕换行机制
					document.getElementById(id).appendChild(span);
					break;
				}
				else
					continue;
			}
			else{
				var liner = document.getElementById(id);
				liner.appendChild(span);
				break;
			}	
	}
	var Interval = window.setInterval(function(){
		if (parseFloat(span.style.left) < -100){		//删除已显示弹幕
			$("#" + span_id +"").remove();
		}
		$("#" + span_id + "").css("left","-=0.1%");
	},10);
	i++;		
	document.getElementById("inputArea").value = '请输入想要发送的弹幕';
}
function length(string){ //获得字符串的宽度
	var ruler = $("#ruler");
	ruler.text(string);
	return parseFloat(((ruler[0].offsetWidth)/720*100).toFixed(2));
}