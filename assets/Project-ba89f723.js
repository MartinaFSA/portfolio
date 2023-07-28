import{_ as r,p as n,C as c,a}from"../assets/main-abb4bf15.js";import{resolveComponent as l,openBlock as d,createElementBlock as m,createElementVNode as e,toDisplayString as i,createVNode as p}from"vue";const g={name:"Project",data:function(){return{projects:n,currentProjectName:"",fullPreviewPath:"",fullMobilePreviewPath:"",landingPreviewPath:"",landingMobilePreviewPath:"",renderImg:!0}},components:{Contact:c},methods:{getProjectName:function(){this.currentProjectName=window.location.href.slice(40),this.fullPreviewPath="/portfolio/assets/img/projects/"+this.projects[this.currentProjectName].imagesPath+"fullPreview.png",this.fullMobilePreviewPath="/portfolio/assets/img/projects/"+this.projects[this.currentProjectName].imagesPath+"fullPreview_mobile.png",this.landingPreviewPath="/portfolio/assets/img/projects/"+this.projects[this.currentProjectName].imagesPath+"preview.png",this.landingMobilePreviewPath="/portfolio/assets/img/projects/"+this.projects[this.currentProjectName].imagesPath+"preview_mobile.png"},getPreviewHeight(){if(document.getElementById("desktopLanding")){let s=document.getElementById("desktopLanding").offsetHeight;document.getElementById("desktopTransparent").style.marginTop="-"+s+"px"}if(document.getElementById("mobileLanding")){let s=document.getElementById("mobileLanding").offsetHeight;document.getElementById("mobileTransparent").style.marginTop="-"+s+"px"}},async forceRender(){this.renderImg=!1,await this.$nextTick(),this.renderImg=!0,this.getPreviewHeight()}},beforeMount(){this.getProjectName()},mounted(){setTimeout(()=>{this.forceRender()},1e3)}},h={id:"inicio"},u={id:"project_title"},_={class:"positionRelative focus-in"},P={class:"project_videoSection"},j=e("div",{id:"project_videoSection_text"},[e("p",{class:"big_green_number"},"01"),e("span",{class:"title_afterNumber"},"Recorrido por la página")],-1),v=["poster"],f=e("source",{src:"",type:"video/mp4"},null,-1),b=[f],w=e("div",null,[e("img",{class:"star",id:"video_star",src:a})],-1),N=e("p",{class:"big_green_number"},"02",-1),y=e("span",{class:"title_afterNumber"},"Sobre el proyecto",-1),I={class:"project_description"},k={class:"ctn_pages"},L={class:"mobilePage"},B=["src"],E=["src"],T=["src","v-if"],H={class:"desktopPage"},C=["src"],M=["src"],$=["src","v-if"];function R(t,s,S,V,D,J){const o=l("Contact");return d(),m("main",h,[e("div",null,[e("section",u,[e("h1",null,i(t.projects[t.currentProjectName].title),1),e("h2",null,i(t.projects[t.currentProjectName].tag),1)]),e("section",_,[e("div",P,[j,e("video",{poster:"/portfolio/assets/img/projects/"+t.projects[t.currentProjectName].img,controls:""},b,8,v)]),w]),e("section",null,[e("div",null,[N,y,e("p",I,i(t.projects[t.currentProjectName].description),1)]),e("div",k,[e("div",L,[e("img",{id:"mobileLanding",src:"/portfolio/assets/img/projects/"+t.projects[t.currentProjectName].imagesPath+"preview_mobile.png",alt:""},null,8,B),e("img",{src:"/portfolio/assets/img/projects/"+t.projects[t.currentProjectName].imagesPath+"fullPreview_mobile.png",alt:""},null,8,E),e("img",{id:"mobileTransparent",class:"transparentImg",src:"/portfolio/assets/img/projects/"+t.projects[t.currentProjectName].imagesPath+"fullPreview_mobile.png",alt:"","v-if":t.renderImg},null,8,T)]),e("div",H,[e("img",{id:"desktopLanding",src:"/portfolio/assets/img/projects/"+t.projects[t.currentProjectName].imagesPath+"preview.png",alt:""},null,8,C),e("img",{src:t.fullPreviewPath,alt:""},null,8,M),e("img",{id:"desktopTransparent",class:"transparentImg",src:t.fullPreviewPath,alt:"","v-if":t.renderImg},null,8,$)])])]),p(o)])])}const A=r(g,[["render",R]]);export{A as default};
