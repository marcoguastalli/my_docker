<!DOCTYPE html>
<html lang="en">
<head>
  <title>bookmarks</title>
  <meta name="description" content="bookmarks app">
  <?php include "./head.php" ?>
</head>
<body>
<?php include "./nav.php" ?>
<div class="container">
  <div class="section">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title">Bookmarks</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <?php include "./fragments/read-bookmarks.html" ?>
      </div>
      <div class="column">
        <?php include "./fragments/create-bookmarks.html" ?>
      </div>
    </div>
  </div>
</div>
<?php include "./footer.php" ?>
</body>
</html>