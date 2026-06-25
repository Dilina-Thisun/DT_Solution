<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "dilinathisun@gmail.com";

$mail_subject = "New Contact Form Message";

$body = "
Name: $name

Email: $email

Subject: $subject

Message:
$message
";

$headers = "From: $email";

mail($to,$mail_subject,$body,$headers);

echo "Message Sent Successfully";

?>