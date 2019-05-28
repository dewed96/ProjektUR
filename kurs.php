<?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index.html');
		exit();
	}
	
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:300,400,600"
      rel="stylesheet"
      type="text/css"
    />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    />
    <title>Login</title>
  </head>
  <script type="text/javascript">
function przeliczaj() {
    var krok1;
    var krok2;
        var pln = 1.00;
        var eur = 4.2989;
        var usd = 3.8436;
        
        switch (przelicznik.co.value)
        {
            case "PLN":
                krok1 = przelicznik.ile.value*pln;
                break;
            case "EUR":
                krok1 = przelicznik.ile.value*eur;
                break;
            case "USD":
                krok1 = przelicznik.ile.value*usd;
                break;
            default:
                krok1 = "nie udało się:(";
        }
        
        switch (przelicznik.naCo.value)
        {
            case "PLN":
                krok2 = Math.round(krok1/pln*100)/100;
                break;
            case "EUR":
                krok2 = Math.round(krok1/eur*100)/100;
                break;
            case "USD":
                krok2 = Math.round(krok1/usd*100)/100;
                break;
            default:
                krok2 = "nie udało się:(";
        }
        
    przelicznik.wynik.value = krok2;
}
</script>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
      <div class="container">
        <a class="navbar-brand" href="index.html">Strona główna</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link" href="kursy.html">Kursy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.php">Zaloguj</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Rejestracja</a>
            </li>
          </ul>
        </div>
       
      </div>
    </nav>
<div class="col-sm6 text-center">
<?php
	echo "<p>Witaj ".$_SESSION['user'].'! [ <a href="logout.php">Wyloguj się!</a> ]</p>';

$waluty = array();
$tablica =  file('http://www.nbp.pl/kursy/xml/a100z190524.xml');
for($ii=0; $ii < count($tablica); $ii++)
{

if(substr_count($tablica[$ii], 'data_publikacji')>0)
{
   $waluty['data_publikacji']= substr($tablica[$ii],20,10);
}

if(substr_count($tablica[$ii], 'EUR')>0)
{
	$waluty['EUR']= substr($tablica[$ii+1],19,6);
}

if(substr_count($tablica[$ii], 'USD')>0)
{
	$waluty['USD']= substr($tablica[$ii+1],19,6);
}

if(substr_count($tablica[$ii], 'GBP')>0)
{
	$waluty['GBP']= substr($tablica[$ii+1],19,6);
} 
}
foreach($waluty AS $klucz =>$wartosc)
{
echo $klucz.':'.$wartosc.'<br>'."\n";
}
?>
</div>
<div class="col-md-12 text-center text-warning bg-secondary mt-3 p-3">
<form action="" name="przelicznik">
  Co chcesz przeliczyć:
  <input type="text" name="ile" size="20" />
   <select name="co">
    <option name="PLN" value="PLN">PLN</option>
    <option name="EUR" value="EUR">EUR</option>
    <option name="USD" value="USD">USD</option>
   </select><br /><br />
   
  Na co chcesz przeliczyć:
  <input type="text" name="wynik" size="20" disabled="disabled" />
   <select name="naCo">
    <option name="PLN" value="PLN">PLN</option>
    <option name="EUR" value="EUR">EUR</option>
    <option name="USD" value="USD">USD</option>
   </select><br /><br />
   
<input type="button"  class="btn btn-warning" value="Przelicz" onClick="przeliczaj()" />

                            </div>
</form>
</div>
  </body>
</html>