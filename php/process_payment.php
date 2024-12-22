<?php
$paymentMethod = $_POST['payment_method'];
$amount = $_POST['amount'];

switch ($paymentMethod) {
    case 'card':
        processCardPayment($_POST['card_number'], $_POST['expiry_date'], $_POST['cvv']);
        break;
    case 'paypal':
        processPayPalPayment($_POST['paypal_email']);
        break;
    default:
        echo "Неизвестный способ оплаты.";
        exit;
}
?>