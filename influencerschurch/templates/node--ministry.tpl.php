<?php if($custom_teaser):?>
<div class="church_life_teaser">
  <?php if(isset($content['field_custom_teaser_image'])):?>  
  <div class="cft_image">
    <?php print render($custom_teaser_image); ?>
    <div class="image-border"></div>
  </div>
  <?php  endif;?>
  <div class="cft_text ">
    <h3 class="article-title" >
        <?php print $title ?>
    </h3>
    <div class="article-body">      
      <?php
        hide($content['field_custom_teaser_image']);
        hide($content['comments']);
        hide($content['links']);
        print render($content);     
      ?>
<!-- <?php /**      
      <a class="use-ajax" href="<?php global $base_url; print $base_url?>/church-life/load/client-block-4/<?php print "{$nid}/ajax-form-" . $nid ?>">Learn more</a>
*/  ?>  -->   
      <a class="use-ajax" href="<?php global $base_url; print $base_url?>/church-life/load/ministry_connect_webform/<?php print "{$nid}/ajax-form-" . $nid ?>">Learn more</a>
      <div id="<?php print 'ajax-form-' . $nid ?>" class="ajax-webform-form"></div>
    </div>      
  </div>
</div>
<?php else:?>
<article<?php print $attributes; ?>>
  <?php  print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
  <header>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
  </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($display_submitted): ?>
  <footer class="submitted"><?php print $date; ?> -- <?php print $name; ?></footer>
  <?php endif; ?>  
  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
  </div>
  
  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</article>
<?php  endif;?>