<?php if(!defined("SITE_NAME")) die(); ?> 
<nav class="top-nav">
    <div class="container">
        
        <a class="top-nav-logo" href="<?= getLink("/") ?>">
            <img src="<?= SITE_LOGO ?>" alt="" />
        </a>

        <div class="top-nav-search">
            <input id= 'top-nav-search' type="text" placeholder="Search by id.." onclick="search()">
        </div>

        <div class="top-nav-links">
            <a href="<?= getLink("/") ?>" id='homebutton'>Paste</a>
        </div>

    </div>
</nav>
<div class="top-nav-holder"></div>