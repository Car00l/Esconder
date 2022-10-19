$(document).ready(function(){

    $('p').hide()

    $('#ready').click(function(e){
        e.preventDefault()
        
        $('p').toggle(1000, function(){
            let status = $('#ready').attr('data-status')
            $('#ready').empty()
            if(status == 1){
                $('#ready').append('Esconder resumo')
                $('#ready').attr('data-status', '2')
            }else{
                $('#ready').append('Ver resumo')
                $('#ready').attr('data-status', '1')
            }
        })
    })
})