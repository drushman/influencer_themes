<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */ 
 
function influencerschurch_preprocess_panels_pane(&$variables) {
//  dsm($variables);
//  if (in_array('panels_pane__views__global_home', $variables['theme_hook_suggestions'])) {
//    drupal_set_title('Global Homepage'); 
//  }
}

function influencerschurch_preprocess_html(&$variables, &$vars) {
  dsm(drupal_get_title().'xxxxx');
  dsm($variables);
  if (in_array('html__global_home', $variables['theme_hook_suggestions'])) {
    drupal_set_title('Global Homepage');
    $variables['head_title'] = 'Global Homepage | ' . $variables['head_title_array']['name'];
    $variables['head_title_array']['title'] = 'Global Homepage';
    $variables['head_array']['title'] = 'Global Homepage';
  }
  
  if (in_array('html__home', $variables['theme_hook_suggestions'])) {
    drupal_set_title(implode(' | ', $variables['head_title_array']));
    $variables['head_title'] = implode(' | ', $variables['head_title_array']);
  }
}