jQuery(document).ready(function ($) {
    $('#load-more-gallery').on('click', function () {
        const button = $(this);
        const postId = button.data('postid');
        let page = parseInt(button.data('page')) + 1;
        const perPage = parseInt(button.data('perpage'));
        const total = $('#gallery-row').data('total');
        const offset = (page - 1) * perPage;

        $.ajax({
        url: gallery_ajax.ajax_url,
        type: 'POST',
        data: {
            action: 'load_more_gallery',
            offset: offset,
            per_page: perPage,
            post_id: postId, // 👈 Add this
        },

        beforeSend: function () {
            button.text('Loading...');
        },
        success: function (res) {
            console.log("AJAX Response:", res); // Add this line

            if (res.success) {
                $('#gallery-row').append(res.data.html);
                button.data('page', page);

                if (offset + perPage >= total) {
                    button.remove(); // No more items
                } else {
                    button.text('Show More Gallery');
                }
            } else {
                console.error("Load More failed:", res.data.message); // Add this
                button.text('No More');
            }
        }
        });
    });
});