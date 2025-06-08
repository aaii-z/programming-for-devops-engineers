document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation for sections/articles or specific elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: Unobserve after revealing to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Tip of the Day Feature
    const tips = [
        "Always commit your changes with clear, descriptive messages!",
        "Break down complex problems into smaller, manageable tasks.",
        "Don't be afraid to ask questions. Learning is a journey!",
        "Regularly back up your important code and configurations.",
        "Automate repetitive tasks to save time and reduce errors.",
        "Read documentation thoroughly. It's your best friend!",
        "Test your code often, and in different ways.",
        "Learn keyboard shortcuts for your favorite editor. Efficiency++!",
        "Take breaks! A fresh mind solves problems faster.",
        "Contribute to open source to learn and collaborate."
    ];

    let currentTipIndex = 0;
    const tipTextElement = document.getElementById('tip-text');
    const prevTipBtn = document.getElementById('prev-tip-btn');
    const nextTipBtn = document.getElementById('next-tip-btn');

    function displayTip(index) {
        if (!tipTextElement) return; // Guard clause
        tipTextElement.textContent = tips[index];
        currentTipIndex = index;

        if (prevTipBtn) prevTipBtn.disabled = (index === 0);
        if (nextTipBtn) nextTipBtn.disabled = (index === tips.length - 1);
    }

    // Display a random tip on initial load
    if (tipTextElement) { // Check if element exists on the current page
         currentTipIndex = Math.floor(Math.random() * tips.length);
         displayTip(currentTipIndex);
    }


    if (prevTipBtn) {
        prevTipBtn.addEventListener('click', () => {
            if (currentTipIndex > 0) {
                displayTip(currentTipIndex - 1);
            }
        });
    }

    if (nextTipBtn) {
        nextTipBtn.addEventListener('click', () => {
            if (currentTipIndex < tips.length - 1) {
                displayTip(currentTipIndex + 1);
            }
        });
    }
    // End Tip of the Day

    // Example: Interactive hover for navigation links (e.g., subtle scale or color pop)
    // This can be more complex than CSS, e.g. affecting other elements or custom cursors
    // For now, let's keep it simple or rely on CSS for nav hover effects as they are already good.
    // We can add more JS driven nav effects if a specific idea comes up.

    console.log('DevOps Learning Adventure JS Loaded!');
});
