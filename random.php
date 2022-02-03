<?php

$numOfDices = getNumber("numOfDices");
$sides = getNumber("sides");

$output = [
    "status" => [
        "code" => 406,
        "name" => "Not Acceptable",
    ],
    "data" => [
        "nums" => [],
        "numOfDices" => $numOfDices,
        "sides" => $sides
    ]
];

if (($numOfDices > 0 && $numOfDices < 7) || ($sides > 2 && $sides < 25)) {
    $output["status"]["code"] = 200;
    $output["status"]["name"] = "ok";
    for ($i = 1; $i <= $numOfDices; $i++) {
        array_push($output["data"]["nums"], rand(1, $sides));
    }
}

header("Content-Type: application/json; charset=UTF-8");

echo json_encode($output);

function getNumber($key) {
    return isset($_GET[$key]) 
    ? (is_numeric($_GET[$key])
        ? $_GET[$key]
        : 0)
    :0;
}

?>

