const tooltips = document.querySelectorAll('[data-tooltip]');

const createBoxTip = (contentTip) =>{
    return `
        <div class="tooltip">
            ${contentTip}
        </div>
    `
}
export function tooltipInit(){
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', ()=>{
            const tooltipInformation = tooltip.getAttribute('data-tooltip');
            tooltip.insertAdjacentHTML("beforeend", createBoxTip(tooltipInformation));
        })
        tooltip.addEventListener('mouseout', ()=>{
            const tooltip = document.querySelector('.tooltip');
            tooltip.remove();
        })
    })    
}