function checkform() {
			var inputs = document.getElementsByClassName("input-info");
			var count = 0;
			for(var i=0;i<inputs.length;i++){
				var text = inputs[i].value;
				if(text.length < 1){
					inputs[i].classList.add("invalid");
					var txt = inputs[i].outerHTML+'<p style="color:red"><i><small>Chưa nhập thông tin</small></i></p>';				
					inputs[i].outerHTML =  txt;
					count++;
				}
			}
			if(count > 0){
				return false;
			}return true;
		}