var Me=Object.defineProperty,Oe=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var qe=(l,m,f)=>m in l?Me(l,m,{enumerable:!0,configurable:!0,writable:!0,value:f}):l[m]=f,Ne=(l,m)=>{for(var f in m||(m={}))je.call(m,f)&&qe(l,f,m[f]);if(Te)for(var f of Te(m))ze.call(m,f)&&qe(l,f,m[f]);return l},De=(l,m)=>Oe(l,We(m));import{d as P,S as Pe,l as Qe}from"./SqlExecBox.1663901876151.js";import{a as He,_ as Ke}from"./codemirror.1663901876151.js";import{a as ce,i as de,n as we}from"./assert.1663901876151.js";import{P as Ye}from"./ProjectEnvSelect.1663901876151.js";import{_ as Ge,A as Je,q as Ze,I as Xe,r as et,o as tt,t as at,b as q,C as nt,d as v,e as G,h as V,g as s,w as r,F as X,j as ee,k as R,i as me,B as J,z as pe,x as Se,G as ke,a5 as lt,E as le,J as ot}from"./index.1663901876151.js";import"./Api.1663901876151.js";import"./api.16639018761514.js";var ut={exports:{}};(function(l,m){(function(f){f(He.exports,ut.exports)})(function(f){var Q,t,oe,h,L={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},$=f.Pos,te=f.cmpPos;function M(i){return Object.prototype.toString.call(i)=="[object Array]"}function x(i){var u=i.doc.modeOption;return u==="sql"&&(u="text/x-sql"),f.resolveMode(u).keywords}function B(i){var u=i.doc.modeOption;return u==="sql"&&(u="text/x-sql"),f.resolveMode(u).identifierQuote||"`"}function _(i){return typeof i=="string"?i:i.text}function O(i,u){return M(u)&&(u={columns:u}),u.text||(u.text=i),u}function ue(i){var u={};if(M(i))for(var n=i.length-1;n>=0;n--){var c=i[n];u[_(c).toUpperCase()]=O(_(c),c)}else if(i)for(var g in i)u[g.toUpperCase()]=O(g,i[g]);return u}function U(i){return Q[i.toUpperCase()]}function W(i){var u={};for(var n in i)i.hasOwnProperty(n)&&(u[n]=i[n]);return u}function H(i,u){var n=i.length,c=_(u).substr(0,n);return i.toUpperCase()===c.toUpperCase()}function j(i,u,n,c){if(M(n))for(var g=0;g<n.length;g++)H(u,n[g])&&i.push(c(n[g]));else for(var y in n)if(n.hasOwnProperty(y)){var b=n[y];!b||b===!0?b=y:b=b.displayText?{text:b.text,displayText:b.displayText}:b.text,H(u,b)&&i.push(c(b))}}function se(i){i.charAt(0)=="."&&(i=i.substr(1));for(var u=i.split(h+h),n=0;n<u.length;n++)u[n]=u[n].replace(new RegExp(h,"g"),"");return u.join(h)}function K(i){for(var u=_(i).split("."),n=0;n<u.length;n++)u[n]=h+u[n].replace(new RegExp(h,"g"),h+h)+h;var c=u.join(".");return typeof i=="string"?c:(i=W(i),i.text=c,i)}function ie(i,u,n,c){for(var g=!1,y=[],b=u.start,w=!0;w;)w=u.string.charAt(0)==".",g=g||u.string.charAt(0)==h,b=u.start,y.unshift(se(u.string)),u=c.getTokenAt($(i.line,u.start)),u.string=="."&&(w=!0,u=c.getTokenAt($(i.line,u.start)));var k=y.join(".");j(n,k,Q,function(N){return g?K(N):N}),j(n,k,t,function(N){return g?K(N):N}),k=y.pop();var C=y.join("."),A=!1,S=C;if(!U(C)){var F=C;C=Y(C,c),C!==F&&(A=!0)}var z=U(C);return z&&z.columns&&(z=z.columns),z&&j(n,k,z,function(N){var ae=C;return A==!0&&(ae=S),typeof N=="string"?N=ae+"."+N:(N=W(N),N.text=ae+"."+N.text),g?K(N):N}),b}function re(i,u){for(var n=i.split(/\s+/),c=0;c<n.length;c++)n[c]&&u(n[c].replace(/[`,;]/g,""))}function Y(i,u){for(var n=u.doc,c=n.getValue(),g=i.toUpperCase(),y="",b="",w=[],k={start:$(0,0),end:$(u.lastLine(),u.getLineHandle(u.lastLine()).length)},C=c.indexOf(L.QUERY_DIV);C!=-1;)w.push(n.posFromIndex(C)),C=c.indexOf(L.QUERY_DIV,C+1);w.unshift($(0,0)),w.push($(u.lastLine(),u.getLineHandle(u.lastLine()).text.length));for(var A=null,S=u.getCursor(),F=0;F<w.length;F++){if((A==null||te(S,A)>0)&&te(S,w[F])<=0){k={start:A,end:w[F]};break}A=w[F]}if(k.start)for(var z=n.getRange(k.start,k.end,!1),F=0;F<z.length;F++){var N=z[F];if(re(N,function(ne){var fe=ne.toUpperCase();fe===g&&U(y)&&(b=y),fe!==L.ALIAS_KEYWORD&&(y=ne)}),b)break}return b}f.registerHelper("hint","sql",function(i,u){Q=ue(u&&u.tables);var n=u&&u.defaultTable,c=u&&u.disableKeywords;t=n&&U(n),oe=x(i),h=B(i),n&&!t&&(t=Y(n,i)),t=t||[],t.columns&&(t=t.columns);var g=i.getCursor(),y=[],b=i.getTokenAt(g),w,k,C;if(b.end>g.ch&&(b.end=g.ch,b.string=b.string.slice(0,g.ch-b.start)),b.string.match(/^[.`"'\w@][\w$#]*$/g)?(C=b.string,w=b.start,k=b.end):(w=k=g.ch,C=""),C.charAt(0)=="."||C.charAt(0)==h)w=ie(g,b,y,i);else{var A=function(S,F){return typeof S=="object"?S.className=F:S={text:S,className:F},S};j(y,C,t,function(S){return A(S,"CodeMirror-hint-table CodeMirror-hint-default-table")}),j(y,C,Q,function(S){return A(S,"CodeMirror-hint-table")}),c||j(y,C,oe,function(S){return A(S.toUpperCase(),"CodeMirror-hint-keyword")})}return{list:y,from:$(g.line,w),to:$(g.line,k)}})})})();const st=Je({name:"SqlExec",components:{ProjectEnvSelect:Ye},setup(){const l=Ze(null),m=Xe("token");let f=null;const Q=new Map,t=et({token:m,defalutLimit:20,dbs:[],databaseList:[],db:"",dbType:"",tables:[],dbId:null,tableName:"",tableMetadata:[],sqlName:"",sqlNames:[],activeName:"Query",queryTabName:"Query",nowTableName:"",dataTabs:{},dataTabsTableHeight:600,queryTab:{label:"\u67E5\u8BE2",name:"Query",execRes:{data:[],tableColumn:[]},loading:!1,nowTableName:"",selectionDatas:[]},params:{pageNum:1,pageSize:10,envId:null},conditionDialog:{title:"",placeholder:"",columnRow:null,dataTab:null,visible:!1,condition:"=",value:null},genSqlDialog:{visible:!1,sql:""},cmOptions:{tabSize:4,mode:"text/x-sql",lineNumbers:!0,line:!0,indentWithTabs:!0,smartIndent:!0,matchBrackets:!0,theme:"base16-light",autofocus:!0,extraKeys:{Tab:"autocomplete"},hintOptions:{completeSingle:!1,tables:{}}}}),oe=()=>{f=Ke.fromTextArea(l.value,t.cmOptions),f.on("inputRead",(e,a)=>{/^[a-zA-Z]/.test(a.text[0])&&e.showHint()}),f.on("beforeChange",(e,a)=>{var o=a.text[0];a.text[0]=o.split("  ")[0]})};tt(()=>{oe(),h(),window.onresize=()=>(()=>{h()})()});const h=()=>{f.setSize("auto",`${window.innerHeight-538}px`),t.dataTabsTableHeight=window.innerHeight-274},L=(e,a)=>{t.dbs=[],t.dbId=null,t.db="",t.databaseList=[],be(),a!=null&&(t.params.envId=a,Le())},$=(e,a)=>{var o=a.text[0];a.text[0]=o.split("  ")[0]},te=async()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93");let e=se();de(e&&e.trim(),"\u8BF7\u9009\u4E2D\u9700\u8981\u6267\u884C\u7684sql"),e=e.replace(/(^\s*)/g,"");let a="",o=!0;if((e.startsWith("update")||e.startsWith("UPDATE")||e.startsWith("INSERT")||e.startsWith("insert")||e.startsWith("DELETE")||e.startsWith("delete"))&&(a=(await ke.prompt("\u8BF7\u8F93\u5165\u5907\u6CE8","Tip",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputPattern:/^[\s\S]*.*[^\s][\s\S]*$/,inputErrorMessage:"\u8BF7\u8F93\u5165\u6267\u884C\u8BE5sql\u7684\u5907\u6CE8\u4FE1\u606F"})).value,a||(o=!1)),!!o){try{t.queryTab.loading=!0;const d=await x(e,a);t.queryTab.execRes.data=d.res,t.queryTab.execRes.tableColumn=d.colNames,t.queryTab.loading=!1}catch{t.queryTab.loading=!1}if(e.startsWith("SELECT *")||e.startsWith("select *")||e.startsWith(`SELECT
  *`)){t.queryTab.selectionDatas=[];const d=e.split(/from/i)[1];if(d){const p=d.trim().split(" ")[0];t.queryTab.nowTableName=p,t.nowTableName=p}else t.queryTab.nowTableName="",t.nowTableName=""}else t.queryTab.nowTableName="",t.nowTableName=""}},M=()=>{const e=t.queryTab.execRes.data;de(e.length>0,"\u6CA1\u6709\u6570\u636E\u53EF\u5BFC\u51FA");const a=t.queryTab.execRes.tableColumn,o=[a];for(let T of e){let I=[];for(let Z of a)I.push(T[Z]);o.push(I)}const d=o.map(T=>T.join(",")).join(`
`);let p=document.createElement("a"),D="\uFEFF",E=new Blob([D+d],{type:"text/plain;charset=utrf-8"});p.id="download-csv",p.setAttribute("href",URL.createObjectURL(E)),p.setAttribute("download",`\u67E5\u8BE2\u6570\u636E\u5BFC\u51FA-${lt("yyyyMMddHHmmss",new Date)}.csv`),document.body.appendChild(p),p.click()},x=async(e,a="")=>await P.sqlExec.request({id:t.dbId,db:t.db,sql:e.trim(),remark:a}),B=e=>{const a=Object.keys(t.dataTabs);let o=t.activeName;a.forEach((d,p)=>{if(d===e){const D=a[p+1]||a[p-1]||t.queryTab.name;D&&(o=D)}}),t.activeName=o,delete t.dataTabs[e]},_=e=>{const a=e.props.name;a!=t.queryTab.name?(t.tableName=a,t.nowTableName=a):t.nowTableName=t.queryTab.nowTableName},O=e=>{if(!t.dbId)return le.error("\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),!1;le.success(`'${e.name}' \u6B63\u5728\u4E0A\u4F20\u6267\u884C, \u8BF7\u5173\u6CE8\u7ED3\u679C\u901A\u77E5`)},ue=e=>{e.code!==200&&le.error(e.msg)},U=()=>`${ot.baseApiUrl}/dbs/${t.dbId}/exec-sql-file?db=${t.db}`,W=(e,a,o="equal")=>{e=e+"";let d="";if(!a||!a.length||a.length===0||a===void 0||!e||!e.length||e.length===0||e===void 0)return;if(o==="equal"){for(let T=0;T<a.length;T++)if((a[T][e]+"").length>0){d=a[T][e]+"";break}}else{let T=0;for(let I=0;I<a.length;I++){if(a[I][e]===null)return;const Z=a[I][e]+"",Ee=a[T][e]+"";Z.length>Ee.length&&(T=I)}d=a[T][e]+""}const p=H(d),D=H(e)+43;return(p>D?p:D)+"px"},H=e=>{let a=0;for(const o of e){if(a>500)break;if(o>="0"&&o<="9"||o>="a"&&o<="z"){a+=8.5;continue}if(o>="A"&&o<="Z"){a+=9;continue}o>="\u4E00"&&o<="\u9FA5"?a+=16:a+=8}return a>500&&(a=500),a},j=(e,a)=>{let o=i(e);if(!o)return"";const d=o.find(D=>D.columnName==a),p=d.columnComment;return`${d.columnType} ${p?" |  "+p:""}`},se=()=>{let e=f.getSelection();return e||(e=fe()),e},K=e=>{t.db="";const a=t.dbs.find(o=>o.id==e);t.dbType=a.type,t.databaseList=a.database.split(" "),be()},ie=e=>{!e||(be(),P.tableMetadata.request({id:t.dbId,db:e}).then(a=>{t.tableMetadata=a}),P.hintTables.request({id:t.dbId,db:e}).then(a=>{t.cmOptions.hintOptions.tables=a}),ve())},re=async(e,a=!0)=>{if(e==""||!a)return;t.nowTableName=e,t.activeName=e;let o=t.dataTabs[e];o||(o={label:e,name:e,datas:[],columnNames:[],pageNum:1,count:0},o.columnNames=await u(e),t.dataTabs[e]=o,y(e))},Y=async e=>{let a=i(e);return a||(a=await P.columnMetadata.request({id:t.dbId,db:t.db,tableName:e}),Q.set(e,a),a)},i=e=>Q.get(e),u=async e=>(await Y(e)).map(o=>o.columnName),n=(e,a)=>{const o=e[0];t.conditionDialog.title=`\u8BF7\u8F93\u5165 [${o.columnName}] \u7684\u503C`,t.conditionDialog.placeholder=`${o.columnType}  ${o.columnComment}`,t.conditionDialog.columnRow=o,t.conditionDialog.dataTab=a,t.conditionDialog.visible=!0},c=()=>{const e=t.conditionDialog,a=t.conditionDialog.dataTab;let o=a.condition;o&&(o+=" AND ");const d=e.columnRow;o+=`${d.columnName} ${e.condition} `,a.condition=o+ge(d,e.value),g()},g=()=>{t.conditionDialog.visible=!1,t.conditionDialog.title="",t.conditionDialog.placeholder="",t.conditionDialog.value=null,t.conditionDialog.columnRow=null,t.conditionDialog.dataTab=null},y=async e=>{const a=t.dataTabs[e];a.condition="",a.pageNum=1,k(a)},b=async e=>{k(e)},w=async(e,a)=>{we(a,"\u6761\u4EF6\u4E0D\u80FD\u4E3A\u7A7A");const o=t.dataTabs[e];o.pageNum=1,k(o)},k=async e=>{e.loading=!0;try{if(e.count=await C(e.name,e.condition),e.count>0){const a=await x(A(e.name,e.condition,e.orderBy,e.pageNum));e.datas=a.res}else e.datas=[]}finally{e.loading=!1}},C=async(e,a="")=>(await x(S(e,a))).res[0].count,A=(e,a="",o="",d=1)=>{const p=`SELECT * FROM ${e} ${a?"WHERE "+a:""} ${o||""}`;return t.dbType=="mysql"?`${p} LIMIT ${(d-1)*t.defalutLimit}, ${t.defalutLimit};`:t.dbType=="postgres"?`${p} OFFSET ${(d-1)*t.defalutLimit} LIMIT ${t.defalutLimit};`:p},S=(e,a="")=>`SELECT COUNT(*) count FROM ${e} ${a?"WHERE "+a:""}`,F=()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),x("COMMIT;"),le.success("COMMIT success")},z=async e=>{if(!t.nowTableName||!e.prop)return;const a=t.activeName,o=e.order=="descending"?"DESC":"ASC",d=`ORDER BY ${e.prop} ${o}`;t.dataTabs[t.activeName].orderBy=d,y(a)},N=()=>{ae()},ae=()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),P.getSql.request({id:t.dbId,type:1,name:t.sqlName,db:t.db}).then(e=>{ne(e?e.sql:"")})},ne=e=>{f.setValue(e)},fe=()=>{f.getValue()},ve=()=>{P.getSqlNames.request({id:t.dbId,db:t.db}).then(e=>{e&&e.length>0?(t.sqlNames=e.map(a=>a.name),t.sqlName=t.sqlNames[0]):(t.sqlNames=["default"],t.sqlName="default"),ae()})},Be=async()=>{const e=f.getValue();we(e,"sql\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93\u5B9E\u4F8B"),await P.saveSql.request({id:t.dbId,db:t.db,sql:e,type:1,name:t.sqlName}),le.success("\u4FDD\u5B58\u6210\u529F"),P.getSqlNames.request({id:t.dbId,db:t.db}).then(a=>{a&&(t.sqlNames=a.map(o=>o.name))})},Fe=async()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93");try{await ke.confirm(`\u786E\u5B9A\u5220\u9664\u3010${t.sqlName}\u3011\u8BE5SQL\u6A21\u677F?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await P.deleteDbSql.request({id:t.dbId,name:t.sqlName,db:t.db}),le.success("\u5220\u9664\u6210\u529F"),ve()}catch{}},be=()=>{t.tableName="",t.nowTableName="",t.tableMetadata=[],t.dataTabs={},ne(""),t.sqlNames=[],t.sqlName="",t.activeName=t.queryTab.name,t.queryTab.execRes.data=[],t.queryTab.execRes.tableColumn=[],t.cmOptions.hintOptions.tables=[],Q.clear()},_e=e=>{he()?t.queryTab.selectionDatas=e:t.dataTabs[t.activeName].selectionDatas=e},$e=async()=>{const e=he(),a=e?t.queryTab.selectionDatas:t.dataTabs[t.activeName].selectionDatas;de(a&&a.length>0,"\u8BF7\u5148\u9009\u62E9\u8981\u5220\u9664\u7684\u6570\u636E");const o=await ye(t.nowTableName),d=o.columnName,p=a.map(E=>`${ge(o,E[d])}`).join(","),D=`DELETE FROM ${t.nowTableName} WHERE ${d} IN (${p})`;Ce(D,null,()=>{e?(t.queryTab.execRes.data=t.queryTab.execRes.data.filter(E=>a.findIndex(T=>T[d]==E[d])==-1),t.queryTab.selectionDatas=[]):y(t.activeName)})},Ae=async()=>{const a=he()?t.queryTab.selectionDatas:t.dataTabs[t.activeName].selectionDatas;de(a&&a.length>0,"\u8BF7\u5148\u9009\u62E9\u8981\u751F\u6210insert\u8BED\u53E5\u7684\u6570\u636E");const o=t.nowTableName,d=await Y(o),p=[];for(let D of a){let E=[],T=[];for(let I of d){const Z=I.columnName;E.push(Z),T.push(Ie(D[Z]))}p.push(`INSERT INTO ${o} (${E.join(", ")}) VALUES(${T.join(", ")})`)}t.genSqlDialog.sql=p.join(`;
`)+";",t.genSqlDialog.visible=!0},Ie=e=>e==null?"NULL":typeof e=="number"?e:`'${e}'`,he=()=>t.activeName==t.queryTab.name,Re=(e,a,o)=>{const d=a.property;if(!t.nowTableName||!d)return;let p=(e[d]?e[d]:"")+"",D=o.children[0];if(D){let E=document.createElement("input");E.setAttribute("value",p),E.setAttribute("style","height:30px;"+D.getAttribute("style")),o.replaceChildren(E),E.focus(),E.addEventListener("blur",async()=>{if(e[d]=E.value,o.replaceChildren(D),E.value!==p){const T=await ye(t.nowTableName),I=T.columnName,Z=await ye(t.nowTableName,a.rawColumnKey),Ee=`UPDATE ${t.nowTableName} SET ${a.rawColumnKey} = ${ge(Z,E.value)} 
                                        WHERE ${I} = ${ge(T,e[I])}`;Ce(Ee,()=>{e[d]=p})}})}},ye=async(e,a="")=>{const o=await Y(e);return a?o.find(d=>d.columnName==a):o[0]},ge=(e,a)=>Ve(e.columnType)?a:`'${a}'`,Ve=e=>e.match(/int|double|float|nubmer|decimal/gi),Ce=(e,a=null,o=null)=>{Pe({sql:e,dbId:t.dbId,db:t.db,runSuccessCallback:o,cancelCallback:a})},xe=async()=>{const e=t.nowTableName,a=await Y(e);let o={};a.forEach(E=>{o[`${E.columnName}`]=`'${E.columnName}[${E.columnType}]${E.nullable=="YES"?"":"[not null]"}'`});let d=Object.keys(o).join(","),p=Object.values(o).join(","),D=`INSERT INTO ${t.nowTableName} (${d}) VALUES (${p});`;Ce(D,null,()=>{y(e)})},Ue=()=>{let e=f.getSelection();de(e,"\u8BF7\u9009\u4E2D\u9700\u8981\u683C\u5F0F\u5316\u7684sql"),f.replaceSelection(Qe.format(e))},Le=async()=>{const e=await P.dbs.request(t.params);t.dbs=e.list};return De(Ne({},at(t)),{codeTextarea:l,changeProjectEnv:L,changeTable:re,cellClick:Re,onRunSql:te,exportData:M,removeDataTab:B,onDataTabClick:_,beforeUpload:O,getUploadSqlFileUrl:U,execSqlFileSuccess:ue,flexColumnWidth:W,getColumnTip:j,getColumns4Map:i,onConditionRowClick:n,onConfirmCondition:c,onCancelCondition:g,changeSqlTemplate:N,deleteSql:Fe,saveSql:Be,changeDbInstance:K,changeDb:ie,clearDb:be,formatSql:Ue,onBeforeChange:$,onRefresh:y,handlePageChange:b,selectByCondition:w,onCommit:F,addRow:xe,onDataSelectionChange:_e,onDeleteData:$e,onTableSortChange:z,onGenerateInsertSql:Ae})}}),it={class:"toolbar"},rt={style:{float:"left"}},ct={style:{float:"right",color:"#8492a6","margin-left":"6px","font-size":"13px"}},dt={class:"toolbar"},mt={class:"fl"},pt={style:{float:"right"},class:"fl"},ft=J("\u4FDD\u5B58"),bt=J("\u5220\u9664"),gt={class:"mt5 sqlEditor"},ht={ref:"codeTextarea"},yt={class:"mt5"},Ct={key:1},Et=V("span",{style:{"font-size":"12px"}},"\u5BFC\u51FA",-1),vt=J("gi"),Tt=J("\u9009\u62E9\u5217"),qt={class:"dialog-footer"},Nt=J("\u53D6\u6D88"),Dt=J("\u786E\u5B9A");function wt(l,m,f,Q,t,oe){const h=q("el-option"),L=q("el-select"),$=q("el-form-item"),te=q("project-env-select"),M=q("el-col"),x=q("el-row"),B=q("el-link"),_=q("el-divider"),O=q("el-tooltip"),ue=q("el-upload"),U=q("el-button"),W=q("el-table-column"),H=q("el-table"),j=q("el-tab-pane"),se=q("el-popover"),K=q("el-input"),ie=q("el-pagination"),re=q("el-tabs"),Y=q("el-container"),i=q("el-dialog"),u=nt("loading");return v(),G("div",null,[V("div",it,[s(x,{type:"flex",justify:"space-between"},{default:r(()=>[s(M,{span:24},{default:r(()=>[s(te,{onChangeProjectEnv:l.changeProjectEnv},{default:r(()=>[s($,{label:"\u8D44\u6E90"},{default:r(()=>[s(L,{modelValue:l.dbId,"onUpdate:modelValue":m[0]||(m[0]=n=>l.dbId=n),placeholder:"\u8BF7\u9009\u62E9\u8D44\u6E90\u5B9E\u4F8B",onChange:l.changeDbInstance,filterable:"",style:{width:"150px"}},{default:r(()=>[(v(!0),G(X,null,ee(l.dbs,n=>(v(),R(h,{key:n.id,label:n.name,value:n.id},{default:r(()=>[V("span",rt,me(n.name),1),V("span",ct,me(`${n.host}:${n.port} ${n.type}`),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),s($,{label:"\u6570\u636E\u5E93"},{default:r(()=>[s(L,{modelValue:l.db,"onUpdate:modelValue":m[1]||(m[1]=n=>l.db=n),placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u5E93",onChange:l.changeDb,onClear:l.clearDb,clearable:"",filterable:"",style:{width:"150px"}},{default:r(()=>[(v(!0),G(X,null,ee(l.databaseList,n=>(v(),R(h,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange","onClear"])]),_:1}),s($,{"label-width":"20",label:"\u8868"},{default:r(()=>[s(L,{modelValue:l.tableName,"onUpdate:modelValue":m[2]||(m[2]=n=>l.tableName=n),placeholder:"\u9009\u62E9\u8868\u67E5\u770B\u8868\u6570\u636E",onChange:l.changeTable,filterable:"",style:{width:"250px"}},{default:r(()=>[(v(!0),G(X,null,ee(l.tableMetadata,n=>(v(),R(h,{key:n.tableName,label:n.tableName+(n.tableComment!=""?`\u3010${n.tableComment}\u3011`:""),value:n.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1},8,["onChangeProjectEnv"])]),_:1})]),_:1})]),s(Y,{id:"data-exec",style:{border:"1px solid #eee","margin-top":"1px"}},{default:r(()=>[s(re,{onTabRemove:l.removeDataTab,onTabClick:l.onDataTabClick,style:{width:"100%"},modelValue:l.activeName,"onUpdate:modelValue":m[4]||(m[4]=n=>l.activeName=n)},{default:r(()=>[s(j,{label:l.queryTab.label,name:l.queryTab.name},{default:r(()=>[V("div",null,[V("div",null,[V("div",dt,[V("div",mt,[s(B,{onClick:l.onRunSql,underline:!1,class:"ml15",icon:"VideoPlay"},null,8,["onClick"]),s(_,{direction:"vertical","border-style":"dashed"}),s(O,{class:"box-item",effect:"dark",content:"format sql",placement:"top"},{default:r(()=>[s(B,{onClick:l.formatSql,type:"primary",underline:!1,icon:"MagicStick"},null,8,["onClick"])]),_:1}),s(_,{direction:"vertical","border-style":"dashed"}),s(O,{class:"box-item",effect:"dark",content:"commit",placement:"top"},{default:r(()=>[s(B,{onClick:l.onCommit,type:"success",underline:!1,icon:"CircleCheck"},null,8,["onClick"])]),_:1}),s(_,{direction:"vertical","border-style":"dashed"}),s(ue,{style:{display:"inline-block"},"before-upload":l.beforeUpload,"on-success":l.execSqlFileSuccess,headers:{Authorization:l.token},data:{dbId:1},action:l.getUploadSqlFileUrl(),"show-file-list":!1,name:"file",multiple:"",limit:100},{default:r(()=>[s(O,{class:"box-item",effect:"dark",content:"SQL\u811A\u672C\u6267\u884C",placement:"top"},{default:r(()=>[s(B,{type:"success",underline:!1,icon:"Document"})]),_:1})]),_:1},8,["before-upload","on-success","headers","action"])]),V("div",pt,[s(L,{modelValue:l.sqlName,"onUpdate:modelValue":m[3]||(m[3]=n=>l.sqlName=n),placeholder:"\u9009\u62E9or\u8F93\u5165SQL\u6A21\u677F\u540D",onChange:l.changeSqlTemplate,filterable:"","allow-create":"","default-first-option":"",size:"small",class:"mr10"},{default:r(()=>[(v(!0),G(X,null,ee(l.sqlNames,n=>(v(),R(h,{key:n,label:n.database,value:n},{default:r(()=>[J(me(n),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),s(U,{onClick:l.saveSql,type:"primary",icon:"document-add",plain:"",size:"small"},{default:r(()=>[ft]),_:1},8,["onClick"]),s(U,{onClick:l.deleteSql,type:"danger",icon:"delete",plain:"",size:"small"},{default:r(()=>[bt]),_:1},8,["onClick"])])])]),V("div",gt,[V("textarea",ht,null,512)]),V("div",yt,[s(x,null,{default:r(()=>[l.queryTab.nowTableName?(v(),R(B,{key:0,onClick:l.onDeleteData,class:"ml5",type:"danger",icon:"delete",underline:!1},null,8,["onClick"])):pe("",!0),l.queryTab.execRes.data.length>0?(v(),G("span",Ct,[s(_,{direction:"vertical","border-style":"dashed"}),s(B,{type:"success",underline:!1,onClick:l.exportData},{default:r(()=>[Et]),_:1},8,["onClick"])])):pe("",!0)]),_:1}),Se((v(),R(H,{onCellDblclick:l.cellClick,onSelectionChange:l.onDataSelectionChange,data:l.queryTab.execRes.data,"element-loading-text":"\u67E5\u8BE2\u4E2D...",size:"small","max-height":"250","empty-text":"tips: select *\u5F00\u5934\u7684\u5355\u8868\u67E5\u8BE2\u6216\u70B9\u51FB\u8868\u540D\u9ED8\u8BA4\u67E5\u8BE2\u7684\u6570\u636E,\u53EF\u53CC\u51FB\u6570\u636E\u5728\u7EBF\u4FEE\u6539",stripe:"",border:"",class:"mt5"},{default:r(()=>[l.queryTab.execRes.tableColumn.length>0&&l.queryTab.nowTableName?(v(),R(W,{key:0,type:"selection",width:"35"})):pe("",!0),(v(!0),G(X,null,ee(l.queryTab.execRes.tableColumn,n=>(v(),R(W,{"min-width":"100",width:l.flexColumnWidth(n,l.queryTab.execRes.data),align:"center",key:n,prop:n,label:n,"show-overflow-tooltip":""},null,8,["width","prop","label"]))),128))]),_:1},8,["onCellDblclick","onSelectionChange","data"])),[[u,l.queryTab.loading]])])])]),_:1},8,["label","name"]),(v(!0),G(X,null,ee(l.dataTabs,n=>(v(),R(j,{closable:"",key:n.name,label:n.label,name:n.name},{default:r(()=>[l.dbId?(v(),R(x,{key:0},{default:r(()=>[s(M,{span:8},{default:r(()=>[s(B,{onClick:c=>l.onRefresh(n.name),icon:"refresh",underline:!1,class:"ml5"},null,8,["onClick"]),s(_,{direction:"vertical","border-style":"dashed"}),s(B,{onClick:l.addRow,type:"primary",icon:"plus",underline:!1},null,8,["onClick"]),s(_,{direction:"vertical","border-style":"dashed"}),s(B,{onClick:l.onDeleteData,type:"danger",icon:"delete",underline:!1},null,8,["onClick"]),s(_,{direction:"vertical","border-style":"dashed"}),s(O,{class:"box-item",effect:"dark",content:"commit",placement:"top"},{default:r(()=>[s(B,{onClick:l.onCommit,type:"success",icon:"CircleCheck",underline:!1},null,8,["onClick"])]),_:1}),s(_,{direction:"vertical","border-style":"dashed"}),s(O,{class:"box-item",effect:"dark",content:"\u751F\u6210insert sql",placement:"top"},{default:r(()=>[s(B,{onClick:l.onGenerateInsertSql,type:"success",underline:!1},{default:r(()=>[vt]),_:1},8,["onClick"])]),_:1})]),_:2},1024),s(M,{span:16},{default:r(()=>[s(K,{modelValue:n.condition,"onUpdate:modelValue":c=>n.condition=c,placeholder:"\u82E5\u9700\u6761\u4EF6\u8FC7\u6EE4\uFF0C\u53EF\u9009\u62E9\u5217\u5E76\u70B9\u51FB\u5BF9\u5E94\u7684\u5B57\u6BB5\u5E76\u8F93\u5165\u9700\u8981\u8FC7\u6EE4\u7684\u5185\u5BB9\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u5373\u53EF",clearable:"",size:"small",style:{width:"100%"}},{prepend:r(()=>[s(se,{trigger:"click",width:320,placement:"right"},{reference:r(()=>[s(B,{type:"success",underline:!1},{default:r(()=>[Tt]),_:1})]),default:r(()=>[s(H,{data:l.getColumns4Map(n.name),"max-height":"500",size:"small",onRowClick:(...c)=>{l.onConditionRowClick(c,n)},style:{cursor:"pointer"}},{default:r(()=>[s(W,{property:"columnName",label:"\u5217\u540D","show-overflow-tooltip":""}),s(W,{property:"columnComment",label:"\u5907\u6CE8","show-overflow-tooltip":""})]),_:2},1032,["data","onRowClick"])]),_:2},1024)]),append:r(()=>[s(U,{onClick:c=>l.selectByCondition(n.name,n.condition),icon:"search",size:"small"},null,8,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):pe("",!0),Se((v(),R(H,{onCellDblclick:l.cellClick,onSortChange:l.onTableSortChange,onSelectionChange:l.onDataSelectionChange,data:n.datas,size:"small","max-height":l.dataTabsTableHeight,"element-loading-text":"\u67E5\u8BE2\u4E2D...","empty-text":"\u6682\u65E0\u6570\u636E",stripe:"",border:"",class:"mt5"},{default:r(()=>[n.datas.length>0?(v(),R(W,{key:0,type:"selection",width:"35"})):pe("",!0),(v(!0),G(X,null,ee(n.columnNames,c=>(v(),R(W,{"min-width":"100",width:l.flexColumnWidth(c,n.datas),align:"center",key:c,prop:c,label:c,"show-overflow-tooltip":"",sortable:l.nowTableName!=""?"custom":!1},{header:r(()=>[s(O,{"raw-content":"",placement:"top",effect:"customized"},{content:r(()=>[J(me(l.getColumnTip(n.name,c)),1)]),default:r(()=>[J(" "+me(c),1)]),_:2},1024)]),_:2},1032,["width","prop","label","sortable"]))),128))]),_:2},1032,["onCellDblclick","onSortChange","onSelectionChange","data","max-height"])),[[u,n.loading]]),s(x,{type:"flex",class:"mt5",justify:"center"},{default:r(()=>[s(ie,{small:"",total:n.count,onCurrentChange:c=>l.handlePageChange(n),layout:"prev, pager, next, total, jumper","current-page":n.pageNum,"onUpdate:current-page":c=>n.pageNum=c,"page-size":l.defalutLimit},null,8,["total","onCurrentChange","current-page","onUpdate:current-page","page-size"])]),_:2},1024)]),_:2},1032,["label","name"]))),128))]),_:1},8,["onTabRemove","onTabClick","modelValue"])]),_:1}),s(i,{modelValue:l.conditionDialog.visible,"onUpdate:modelValue":m[7]||(m[7]=n=>l.conditionDialog.visible=n),title:l.conditionDialog.title,width:"420px"},{footer:r(()=>[V("span",qt,[s(U,{onClick:l.onCancelCondition},{default:r(()=>[Nt]),_:1},8,["onClick"]),s(U,{type:"primary",onClick:l.onConfirmCondition},{default:r(()=>[Dt]),_:1},8,["onClick"])])]),default:r(()=>[s(x,null,{default:r(()=>[s(M,{span:5},{default:r(()=>[s(L,{modelValue:l.conditionDialog.condition,"onUpdate:modelValue":m[5]||(m[5]=n=>l.conditionDialog.condition=n)},{default:r(()=>[s(h,{label:"=",value:"="}),s(h,{label:"LIKE",value:"LIKE"}),s(h,{label:">",value:">"}),s(h,{label:">=",value:">="}),s(h,{label:"<",value:"<"}),s(h,{label:"<=",value:"<="})]),_:1},8,["modelValue"])]),_:1}),s(M,{span:19},{default:r(()=>[s(K,{modelValue:l.conditionDialog.value,"onUpdate:modelValue":m[6]||(m[6]=n=>l.conditionDialog.value=n),placeholder:l.conditionDialog.placeholder},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"]),s(i,{onClose:m[9]||(m[9]=n=>l.genSqlDialog.visible=!1),modelValue:l.genSqlDialog.visible,"onUpdate:modelValue":m[10]||(m[10]=n=>l.genSqlDialog.visible=n),title:"SQL",width:"1000px"},{default:r(()=>[s(K,{modelValue:l.genSqlDialog.sql,"onUpdate:modelValue":m[8]||(m[8]=n=>l.genSqlDialog.sql=n),type:"textarea",rows:"20"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}var Rt=Ge(st,[["render",wt]]);export{Rt as default};