window.onload = function() {
    /* book1 */
    var desc=["Description1", "Description2", "Description3"]
    var index = 0;

    var interval = setInterval(function() {
    $('#book1_desc').fadeOut(500, function() {
        index++;
        if (index === desc.length)
            index = 0
        $(this).text(desc[index]).fadeIn(500);
        });
    }, 4000);

    var leftarrow = document.getElementById('left-arrow');
    var rightarrow = document.getElementById('right-arrow');

    leftarrow.onclick = function() {
        $('#book1_desc').fadeOut(500, function() {
            index--;
            if (index === -1)
                index = 2;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                        if (index === desc.length)
                            index = 0
                        console.log(index + ":Interval");
                    });
                }, 4000);
            });
    }


    rightarrow.onclick = function() {
        $('#book1_desc').fadeOut(500, function() {
            index++;
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                        if (index === desc.length)
                            index = 0
                        console.log(index + ":Interval");
                    });
                }, 4000);
            });
    }


    var modal_button = document.querySelectorAll('#modal-button');

    for (var i = 0; i < modal_button.length; i++){
        modal_button[i].addEventListener('click', function() {
            console.log(this.value);
            modal('modal', this.value);
        });    
    }

}

function modal(id, value) {
    var zIndex = 100;
    var modal = document.getElementById(id);

    // document.getElementById(id).innerHTML='<object type="text/html" data="'+ button_id +'.html"></object>';
    document.getElementById(id).innerHTML='<object type="text/html" width="100%" data="'+value+'.html"></object>';

    //black background
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

    bg.onclick = function() {
        bg.remove();
        modal.style.display = 'none';
    }

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        zIndex: zIndex + 1,

        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}

Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

