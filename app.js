// const now = new Date();
// const before = new Date('january 2 2021');


// console.log(now);
// console.log(typeof now); 
 
// // year, , day
// console.log('Get full year:', now.getFullYear())
// console.log('Get month:', now.getMonth())
// console.log('Get Date:', now.getDate())
// console.log('Get day:', now.getDay())
// console.log(before);

const clock = document.querySelector('.clock');
 

const tick = () => {

    const now = new Date();

    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const html = `
    
    <span> ${hours}  </span> : 
    <span> ${mins}  </span> : 
    <span> ${secs}  </span>
    `

    clock.innerHTML = html;
    
};

setInterval(tick, 1000);

