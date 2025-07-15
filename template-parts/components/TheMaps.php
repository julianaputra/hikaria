<?php
    $sectionTitle = get_field('map_section_title');
?>
<section id="location" class="section maps">
    <div class="container section__holder">
        <h2 class="section__title" data-aos="fade-up"><?php echo esc_html($sectionTitle);?></h2>
        <div class="maps__holder" data-aos="fade-up">
            <div id="customMap" class="maps__container"></div>
            <div id="mapSidebar" class="maps__sidebar maps__sidebar-desktop"></div>
        </div>
        <div id="mapSidebarMobile" class="maps__sidebar maps__sidebar-mobile"></div>
    </div>
</section>


<script>
const mapPins = <?php
  $pins = get_field('map_pin');
  $data = [];
  if ($pins) {
    foreach ($pins as $pin) {
      $data[] = [
        'id' => esc_attr($pin['pin_id']),
        'title' => esc_html($pin['title']),
        'description' => $pin['description'],
        'image' => wp_get_attachment_image_url($pin['image'], 'medium'),
        'coordinates' => [
          'x' => isset($pin['x']) ? floatval($pin['x']) : 0,
          'y' => isset($pin['y']) ? floatval($pin['y']) : 0,
        ]
      ];
    }
  }
  echo json_encode($data);
?>;
</script>
