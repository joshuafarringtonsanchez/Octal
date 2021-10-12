let options = {
    root:null,
    rootMargin:"0px",
    threshold:.99
}
let smallObserver = new IntersectionObserver(function(entries,observer){
    let coinList = Array.from(document.querySelector(".lower-ring-setup .coins").children);
    entries.forEach(function(entry){
        if(!entry.isIntersecting){
            let i = 1;
            for(let item of coinList){
                item.classList.remove(`js-coin-explosion-animation-${i}`);
                ++i;
            }
        }
        if(entry.isIntersecting){
            let i = 1;
            for(let item of coinList){
            item.classList.add(`js-coin-explosion-animation-${i}`);
            ++i;
            }
    }
}
    )
}, options);
smallObserver.observe(document.querySelector(".lower-ring-setup .hill-clam"));
let wideObserver = new IntersectionObserver(function(entries,observer){
        let coinList = Array.from(document.querySelector(".lower-ring-setup-wide .coins").children);
        entries.forEach(function(entry){
            if(!entry.isIntersecting){
                let i = 0;
                for(let item of coinList){
                    item.classList.remove(`js-coin-explosion-animation-wide${i}`);
                    ++i;
                }
            }
            if(entry.isIntersecting){
                let i = 1;
                for(let item of coinList){
                    item.classList.add(`js-coin-explosion-animation-wide-${i}`);
                    ++i;
                }
        }
    }
        )
    }, options);
    wideObserver.observe(document.querySelector(".lower-ring-setup-wide .hill-clam"));
    
