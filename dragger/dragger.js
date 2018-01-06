
;(function(){
  
  function getElStyle(el,key){
    return el.currentStyle ? el.currentStyle[key] : document.defaultView.getComputedStyle(el,false)[key];
  }
  
  function selectEl(id){
    return document.getElementById(id);
  }
  
  function initDrag(dragger,target,border){
    var self = this;
    var draggerEl = selectEl(dragger),
        targetEl = selectEl(target),
        borderEl = selectEl(border);
		
    if(!draggerEl)return false;
	
    if(!targetEl){
      targetEl = draggerEl;
    }
    
    
    draggerEl.onmousedown = function(e){
      var targetElLeft = getElStyle(targetEl,"left"),
          targetElTop = getElStyle(targetEl,"top");
      self.params.flag = true;
      e = e || window.evnet;
      
      self.params.left = targetElLeft;
      self.params.top = targetElTop;
      self.params.mouseX = e.clientX;
      self.params.mouseY = e.clientY;
      
      draggerEl.onselectstart = function(){
			return false;
		};
    };
    
    document.onmousemove = function(e){
       
      if(self.params.flag === false)return;
      e = e || window.event;
	  
      var disX = e.clientX - self.params.mouseX,
          disY = e.clientY - self.params.mouseY;
		  
      var moveToX = parseInt(self.params.left) + disX,
          moveToY = parseInt(self.params.top) + disY;
		  
      if(!borderEl){
        targetEl.style.left = moveToX + "px";
        targetEl.style.top = moveToY + "px";
      }else{
        var borderElClientRect = borderEl.getBoundingClientRect(),
            targetElClientRect = targetEl.getBoundingClientRect();
        if(moveToX >= borderElClientRect.left && (moveToX + targetElClientRect.width) <= borderElClientRect.width){
          targetEl.style.left = moveToX + "px";
        }
        if(moveToY >= borderElClientRect.top && (moveToY + targetElClientRect.height) <= borderElClientRect.height){
          targetEl.style.top = moveToY + "px";
        }
        
      }
      
      if(e.preventDefault){
        e.preventDefault();
      }
      return false;
    };
    
    document.onmouseup = function(e){
      self.params.flag = false;
    };
  }
  
  function Dragger(dragger,target,border){
    this.params = {
      left:0,
      top:0,
      flag:false,
      mouseX:0,
      mouseY:0
    };
    this.initDrag = initDrag;
	this.initDrag(dragger,target,border);
  }
  window.Dragger = Dragger;
})();
