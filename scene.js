const scene=document.getElementById('scene');
const vertical=scene.classList.contains('vertical');
function fitScene(){const w=vertical?1080:1920,h=vertical?1920:1080,s=Math.min(innerWidth/w,innerHeight/h);scene.style.transform=`translate(${(innerWidth-w*s)/2}px,${(innerHeight-h*s)/2}px) scale(${s})`;}
addEventListener('resize',fitScene);fitScene();
const particles=document.querySelector('.particles');
for(let i=0;i<26;i++){const p=document.createElement('i');p.className='particle';p.style.left=(5+Math.random()*90)+'%';p.style.top=(10+Math.random()*85)+'%';p.style.animationDelay=(-Math.random()*12)+'s';p.style.animationDuration=(10+Math.random()*8)+'s';particles.appendChild(p);}
const timer=document.getElementById('timer');
if(timer){const total=210,deadline=Date.now()+total*1000;const bar=document.getElementById('progressBar');let interval;function draw(){const left=Math.max(0,Math.ceil((deadline-Date.now())/1000));timer.textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');bar.style.transform=`scaleX(${left/total})`;if(left===0&&interval)clearInterval(interval);}draw();interval=setInterval(draw,250);}
