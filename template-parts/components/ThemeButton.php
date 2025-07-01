<?php 
    $acfLink = get_field('ticket_link', 'general-setting');
    $ticketLink = $acfLink['url'] ?? '#';
    
    $text = $args['text'] ?? 'Get Your Tickets';
    $link = !empty($args['link']) ? $args['link'] : $ticketLink;
    $class = $args['class'] ?? 'ticket-button';
    $newTab = $args['new_tab'] ?? ($acfLink['target'] === '_blank');
?>
<a 
    href="<?php echo $link ?>" 
    class="themeBtn <?php echo $class ?>"
    <?php echo ($newTab) ? 'target="_blank"' : '' ?>
>
    <?php echo $text ?>
</a>