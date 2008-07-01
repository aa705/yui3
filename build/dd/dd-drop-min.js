YUI.add("dd-drop",function(A){var B="node",G=A.DD.DDM,F="offsetHeight",C="offsetWidth",I="drop:over",H="drop:enter",D="drop:exit";var E=function(){E.superclass.constructor.apply(this,arguments);this._createShim();G.regTarget(this);};E.NAME="drop";E.ATTRS={node:{set:function(J){return A.Node.get(J);}},groups:{value:["default"],set:function(J){this._groups={};A.each(J,function(L,K){this._groups[L]=true;},this);}},padding:{value:"0",set:function(J){return G.cssSizestoObject(J);}},lock:{value:false,set:function(J){if(J){this.get(B).addClass("yui-dd-drop-locked");}else{this.get(B).removeClass("yui-dd-drop-locked");}}}};A.extend(E,A.Base,{_createEvents:function(){var J=[I,H,D,"drop:hit"];A.each(J,function(L,K){this.publish(L,{emitFacade:true,preventable:false,bubbles:true});},this);this.addTarget(G);},_valid:null,_groups:null,shim:null,region:null,overTarget:null,inGroup:function(J){this._valid=false;var K=false;A.each(J,function(M,L){if(this._groups[M]){K=true;this._valid=true;}},this);return K;},initializer:function(){this._createEvents();if(!this.get(B).get("id")){var J=A.stamp(this.get(B));this.get(B).set("id",J);}},_deactivateShim:function(){this.get(B).removeClass("dd-drop-active-valid");this.get(B).removeClass("dd-drop-active-invalid");this.get(B).removeClass("dd-drop-over");this.shim.setXY([-999,-999]);this.overTarget=false;},_activateShim:function(){if(!G.activeDrag){return false;}if(this.get(B)===G.activeDrag.get(B)){return false;}if(this.get("lock")){return false;}if(this.inGroup(G.activeDrag.get("groups"))){this.get(B).removeClass("dd-drop-active-invalid");this.get(B).addClass("dd-drop-active-valid");G.addValid(this);this.overTarget=false;this.sizeShim();}else{this.get(B).addClass("dd-drop-active-invalid");}},sizeShim:function(){var M=this.get(B).get(F),K=this.get(B).get(C),P=this.get(B).getXY(),O=this.get("padding");K=K+O.left+O.right;M=M+O.top+O.bottom;P[0]=P[0]-O.left;P[1]=P[1]-O.top;if(G.mode===G.INTERSECT){var J=G.activeDrag,N=J.get(B).get(F),L=J.get(B).get(C);M=(M+N);K=(K+L);P[0]=P[0]-(L-J.deltaXY[0]);P[1]=P[1]-(N-J.deltaXY[1]);}this.shim.setStyles({height:M+"px",width:K+"px",top:P[1]+"px",left:P[0]+"px"});this.region={"0":P[0],"1":P[1],area:0,top:P[1],right:P[0]+K,bottom:P[1]+M,left:P[0]};},_createShim:function(){var J=A.Node.create(["div",{id:this.get(B).get("id")+"_shim"}]);J.setStyles({height:this.get(B).get(F)+"px",width:this.get(B).get(C)+"px",backgroundColor:"yellow",opacity:".5",zIndex:10,position:"absolute"});G._pg.appendChild(J);J.setXY([-900,-900]);this.shim=J;J.on("mouseover",this._handleOverEvent,this,true);J.on("mouseout",this._handleOutEvent,this,true);},_handleTargetOver:function(J){if(G.isOverTarget(this)){this.get(B).addClass("dd-drop-over");G.activeDrop=this;G.otherDrops[this]=this;if(this.overTarget){G.activeDrag.fire("drag:over",{drop:this,drag:G.activeDrag});this.fire(I,{drop:this,drag:G.activeDrag});}else{this.overTarget=true;this.fire(H,{drop:this,drag:G.activeDrag});G.activeDrag.fire("drag:enter",{drop:this,drag:G.activeDrag});G._handleTargetOver(this,J);}}else{this._handleOut();}},_handleOverEvent:function(){G._addActiveShim(this);},_handleOutEvent:function(){G._removeActiveShim(this);},_handleOut:function(){if(!G.isOverTarget(this)){if(this.overTarget){this.overTarget=false;G._removeActiveShim(this);if(G.activeDrag){this.get(B).removeClass("dd-drop-over");this.fire(D);G.activeDrag.fire("drag:exit",{drop:this});delete G.otherDrops[this];}}}}});A.DD.Drop=E;},"@VERSION@",{requires:["dd-ddm-drop"],skinnable:false});