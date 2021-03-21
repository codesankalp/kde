$(document).ready(function () {
    const sidebar_rows = [
        'facebook', 'instagram', 'linkedin', 'reddit', 'twitter',
        'mastodon', 'youtube', 'archlinux', 'ubuntu', 'debian'
    ]

    let main_content = (em, rows = sidebar_rows) => {
        let index = 0;
        for (index = 0; index < rows.length; index++) {
            var name = `#${rows[index]}-stats`;
            if (rows[index] == em)
                $(name).show();
            else
                $(name).hide();
        }
    }

    $('#navbar-name').text('PROMO DASHBOARD');
    $('#content').hide();
    $('#main').addClass('bg-main');
    $('#facebook-stats').hide();
    $('#instagram-stats').hide();
    $('#linkedin-stats').hide();
    $('#reddit-stats').hide();
    $('#twitter-stats').hide();
    $('#mastodon-stats').hide();
    $('#youtube-stats').hide();
    $('#archlinux-stats').hide();
    $('#ubuntu-stats').hide();
    $('#debian-stats').hide();

    $('ul.sidebar-menu li').on('click', function () {
        $("ul.sidebar-menu li").removeClass("mT-20 mB-10 actived active");
        $(this).addClass("mT-20 mB-10 actived active");
        $('#navbar-name').text(this.innerText);
        main_content(this.id);
        $('#main').removeClass('bg-main');
    });
});
