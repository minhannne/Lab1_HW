const form = document.getElementById("registration-form");
const submitButton = document.getElementById("submit-button");
const formStatus = document.getElementById("form-status");

const STATES = {
    IDLE: "idle",
    SUBMITTING: "submitting",
    SUCCESS: "success",
    ERROR: "error"
};

let currentState = STATES.IDLE;

function renderState(state, message = "") {
    currentState = state;

    const isSubmitting = state === STATES.SUBMITTING;

    submitButton.disabled = isSubmitting;
    form.querySelectorAll("input").forEach((input) => {
    input.disabled = isSubmitting;
});
    submitButton.textContent = isSubmitting
        ? "Đang gửi..."
        : "Đăng ký";

    form.setAttribute("aria-busy", String(isSubmitting));
    formStatus.textContent = message;
}

renderState(STATES.IDLE);
function simulateRegistration() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (currentState === STATES.SUBMITTING) {
        return;
    }

    if (!form.reportValidity()) {
    return;
}

const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");

const fullName = nameInput.value.trim();
const email = emailInput.value.trim();

if (fullName.length === 0) {
    renderState(
        STATES.ERROR,
        "Vui lòng nhập họ tên, không được chỉ chứa khoảng trắng."
    );

    nameInput.focus();
    return;
}

nameInput.value = fullName;
emailInput.value = email;

renderState(STATES.SUBMITTING, "Đang xử lý đăng ký...");

    try {

        await simulateRegistration();

        renderState(
            STATES.SUCCESS,
            "Đăng ký thành công! Hẹn gặp bạn tại sự kiện."
        );

        form.reset();
    } catch (error) {
        renderState(
            STATES.ERROR,
            "Đăng ký thất bại. Vui lòng thử lại."
        );
    }
});