YUI.add("dd-proxy",function(G){var E=G.DD.DDM,A="node",B="dragNode",F="firstChild",C="proxy";var H=function(){H.superclass.constructor.apply(this,arguments);};H.NAME="dragProxy";H.ATTRS={moveOnEnd:{value:true},resizeFrame:{value:true},proxy:{writeOnce:true,value:false},positionProxy:{value:true},borderStyle:{value:"1px solid #808080"}};var D={_createFrame:function(){if(!E._proxy){E._proxy=true;var J=G.Node.create(["div"]),I=G.Node.get("body");J.setStyles({position:"absolute",display:"none",zIndex:"999",border:this.get("borderStyle")});if(I.get(F)){I.insertBefore(J,I.get(F));}else{I.appendChild(J);}J.set("id",G.stamp(J));J.addClass("yui-dd-proxy");E._proxy=J;}},_setFrame:function(){var I=this.get(A);if(this.get("resizeFrame")){E._proxy.setStyles({height:I.get("clientHeight")+"px",width:I.get("clientWidth")+"px"});}this.get(B).setStyles({visibility:"hidden",display:"block",border:this.get("borderStyle")});if(this.get("positionProxy")){this.get(B).setXY(this.nodeXY);}this.get(B).setStyle("visibility","visible");},initializer:function(){if(this.get(C)){this._createFrame();}},start:function(){if(!this.get("lock")){if(this.get(C)){if(this.get(B).compareTo(this.get(A))){this.set(B,E._proxy);}}}H.superclass.start.apply(this);if(this.get(C)){this._setFrame();}},end:function(){if(this.get(C)&&this.get("dragging")){if(this.get("moveOnEnd")){this.get(A).setXY(this.lastXY);}this.get(B).setStyle("display","none");}H.superclass.end.apply(this);}};G.extend(H,G.DD.Drag,D);G.DD.Drag=H;},"@VERSION@",{requires:["dd-drag"],skinnable:false});