$(function () {

    var underconstructionPage = "/Pages/Primary/under_construction.html"

    var homePage = "/Pages/Primary/home.html";
    var explorePage = underconstructionPage;
    var chartPage = underconstructionPage;
    var aboutPage = underconstructionPage;
    var donatePage = underconstructionPage;

    $(".branding").click(function() {
        $(".main-section").load(homePage);
    });

    $(".explore-button").click(function() {
        $(".main-section").load(explorePage);
    });
    
    $(".chart-button").click(function() {
        $(".main-section").load(chartPage);
    });

    $(".about-button").click(function() {
        $(".main-section").load(aboutPage);
    });

    $(".donate-button").click(function() {
        $(".main-section").load(donatePage);
    });

});