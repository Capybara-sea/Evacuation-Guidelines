const i=[{id:1,type:"check",content:"content.1",button:[{text:"button.yes",to:2},{text:"button.no",to:2}]},{id:2,type:"grid",content:"content.2",list:[{text:"list.lang.en-US"},{text:"list.lang.zh-CN"},{text:"list.lang.ko-KR"},{text:"list.lang.vi-VN"},{text:"list.lang.ne-NP"},{text:"list.lang.tl-PH"},{text:"list.lang.id-ID"},{text:"list.lang.zh-TW"},{text:"list.lang.th-TH"},{text:"list.lang.my-MM"},{text:"list.lang.es-ES"},{text:"list.lang.fr-FR"},{text:"list.lang.pt-PT"},{text:"list.lang.ru-RU"},{text:"list.lang.el"}],button:[{text:"button.confirm",to:3}]},{id:3,type:"card",content:"content.3",images:[{url:"images/translation/listen.png",description:"image.listen"},{url:"images/translation/google.png",description:"image.google"}],button:[{text:"button.confirm",to:4}]},{id:4,type:"check",content:"content.4",button:[{text:"button.yes",to:5},{text:"button.no",to:6}]},{id:5,type:"grid",content:"content.4",list:[{text:"list.help.1",image:"images/worries/cannot_eat.png"},{text:"list.help.2",image:"images/worries/sick.png"},{text:"list.help.3",image:"images/worries/pregnant.png"},{text:"list.help.4",image:"images/worries/disability.png"},{text:"list.help.5",image:"images/worries/feel_bad.png"},{text:"list.help.6",image:"images/worries/pray.png"},{text:"list.help.7",image:"images/worries/baby.png"},{text:"list.help.8",image:"images/worries/private_room.png"},{text:"list.help.9",image:"images/worries/pet.png"},{text:"list.help.10",image:"images/worries/wifi.png"},{text:"list.help.11",image:"images/worries/charge.png"},{text:"list.help.12",image:"images/worries/contact.png"},{text:"list.help.13",image:"images/worries/embassy.png"},{text:"list.help.14",image:"images/worries/back_to_country.png"},{text:"list.help.15",image:"images/worries/transportation.png"},{text:"list.help.16",image:"images/worries/change_money.png"}],button:[{text:"button.confirm",to:6}]},{id:6,type:"check",content:"content.5",button:[{text:"button.yes",to:7},{text:"button.no",to:"end"}]},{id:7,type:"grid",content:"content.5",list:[{text:"list.need.1",image:"images/needs/water.png"},{text:"list.need.2",image:"images/needs/blanket.png"},{text:"list.need.3",image:"images/needs/diapers.png"},{text:"list.need.4",image:"images/needs/sanitary_pads.png"},{text:"list.need.5",image:"images/needs/food.png"},{text:"list.need.6",image:"images/needs/halal_food.png"},{text:"list.need.7",image:"images/needs/medicine.png"},{text:"list.need.8",image:"images/needs/milk.png"}],button:[{text:"button.confirm",to:"end"}]}];i.forEach(e=>{e.images&&e.images.forEach((t,n)=>e.images[n].url="/Evacuation-Guidance/"+t.url),e.list&&e.list.forEach(t=>t.image&&(t.image="/Evacuation-Guidance/"+t.image))});const s={Default_ID:i[0].id,...i.reduce((e,t)=>(e[t.id]=t,e),{})};export{s};
