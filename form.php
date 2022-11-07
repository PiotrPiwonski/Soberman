
  <?php
//jeżeli zmienna "email" została wypełniona, wysyłamy wiadomość
  if (isset($_REQUEST['email']))  {
  
  //Informację o emailu, na który będzie wysyłana wiadomość
  $admin_email = "sobermanartbi@gmail.com";
  $email = $_REQUEST['email'];
  $name = $_REQUEST['nazwa'];
  $comment = $_REQUEST['comment'];
  $title = "Formularz sobermana od ";
  
  //wysyłamy email
  mail($admin_email, $title . $name, $comment, "From:" . $email);
  
  //komunikat potwierdzający
  echo "Dziękujemy za kontakt z nami!";
  } else 
  echo "Nie udało się!!";
  //jeżeli zmienna z wartością "email" nie została wypełniona pokazujemy ponownie formularz
  ?>
