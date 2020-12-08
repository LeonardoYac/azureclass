<?php
    if(isset($_POST['enviar'])){
        if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) ){
            $nombre  = $_POST['name'];
            $mail    = $_POST['email'];
            $subject = $_POST['subject'];
            $oMensaje= $_POST['message'];
            
            $header = 'From: ' . $mail . " \r\n";
            $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
            $header .= "Mime-Version: 1.0 \r\n";
            $header .= "Content-Type: text/plain";
            
            $mensaje = "Sent From: " . $nombre . ",\r\n";
            $mensaje .= "Emailed From: " . $mail . " \r\n";
            $mensaje .= "Subject: " . $subject . " \r\n";
            $mensaje .= "Message: " . $_POST['message'] . " \r\n \r\n \r\n";
            $mensaje .= "Sent On: " . date('m/d/Y', time());
            
            $para = 'alejandroyac333@gmail.com';
            $asunto = 'Mensaje de mi sitio web';
            $miMail = @mail($para, $asunto, utf8_decode($mensaje), $header); 
            
            if(!$miMail){
                header("Location:index.html");    
            }
        }    
    }

?>