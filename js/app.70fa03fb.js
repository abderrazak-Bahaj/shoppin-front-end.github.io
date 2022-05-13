(function(){"use strict";var t={7059:function(t,e,a){var r=a(9242),s=a(3396);function o(t,e,a,o,n,i){const d=(0,s.up)("nav-bar-component"),c=(0,s.up)("router-view"),l=(0,s.up)("loading-progress"),u=(0,s.up)("footer-component");return(0,s.wg)(),(0,s.iD)("div",null,[t.userIsAdmin?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:0})),(0,s.wy)((0,s.Wm)(c,null,null,512),[[r.F8,t.productIsLoaded]]),(0,s.wy)((0,s.Wm)(l,null,null,512),[[r.F8,!t.productIsLoaded]]),t.userIsAdmin?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:1}))])}const n=t=>((0,s.dD)("data-v-83fd84b8"),t=t(),(0,s.Cn)(),t),i={class:"navbar navbar-expand-lg navbar-light shadow p-4 mb-3",style:{"background-color":"transparent"}},d={class:"container"},c=(0,s.Uk)("Shope Store"),l=n((()=>(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1))),u={class:"collapse navbar-collapse",id:"navbar"},h={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},m=(0,s.Uk)("Home"),f={class:"nav-item"},g=(0,s.Uk)("Shope"),E={class:"nav-item"},v=(0,s.Uk)("About"),b={class:"nav-item"},w=(0,s.Uk)("Contact");function T(t,e,a,r,o,n){const T=(0,s.up)("router-link"),_=(0,s.up)("nav-login-partial");return(0,s.wg)(),(0,s.iD)("nav",i,[(0,s._)("div",d,[(0,s.Wm)(T,{to:"/",class:"navbar-brand text-success logo h2 align-self-center","aria-current":"page"},{default:(0,s.w5)((()=>[c])),_:1}),l,(0,s._)("div",u,[(0,s._)("ul",h,[(0,s._)("li",p,[(0,s.Wm)(T,{to:"/",class:"nav-link active fs-5","aria-current":"page"},{default:(0,s.w5)((()=>[m])),_:1})]),(0,s._)("li",f,[(0,s.Wm)(T,{to:"/shope",class:"nav-link fs-5"},{default:(0,s.w5)((()=>[g])),_:1})]),(0,s._)("li",E,[(0,s.Wm)(T,{to:"/about",class:"nav-link fs-5"},{default:(0,s.w5)((()=>[v])),_:1})]),(0,s._)("li",b,[(0,s.Wm)(T,{to:"/contact",class:"nav-link fs-5"},{default:(0,s.w5)((()=>[w])),_:1})])]),(0,s.Wm)(_)])])])}var _=a(7139);const A={key:0,class:"navbar-nav me-auto mb-2 mb-lg-0"},y={class:"nav-item"},k=(0,s.Uk)("Login"),R={class:"nav-item"},S=(0,s.Uk)("Register"),C={key:1,class:"navbar-nav me-auto mb-2 mb-lg-0"},D={class:"nav-item"},O=(0,s._)("i",{class:"fa fa-fw fa-cart-arrow-down text-dark mr-1"},null,-1),x={class:"position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"},L={class:"nav-item"},P=(0,s._)("i",{class:"fa-solid fa-heart text-dark mr-1"},null,-1),I={class:"position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"},U={class:"nav-item"},$=(0,s._)("i",{class:"fa-solid fa-user"},null,-1),B={class:"nav-item"},z=(0,s._)("i",{class:"fa-solid fa-right-from-bracket"},null,-1),F=[z];function j(t,e,a,r,o,n){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("span",null,[t.userHasAuth?((0,s.wg)(),(0,s.iD)("ul",C,[(0,s._)("li",D,[(0,s.Wm)(i,{to:"/cart",class:"nav-link nav-icon position-relative fs-5"},{default:(0,s.w5)((()=>[O,(0,s._)("span",x,(0,_.zw)(t.getAllCarts.length),1)])),_:1})]),(0,s._)("li",L,[(0,s.Wm)(i,{to:"/favorite",class:"nav-link nav-icon position-relative fs-5"},{default:(0,s.w5)((()=>[P,(0,s._)("span",I,(0,_.zw)(t.getAllFavorites.length),1)])),_:1})]),(0,s._)("li",U,[(0,s.Wm)(i,{to:"/profile",class:"dropdown-item fs-5"},{default:(0,s.w5)((()=>[$])),_:1})]),(0,s._)("li",B,[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>n.logout&&n.logout(...t)),class:"dropdown-item fs-5"},F)])])):((0,s.wg)(),(0,s.iD)("ul",A,[(0,s._)("li",y,[(0,s.Wm)(i,{to:"/login",class:"nav-link fs-5"},{default:(0,s.w5)((()=>[k])),_:1})]),(0,s._)("li",R,[(0,s.Wm)(i,{to:"/register",class:"nav-link fs-5"},{default:(0,s.w5)((()=>[S])),_:1})])]))])}var W=a(65),Y={computed:{...(0,W.Se)(["getAllCarts","getAllFavorites","userHasAuth","userIsAdmin"])},methods:{logout:async function(){await Swal.fire({title:"Are you sure?",text:"You won't logout",icon:"info",showCancelButton:!0,confirmButtonColor:"rgb(227 119 87)",cancelButtonColor:"rgb(29 173 86)  ",confirmButtonText:"Logout"}).then((t=>{t.isConfirmed&&this.$store.dispatch("logoutUser").then((t=>this.$router.push("/login"))).catch((t=>{this.$helpers.showErrors(t)}))}))}}},G=a(89);const N=(0,G.Z)(Y,[["render",j]]);var V=N,H={components:{NavLoginPartial:V}};const q=(0,G.Z)(H,[["render",T],["__scopeId","data-v-83fd84b8"]]);var Z=q;const K=t=>((0,s.dD)("data-v-31f2d582"),t=t(),(0,s.Cn)(),t),M={class:"bg-dark",id:"tempaltemo_footer"},J={class:"container"},Q={class:"row"},X=(0,s.uE)('<div class="col-md-4 pt-5" data-v-31f2d582><h2 class="h2 text-success border-bottom pb-3 border-light logo" data-v-31f2d582>App Shop</h2><ul class="list-unstyled text-light footer-link-list" data-v-31f2d582><li data-v-31f2d582><i class="fa fa-phone fa-fw" data-v-31f2d582></i><a class="text-decoration-none" href="tel:+212-678-714-069" data-v-31f2d582>+212-678-714-069</a></li><li data-v-31f2d582><i class="fa fa-envelope fa-fw" data-v-31f2d582></i><a class="text-decoration-none" href="mailto:bahajabde0@gmail.com" data-v-31f2d582>bahajabde0@gmail.com</a></li><li data-v-31f2d582><i class="fas fa-map-marker-alt fa-fw" data-v-31f2d582></i> Tinghir Morocco </li></ul></div>',1),tt={class:"col-md-4 pt-5"},et=K((()=>(0,s._)("h2",{class:"h2 text-light border-bottom pb-3 border-light"},"Categorais",-1))),at={class:"list-unstyled text-light footer-link-list"},rt={class:"col-md-4 pt-5"},st=K((()=>(0,s._)("h2",{class:"h2 text-light border-bottom pb-3 border-light"},"Pages",-1))),ot={class:"list-unstyled text-light footer-link-list"},nt=(0,s.Uk)("Home"),it=(0,s.Uk)("Shop"),dt=(0,s.Uk)("Contact us"),ct=(0,s.Uk)("About Us"),lt=(0,s.Uk)("Login"),ut=(0,s.Uk)("Register"),ht=(0,s.uE)('<div class="row text-light mb-4" data-v-31f2d582><div class="col-12 mb-3" data-v-31f2d582><div class="w-100 my-3 border-top border-light" data-v-31f2d582></div></div><div class="col-auto me-auto" data-v-31f2d582><ul class="list-inline text-left footer-icons" data-v-31f2d582><li class="list-inline-item border border-light rounded-circle text-center" data-v-31f2d582><a class="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/bahaj.abde" data-v-31f2d582><i class="fab fa-facebook-f fa-lg fa-fw" data-v-31f2d582></i></a></li><li class="list-inline-item border border-light rounded-circle text-center" data-v-31f2d582><a class="text-light text-decoration-none" target="_blank" href="https://github.com/abderrazak-Bahaj" data-v-31f2d582><i class="fab fa-github fa-lg fa-fw" data-v-31f2d582></i></a></li><li class="list-inline-item border border-light rounded-circle text-center" data-v-31f2d582><a class="text-light text-decoration-none" target="_blank" href="mailto:bahajabde0@gmail.com" data-v-31f2d582><i class="fab fa-google fa-lg fa-fw" data-v-31f2d582></i></a></li><li class="list-inline-item border border-light rounded-circle text-center" data-v-31f2d582><a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/in/abderrazak-bahaj/" data-v-31f2d582><i class="fab fa-linkedin fa-lg fa-fw" data-v-31f2d582></i></a></li><li class="list-inline-item border border-light rounded-circle text-center" data-v-31f2d582><a class="text-light text-decoration-none" target="_blank" href="tel:+212-678-714-069" data-v-31f2d582><i class="fab fa-whatsapp fa-lg fa-fw" data-v-31f2d582></i></a></li><li class="list-inline-item border border-light rounded-circle text-center" data-v-31f2d582><a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/bahaj.abde/" data-v-31f2d582><i class="fab fa-instagram fa-lg fa-fw" data-v-31f2d582></i></a></li></ul></div></div>',1),pt=(0,s.uE)('<div class="w-100 bg-black py-5" data-v-31f2d582><div class="container" data-v-31f2d582><div class="row pt-2" data-v-31f2d582><div class="col-12" data-v-31f2d582><p class="text-left text-light" data-v-31f2d582> Copyright © 2022 | Designed by Bahaj abderrazak </p></div></div></div></div>',1);function mt(t,e,a,r,o,n){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("footer",M,[(0,s._)("div",J,[(0,s._)("div",Q,[X,(0,s._)("div",tt,[et,(0,s._)("ul",at,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.getAllCategorais.slice(0,6),(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id},[(0,s.Wm)(i,{to:"/shope/category/"+t.id,class:"text-decoration-none"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(t.cat_name),1)])),_:2},1032,["to"])])))),128))])]),(0,s._)("div",rt,[st,(0,s._)("ul",ot,[(0,s._)("li",null,[(0,s.Wm)(i,{to:"/",class:"text-decoration-none"},{default:(0,s.w5)((()=>[nt])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/shope",class:"text-decoration-none"},{default:(0,s.w5)((()=>[it])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/contact",class:"text-decoration-none"},{default:(0,s.w5)((()=>[dt])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/about",class:"text-decoration-none"},{default:(0,s.w5)((()=>[ct])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/login",class:"text-decoration-none"},{default:(0,s.w5)((()=>[lt])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/register",class:"text-decoration-none"},{default:(0,s.w5)((()=>[ut])),_:1})])])])]),ht]),pt])}var ft={computed:{...(0,W.Se)(["getAllCategorais"])}};const gt=(0,G.Z)(ft,[["render",mt],["__scopeId","data-v-31f2d582"]]);var Et=gt,vt=a(5932),bt={components:{NavBarComponent:Z,FooterComponent:Et,LoadingProgress:vt.Z},computed:{...(0,W.Se)(["userHasAuth","productIsLoaded","userIsAdmin"])},created(){this.$store.dispatch("getProducts",null,{root:!0}),this.$store.dispatch("getCategorais",null,{root:!0}),this.$store.dispatch("getRates",null,{root:!0}),this.userHasAuth&&(this.$store.dispatch("getCardsUser"),this.$store.dispatch("getCartsUser"),this.$store.dispatch("getFavorites"))},methods:{ShowErrors:async function(t){this.$helpers.showErrors(t)}}};const wt=(0,G.Z)(bt,[["render",o]]);var Tt=wt,_t=a(678),At=a(6265),yt=a.n(At);const kt={state:{categorais:[],categoryIsLoad:!1},getters:{findCategory:t=>e=>t.categorais.find((t=>t.id==e)),getCategoryError:t=>t.categoryError,isEditAction:t=>!!t.editCategory,getAllCategorais:t=>t.categorais,getCategoryIsLoad:t=>t.categoryIsLoad},mutations:{SET_CATEGORAIS(t,e){t.categorais=e.data,t.categoryIsLoad=!0},ADD_CATEGORY(t,e){t.categorais.push(e.data),t.categoryIsLoad=!0},UPDATE_CATEGORY(t,e){t.categorais[t.categorais.indexOf((t=>t.id==e.data.id))]=e.data,t.categoryIsLoad=!0},DESTROY_CATEGORY(t,e){t.categorais.splice(t.categorais.findIndex((t=>t.id==e)),1),t.categoryIsLoad=!0}},actions:{async getCategorais(t){this.state.category.categoryIsLoad=!1,await yt().get("/api/category").then((e=>{t.commit("SET_CATEGORAIS",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))},async addCategory(t,e){return this.state.category.categoryIsLoad=!1,await new Promise(((a,r)=>{let s=new FormData;s.append("cat_img",e.cat_img),s.append("cat_name",e.cat_name);let o=this.getters["userToken"];yt().post("/api/category",s,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}}).then((e=>{t.commit("ADD_CATEGORY",e.data),a(!0)})).catch((e=>{"422"==e.response.status?r(e.response.data.errors):t.dispatch("showError",e.response.statusText)}))}))},updateCategory(t,e){this.state.category.categoryIsLoad=!1;let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`,"Content-Type":"multipart/form-data"},s=new FormData;return s.append("cat_img",e.cat_img),s.append("cat_name",e.cat_name),new Promise(((a,o)=>{yt().post(`/api/category/${e.id}`,s,{headers:r}).then((e=>{t.commit("UPDATE_CATEGORY",e.data),a(e)})).catch((e=>{t.dispatch("showError",e.response.statusText),o(e)}))}))},async destroyCategory(t,e){this.state.category.categoryIsLoad=!1;let a=this.getters["userToken"];await yt()["delete"](`/api/category/${e}`,{headers:{Authorization:`Bearer ${a}`}}).then((a=>{t.commit("DESTROY_CATEGORY",e)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}}};var Rt=kt;const St={state:{products:[],product:"",PaginationLinks:[],IsLoaded:!1},getters:{getProduct:t=>t.product,getAllProducts:t=>t.products,findProduct:t=>e=>t.products.find((t=>t.id==e)),productIsLoaded:t=>t.IsLoaded,getLinksProducts:t=>e=>{let a=t.PaginationLinks.map((t=>({url:e+t.url?.slice(t.url?.indexOf("?"))||"/",label:t.label,active:t.active})));return a.shift(),a.pop(),a}},mutations:{SET_PRODUCTS(t,e){t.products=e.data,t.PaginationLinks=e.meta.links,t.IsLoaded=!0},SET_PRODUCT(t,e){t.product=e.data,t.IsLoaded=!0},UPDATE_PRODUCT(t,e){t.products[t.products.indexOf((t=>t.id==id))]=e.data},ADD_PRODUCT(t,e){t.products.push(e.data),t.IsLoaded=!0},DESTROY_PRODUCT(t,e){t.products.splice(t.products.findIndex((t=>t.id==e)),1),t.IsLoaded=!0}},actions:{async getProducts(t,e=""){this.state.product.IsLoaded=!1;let a="/api/product";""!=e&&(a+=`?page=${e}`),await yt().get(a).then((e=>{t.commit("SET_PRODUCTS",e.data)})).catch((e=>{t.dispatch("showError",e)}))},async getProduct(t,e){this.state.product.IsLoaded=!1,await yt().get(`/api/product/${e}`).then((e=>{t.commit("SET_PRODUCT",e.data)})).catch((e=>{t.dispatch("showError",e)}))},async searchProduct(t,e){this.state.product.IsLoaded=!1,await yt().get(`/api/product/search/${e}`).then((e=>{t.commit("SET_PRODUCTS",e.data)})).catch((e=>{t.dispatch("showError",e)}))},async getProductByCategory(t,e){this.state.product.IsLoaded=!1,await yt().get(`/api/category/${e}`).then((e=>{t.commit("SET_PRODUCTS",e.data)})).catch((e=>{t.dispatch("showError",e)}))},async createProduct(t,e){this.state.product.IsLoaded=!1;let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`,"Content-Type":"multipart/form-data"};return await new Promise(((a,s)=>{yt().post("/api/product",e,{headers:r}).then((e=>{t.commit("ADD_PRODUCT",e.data),a()})).catch((e=>{this.state.product.IsLoaded=!0,"422"==e.response.status?s(e.response.data.errors):t.dispatch("showError",e.response.statusText)}))}))},async updateProduct(t,e){let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`,"Content-Type":"multipart/form-data"};return await new Promise(((a,s)=>{yt().post(`/api/product/update/${e.id}`,e,{headers:r}).then((e=>{t.commit("UPDATE_PRODUCT",e.data),a()})).catch((e=>{this.state.product.IsLoaded=!0,"422"==e.response.status?s(e.response.data.errors):t.dispatch("showError",e.response.statusText)}))}))},async destroyProduct(t,e){this.state.product.IsLoaded=!1;let a=this.getters["userToken"];await yt()["delete"](`/api/product/${e}`,{headers:{Authorization:`Bearer ${a}`}}).then((a=>{t.commit("DESTROY_PRODUCT",e)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))},async CountProduct(t){let e=this.getters["userToken"],a={Authorization:`Bearer ${e}`};return await new Promise(((e,r)=>{yt().get("/api/product/statistic",{headers:a}).then((t=>{e(t.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}))}}};var Ct=St;const Dt={state:{authenticated:!1,loginError:"",registerErrors:[],user:"",token:""},getters:{userHasAuth:t=>t.authenticated,userIsAdmin:t=>1==t.user.isAdmin||1==t.user.isAdmin,EmailIsVerified:t=>null!=t.user.email_verified_at,userToken:t=>t.token,userInfo:t=>t.user,userLoginError:t=>t.loginError,userRegisterError:t=>t.registerErrors},mutations:{SET_USER(t,e){t.user=e,t.authenticated=!0,t.loginError=""},SET_TOKEN(t,e){t.token=e},SAVE_TOKEN_USER(t,e){localStorage.setItem("token",e.access_Token)},SET_LOGIN_ERROR(t,e){t.loginError=e.message},SET_REGISTER_ERRORS(t,e){t.registerErrors=e},LOGOUT_USER(t){t.authenticated=!1,t.user="",t.token="",localStorage.clear()}},actions:{Login(t,e){return new Promise(((a,r)=>{yt().post("/api/user/login",e).then((e=>{200==e.status?null!=e.data.user.email_verified_at?(t.commit("SET_USER",e.data.user),t.commit("SET_TOKEN",e.data.access_Token),t.commit("SAVE_TOKEN_USER",e.data),t.dispatch("getCardsUser"),t.dispatch("getCartsUser"),t.dispatch("getFavorites"),this.getters["userIsAdmin"]?a(!0):a(!1)):a({token:e.data.access_Token}):(t.commit("SET_LOGIN_ERROR",e.data),r(!1))})).catch((e=>{t.dispatch("showError",e),r(!1)}))}))},register(t,e){return new Promise(((a,r)=>{yt().post("/api/user/register",e).then((t=>{a(t.data)})).catch((e=>{"422"==e.response.status?t.commit("SET_REGISTER_ERRORS",e.response.data.errors):t.dispatch("showError",e.response.statusText),r()}))}))},logoutUser(t){return new Promise(((e,a)=>{let r=this.getters["userToken"];t.commit("LOGOUT_USER"),t.dispatch("DeleteAllCarts"),t.dispatch("DeleteAllCards"),t.dispatch("DeleteAllFavorites"),t.dispatch("DeleteAllOrders"),yt().get("/api/logout",{headers:{Authorization:`Bearer ${r}`}}).then((a=>{t.commit("LOGOUT_USER"),e(!0)})).catch((t=>{a(t)}))}))},updateProfile(t,e){const a={Authorization:`Bearer ${t.state.token}`};return new Promise(((r,s)=>{yt().post("/api/user/update",e,{headers:a}).then((e=>{200==e.status&&(t.commit("SET_USER",e.data),r(!0))})).catch((e=>{"422"==e.response.status?s(e.response.data.errors):"401"==e.response.status?s(!1):t.dispatch("showError",e.response.statusText)}))}))},editPassword(t,e){const a={Authorization:`Bearer ${t.state.token}`};return new Promise(((r,s)=>{yt().put("/api/user/editpassword",e,{headers:a}).then((t=>{200==t.status&&r(!0)})).catch((e=>{"422"==e.response.status?s(e.response.data.errors):"401"==e.response.status?s(!1):t.dispatch("showError",e.response.statusText)}))}))},resetPassword(t,e){return new Promise(((a,r)=>{yt().post("/api/user/reset-password",e).then((t=>{a()}),(e=>{"422"==e.response.status?r(e.response.data.errors):"401"==e.response.status?r(!1):t.dispatch("showError",e.response.statusText)}))}))},forgotPassword(t,e){return new Promise(((a,r)=>{yt().post("/api/user/forgot-password",e).then((t=>{a()}),(e=>{"422"==e.response.status?r(e.response.data.errors):"401"==e.response.status?r(!1):t.dispatch("showError",e.response.statusText)}))}))},emailVerify(t,e){return new Promise(((a,r)=>{yt().get(`/api/email/verify/${e.id}/${e.token}`).then((t=>{200==t.status?a(t):r(t)}),(e=>{"422"==e.response.status?r(e.response.data.errors):"401"==e.response.status?r(!1):t.dispatch("showError",e.response.statusText)}))}))},emailResend(t,e){const a={Authorization:`Bearer ${e}`};return new Promise(((e,r)=>{yt().post("/api/email/resend",null,{headers:a}).then((t=>{200==t.status?(e(!0),console.log(t)):r(t)}),(e=>{"422"==e.response.status?r(e.response.data.errors):"401"==e.response.status||"500"==e.response.status?r(e.response.statusText):t.dispatch("showError",e.response.statusText)}))}))},async getUsers(t){let e=this.getters["userToken"],a={Authorization:`Bearer ${e}`};return await new Promise(((t,e)=>{yt().get("/api/users/admin",{headers:a}).then((e=>{t(e.data)})).catch((t=>{e(t.response.statusText)}))}))},SetAdmin(t,e){let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`};return new Promise(((t,a)=>{yt().put(`/api/users/admin/${e.id}`,{password:e.password,isAdmin:1},{headers:r}).then((e=>{t(e)})).catch((t=>{a(t.response.statusText)}))}))},async deleteUser(t,e){let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`};return await new Promise(((t,a)=>{yt()["delete"](`/api/users/admin/${e.id}`,{headers:r,data:{password:e.password}}).then((()=>{t(e.id)})).catch((t=>{a(t.response.statusText)}))}))},async CountUser(t){let e=this.getters["userToken"],a={Authorization:`Bearer ${e}`};return await new Promise(((e,r)=>{yt().get("/api/user/statistic",{headers:a}).then((t=>{e(t.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}))}}};var Ot=Dt;const xt={state:{show:!1,message:[]},getters:{hasError:t=>t.show,getErrors:t=>t.message},mutations:{setError(t,e){t.show=!0,t.message=e}},actions:{showError(t,e){t.commit("setError",e)}}};var Lt=xt;const Pt={state:{cards:[],cardErrors:[]},getters:{findCard:t=>e=>t.cards.find((t=>t.id==e)),getAllCards:t=>t.cards,getCardError:t=>t.cardErrors},mutations:{SET_CARDS(t,e){t.cards=e.data,t.cardErrors=[]},ADD_CARD(t,e){t.cards.push(e.data)},SET_ERRORS(t,e){t.cardErrors=e},DESTROY_CARD(t,e){t.cards.splice(t.cards.indexOf((t=>t.id==e)),1)},DELETE_ALL_CARDS(t){t.cards=[]}},actions:{async DeleteAllCards(t){t.commit("DELETE_ALL_CARDS")},async getCardsUser(t){this.getters["userToken"]?await yt().get("/api/card",{headers:{Authorization:`Bearer ${this.getters["userToken"]}`}}).then((e=>{t.commit("SET_CARDS",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText+",error load card")})):t.dispatch("showError","Login first")},async addCardForUser(t,e){let a=this.getters["userToken"];await yt().post("/api/card/add",e,{headers:{Authorization:`Bearer ${a}`}}).then((e=>{t.commit("ADD_CARD",e.data)})).catch((e=>{"422"==e.response.status?t.commit("SET_ERRORS",e.response.data.errors):t.dispatch("showError",e.response.statusText)}))},async destroyCardForUser(t,e){let a=this.getters["userToken"];await yt()["delete"](`/api/card/${e}`,{headers:{Authorization:`Bearer ${a}`}}).then((a=>{t.commit("DESTROY_CARD",e)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}}};var It=Pt;const Ut={state:{carts:[]},getters:{findCarts:t=>e=>t.carts.find((t=>t.id==e)),getAllCarts:t=>t.carts,getPriceCart:t=>t.carts.reduce(((t,e)=>t+(parseFloat(e["p_price"])*parseInt(e["quantity"])||0)),0)},mutations:{SET_CARTS(t,e){t.carts=e.data},ADD_CART(t,e){t.carts.push(e.data)},UPDATE_CART(t,e){let a=t.carts.find((t=>t.id==e.data.id));a.quantity=e.data.quantity},DESTROY_CART(t,e){t.carts.splice(t.carts.findIndex((t=>t.id==e)),1)},DELETE_ALL_CARTS(t){t.carts=[]}},actions:{async getCartsUser(t){this.getters["userToken"]?await yt().get("/api/cart",{headers:{Authorization:`Bearer ${this.getters["userToken"]}`}}).then((e=>{t.commit("SET_CARTS",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText+",error load cart")})):t.dispatch("showError","Login first")},async DeleteAllCarts(t){t.commit("DELETE_ALL_CARTS")},async addCartForUser(t,e){let a=this.getters["userToken"];await yt().post("/api/cart",e,{headers:{Authorization:`Bearer ${a}`}}).then((e=>{t.commit("ADD_CART",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText+",error add cart")}))},async UpdateCartForUser(t,e){let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`};return await new Promise(((a,s)=>{yt().put(`/api/cart/${e.id}`,{quantity:e.quantity},{headers:r}).then((e=>{t.commit("UPDATE_CART",e.data),a()})).catch((e=>{"422"==e.response.status?s(e.response.data.errors):t.dispatch("showError",e.response.statusText)}))}))},async destroyCartForUser(t,e){let a=this.getters["userToken"];await yt()["delete"](`/api/cart/${e}`,{headers:{Authorization:`Bearer ${a}`}}).then((a=>{t.commit("DESTROY_CART",e)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}}};var $t=Ut;const Bt={state:{favorites:[]},getters:{findFavorite:t=>e=>t.favorites.find((t=>t.product_id==e)),hasFavorite:t=>e=>!!t.favorites.find((t=>t.product_id==e)),getAllFavorites:t=>t.favorites},mutations:{SET_FAVORITES(t,e){t.favorites=e.data},ADD_FAVORITE(t,e){t.favorites.push(e.data)},DELETE_ALL_FAVORITES(t){t.favorites=[]},DESTROY_FAVORITE(t,e){t.favorites.splice(t.favorites.findIndex((t=>t.id==e)),1)}},actions:{async getFavorites(t){let e=this.getters["userToken"];e&&await yt().get("/api/favorite",{headers:{Authorization:`Bearer ${e}`}}).then((e=>{t.commit("SET_FAVORITES",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText+",error load favorite")}))},async DeleteAllFavorites(t){t.commit("DELETE_ALL_FAVORITES")},async addFavorite(t,e){let a=this.getters["userToken"];await yt().post("/api/favorite",e,{headers:{Authorization:`Bearer ${a}`}}).then((e=>{t.commit("ADD_FAVORITE",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))},async destroyFavorite(t,e){let a=this.getters["userToken"];await yt()["delete"](`/api/favorite/${e}`,{headers:{Authorization:`Bearer ${a}`}}).then((a=>{t.commit("DESTROY_FAVORITE",e)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}}};var zt=Bt;const Ft={state:{rates:[]},getters:{findRate:t=>e=>t.rates.find((t=>t.product_id==e))},mutations:{SET_RATES(t,e){t.rates=e.data.map((t=>{let e=Number.parseInt(t.total_point)/Number.parseFloat(t.count_point);return{point_rate:e.toFixed(1),product_id:t.product_id}}))},ADD_RATE(t,e){let a=t.rates.indexOf((t=>t.product_id==e.data.product_id));t.rates[a].count_point++,t.rates[a].total_point+=e.data.rate_Point}},actions:{async getRates(t){await yt().get("/api/rate").then((e=>{t.commit("SET_RATES",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))},async addRate(t,e){let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`};return await new Promise(((a,s)=>{yt().post("/api/rate",e,{headers:r}).then((e=>{t.commit("SET_RATES",e.data),a()})).catch((e=>{t.dispatch("showError",e.response.statusText),s()}))}))},async destroyRate(t,e){let a=this.getters["userToken"];await yt()["delete"](`/api/rate/${e}`,{},{headers:{Authorization:`Bearer ${a}`}}).then((t=>{console.log("delete")})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}}};var jt=Ft;const Wt={state:{orders:[],links:{prev:null,next:null,last:null,first:null},orderIsLoaded:!1},getters:{findOrders:t=>e=>t.orders.find((t=>t.id==e)),getAllOrders:t=>t.orders,getOrderIsLoaded:t=>t.orderIsLoaded,getLinksOrders:t=>{let e=t.links.map((t=>({url:t.url?.slice(25)||"/",label:t.label,active:t.active})));return e.shift(),e.pop(),e}},mutations:{SET_ORDERS(t,e){t.orders=e.data,t.orderIsLoaded=!0,t.links=e.meta.links},DESTROY_ORDER(t,e){t.orders.splice(t.orders.findIndex((t=>t.id==e)),1),t.orderIsLoaded=!0},ADD_ORDER(t,e){t.orders.unshift(e.data)},DELETE_ALL_ORDERS(t){t.orders=[]}},actions:{async getOrders(t,e=""){let a="/api/order";""!=e&&(a+=`?page=${e}`),this.state.order.orderIsLoaded=!1,this.getters["userToken"]?await yt().get(a,{headers:{Authorization:`Bearer ${this.getters["userToken"]}`}}).then((e=>{t.commit("SET_ORDERS",e.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)})):t.dispatch("showError","Login first")},async DeleteAllOrders(t){t.commit("DELETE_ALL_ORDERS")},async createOrders(t,e){this.state.order.orderIsLoaded=!1;let a=this.getters["userToken"];await yt().post("/api/orders",e,{headers:{Authorization:`Bearer ${a}`}}).then((e=>{t.commit("SET_ORDERS",e.data),t.dispatch("getCartsUser")})).catch((e=>{t.dispatch("showError",e.response.statusText)}))},async createOrder(t,e){this.state.order.orderIsLoaded=!1;let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`};return new Promise(((a,s)=>{yt().post("/api/order",e,{headers:r}).then((e=>{t.commit("ADD_ORDER",e.data),a()})).catch((e=>{t.dispatch("showError",e.response.statusText),s()}))}))},async deleteOrder(t,e){this.state.order.orderIsLoaded=!1;let a=this.getters["userToken"];await yt()["delete"](`/api/order/${e}`,{headers:{Authorization:`Bearer ${a}`}}).then((a=>{t.commit("DESTROY_ORDER",e)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))},async CountOrder(t){let e=this.getters["userToken"],a={Authorization:`Bearer ${e}`};return await new Promise(((e,r)=>{yt().get("/api/order/statistic",{headers:a}).then((t=>{e(t.data)})).catch((e=>{t.dispatch("showError",e.response.statusText)}))}))},async GreyOrderGetList(t){let e=this.getters["userToken"],a={Authorization:`Bearer ${e}`};return await new Promise(((t,e)=>{yt().get("/api/order/admin/list",{headers:a}).then((e=>{t(e.data)})).catch((t=>{e(t)}))}))},async GreyOrderAction(t,e){let a=this.getters["userToken"],r={Authorization:`Bearer ${a}`};return await new Promise(((t,a)=>{yt().post(`/api/orders/admin/${e.id}/update`,{State:e.State},{headers:r}).then((e=>{t(e.data)})).catch((t=>{a(t)}))}))}}};var Yt=Wt,Gt=new W.ZP.Store({modules:{error:Lt,cart:$t,card:It,rate:jt,favorite:zt,user:Ot,category:Rt,order:Yt,product:Ct}});async function Nt(t,e,a){Gt.getters.userHasAuth?a("/"):a()}async function Vt(t,e,a){if(Gt.getters.userHasAuth)if(Gt.getters.EmailIsVerified)a();else{Gt.getters.userInfo;let t=Gt.getters.userToken;a({name:"EmailResend",params:{token:t}})}else a("/login")}async function Ht(t,e,a){Gt.getters.userIsAdmin?a():a("/")}async function qt(t,e,a){Gt.getters.userIsAdmin?(a("/dashboard"),console.log("if",Gt.getters.userIsAdmin)):(a(),console.log("else",Gt.getters.userIsAdmin))}const Zt=[{path:"/",name:"Home",component:()=>a.e(655).then(a.bind(a,8655)),beforeEnter:qt},{path:"/about",name:"About",component:()=>a.e(454).then(a.bind(a,1454)),beforeEnter:qt},{path:"/shope",name:"Shope",component:()=>a.e(687).then(a.bind(a,4687)),beforeEnter:qt},{path:"/contact",name:"Contact",component:()=>a.e(605).then(a.bind(a,4605)),beforeEnter:qt},{path:"/shope/:id",name:"ShopeSingle",component:()=>a.e(15).then(a.bind(a,9015))},{path:"/shope/category/:id",name:"CategoryList",component:()=>a.e(772).then(a.bind(a,772)),beforeEnter:qt},{path:"/register",name:"Register",component:()=>a.e(592).then(a.bind(a,9592)),beforeEnter:Nt},{path:"/login",name:"Login",component:()=>a.e(718).then(a.bind(a,6718)),beforeEnter:Nt},{path:"/reset-password",name:"ResetPassword",component:()=>a.e(713).then(a.bind(a,713)),beforeEnter:Nt},{path:"/forgot-password",name:"ForgotPassword",component:()=>a.e(979).then(a.bind(a,2979)),beforeEnter:Nt},{path:"/email/verify/:id/:token",name:"EmailVerify",component:()=>a.e(570).then(a.bind(a,2570)),beforeEnter:Nt},{path:"/email/resend/:token",name:"EmailResend",component:()=>a.e(164).then(a.bind(a,9164)),beforeEnter:Nt},{path:"/favorite",name:"Favorite",component:()=>a.e(81).then(a.bind(a,81)),beforeEnter:Vt},{path:"/cart",name:"Cart",component:()=>a.e(447).then(a.bind(a,6447)),beforeEnter:Vt},{path:"/",name:"admin",component:()=>a.e(323).then(a.bind(a,4323)),beforeEnter:Ht,children:[{path:"/edit-password",name:"AdminEditPassword",component:()=>a.e(735).then(a.bind(a,7735))},{path:"/edit-profile",name:"AdminProfile",component:()=>a.e(906).then(a.bind(a,5906))},{path:"/dashboard",name:"Dashboard",component:()=>a.e(293).then(a.bind(a,293))},{path:"/category",name:"Category",component:()=>a.e(117).then(a.bind(a,2117))},{path:"/orders",name:"Orders",component:()=>a.e(178).then(a.bind(a,4178))},{path:"/users",name:"UserGrey",component:()=>a.e(212).then(a.bind(a,1212))},{path:"/product/add",name:"AddProduct",component:()=>a.e(301).then(a.bind(a,3301))},{path:"/product/edit/:id",name:"EditProduct",component:()=>a.e(418).then(a.bind(a,2418))},{path:"/product",name:"Product",component:()=>a.e(640).then(a.bind(a,8640))}]},{path:"/",component:()=>a.e(225).then(a.bind(a,4225)),beforeEnter:Vt,children:[{path:"/profile",name:"Profile",component:()=>a.e(906).then(a.bind(a,5906)),beforeEnter:qt},{path:"/order",name:"Order",component:()=>a.e(142).then(a.bind(a,2142)),beforeEnter:qt},{path:"/card",name:"Card",component:()=>a.e(399).then(a.bind(a,3399)),beforeEnter:qt},{path:"/editpassword",name:"EditPasswordUser",component:()=>a.e(735).then(a.bind(a,7735)),beforeEnter:qt}]}],Kt=(0,_t.p7)({history:(0,_t.PO)("/"),routes:Zt,scrollBehavior(t,e,a){return{x:0,y:0}}});var Mt=Kt;yt().defaults.baseURL="https://my-shope-app.herokuapp.com",(0,r.ri)(Tt).use(Gt).use(Mt).mount("#app");let Jt=localStorage.getItem("token");null==Jt?(0,r.ri)(Tt).use(Gt).use(Mt).mount("#app"):yt().get("/api/user",{headers:{Authorization:`Bearer ${Jt}`}}).then((t=>{Gt.commit("SET_USER",t.data),Gt.commit("SET_TOKEN",Jt)})).catch((t=>{})).finally((()=>{(0,r.ri)(Tt).use(Gt).use(Mt).mount("#app")}))},5932:function(t,e,a){a.d(e,{Z:function(){return u}});var r=a(3396);const s={class:"overlay"},o=(0,r._)("div",{class:"loading-spinner"},[(0,r._)("div",{class:"dot dotOne"}),(0,r._)("div",{class:"dot dotTwo"}),(0,r._)("div",{class:"dot dotThree"})],-1),n=[o];function i(t,e,a,o,i,d){return(0,r.wg)(),(0,r.iD)("div",s,n)}var d={name:"LoadingProgress"},c=a(89);const l=(0,c.Z)(d,[["render",i]]);var u=l}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,o){if(!r){var n=1/0;for(l=0;l<t.length;l++){r=t[l][0],s=t[l][1],o=t[l][2];for(var i=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[d])}))?r.splice(d--,1):(i=!1,o<n&&(n=o));if(i){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{15:"4b8ff648",81:"9c52ad22",117:"8a908a51",142:"d18cc1d6",164:"aa53d761",178:"634f1126",212:"847fde8d",225:"30ba6813",293:"86d732d4",301:"0c6b4dfb",323:"5bae90a0",399:"32ad81d4",418:"09072912",447:"fc0d174a",454:"78071783",570:"60d6b7c2",592:"5e3774cb",605:"d0439b72",640:"4e20604d",655:"ca18de81",687:"f6f409f4",713:"f877b51e",718:"f242ba73",735:"7f157006",772:"be933d5e",906:"97c9f680",979:"7901e130"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{15:"9edce7c1",81:"d30d9ca3",117:"10bb65ba",142:"6c30da7f",293:"22495e53",301:"8a8ca908",323:"5e9186cd",399:"0f9dca5c",418:"8a8ca908",447:"56fb4e6e",454:"890df666",592:"716e081a",605:"3caff453",640:"a7bd0396",655:"8049a20a",687:"e33adff2",718:"f9b71266",772:"6d21edf3",906:"50018ddf"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shopping:";a.l=function(r,s,o,n){if(t[r])t[r].push(s);else{var i,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==e+o){i=u;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[s];var h=function(e,a){i.onerror=i.onload=null,clearTimeout(p);var s=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),d&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(o){if(s.onerror=s.onload=null,"load"===o.type)a();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=i,s.parentNode.removeChild(s),r(d)}};return s.onerror=s.onload=o,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===t||o===e))return s}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){s=n[r],o=s.getAttribute("data-href");if(o===t||o===e)return s}},r=function(r){return new Promise((function(s,o){var n=a.miniCssF(r),i=a.p+n;if(e(n,i))return s();t(r,i,s,o)}))},s={143:0};a.f.miniCss=function(t,e){var a={15:1,81:1,117:1,142:1,293:1,301:1,323:1,399:1,418:1,447:1,454:1,592:1,605:1,640:1,655:1,687:1,718:1,772:1,906:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=r(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,r){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)r.push(s[2]);else{var o=new Promise((function(a,r){s=t[e]=[a,r]}));r.push(s[2]=o);var n=a.p+a.u(e),i=new Error,d=function(r){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,s[1](i)}};a.l(n,d,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,o,n=r[0],i=r[1],d=r[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(d)var l=d(a)}for(e&&e(r);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},r=self["webpackChunkshopping"]=self["webpackChunkshopping"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(7059)}));r=a.O(r)})();
//# sourceMappingURL=app.70fa03fb.js.map