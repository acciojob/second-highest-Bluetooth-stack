//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			if(arr.length===0 || arr.length===1){
		        return -Infinity;
		    } 
		    let same = arr.reduce((prev, ele)=>{
		        if(prev===ele){
		            return ele;
		        }
		    })
		    if(same===arr[0]){
		        return -Infinity
		    }
			
			let max = -Infinity;
		    let ind = -1;
		    let smax = -Infinity;
		
		    arr.forEach((element, index) => {
		        if(element>max){
		            max = element;
		            ind = index;
		        }
		    });
		    arr.forEach((element, index) => {
		        if(smax!==max && ind!==index){
		            if(element>smax){
		                smax = element;
		            }
		        }
		    });
		    return smax;
			
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();