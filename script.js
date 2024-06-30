var somMotor = document.getElementById('som-motor');
var botaoSom = document.getElementById('botao-som');
var audioTocando = false;

botaoSom.addEventListener('click', function() {
    if (audioTocando) {
        somMotor.pause();
        audioTocando = false;
        botaoSom.textContent = 'Tocar Som do Motor';
    } else {
        somMotor.play();
        audioTocando = true;
        botaoSom.textContent = 'Pausar Som do Motor';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const rentalTypeSelect = document.getElementById('rentalType');
    const hoursSelect = document.getElementById('hours');
    const totalAmountSpan = document.getElementById('totalAmount');
    const nextButton = document.getElementById('nextButton');
    const rentalForm = document.getElementById('rentalForm');
    const confirmationForm = document.getElementById('confirmationForm');
    const hourlyOptions = document.getElementById('hourlyOptions');
 
    rentalTypeSelect.addEventListener('change', () => {
        if (rentalTypeSelect.value === 'hourly') {
hourlyOptions.style.display = 'block';
            calculateTotal();
        } else {
hourlyOptions.style.display = 'none';
            totalAmountSpan.textContent = 1199.99;
        }
    });
 
    hoursSelect.addEventListener('change', calculateTotal);
 
    function calculateTotal() {
        if (rentalTypeSelect.value === 'hourly') {
            const hours = parseInt(hoursSelect.value) || 0;
            const total = hours * 399.99;
            totalAmountSpan.textContent = total;
        }
    }
 
    nextButton.addEventListener('click', () => {
        if (rentalForm.reportValidity()) {
rentalForm.style.display = 'none';
confirmationForm.style.display = 'block';
        }
    });
 
    rentalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (rentalForm.reportValidity()) {
rentalForm.style.display = 'none';
confirmationForm.style.display = 'block';
        }
    });
});
