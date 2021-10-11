

if(window.screen.width < 550){
let observer = new IntersectionObserver(function(entries,observer){
    let coinList = Array.from(document.querySelector("g.coins").children);
    entries.forEach(function(entry){
        if(!entry.isIntersecting){
            return;
        }
        if(entry.isIntersecting){
            let i = 1;
            for(let item of coinList){
            item.classList.add(`js-coin-explosion-animation-${i}`)
            ++i;
            }
    }
}
    )
}, {
    root: null,
    rootMargin: "0px",
    threshold: .99,
});
observer.observe(document.querySelector("g.hill-clam"));
}
if(window.screen.width >= 550){
    let observer = new IntersectionObserver(function(entries,observer){
        let coinList = Array.from(document.querySelector("g.coins").children);
        entries.forEach(function(entry){
            if(!entry.isIntersecting){
                return;
            }
            if(entry.isIntersecting){
                let i = 1;
                for(let item of coinList){
                item.classList.add(`js-coin-explosion-animation-wide-${i}`)
                ++i;
                }
        }
    }
        )
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });
    observer.observe(document.querySelector("g.hill-clam"));
    }