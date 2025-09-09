document.addEventListener('DOMContentLoaded', function () {
    const loginLayoutPage = document.querySelector(".login-layout");
    if (!loginLayoutPage) return;

    const transitions = [
        { className: "transition-step-one", delay: 1000 },
        { className: "transition-step-two", delay: 2500 },
        { className: "transition-step-three", delay: 3750 }
    ];

    transitions.forEach(({ className, delay }) => {
        setTimeout(() => loginLayoutPage.classList.add(className), delay);
    });
})
