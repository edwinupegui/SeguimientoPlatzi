<?php

require_once('Car.php');
require_once('UberX.php');
require_once('Account.php');
require_once('UberPool.php');

$uberx = new UberX("WIN123", new Account("Andres Herrera", "WIN123"), "Chevrolet", "Spar");
$uberX->printDataCar();
 
$uberPool = new UberPool("UIN123", new Account("Andres Herrera", "WIN123"), "Doge", "Autg");
$uberPool->printDataCar();
?>