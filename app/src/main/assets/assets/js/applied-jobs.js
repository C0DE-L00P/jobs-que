const _0xe95431=_0x12f4;(function(_0xa64885,_0x2adcdb){const _0x27f661=_0x12f4,_0x1b1feb=_0xa64885();while(!![]){try{const _0x447e83=parseInt(_0x27f661(0x97))/0x1*(parseInt(_0x27f661(0xaf))/0x2)+parseInt(_0x27f661(0xa2))/0x3*(parseInt(_0x27f661(0x8d))/0x4)+-parseInt(_0x27f661(0x8e))/0x5+parseInt(_0x27f661(0x88))/0x6+parseInt(_0x27f661(0xa1))/0x7*(-parseInt(_0x27f661(0xa9))/0x8)+-parseInt(_0x27f661(0xa4))/0x9*(parseInt(_0x27f661(0x8b))/0xa)+parseInt(_0x27f661(0xa7))/0xb;if(_0x447e83===_0x2adcdb)break;else _0x1b1feb['push'](_0x1b1feb['shift']());}catch(_0x50d187){_0x1b1feb['push'](_0x1b1feb['shift']());}}}(_0x3137,0x6ef86));const user=JSON[_0xe95431(0x91)](localStorage['getItem'](_0xe95431(0x95))),token=localStorage['getItem']('token')??sessionStorage[_0xe95431(0xa6)](_0xe95431(0xb7)),BASE_URL='http://167.71.79.133/api',applied=JSON[_0xe95431(0x91)](localStorage[_0xe95431(0xa6)]('applied_forms'))??[],activeOnes=applied[_0xe95431(0xb6)](_0x59f4ef=>_0x59f4ef[_0xe95431(0xad)]==0x0||_0x59f4ef['accept']==null||_0x59f4ef['accept']||!_0x59f4ef[_0xe95431(0xa5)])??[],rejected=applied[_0xe95431(0xb6)](_0x3a41a2=>_0x3a41a2[_0xe95431(0x87)]==![])??[];document[_0xe95431(0x8c)]('empty-active-page')['style'][_0xe95431(0x94)]=activeOnes['length']==0x0?_0xe95431(0xb5):_0xe95431(0x8f),document[_0xe95431(0x8c)](_0xe95431(0xb3))[_0xe95431(0xac)][_0xe95431(0x94)]=activeOnes[_0xe95431(0x83)]!=0x0?_0xe95431(0x89):_0xe95431(0x8f),document['getElementById'](_0xe95431(0xa0))[_0xe95431(0x9a)]=activeOnes[_0xe95431(0x83)]+'\x20Jobs',activeOnes[_0xe95431(0xb1)](async _0x590ade=>{const _0x5496bb=_0xe95431;let _0x5604f8=await getJobDetails(_0x590ade['jobs_id']);document[_0x5496bb(0x8c)](_0x5496bb(0xbb))[_0x5496bb(0x82)](_0x5496bb(0xab),'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<active-item\x20class=\x22notification-item\x20pt-3\x20d-block\x20container\x22\x20role=\x22button\x22\x20data-bs-toggle=\x22offcanvas\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-bs-target=\x22#offcanvasBottom\x22\x20aria-controls=\x22offcanvasBottom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22...\x22\x20alt=\x22\x22\x20onerror=\x22if\x20(this.src\x20!=\x20\x27./assets/images/fallback_job_img.webp\x27)\x20this.src\x20=\x20\x27./assets/images/fallback_job_img.webp\x27;\x22\x20\x20class=\x22align-self-start\x20mb-2\x22\x20style=\x22aspect-ratio:\x201/1;\x20width:\x2040px;\x22/>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x20text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>'+_0x5604f8[_0x5496bb(0x86)]+_0x5496bb(0xb4)+_0x5604f8['comp_name']+'\x20•\x20'+_0x5604f8['_location_']+_0x5496bb(0xae)+(!_0x590ade[_0x5496bb(0xa5)]?'<a\x20href=\x22./apply-job-form.html?id='+_0x590ade[_0x5496bb(0x9d)]+_0x5496bb(0xaa):!_0x590ade['accept']?'<span\x20class=\x22fw-semibold\x20mx-0\x20px-0\x20btn\x20btn-outline-light\x20border-0\x20text-primary\x22>Submited</span>':_0x5496bb(0x92))+_0x5496bb(0x84)+formatDate(_0x590ade['created_at'])+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x590ade['created_at']?'':_0x5496bb(0x9f))+_0x5496bb(0xb9));}),document['querySelector'](_0xe95431(0x90))[_0xe95431(0xac)][_0xe95431(0x94)]=rejected[_0xe95431(0x83)]==0x0?_0xe95431(0xb5):_0xe95431(0x8f),document[_0xe95431(0x8c)](_0xe95431(0x96))[_0xe95431(0xac)][_0xe95431(0x94)]=rejected[_0xe95431(0x83)]!=0x0?_0xe95431(0x89):_0xe95431(0x8f),rejected[_0xe95431(0xb1)](async _0x85a023=>{const _0x137d7b=_0xe95431;let _0x15b312=await getJobDetails(_0x85a023['jobs_id']);document['querySelector']('reject-list>template')['insertAdjacentHTML'](_0x137d7b(0xab),_0x137d7b(0x9c)+_0x15b312[_0x137d7b(0x86)]+_0x137d7b(0xb4)+_0x15b312['comp_name']+_0x137d7b(0xa3)+_0x15b312['_location_']+'\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-semibold\x20mx-0\x20px-0\x20btn\x20btn-outline-light\x20border-0\x20text-danger\x22>Rejected</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22\x20my-2\x20d-flex\x20justify-content-between\x20align-items-center\x22\x20style=\x22font-size:\x2011px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tags\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22bg-primary\x20bg-opacity-10\x20text-primary\x20rounded-pill\x20p-1\x20px-3\x22>Fulltime</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22bg-primary\x20bg-opacity-10\x20text-primary\x20rounded-pill\x20p-1\x20px-3\x22>Remote</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tags>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>'+formatDate(_0x85a023[_0x137d7b(0xa5)])+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20class=\x22mb-0\x20border-secondary\x20border-opacity-25\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</active-item>\x0a');});function _0x12f4(_0x5608c0,_0x382cf1){const _0x31379f=_0x3137();return _0x12f4=function(_0x12f4cd,_0x539c55){_0x12f4cd=_0x12f4cd-0x82;let _0x4103c6=_0x31379f[_0x12f4cd];return _0x4103c6;},_0x12f4(_0x5608c0,_0x382cf1);}async function getJobDetails(_0x57d60f){const _0x2e3271=_0xe95431;let _0x4cd71d=await(await fetch(BASE_URL+'/jobs/'+_0x57d60f,{'headers':{'Authorization':'Bearer\x20'+token}}))['json']();if(!_0x4cd71d[_0x2e3271(0x93)])throw _0x2e3271(0x9b);_0x4cd71d['data']=_0x4cd71d['data'][0x0];let _0x4f8cf8=_0x4cd71d[_0x2e3271(0xa8)][_0x2e3271(0x98)]?.[_0x2e3271(0xba)](',')??[],_0x260128=_0x4f8cf8[_0x4f8cf8[_0x2e3271(0x83)]-0x2]+',\x20'+_0x4f8cf8[_0x4f8cf8[_0x2e3271(0x83)]-0x1]?.[_0x2e3271(0xb8)]('.','');return _0x4cd71d['data']['_location_']=_0x260128,_0x4cd71d[_0x2e3271(0xa8)];}function formatDate(_0x1c2b6c){const _0x52891c=_0xe95431,_0xbe0062=new Date(_0x1c2b6c),_0x22ed4c=new Date(),_0x14a98d=Math[_0x52891c(0x8a)]((_0x22ed4c-_0xbe0062)/(0x3e8*0x3c*0x3c*0x18));if(_0x14a98d===0x0)return _0x52891c(0x99);else{if(_0x14a98d===0x1)return _0x52891c(0x9e);else{const _0x31783a={'year':_0x52891c(0xb0),'month':'short','day':_0x52891c(0xb0)};return _0xbe0062[_0x52891c(0xb2)](_0x52891c(0x85),_0x31783a);}}}function _0x3137(){const _0xc91ac=['\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','14mJrDGA','numeric','forEach','toLocaleDateString','active-list','</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20style=\x22font-size:\x2011px;\x22>','flex','filter','token','replace','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20class=\x22mb-0\x20border-secondary\x20border-opacity-25\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</active-item>\x0a\x20\x20\x20\x20','split','active-list>template','insertAdjacentHTML','length','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22\x20my-2\x20d-flex\x20justify-content-between\x20align-items-center\x22\x20style=\x22font-size:\x2011px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tags\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22bg-primary\x20bg-opacity-10\x20text-primary\x20rounded-pill\x20p-1\x20px-3\x22>Fulltime</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22bg-primary\x20bg-opacity-10\x20text-primary\x20rounded-pill\x20p-1\x20px-3\x22>Remote</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tags>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>','en-US','name','accept','1843788YagDPv','block','floor','9910SLtSvm','querySelector','66904NSmIoj','1460515DFaBFV','none','empty-rejected-page','parse','<a\x20class=\x22fw-semibold\x20mx-0\x20px-0\x20btn\x20btn-outline-light\x20border-0\x20text-primary\x20link-success\x22\x20href=\x22./chat.html?comp_id=6\x22>Accepted</a>','status','display','user','reject-list','115369tyZgIJ','location','Today','innerText','Can\x27t\x20fetch\x20job\x20details','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<active-item\x20class=\x22notification-item\x20pt-3\x20d-block\x20container\x22\x20role=\x22button\x22\x20data-bs-toggle=\x22offcanvas\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-bs-target=\x22#offcanvasBottom\x22\x20aria-controls=\x22offcanvasBottom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22...\x22\x20alt=\x22\x22\x20onerror=\x22if\x20(this.src\x20!=\x20\x27./assets/images/fallback_job_img.webp\x27)\x20this.src\x20=\x20\x27./assets/images/fallback_job_img.webp\x27;\x22\x20\x20class=\x22align-self-start\x20mb-2\x22\x20style=\x22aspect-ratio:\x201/1;\x20width:\x2040px;\x22/>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x20text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>','jobs_id','Yesterday','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<steps\x20class=\x22d-flex\x20justify-content-evenly\x20gap-2\x20align-items-baseline\x20container\x20rounded-3\x20py-2\x20mt-3\x22\x20style=\x22border:\x201px\x20solid\x20#d1d5db;\x22\x20role=\x22tablist\x22\x20id=\x22nav-tab\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22nav-link\x20rounded-2\x20p-1\x20bg-transparent\x20border-0\x22\x20id=\x22nav-biodata-tab\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-bs-toggle=\x22tab\x22\x20data-bs-target=\x22#nav-biodata\x22\x20type=\x22button\x22\x20role=\x22tab\x22\x20aria-controls=\x22nav-biodata\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-selected=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22step_1_indicator\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22mx-auto\x20step-done\x20rounded-circle\x20bg-primary\x20text-white\x20fw-semibold\x20text-center\x20d-grid\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22place-items:center;\x20border:\x201px\x20solid\x20var(--bs-primary);\x20width:\x2032px;\x20aspect-ratio:\x201/1;\x20line-height:\x2018px;\x22>1</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<check-icon\x20class=\x22d-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2245\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2045\x2044\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M22.5\x200C10.378\x200\x200.5\x209.878\x200.5\x2022C0.5\x2034.122\x2010.378\x2044\x2022.5\x2044C34.622\x2044\x2044.5\x2034.122\x2044.5\x2022C44.5\x209.878\x2034.622\x200\x2022.5\x200ZM33.016\x2016.94L20.542\x2029.414C20.234\x2029.722\x2019.816\x2029.898\x2019.376\x2029.898C18.936\x2029.898\x2018.518\x2029.722\x2018.21\x2029.414L11.984\x2023.188C11.346\x2022.55\x2011.346\x2021.494\x2011.984\x2020.856C12.622\x2020.218\x2013.678\x2020.218\x2014.316\x2020.856L19.376\x2025.916L30.684\x2014.608C31.322\x2013.97\x2032.378\x2013.97\x2033.016\x2014.608C33.654\x2015.246\x2033.654\x2016.28\x2033.016\x2016.94Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22#387FFB\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</check-icon>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-center\x20text-primary\x20mt-1\x22\x20style=\x22font-size:\x20x-small;\x22>Biodata</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22border:\x20none;\x20border-bottom:\x201px\x20dashed\x20var(--bs-secondary);\x20min-width:\x2024px;\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20disabled\x20class=\x22nav-link\x20rounded-2\x20p-1\x20bg-transparent\x20border-0\x22\x20id=\x22nav-type-of-work-tab\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-bs-toggle=\x22tab\x22\x20data-bs-target=\x22#nav-type-of-work\x22\x20type=\x22button\x22\x20role=\x22tab\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-controls=\x22nav-type-of-work\x22\x20aria-selected=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22step_2_indicator\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22mx-auto\x20d-block\x20rounded-circle\x20text-secondary\x20fw-semibold\x20text-center\x20d-grid\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22border:\x201px\x20solid\x20var(--bs-secondary);\x20width:\x2032px;\x20aspect-ratio:\x201/1;place-items:center;\x20line-height:\x2024px;\x22>2</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<check-icon\x20class=\x22d-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2245\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2045\x2044\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M22.5\x200C10.378\x200\x200.5\x209.878\x200.5\x2022C0.5\x2034.122\x2010.378\x2044\x2022.5\x2044C34.622\x2044\x2044.5\x2034.122\x2044.5\x2022C44.5\x209.878\x2034.622\x200\x2022.5\x200ZM33.016\x2016.94L20.542\x2029.414C20.234\x2029.722\x2019.816\x2029.898\x2019.376\x2029.898C18.936\x2029.898\x2018.518\x2029.722\x2018.21\x2029.414L11.984\x2023.188C11.346\x2022.55\x2011.346\x2021.494\x2011.984\x2020.856C12.622\x2020.218\x2013.678\x2020.218\x2014.316\x2020.856L19.376\x2025.916L30.684\x2014.608C31.322\x2013.97\x2032.378\x2013.97\x2033.016\x2014.608C33.654\x2015.246\x2033.654\x2016.28\x2033.016\x2016.94Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22#387FFB\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</check-icon>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-center\x20text-secondary\x20mt-1\x22\x20style=\x22font-size:\x20x-small;\x22>Type\x20of\x20work</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style=\x22border:\x20none;border-bottom:\x201px\x20dashed\x20var(--bs-secondary);\x20min-width:\x2024px;\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20disabled\x20class=\x22nav-link\x20rounded-2\x20p-1\x20bg-transparent\x20border-0\x22\x20id=\x22nav-upload-portfolio-tab\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-bs-toggle=\x22tab\x22\x20data-bs-target=\x22#nav-upload-portfolio\x22\x20type=\x22button\x22\x20role=\x22tab\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-controls=\x22nav-upload-portfolio\x22\x20aria-selected=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22step_3_indicator\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22mx-auto\x20d-block\x20rounded-circle\x20text-secondary\x20fw-semibold\x20text-center\x20d-grid\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22border:\x201px\x20solid\x20var(--bs-secondary);\x20width:\x2032px;\x20aspect-ratio:\x201/1;\x20line-height:\x2025px;\x22>3</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<check-icon\x20class=\x22d-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2245\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2045\x2044\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M22.5\x200C10.378\x200\x200.5\x209.878\x200.5\x2022C0.5\x2034.122\x2010.378\x2044\x2022.5\x2044C34.622\x2044\x2044.5\x2034.122\x2044.5\x2022C44.5\x209.878\x2034.622\x200\x2022.5\x200ZM33.016\x2016.94L20.542\x2029.414C20.234\x2029.722\x2019.816\x2029.898\x2019.376\x2029.898C18.936\x2029.898\x2018.518\x2029.722\x2018.21\x2029.414L11.984\x2023.188C11.346\x2022.55\x2011.346\x2021.494\x2011.984\x2020.856C12.622\x2020.218\x2013.678\x2020.218\x2014.316\x2020.856L19.376\x2025.916L30.684\x2014.608C31.322\x2013.97\x2032.378\x2013.97\x2033.016\x2014.608C33.654\x2015.246\x2033.654\x2016.28\x2033.016\x2016.94Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22#387FFB\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</check-icon>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-center\x20text-secondary\x20mt-1\x22\x20style=\x22font-size:\x20x-small;\x22>Upload\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20portfolio</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</steps>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','active_applied_count','178052iGlzab','6vOuvkR','\x20•\x20','4176mgZAJP','created_at','getItem','9033288SJtNYy','data','240GxExAf','\x22\x20class=\x22fw-semibold\x20mx-0\x20px-0\x20btn\x20btn-outline-light\x20border-0\x20text-warning\x22>In\x20progress</a>','beforebegin','style','reviewed'];_0x3137=function(){return _0xc91ac;};return _0x3137();}