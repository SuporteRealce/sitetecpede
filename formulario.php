<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<?php 

		$nome = $_GET['nome'];
		$email = $_GET['email'];
		$telefone = $_GET['telefone'];
		$assunto = $_GET['assunto'].' - Enviado pelo site';
		$mensagem = $_GET['mensagem'];
		$secretField = $_GET['secretField'];

		$to = 'contato@realcetecnologia.com.br';
		$to2 = $to.', suporte@realcetecnologia.com.br';
		$mensagem = "<strong>Nome:</strong> " .$nome."<br/>
		<strong>E-mail:</strong> " .$email."<br/>
		<strong>Telefone:</strong> " .$telefone."<br/>
		<strong>Assunto:</strong> " .$assunto."<br/>
		<strong>Mensagem:</strong> " .$mensagem."<br/>";

		$headers = "MIME-Version: 1.1\n";
		$headers .= "Content-type: text/html; charset=utf-8\n";
		$headers .= "From:".$email."\n"; // remetente
		$headers .= "Return-Path:".$email."\n"; // return-path

		if($_REQUEST['secretField'] != 'goodValueEqualsGoodClient'){
	   		echo "Não foi possível enviar a mensagem.";
		} else{
			$enviarMensagem = mail($to2, $assunto, $mensagem, $headers, "-r".$to);
			if($enviarMensagem) {
				echo "Mensagem enviada com sucesso";
			} else{
				echo "A mensagem não pode ser enviada";
			} 
		}

	?>
	
</body>
</html>