<?php
    $conn = new mysqli("lewure", "kcckscc", "lovell333", "competencyRequest");

    if($conn) {
        echo "подключено";
    }
    else {
        echo "nonono";
    }
?>