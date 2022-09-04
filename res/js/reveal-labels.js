const label = document.querySelector('.label');
label.classList.remove('label-transition');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            label.classList.add('label-transition');
            return;
        }

        label.classList.remove('label-transition');
    });
});

observer.observe(document.querySelector('.label-wrapper'));